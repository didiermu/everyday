import { smoothScroll } from "./../utils/loadLocomotive.js";

// Variables globales para almacenar los datos y recursos
let emotionsData = null;
let currentHighlights = null;
let locomotiveInstance = null;
let popstateHandler = null;
let paginationHandlers = [];
let modalHandlers = {
    story: [],
    data: [],
    high: [],
    resume: [],
    read: [],
};

// Función para cargar el JSON desde un archivo
async function loadJSONFromFile(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al cargar el JSON:", error);
        return null;
    }
}

// Función para obtener parámetros de la URL
function getURLParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Función para mapear las emociones a sus clases CSS
function getEmotionClass(emotion) {
    const emotionMap = {
        "Extremely confused": "ext-confused",
        Grateful: "gratefull",
        "Just fine": "just-fine",
        "Happy/Satisfied": "happy-satisfied",
        Peaceful: "peaceful",
        Sad: "sad",
        "Extremely Sad": "ext-sad",
        "Excited / Motivated": "exited-motiv",
        Confused: "confused",
        Inspired: "inspired",
        "Anxious / Stressed": "anxious-stress",
        "Extremely Happy": "ext-happy",
        "Angry / Resentful": "angry-resent",
    };
    return emotionMap[emotion] || "";
}

// Función para crear el template del hero
function createHeroTemplate(data, periodId) {
    return `
        <section class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="title">${data.title}</h1>
                    </div>
                    <div class="col-12 hero--info">
                        <h4>0${periodId}</h4>
                        <div class="hero__data">
                            <span><strong>${data.fecha}</strong></span>
                        </div>
                        <div class="hero__data">
                            <span>Range <strong>${data.rango}</strong></span>
                            <span>Duration<strong>${data.duracion}</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function normalizeHighlights(highlights) {
    const list = [];

    highlights.forEach((highlightObj) => {
        Object.keys(highlightObj).forEach((key) => {
            list.push(highlightObj[key]);
        });
    });

    return list;
}

function renderHighlight(modal, item) {
    modal.querySelector('[data-field="day"]').textContent = item.day;
    modal.querySelector('[data-field="emotion"]').textContent = item.emotion;
    modal.querySelector('[data-field="location"]').textContent = item.location;
    modal.querySelector('[data-field="date"]').textContent = item.date;
    modal.querySelector('[data-field="title"]').innerHTML = item.title;
    modal.querySelector('[data-field="resume"]').textContent = item.resume;
    modal.querySelector('[data-field="image"]').src = `./../img/${item.image}`;

    const milestoneBtn = modal.querySelector("figure");

    if (item.botones === "3") {
        milestoneBtn.dataset.botones = "3";
    } else if (item.botones === "2") {
        milestoneBtn.dataset.botones = "2";
    } else if (item.botones === "1") {
        milestoneBtn.dataset.botones = "1";
    }
}

function renderRings(count, activeIndex) {
    return Array.from({ length: count })
        .map(
            (_, i) => `
            <img src="./../img/ring.png" alt="" class='${
                i === 0 ? "active" : ""
            }' 
            data-ring-index="${i}">
        `,
        )
        .join("");
}

// Función para crear el template del modal-high
function createModalHighTemplate(highlights) {
    if (!highlights || highlights.length === 0) return "";

    const items = normalizeHighlights(highlights);
    const first = items[0];

    return `
        <dialog id="modal-high">
            <div class="modal--content">
                <button class="close"></button>

                <section>
                    <div class="container">
                        <div class="row">

                            <div class="col-12 modal-high--meta">
                                <p>
                                    <span>Day<strong data-field="day">${
                                        first.day
                                    }</strong></span>
                                    <span>Emotion/Mood<strong data-field="emotion">${
                                        first.emotion
                                    }</strong></span>
                                    <span>Location<strong data-field="location">${
                                        first.location
                                    }</strong></span>
                                </p>
                            </div>

                            <div class="col-12 modal-high--image">
                                <figure>
                                    <button class="button button-primary" id="btn-viz">
                                        my first time
                                    </button>
                                    
                                    <button class="button button-primary" id="btn-miles">milestone</button>
                                    
                                    <picture class="img-cover">
                                        <img data-field="image" src="./../img/${
                                            first.image
                                        }" alt="">
                                    </picture>

                                    <picture class="img-ring">
                                        ${renderRings(items.length)}
                                    </picture>
                                </figure>
                            </div>

                            <div class="col-12 modal-high--content">
                                <h5>
                                    <span data-field="date">${first.date}</span>
                                    <span data-field="title">${
                                        first.title
                                    }</span>
                                </h5>
                                <p data-field="resume">${first.resume}</p>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </dialog>
    `;
}

// Función para crear el template de periods
function createPeriodsTemplate(data, currentPeriod) {
    const emotionsHTML = data.emotions
        .map(
            (emotion) => `
        <div class="visualization--data__row ${getEmotionClass(
            emotion.emotion,
        )}">
            <span>${emotion.emotion}</span>
            <span>${emotion.count}</span>
            <span>${emotion.percentage}</span>
        </div>
    `,
        )
        .join("");

    const totalHTML = data.total
        ? `
        <div class="visualization--data__row">
            <span><strong>Total</strong></span>
            <span>${data.total.count}</span>
            <span>${data.total.percentage}</span>
        </div>
    `
        : "";

    const paginationHTML = Object.keys(emotionsData)
        .map((periodId) => {
            const isActive = periodId === currentPeriod ? 'class="active"' : "";
            return `<a data-period="${periodId}" ${isActive}>${periodId}</a>`;
        })
        .join("");

    return `
        <section class="periods" id="period-${currentPeriod}" >
            <div class="container">
                <div class="row">
                    <div class="col-12 periods-image">
                        ${
                            data.hover
                                ? '<span class="periods-hover"></span>'
                                : ""
                        }
                        <picture class="img-cover">
                            <img src="./../img/${data.imagen}" alt="${
                                data.title
                            }">
                        </picture>
                    </div>
                    <div class="col-12 periods--pagination">
                        ${paginationHTML}
                    </div>
                    <div class="col-12 periods--data">
                        <div class="visualization--data--table">
                            ${emotionsHTML}
                            ${totalHTML}
                        </div>
                    </div>
                    <div class="col-12 periods--summary">
                        <h4>SUMMARY</h4>
                        <p>${data.resumen}</p>
                    </div>
                    <div class="col-12 periods--botonera">
                        <button class="button button-icon star">View Highlights</button>
                         ${
                             data.fullStory
                                 ? '<button class="button button-icon read">Read full story</button>'
                                 : ""
                         }
                        <button class="button button-icon data">View Data</button>
                    </div>
                </div>
            </div>
        </section>
        ${
            data.fullStory
                ? `
                    <dialog id="modal-resume">
                        <div class="modal--content">
                            <section class="resume">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12">
                                                ${data.story}
                                            <button class="button button-primary button-min">CLOSE</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </dialog>
                    `
                : ""
        }
    `;
}

// Función para crear el template del modal-data
function createModalDataTemplate(data, periodName) {
    if (!data || !Array.isArray(data) || data.length === 0) return "";

    // Obtener el rango de días
    const days = data.map((item) => item.day);
    const minDay = Math.min(...days);
    const maxDay = Math.max(...days);
    const totalDays = data.length;

    // Obtener el rango de fechas (primera y última)
    const firstDate = data[0].date;
    const lastDate = data[data.length - 1].date;

    // Función auxiliar para formatear la fecha
    function formatDateRange(firstDate, lastDate) {
        const first = new Date(firstDate);
        const last = new Date(lastDate);

        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];

        const firstMonth = months[first.getMonth()];
        const lastMonth = months[last.getMonth()];
        const firstDay = first.getDate();
        const lastDay = last.getDate();
        const year = first.getFullYear();

        return `${firstDay} ${firstMonth} - ${lastDay} ${lastMonth}, ${year}`;
    }

    // Función para generar los íconos de lágrimas
    function generateCryIcons(count) {
        if (!count || count === 0 || count === "") return "";
        const numCries = parseInt(count);
        return Array(numCries)
            .fill("<i></i>")
            .join("\n                                    ");
    }

    // Función para formatear la fecha en el listado (formato corto)
    function formatShortDate(dateString) {
        const date = new Date(dateString);
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        return `${date.getDate()} ${months[date.getMonth()]}`;
    }

    // Mapear las emociones a sus clases CSS (la misma función que ya tienes)
    function getEmotionClass(emotion) {
        const emotionMap = {
            "Extremely confused": "ext-confused",
            Grateful: "gratefull",
            "Just fine": "just-fine",
            "Happy/Satisfied": "happy-satisfied",
            "Happy / Satisfied": "happy-satisfied",
            Peaceful: "peaceful",
            Sad: "sad",
            "Extremely Sad": "ext-sad",
            "Excited / Motivated": "exited-motiv",
            "Excited /Motivated": "exited-motiv",
            Confused: "confused",
            Inspired: "inspired",
            "Anxious / Stressed": "anxious-stress",
            "Anxious - Stressed": "anxious-stress",
            "Extremely Happy": "ext-happy",
            "Angry / Resentful": "angry-resent",
        };
        return emotionMap[emotion] || "";
    }

    // Generar las filas de la tabla
    const rowsHTML = data
        .map((item) => {
            const cryIcons = generateCryIcons(item.timesCried);
            const emotionClass = getEmotionClass(item.mood);

            return `
                            <div class="modal-data--row ${emotionClass}">
                                <span>${item.day}</span>
                                <span>${formatShortDate(item.date)}</span>
                                <span>${item.mood}${cryIcons ? `\n                                    ${cryIcons}` : ""}
                                </span>
                            </div>`;
        })
        .join("");

    return `
        <dialog id="modal-data">
            <div class="modal--content">
                <button class="close"></button>
                <section class="hero">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h1 class="title">${periodName}</h1>
                            </div>
                            <div class="col-12">
                                <div class="hero__data">
                                    <span><strong>${formatDateRange(firstDate, lastDate)}</strong></span>
                                </div>
                                <div class="hero__data">
                                    <span>Range <strong>Days ${minDay} to ${maxDay}</strong></span>
                                    <span>Duration<strong>${totalDays} days</strong></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 modal-data--content">
                                <div class="modal-data--table">
                                    <div class="modal-data--row--header">
                                        <span>Day</span>
                                        <span>Date</span>
                                        <span>Mood / Emotion</span>
                                    </div>${rowsHTML}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </dialog>
    `;
}
// Función para llenar el template con los datos
function fillTemplate(periodId) {
    const data = emotionsData[periodId];

    if (!data) {
        console.error(`No se encontraron datos para el periodo: ${periodId}`);
        return;
    }

    cleanupModalHandlers();

    const modalStory = document.getElementById("modal-story");

    // Generar el modal-data con los datos del periodo
    const modalDataHTML = createModalDataTemplate(data.data, data.title);
    const modalDataElement = new DOMParser().parseFromString(
        modalDataHTML,
        "text/html",
    ).body.firstChild;

    const modalStoryClone = modalStory ? modalStory.cloneNode(true) : null;
    const modalHighHTML = createModalHighTemplate(data.highlights);
    currentHighlights = data.highlights;

    const mainContainer = document.querySelector("main") || document.body;
    const heroHTML = createHeroTemplate(data, periodId);
    const periodsHTML = createPeriodsTemplate(data, periodId);

    mainContainer.innerHTML = "";

    // Insertar el nuevo modal-data generado dinámicamente
    mainContainer.insertAdjacentElement("afterbegin", modalDataElement);
    mainContainer.insertAdjacentElement("afterbegin", modalStoryClone);
    mainContainer.insertAdjacentHTML("afterbegin", modalHighHTML);
    mainContainer.insertAdjacentHTML("afterbegin", periodsHTML);
    mainContainer.insertAdjacentHTML("afterbegin", heroHTML);

    attachPaginationEvents();
    attachModalEvents();
}

// Función para agregar eventos a los botones de paginación
function attachPaginationEvents() {
    // Limpiar handlers anteriores
    paginationHandlers.forEach(({ element, handler }) => {
        element.removeEventListener("click", handler);
    });
    paginationHandlers = [];

    const paginationButtons = document.querySelectorAll(
        ".periods--pagination a[data-period]",
    );

    paginationButtons.forEach((button) => {
        const handler = (e) => {
            e.preventDefault();
            const period = e.target.getAttribute("data-period");
            changePeriod(period);
        };

        button.addEventListener("click", handler);
        paginationHandlers.push({ element: button, handler });
    });
}

// Función para cambiar el periodo y actualizar URL
function changePeriod(periodId) {
    const url = new URL(window.location);
    url.searchParams.set("period", periodId);
    window.history.pushState({}, "", url);
    fillTemplate(periodId);
}

function attachRead() {
    const text = document.querySelector("#modal-resume p");
    const button = document.querySelector("#modal-resume a");

    if (button) {
        const handler = () => {
            const isOpen = text.classList.toggle("is-open");
            button.textContent = isOpen ? "Read less" : "Read more";
            button.setAttribute("aria-expanded", isOpen);
        };

        button.addEventListener("click", handler);
        modalHandlers.read.push({ element: button, handler });
    }
}

// Función principal de periodos
const periodos = async () => {
    // Cargar los datos desde el archivo JSON
    emotionsData = await loadJSONFromFile("./../json/periods.json");

    if (!emotionsData) {
        console.error("No se pudieron cargar los datos");
        return;
    }

    // Obtener el periodo de la URL o usar el primer periodo disponible
    const periodId = getURLParameter("period") || Object.keys(emotionsData)[0];

    // Si no hay parámetro en la URL, agregarlo
    if (!getURLParameter("period")) {
        const url = new URL(window.location);
        url.searchParams.set("period", periodId);
        window.history.replaceState({}, "", url);
    }

    fillTemplate(periodId);

    // Manejar navegación del navegador (botones atrás/adelante)
    popstateHandler = () => {
        const newPeriodId =
            getURLParameter("period") || Object.keys(emotionsData)[0];
        fillTemplate(newPeriodId);
    };

    window.addEventListener("popstate", popstateHandler);
};

const modalStory = () => {
    const modal = document.getElementById("modal-story");
    const button = document.querySelector(".button.read");
    const closeBtn = modal ? modal.querySelector(".close") : null;

    if (modal && button && closeBtn) {
        const openHandler = () => modal.showModal();
        const closeHandler = () => modal.close();

        button.addEventListener("click", openHandler);
        closeBtn.addEventListener("click", closeHandler);

        modalHandlers.story.push(
            { element: button, handler: openHandler },
            { element: closeBtn, handler: closeHandler },
        );
    }
};

const modalData = () => {
    const modal = document.getElementById("modal-data");
    const button = document.querySelector(".button.data");
    const closeBtn = modal ? modal.querySelector(".close") : null;

    if (modal && button && closeBtn) {
        const openHandler = () => modal.showModal();
        const closeHandler = () => modal.close();

        button.addEventListener("click", openHandler);
        closeBtn.addEventListener("click", closeHandler);

        modalHandlers.data.push(
            { element: button, handler: openHandler },
            { element: closeBtn, handler: closeHandler },
        );
    }
};

const modalHigh = () => {
    const modal = document.getElementById("modal-high");
    const button = document.querySelector(".button.star");
    const closeBtn = modal ? modal.querySelector(".close") : null;

    const idPriod = document.querySelector(".periods").getAttribute("id");
    modal.classList.add(idPriod);

    if (modal && button && closeBtn) {
        const openHandler = () => modal.showModal();
        const closeHandler = () => modal.close();

        button.addEventListener("click", openHandler);
        closeBtn.addEventListener("click", closeHandler);

        modalHandlers.high.push(
            { element: button, handler: openHandler },
            { element: closeBtn, handler: closeHandler },
        );

        const data = normalizeHighlights(currentHighlights);
        const ringImages = modal.querySelectorAll(".img-ring img");

        renderHighlight(modal, data[0]);

        ringImages.forEach((ring) => {
            const ringHandler = () => {
                const index = Number(ring.dataset.ringIndex);
                const item = data[index];
                if (!item) return;

                ringImages.forEach((img) => img.classList.remove("active"));
                ring.classList.add("active");

                renderHighlight(modal, item);
            };

            ring.addEventListener("click", ringHandler);
            modalHandlers.high.push({ element: ring, handler: ringHandler });
        });
    }
};

const modalResume = () => {
    const modal = document.getElementById("modal-resume");
    const button = document.querySelector(".periods-hover");
    const closeBtn = modal ? modal.querySelector(".button") : null;

    if (modal && button && closeBtn) {
        const openHandler = () => modal.showModal();
        const closeHandler = () => modal.close();

        button.addEventListener("click", openHandler);
        closeBtn.addEventListener("click", closeHandler);

        modalHandlers.resume.push(
            { element: button, handler: openHandler },
            { element: closeBtn, handler: closeHandler },
        );
    }
};

// Función para limpiar handlers de modales
function cleanupModalHandlers() {
    Object.values(modalHandlers).forEach((handlerArray) => {
        handlerArray.forEach(({ element, handler }) => {
            if (element) {
                element.removeEventListener("click", handler);
            }
        });
    });

    modalHandlers = {
        story: [],
        data: [],
        high: [],
        resume: [],
        read: [],
    };
}

// Función para adjuntar eventos modales
function attachModalEvents() {
    modalStory();
    modalData();
    modalHigh();
    modalResume();
    attachRead();
}

export function init() {
    periodos();
    locomotiveInstance = smoothScroll();
}

export function destroy() {
    // Limpiar Locomotive
    if (locomotiveInstance) {
        locomotiveInstance.destroy();
        locomotiveInstance = null;
    }

    // Limpiar popstate handler
    if (popstateHandler) {
        window.removeEventListener("popstate", popstateHandler);
        popstateHandler = null;
    }

    // Limpiar handlers de paginación
    paginationHandlers.forEach(({ element, handler }) => {
        if (element) {
            element.removeEventListener("click", handler);
        }
    });
    paginationHandlers = [];

    // Limpiar handlers de modales
    cleanupModalHandlers();

    // Limpiar datos
    emotionsData = null;
    currentHighlights = null;
}

import Swiper from "swiper";
import { Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import { smoothScroll } from "./../utils/loadLocomotive.js";

// Variables globales para almacenar los datos y recursos
let emotionsData = null;
let swiperInstance = null;
let locomotiveInstance = null;

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
        <section class="head-period">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="title">${data.title}</h1>
                    </div>
                    <div class="col-12 head-period--info">
                        <h4>0${periodId}</h4>
                        <div class="head-period__data">
                            <span><strong>${data.fecha}</strong></span>
                        </div>
                        <div class="head-period__data">
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

// function renderHighlight(modal, item) {
//     modal.querySelector('[data-field="day"]').textContent = item.day;
//     modal.querySelector('[data-field="emotion"]').textContent = item.emotion;
//     modal.querySelector('[data-field="location"]').textContent = item.location;
//     modal.querySelector('[data-field="date"]').textContent = item.date;
//     modal.querySelector('[data-field="title"]').innerHTML = item.title;
//     modal.querySelector('[data-field="resume"]').textContent = item.resume;
//     modal.querySelector('[data-field="image"]').src = `./../img/${item.image}`;
//
//     const milestoneBtn = modal.querySelector("figure");
//     if (item.botones === "3") {
//         milestoneBtn.dataset.botones = "3";
//     } else if (item.botones === "2") {
//         milestoneBtn.dataset.botones = "2";
//     } else if (item.botones === "1") {
//         milestoneBtn.dataset.botones = "1";
//     }
// }

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

    const slidesHTML = items
        .map(
            (item, index) => `
                <div class="swiper-slide">
                    <section>
                        <div class="container">
                            <div class="row">
                                <div class="col-12 modal-high--meta">
                                    <p>
                                        <span>Day<strong>${item.day}</strong></span>
                                        <span>Emotion/Mood<strong>${item.emotion}</strong></span>
                                        <span>Location<strong>${item.location}</strong></span>
                                    </p>
                                </div>
                                <div class="col-12 modal-high--image">
                                    <figure data-botones="${item.botones}">
                                        <button class="button button-primary" id="btn-viz">
                                            my first time
                                        </button>
                                        <button class="button button-primary" id="btn-miles">
                                            milestone
                                        </button>
                                        <picture class="img-cover">
                                            <img src="./../img/${item.image}" alt="">
                                        </picture>
                                        
                                    </figure>
                                </div>
                                <div class="col-12 modal-high--content">
                                    <h5>
                                        <span>${item.date}</span>
                                        <span>${item.title}</span>
                                    </h5>
                                    <p>${item.resume}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            `,
        )
        .join("");

    return `
        <dialog id="modal-high">
            <div class="modal--content">
                <button class="close"></button>
                <div class="swiper swiper-high">
                    <div class="swiper-pagination"></div>
                    <div class="swiper-wrapper">
                        ${slidesHTML}
                    </div>
                </div>
            </div>
        </dialog>
    `;
}

// Función para crear el template de periods
function createPeriodsTemplate(data, currentPeriod) {
    const emotionsHTML = data.emotions
        .map(
            (emotion) => `
        <div class="visualization--data__row ${getEmotionClass(emotion.emotion)}">
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

    return `
        <section class="periods" id="period-${currentPeriod}">
            <div class="container">
                <div class="row">
                    <div class="col-12 periods-image">
                        ${data.hover ? '<span class="periods-hover"></span>' : ""}
                        <picture class="img-cover">
                            <img src="./../img/${data.imagen}" alt="${data.title}">
                        </picture>
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
                         ${data.fullStory ? '<button class="button button-icon read">Read full story</button>' : ""}
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

    const days = data.map((item) => item.day);
    const minDay = Math.min(...days);
    const maxDay = Math.max(...days);
    const totalDays = data.length;
    const firstDate = data[0].date;
    const lastDate = data[data.length - 1].date;

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

    function generateCryIcons(count) {
        if (!count || count === 0 || count === "") return "";
        const numCries = parseInt(count);
        return Array(numCries)
            .fill("<i></i>")
            .join("\n                                    ");
    }

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

// Función para crear un slide completo
function createSlideContent(data, periodId) {
    const heroHTML = createHeroTemplate(data, periodId);
    const periodsHTML = createPeriodsTemplate(data, periodId);
    const modalHighHTML = createModalHighTemplate(data.highlights);
    const modalDataHTML = createModalDataTemplate(data.data, data.title);

    return `
        ${heroHTML}
        ${periodsHTML}
        ${modalHighHTML}
        ${modalDataHTML}
    `;
}

// Función para inicializar Swiper
async function initSwiper() {
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    const swiperContainer = document.querySelector(".swiper");

    if (!swiperWrapper) {
        console.error("No se encontró .swiper-wrapper");
        return;
    }

    // Generar todos los slides
    Object.keys(emotionsData).forEach((periodId) => {
        const data = emotionsData[periodId];
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.setAttribute("data-period", periodId);
        slide.innerHTML = createSlideContent(data, periodId);
        swiperWrapper.appendChild(slide);
    });

    // Inicializar Swiper
    swiperInstance = new Swiper(".swiper-periods", {
        modules: [Pagination, EffectFade],
        effect: "fade",
        autoHeight: true,
        fadeEffect: {
            crossFade: true,
        },
        direction: "horizontal",
        loop: false,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return (
                    '<span class="' + className + '">' + (index + 1) + "</span>"
                );
            },
        },
        on: {
            slideChange: function () {
                const activeSlide = this.slides[this.activeIndex];
                attachModalEvents(activeSlide);
            },
            init: function () {
                const activeSlide = this.slides[this.activeIndex];
                attachModalEvents(activeSlide);
            },
        },
    });
}

// Función para adjuntar eventos modales en un slide específico
async function attachModalEvents(slide) {
    const modalData = slide.querySelector("#modal-data");
    const modalHigh = slide.querySelector("#modal-high");
    const modalResume = slide.querySelector("#modal-resume");

    // Modal Data
    const dataButton = slide.querySelector(".button.data");
    if (modalData && dataButton) {
        const closeBtn = modalData.querySelector(".close");
        dataButton.onclick = () => modalData.showModal();
        if (closeBtn) closeBtn.onclick = () => modalData.close();
    }

    // Modal High
    const starButton = slide.querySelector(".button.star");

    if (modalHigh && starButton) {
        const closeBtn = modalHigh.querySelector(".close");
        const periodId = slide.getAttribute("data-period");
        const data = emotionsData[periodId];

        // starButton.onclick = () => modalHigh.showModal();

        if (closeBtn) {
            closeBtn.onclick = () => {
                modalHigh.close();

                // 🔓 Reactivar swiper principal
                if (swiperInstance) {
                    swiperInstance.allowTouchMove = true;
                }
            };
        }

        let swiperHighInstance = null;

        starButton.onclick = () => {
            modalHigh.showModal();

            if (swiperInstance) {
                swiperInstance.allowTouchMove = false;
            }

            // Inicializar solo una vez
            if (!swiperHighInstance) {
                swiperHighInstance = new Swiper(
                    modalHigh.querySelector(".swiper-high"),
                    {
                        modules: [Pagination, EffectFade],
                        effect: "fade",
                        autoHeight: true,
                        fadeEffect: {
                            crossFade: true,
                        },
                        direction: "horizontal",
                        spaceBetween: 0,
                        loop: false,
                        pagination: {
                            el: modalHigh.querySelector(".swiper-pagination"),
                            clickable: true,
                        },
                    },
                );
            }
        };

        const highlights = normalizeHighlights(data.highlights);
        const ringImages = modalHigh.querySelectorAll(".img-ring img");

        // renderHighlight(modalHigh, highlights[0]);

        // ringImages.forEach((ring) => {
        //     ring.onclick = () => {
        //         const index = Number(ring.dataset.ringIndex);
        //         const item = highlights[index];
        //         if (!item) return;
        //         ringImages.forEach((img) => img.classList.remove("active"));
        //         ring.classList.add("active");
        //         renderHighlight(modalHigh, item);
        //     };
        // });
    }

    // Modal Resume (Read full story)
    const readButton = slide.querySelector(".button.read");
    if (modalResume && readButton) {
        const closeBtn = modalResume.querySelector(".button");
        readButton.onclick = () => modalResume.showModal();
        if (closeBtn) closeBtn.onclick = () => modalResume.close();

        const text = modalResume.querySelector("p");
        const readMoreBtn = modalResume.querySelector("a");
        if (readMoreBtn && text) {
            readMoreBtn.onclick = () => {
                const isOpen = text.classList.toggle("is-open");
                readMoreBtn.textContent = isOpen ? "Read less" : "Read more";
                readMoreBtn.setAttribute("aria-expanded", isOpen);
            };
        }
    }

    // Modal Hover
    const hoverButton = slide.querySelector(".periods-hover");
    if (hoverButton) {
        hoverButton.onclick = () => {
            if (modalResume) {
                modalResume.showModal();
            }
        };
    }
}

// Función principal de periodos
const periodos = async () => {
    emotionsData = await loadJSONFromFile("./../json/periods.json");

    if (!emotionsData) {
        console.error("No se pudieron cargar los datos");
        return;
    }
};

const init = async () => {
    await periodos();
    initSwiper();

    // document.querySelectorAll(".swiper-slide").forEach((el) => {
    // attachModalEvents(el);
    // el.addEventListener("click", async () => {
    //     console.log(el);
    // });
    // });
};

init();

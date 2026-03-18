import { loadComponent } from "./../utils/loadComponent.js";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { initPeriods } from "./periods.js";

let buttonHandler = null;
let linkHandler = null;
let linkBack;

const modalViz = () => {
    const hero = document.querySelector(".hero-viz");
    const modal = document.querySelector(".visualization");
    const button = document.querySelector("#btn-viz");

    if (modal && button) {
        buttonHandler = () => {
            hero.classList.add("hide");
            modal.classList.add("show");

            ScrollTrigger.refresh();
            document.querySelector("body").className = "panel-3";
            // console.log("viz");
        };

        button.addEventListener("click", buttonHandler);
    }
};

const headerLayout = () => {
    const btnHome = document.querySelector(".link-back");
    const mediaQuery = window.matchMedia("(min-width:1280px)");

    mediaQuery.matches
        ? (btnHome.innerHTML = "Back to Visualization")
        : (btnHome.innerHTML = "Back");
};

const modalExplore = () => {
    const swiperEl = document.querySelector(".swiper-periods");
    const hero = document.querySelector(".visualization");
    const heroViz = document.querySelector(".hero-viz");
    const modal = document.querySelector(".main-periods");
    const button = document.querySelector("#btn-explore");
    const linkExplore = document.querySelector(".visualization--button");

    let swiperInstance = null; // 👈 guardamos referencia

    if (modal && button) {
        const buttonHandler = async () => {
            hero.classList.remove("show");
            hero.classList.add("hide");
            modal.classList.add("show");

            loadComponent("#header", "componets/header-interior.html");

            const linkBack = document.querySelector(".link-back");
            linkBack.addEventListener("click", linkHandler);

            swiperInstance = await initPeriods();

            setTimeout(() => {
                ScrollTrigger.refresh();
                document.querySelector("body").className = "panel-3";
            }, 500);
        };

        const linkHandler = () => {
            hero.classList.add("show");
            modal.classList.remove("show");

            // ✅ destruir swiper correctamente
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
            }

            loadComponent("#header", "componets/header.html");

            ScrollTrigger.refresh();
        };

        button.addEventListener("click", buttonHandler);
        linkExplore.addEventListener("click", buttonHandler);
    }
};

const datosPeriod = {
    1: {
        number: "01",
        title: "A Promising Year Ahead",
        fecha: "1 Jan - 11 Feb, 2024",
        range: "Days 01 to 42",
        days: "42 days",
    },
    2: {
        number: "02",
        title: "The trip: 33 days of emotions",
        fecha: "12 Feb - 15 Mar, 2024",
        range: "Days 43 to 74",
        days: "33 days",
    },
    3: {
        number: "03",
        title: "Back home. Crisis gestation",
        fecha: "16 Mar - 3 May, 2024",
        range: "Days 76 to 124",
        days: "49 days",
    },
    4: {
        number: "04",
        title: "The Crisis. Where is My Mind?",
        fecha: "∼ 4 May - 18 Jun, 2024",
        range: "Days 125 to 170",
        days: "46 days",
    },
    5: {
        number: "05",
        title: "The hard work of healing",
        fecha: "∼ 19 Jun - 30 Aug, 2024",
        range: "Days 171 to 243",
        days: "∼73 days",
    },
    6: {
        number: "06",
        title: "The recovery",
        fecha: "∼ 31 Aug - 16 Oct, 2024",
        range: "Days 244 to 290",
        days: "47 days",
    },
    7: {
        number: "07",
        title: "New Beginnings",
        fecha: "∼ 17 Oct - 31 Dec, 2024",
        range: "Days 291 to 366",
        days: "76 days",
    },
};

const updatePeriodHead = (periodNumber) => {
    const periodHead = document.querySelector(".visualization--period--head");
    const headPeriod = document.querySelector(".head-period");
    const data = datosPeriod[periodNumber];

    if (data && periodHead) {
        periodHead.querySelector("h3").textContent = data.number;
        periodHead.querySelector("#p-hover-head-1").innerHTML =
            `<strong>${data.fecha}</strong>`;
        periodHead.querySelector("#p-hover-head-2").innerHTML =
            `<span>Range </span><strong>${data.range}</strong>`;
        periodHead.querySelector("#p-hover-head-3").innerHTML =
            `<span>Duration </span><strong>${data.days}</strong>`;
        periodHead.querySelector("h2").textContent = data.title;
    }

    if (data && headPeriod) {
        headPeriod.querySelector("h4").textContent = data.number;

        headPeriod.querySelector(".head-period__data--fecha").innerHTML =
            `<strong>${data.fecha}</strong>`;

        headPeriod.querySelector(".head-period__data--rango").innerHTML =
            `Range <strong>${data.range}</strong>`;

        headPeriod.querySelector(".head-period__data--duracion").innerHTML =
            `Duration <strong>${data.days}</strong>`;

        headPeriod.querySelector(".title").textContent = data.title;
    }
};

const openExplore = async (idRing) => {
    const swiperEl = document.querySelector(".swiper-periods");
    const hero = document.querySelector(".visualization");
    const heroViz = document.querySelector(".hero-viz");
    const modal = document.querySelector(".main-periods");
    const periodHead = document.querySelector(".visualization--period--head");
    let swiperInstance = null; // 👈 guardamos referencia

    hero.classList.remove("show");
    hero.classList.add("hide");
    modal.classList.add("show");

    loadComponent("#header", "componets/header-interior.html");

    headerLayout();
    window.addEventListener("change", headerLayout);

    // 👇 inicializamos y guardamos instancia
    swiperInstance = await initPeriods();

    swiperInstance.slideTo(parseInt(idRing) - 1, 1);

    setTimeout(() => {
        // ScrollTrigger.refresh();
        document.querySelector("body").className = "panel-3";
    }, 500);

    const linkHandler = () => {
        hero.classList.add("show");
        modal.classList.remove("show");

        // ✅ destruir swiper correctamente
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }

        loadComponent("#header", "componets/header.html");

        // ScrollTrigger.refresh();
    };

    const linkBack = document.querySelector(".link-back");
    linkBack.addEventListener("click", linkHandler);

    // updatePeriodHead(parseInt(idRing));
};

const hoverRings = () => {
    const rings = document.querySelectorAll(".gold-dot");
    const visualizationPop = document.querySelector(".visualization--pop");

    rings.forEach((element) => {
        let idRing = element.id.replace("nodo-", "");
        element.addEventListener("mouseenter", () => {
            setTimeout(() => {
                visualizationPop
                    .querySelector("img")
                    .setAttribute("src", `./img/ring-${idRing}.png`);
                visualizationPop.classList.add("show");
            }, 100);
        });
    });
    visualizationPop
        .querySelector(".visualization--pop--hover")
        .addEventListener("mouseleave", () => {
            visualizationPop.classList.remove("show");
        });
};

const hoverRings2 = () => {
    const ringsYellow = document.querySelectorAll(".yellow-dot");
    const rings = document.querySelectorAll(".gold-dot");
    const visualizationSection = document.querySelector(".visualization");

    const ringHead = document.querySelector(".visualization--ring--head");
    const ringResume = document.querySelector(".visualization--resume");

    const dataRing = {
        27: {
            day: "57",
            date: "26 Feb, 2024",
            emotion: "Excited/Motivated",
            location: "Austria/United Kingdom",
        },
        26: {
            day: "49",
            date: "18 Feb, 2024",
            emotion: "Confused",
            location: "Austria",
        },
        25: {
            day: "44",
            date: "13 Feb, 2024",
            emotion: "Peaceful",
            location: "United States",
        },
        24: {
            day: "43",
            date: "12 Feb, 2024",
            emotion: "Excited/Motivated",
            location: "El Salvador",
            resume: "Yes, you can pay with crypto.",
        },
        23: {
            day: "25",
            date: "25 Jan, 2024",
            emotion: "Just Fine",
            location: "México",
            resume: "I don’t recommend it; it was awful. There’s a high risk of thrombosis, and I experienced the worst headaches of my life. Never again.",
        },
        19: {
            day: "75",
            date: "15 Mar, 2024",
            emotion: "Anxious/Stressed",
            location: "Austria/Germany/Iceland",
            resume: "Other first-time experiences from this trip that weren't documented include trying Korean BBQ, enjoying traditional Austrian food, going bouldering, jumping into the Nordkette for dinner in a Hütte, going to the Tate and the impressive Natural History Museum in London, seeing Fever Ray live, experiencing a real winter.",
        },
        20: {
            day: "125",
            date: "5 Apr, 2024",
            emotion: "Confused",
            location: "México",
            resume: "My Buddhist teacher used to say: <br> “The one who feels badly, acts badly.” <br><br> I’m not justifying what I did, but it was a clear sign that I was no longer in control of my thoughts or actions. I was overwhelmed with anxiety and gripped by a fear of losing what, at the time, I believed was the relationship I had always dreamed of. I quite literally lost my mind and began acting erratically—undermining trust and pushing my partner away.",
        },
        21: {
            day: "168",
            date: "16 Jun, 2024",
            emotion: "Sad",
            location: "México",
        },
        22: {
            day: "173",
            date: "21 Jun, 2024",
            emotion: "Excited/Motivated",
            location: "México",
            resume: "Achieving the 4 day Work Week happened almost by accident due to my mental health crisis but it was a game changer. I was finally able to work on my personal projects (like this one) in a week day, devoting 8 hours each week.",
        },
        1: {
            day: "185",
            date: "03 Jul, 2024",
            emotion: "Happy/Satisfied",
            location: "México",
        },
        2: {
            day: "195",
            date: "13 Jul, 2024",
            emotion: "Extremely Sad",
            location: "México",
        },
        3: {
            day: "203",
            date: "21 Jul, 2024",
            emotion: "Extremely Confused",
            location: "México",
            resume: "That day, I felt overwhelmed and confused. I wanted to cry and felt the urge to call my ex for explanations. Instead, I decided to set a timer for two hours to create something nice using Midjourney. My mood changed completely; I felt joy and was grateful to see how happy I am when I’m creating. It doesn’t matter if it’s something simple.",
        },
        4: {
            day: "217",
            date: "4 Aug, 2024",
            emotion: "Extremely Happy",
            location: "México",
            resume: "When it comes to doing something risky or extreme, I’m usually the one who watches others go first, feeling super anxious as my turn approaches. But this time, I was surprisingly relaxed and prepared—so much so that I volunteered to be the first! The guide approved and mentioned that the first 30 seconds would be unbearable, but after that, it would get easier. I thought to myself: I’ve been enduring unbearable emotional pain, sadness, confusion, and anxiety for at least three months; this is nothing for me! And boy, I did pretty well. I was proud of myself!",
        },
        5: {
            day: "241",
            date: "28 Aug, 2024",
            emotion: "Exited/Motivated",
            location: "México",
            resume: "Poverty Radar is one of my favorite projects—a physicalization that involves Arduino and hardware. This time, I invited a friend to collaborate, and he understood the idea perfectly and was willing to help. I couldn’t be more grateful and excited!",
        },
        6: {
            day: "248",
            date: "04 Sep, 2024",
            emotion: "Angry/Resentful",
            location: "México",
            resume: "This is another data humanist project: a dashboard tracking what I ate over the course of 10 months. It was originally intended to cover a full year, but I struggled to consistently record my meals during my trip to the US and Europe.",
        },
        7: {
            day: "251",
            date: "07 Sep, 2024",
            emotion: "Happy/Satisfied",
            location: "México",
            resume: "As I learned how to overcome my breakup, I felt compelled to share my small victories with others in similar situations, showing them that there was a way out of the pain. This was the first of many pieces I planned to write, but I struggled to find time between my 9-to-6 job and side projects, which prevented me from completing the others.",
        },
        8: {
            day: "252",
            date: "08 Sep, 2024",
            emotion: "Extremely Happy",
            location: "México",
        },
        9: {
            day: "271",
            date: "27 Sep, 2024",
            emotion: "Excited/Motivated",
            location: "México",
            resume: "A visual record of my most delicious meals, both at home and dining out, as well as my daily cup of coffee.",
        },
        10: {
            day: "274",
            date: "30 Sep, 2024",
            emotion: "Excited/Motivated",
            location: "México",
            resume: "I see this as my very first step toward becoming a creative technologist. I’m not sure yet if I’ll be able to make it, but it’s worth trying.",
        },
        11: {
            day: "291",
            date: "17 Oct, 2024",
            emotion: "Happy/Peaceful",
            location: "México",
        },
        12: {
            day: "295",
            date: "21 Oct, 2024",
            emotion: "Extremely Happy/Grateful",
            location: "Portugal/France/Italy/Austria",
            resume: "Growing up in a working-class family, my mom never had the chance to travel overseas. As a child, I vowed to change that for her. Seeing her explore new places for the first time was one of the most fulfilling experiences of my life, and those cherished memories will remain with me always. 💜",
        },
        13: {
            day: "306",
            date: "1 Nov, 2024",
            emotion: "Excited/Grateful",
            location: "Austria",
        },
        14: {
            day: "308",
            date: "3 Nov, 2024",
            emotion: "Excited",
            location: "Austria",
        },
        15: {
            day: "335",
            date: "30 Nov, 2024",
            emotion: "Extremely Happy",
            location: "México",
        },
        16: {
            day: "336",
            date: "01 Dec, 2024",
            emotion: "Excited/Motivated",
            location: "México",
            resume: "It wasn’t really about getting the job; I knew I had no chance. But for the first time in my life, it felt like I had the perfect experience and profile for the position. So, I put together my resume and latest projects and sent it off. It was a huge step for me since I’ve been dealing with impostor syndrome my whole life. ",
        },
        17: {
            day: "359",
            date: "24 Dec, 2024",
            emotion: "Inspired",
            location: "México",
            resume: "As the year came to a close, I realized I wasn’t achieving the results I hoped for from the Max course. This made me quite anxious, so I decided to dedicate my Christmas holidays to learning the basics of Arduino on my own. I was so invested in it that I chose to skip the Christmas celebration with my family, something I had never done before.",
        },
        18: {
            day: "360",
            date: "25 Dec, 2024",
            emotion: "Inspired",
            location: "México",
        },
    };

    const updateRingHead = (periodNumber) => {
        const data = dataRing[periodNumber];
        const isEmpty = Object.values(data).every((value) => value === "");

        if (data && ringHead) {
            if (isEmpty) {
                ringHead.querySelectorAll("span").forEach((span) => {
                    span.innerHTML = "";
                });
            } else {
                ringHead.querySelector("#ring-day").innerHTML =
                    `Day <strong>${data.day}</strong>`;
                ringHead.querySelector("#ring-date").innerHTML =
                    `Date <strong>${data.date}</strong>`;
                ringHead.querySelector("#ring-emotion").innerHTML =
                    `Emotion/Mood <strong>${data.emotion}</strong>`;
                ringHead.querySelector("#ring-location").innerHTML =
                    `Location <strong>${data.location}</strong>`;
            }

            if (data.resume) {
                ringResume.querySelector("p").innerHTML = data.resume;
                const classesToRemove = [...ringResume.classList].filter((c) =>
                    c.startsWith("resume-"),
                );

                ringResume.classList.remove(...classesToRemove);

                ringResume.classList.add("show", `resume-${periodNumber}`);
            }
        }
    };

    rings.forEach((element) => {
        let idRing = element.id.replace("nodo-", "");
        let idHover = document.querySelector(`#ring${idRing}`);

        element.addEventListener("mouseenter", () => {
            if (idHover) {
                visualizationSection.classList.add("hover");
                idHover.classList.add("show");

                updateRingHead(parseInt(idRing));
            }
        });

        element.addEventListener("mouseleave", () => {
            if (idHover) {
                visualizationSection.classList.remove("hover");
                idHover.classList.remove("show");
                ringResume.classList.remove(`show`);
            }
        });
    });

    ringsYellow.forEach((element) => {
        let idRing = element.id.replace("period-", "");
        let idHover = document.querySelector(`#yellow-${idRing}`);

        element.addEventListener("mouseenter", () => {
            if (idHover) {
                visualizationSection.classList.add("hoverYellow");
                idHover.classList.add("show");
                updatePeriodHead(parseInt(idRing));
            }
        });

        element.addEventListener("mouseleave", () => {
            if (idHover) {
                visualizationSection.classList.remove("hoverYellow");
                idHover.classList.remove("show");
            }
        });

        element.addEventListener("click", () => {
            openExplore(idRing);
        });
    });
};

const init = () => {
    modalViz();
    modalExplore();
    hoverRings2();
    // hoverPeriods();
};

init();

// alert("limpiar conentedor slide periods");

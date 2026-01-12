const modalViz = () => {
    const hero = document.querySelector(".hero");
    const modal = document.querySelector(".visualization");
    const button = document.querySelector("#btn-viz");

    if (modal && button) {
        button.addEventListener("click", () => {
            hero.classList.add("hide");
            modal.classList.add("show");
        });
    }
};

export function init() {
    modalViz();
    console.log("init viz");
}

// init();

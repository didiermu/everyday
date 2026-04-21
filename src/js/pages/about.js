const readMore = () => {
    const text = document.querySelector("#more-about");
    const readMoreBtn = document.querySelector("#read-about");

    if (readMoreBtn && text) {
        readMoreBtn.onclick = () => {
            const isOpen = text.classList.toggle("is-open");
            readMoreBtn.textContent = isOpen ? "Read less" : "Read more";
            readMoreBtn.setAttribute("aria-expanded", isOpen);
        };
    }
};

export function initAbout() {
    readMore();
}

initAbout();

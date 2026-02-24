import { loadComponent } from "./utils/loadComponent.js";
// import { initRouter } from "../router/router.js";
import { currentDate } from "./utils/loadPage.js";

import "./../scss/styles.scss";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/collapse";

// Layout
(async () => {
    if (document.querySelector("main").classList.contains("main-periods")) {
        await loadComponent("#header", "componets/header-interior.html");
    } else {
        await loadComponent("#header", "componets/header.html");
    }

    // initRouter();
    currentDate();
})();

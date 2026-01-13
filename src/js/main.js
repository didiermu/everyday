import { loadComponent } from "./utils/loadComponent.js";
import { initRouter } from "../router/router.js";

import "./../scss/styles.scss";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/collapse";
import "@locomotive/dist/locomotive-scroll.css";
// import "./../scss/scroll.css";

// Layout
(async () => {
    await loadComponent("#header", "componets/header.html");
    // loadComponent('#footer', '/src/components/footer/footer.html');
    initRouter();
})();

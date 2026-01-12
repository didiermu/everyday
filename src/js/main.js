import { loadComponent } from "./utils/loadComponent.js";
import { initRouter } from "../router/router.js";

import "./../scss/styles.scss";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/collapse";

// Layout
await loadComponent("#header", "componets/header.html");
// loadComponent('#footer', '/src/components/footer/footer.html');

initRouter();

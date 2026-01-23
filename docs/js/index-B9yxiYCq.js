const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/home-f95sOrUc.js","js/three-yH4q0MRI.js","js/loadLocomotive-CvnLs4nJ.js","js/physicalizing-BpmjRwKR.js","js/swiper-CFnvug-O.js","css/swiper-erHEUhN6.css","css/physicalizing-EsTBEVQd.css","js/visualization-DR2DFFYr.js","js/periods-Cq_2w1uh.js","js/about-D_azNDDI.js","js/epilogue-RYVsrEaQ.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const Gs=`<nav class="navbar">
    <div class=" container-fluid">
        <a href="/" data-link>
            <picture>
                <source media="(max-width:1280px )" srcset="/img/cerillo.png">
                <img src="./img/cerillo2.png" alt="">
            </picture>
        </a>
        <button class="button button-primary button-min" id="button-menu" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation">MENU</button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel" data-bs-backdrop="static">
            <div class="offcanvas-body">
                <ul class="navbar-nav">
                    <a href="/" data-link>
                        <li>Intro</li>
                    </a>
                    <a href="/physicalizing-emotions" data-link>
                        <li>Physicalizing emotions</li>
                    </a>
                    <a href="/visualization" data-link>
                        <li>the VISUALIZATION</li>
                    </a>
                    <a href="/about" data-link>
                        <li>ABOUT THE PROJECT</li>
                    </a>
                    <a href="/epilogue" data-link>
                        <li>EPILOGUE <span>On healing and mental health</span></li>
                    </a>
                </ul>
                <button class="button button-primary button-min" data-bs-dismiss="offcanvas"
                    aria-label="Close">CLOSE</button>
            </div>
        </div>
    </div>
</nav>
`,Qs=`<nav class="navbar">
    <div class=" container-fluid">
        <a href="/visualization" data-link class="link-back"> BACK </a>
        <button class="button button-primary button-min" id="button-menu" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation">MENU</button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel" data-bs-backdrop="static">
            <div class="offcanvas-body">
                <ul class="navbar-nav">
                    <a href="/" data-link>
                        <li>Intro</li>
                    </a>
                    <a href="/physicalizing-emotions" data-link>
                        <li>Physicalizing emotions</li>
                    </a>
                    <a href="/visualization" data-link>
                        <li>the VISUALIZATION</li>
                    </a>
                    <a href="/about" data-link>
                        <li>ABOUT THE PROJECT</li>
                    </a>
                    <a href="/epilogue" data-link>
                        <li>EPILOGUE <span>On healing and mental health</span></li>
                    </a>
                </ul>
                <button class="button button-primary button-min" data-bs-dismiss="offcanvas"
                    aria-label="Close">CLOSE</button>
            </div>
        </div>
    </div>
</nav>
`,Xs={"componets/header.html":Gs,"componets/header-interior.html":Qs};async function Hi(n,t){const e=document.querySelector(n);if(!e)return;const i=Xs[t];i?e.innerHTML=i:console.error(`Component not found: ${t}`)}const Js="modulepreload",Zs=function(n){return"/everyday/"+n},jn={},Tt=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){let r=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=r(e.map(c=>{if(c=Zs(c),c in jn)return;jn[c]=!0;const d=c.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${g}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":Js,d||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((f,O)=>{p.addEventListener("load",f),p.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return s.then(r=>{for(const a of r||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})},to=`<section class="intro">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>EVERY DAY IS A GIFT You WILL Never Get Back.</h1>
                <div class="intro--resume">
                    <p>A data physicalization and visualization about the universal pain of break ups, the fragility of
                        mental health and the path to recovery and joy. </p>
                    <p>Or how I learned to view each day as a gift—no matter if it’s filled with joy, sadness,
                        confusion, or chaos.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="video">
    <video poster="./img/intro_video_portrait.jpg" autoplay muted loop>
        <source src="./video/Intro_video_portrait.mp4" type="video/mp4" media="(orientation: portrait)">
        <source src="./video/Intro_video_landscape_no_audio.mp4" type="video/mp4">
    </video>
    <button class="btn-play">PLAY</button>
</section>
<dialog id="modal-video">
    <div class="modal--content">
        <button class="close"></button>
        <video src="./video/intro_video_landscape.mp4" loop></video>
    </div>
</dialog>
`,eo=`<section class="hero">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="title" data-scroll data-scroll-speed=".1" data-scroll-position="top">
                    <span>1</span>Physicalizing <br> Emotions
                </h1>
                <p>The process behind the physicalization that represents 365 days of my emotional life during a
                    challenging time. It tells the story of the materials I used and the creative decisions they
                    inspired.</p>
            </div>
        </div>
    </div>
    <picture class="img-cover">
        <img src="./img/physicalizing-01.jpg" alt="">
    </picture>
</section>
<section class="expand">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="reveal" data-scroll data-scroll-speed=".05" data-scroll-repeat data-scroll-offset="10%"> I’VE
                    USED Matches BECAUSE THEY perfectly symbolize each day lived.</h2>
                <p class="reveal" data-scroll data-scroll-repeat data-scroll-speed=".05">Once a match is struck, it’s
                    gone forever; we don’t know how many matches we have left.</p>
            </div>
        </div>
    </div>
    <div class="expand__image">
        <div class="marquee">
            <h4>Physicalizing emotions / </h4>
        </div>
        <picture class="img-cover expand__image--fondo">
            <source media="(min-width:1280px)" srcset="./img/physicalizing-02-desk.jpg">
            <img src="./img/physicalizing-02.jpg" alt="">
        </picture>
        <div class="expand__image__info">
            <p>This is the first layout of the 365 matches arranged in concentric circles. I used this image to create
                the foundation for the final physical representation.</p>
            <picture class="img-cover">
                <img src="./img/physicalizing-03.png" alt="">
            </picture>
        </div>
    </div>
</section>
<section class="regular">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="reveal" data-scroll data-scroll-repeat data-scroll-speed=".05">Instead of painting the
                    MATCHES, I wrapped each ONE AS a tiny gift.</h2>
                <video src="" poster="./img/physicalizing-04.png" class="reveal" data-scroll data-scroll-repeat
                    data-scroll-speed=".04"></video>
                <p class="reveal" data-scroll data-scroll-repeat data-scroll-speed=".06">That decision helped define the
                    concept and gave its name to the project. What fascinates me about physicalizations is the virtuous
                    feedback loop they create—where the material informs the concept, and the concept evolves through
                    the process.</p>
            </div>
        </div>
    </div>
    <picture class="img-cover">
        <source media="(min-width:1280px)" srcset="./img/physicalizing-05-desk.jpg">
        <img src="./img/physicalizing-05.jpg" alt="">
    </picture>
</section>
<section class="regular carousel">
    <div class="container">
        <div class="row">
            <div class="col-12 carousel__content">
                <p>My working sessions unexpectedly became an extension of my meditation practice. They allowed for
                    contemplation and required me to be fully present while reflecting on the past from a new
                    perspective. </p>
            </div>
        </div>
    </div>
    <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <picture class="img-cover">
                    <img src="./img/physicalizing-slide-01.jpg" alt="">
                </picture>
            </div>
            <div class="swiper-slide">
                <picture class="img-cover">
                    <img src="./img/physicalizing-slide-02.jpg" alt="">
                </picture>
            </div>
            <div class="swiper-slide">
                <picture class="img-cover">
                    <img src="./img/physicalizing-slide-03.jpg" alt="">
                </picture>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 carousel__content">
                <p>The task was emotionally challenging. But by working in silence—wrapping, photographing, and pasting
                    each match—I created space for gratitude. I honored each day, no matter how painful or joyful,
                    because each one brought me to the present moment. </p>
            </div>
        </div>
    </div>
</section>
<section class="regular matches">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>Although matches may appear similar at first glance, each one is distinct, much like our days.</h2>
            </div>
        </div>
    </div>
    <picture class="img-cover">
        <source media="(min-width:1280px)" srcset="./img/physicalizing-07-desk.jpg">
        <img src="./img/physicalizing-07.jpg" alt="">
    </picture>
</section>
<section class="regular circle">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>after 4 months of wrapping and pasting... the physicalization was finished on april 6, 2025</h2>
            </div>
        </div>
    </div>
    <picture class="img-cover">
        <source media="(min-width:1280px)" srcset="./img/physicalizing-08-desk.jpg">
        <img src="./img/physicalizing-08.jpg" alt="">
    </picture>
</section>
<section class="regular hours">
    <div class="container">
        <div class="row">
            <div class="col-12 hours--title">
                <h3>hours spent</h3>
            </div>
            <div class="col-12 hours--list">
                <ul>
                    <li>Wrapping matches</li>
                    <li>10.5</li>
                    <li>24.5%</li>
                </ul>
                <ul>
                    <li>Assembling/Making pics</li>
                    <li>5.5</li>
                    <li>24.5%</li>
                </ul>
                <ul>
                    <li>Editing pics*</li>
                    <li>16</li>
                    <li>24.5%</li>
                </ul>
                <ul>
                    <li>Animating*</li>
                    <li>4</li>
                    <li>24.5%</li>
                </ul>
                <ul>
                    <li><strong>Total</strong>*</li>
                    <li><strong>89</strong></li>
                    <li><strong>100%</strong></li>
                </ul>
            </div>
            <div class="col-12 hours--img">
                <picture class="img-cover">
                    <img src="./img/physicalizing-09.png" alt="">
                </picture>
            </div>
        </div>
    </div>
</section>
<a href="/visualization" data-link class="link-decorated">NEXT: THE VISUALIZATION</a>
`,no=`<section class="hero">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="title"><span>2</span>The <br>Visualization</h1>
                <p>This interactive visualization complements the physicalization; it captures my journey throughout the
                    year—before, during, and after the crisis. It also highlights some milestones and the first time I
                    did certain things.</p>
                <buton class="button button-primary" id="btn-viz">Explore the Visualization</buton>
            </div>
        </div>
    </div>
</section>
<section class="visualization">
    <div class="container visualization--title">
        <div class="row">
            <div class="col-12">
                <h2>The Visualization</h2>
            </div>
            <div class="col-12">
                <div class="visualization__data">
                    <div class="visualization__group">
                        <span>Range</span>
                        <span><strong>1 Jan</strong></span>
                    </div>
                    <span>-</span>
                    <div class="visualization__group">
                        <span><strong>31 Dec, 2024</strong></span>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="visualization__data">
                    <span>Duration</span>
                    <span><strong>366 days</strong></span>
                </div>
            </div>
        </div>
    </div>
    <div class="container visualization--mapa">
        <div class="row">
            <div class="col-12 visualization--instructions">
                <h4>1 Match <strong>1 Day lived</strong></h4>
                <div class="visualization--instructions__block">
                    <h5>INNER RING</h5>
                    <p>
                        <span><strong>1 Jan - 29 Feb, 2024</strong></span>
                        <span>Range<strong> Days 01 to 60</strong></span>
                        <span>Duration<strong> 60 days</strong></span>
                    </p>
                </div>
                <div class="visualization--instructions__block">
                    <h5>MIDDLE RING</h5>
                    <p>
                        <span><strong>1 Mar - 30 Jun, 2024</strong></span>
                        <span>Range<strong> Days 61 to 182</strong></span>
                        <span>Duration<strong> 122 days</strong></span>
                    </p>
                </div>
                <div class="visualization--instructions__block">
                    <h5>OUTER RING</h5>
                    <p>
                        <span><strong>30 Jun - 31 Dec, 2024</strong></span>
                        <span>Range<strong> Days 183 to 366</strong></span>
                        <span>Duration<strong> 184 days</strong></span>
                    </p>
                </div>
            </div>
            <div class="col-12 visualization--fondo">
                <svg viewBox="0 0 980 1000" xmlns="http://www.w3.org/2000/svg">
                    <!-- Imagen de fondo -->
                    <image href="./img/viz-desk.jpg" width="980" height="1000" x="0" y="0"></image>
                    <!-- Puntos amarillos grandes (aproximados según la imagen) -->
                    <circle class="yellow-dot" cx="253" cy="385" r="10" id="period-01"></circle>
                    <circle class="yellow-dot" cx="317" cy="460" r="10" id="period-02"></circle>
                    <circle class="yellow-dot" cx="436" cy="417" r="10" id="period-03"></circle>
                    <circle class="yellow-dot" cx="565" cy="514" r="10" id="period-04"></circle>
                    <circle class="yellow-dot" cx="658" cy="493" r="10" id="period-05">
                    </circle>
                    <circle class="yellow-dot" cx="732" cy="393" r="10" id="period-06"></circle>
                    <circle class="yellow-dot" cx="406" cy="717" r="10" id="period-07"></circle>
                    <!-- Puntos dorados pequeños (borde exterior) -->
                    <circle class="gold-dot" cx="446" cy="190" r="6" data-zone="Borde Superior" id="nodo-1"></circle>
                    <circle class="gold-dot" cx="459" cy="188" r="6" data-zone="Borde Superior" id="nodo-2"></circle>
                    <circle class="gold-dot" cx="548" cy="196" r="6" data-zone="Borde Superior Derecho" id="nodo-3">
                    </circle>
                    <circle class="gold-dot" cx="647" cy="226" r="6" data-zone="Borde Derecho Superior" id="nodo-4">
                    </circle>
                    <circle class="gold-dot" cx="708" cy="275" r="6" data-zone="Borde Derecho" id="nodo-5"></circle>
                    <circle class="gold-dot" cx="640" cy="325" r="6" data-zone="Borde Derecho Superior" id="nodo-6">
                    </circle>
                    <circle class="gold-dot" cx="777" cy="397" r="6" data-zone="Borde Derecho Medio" id="nodo-7">
                    </circle>
                    <circle class="gold-dot" cx="756" cy="623" r="6" data-zone="Borde Derecho Inferior" id="nodo-8">
                    </circle>
                    <circle class="gold-dot" cx="570" cy="576" r="6" data-zone="Espiral Interior" id="nodo-9"></circle>
                    <circle class="gold-dot" cx="710" cy="680" r="6" data-zone="Espiral Media" id="nodo-10"></circle>
                    <circle class="gold-dot" cx="693" cy="702" r="6" data-zone="Borde Izquierdo" id="nodo-11"></circle>
                    <circle class="gold-dot" cx="682" cy="711" r="6" data-zone="Borde Inferior Izquierdo" id="nodo-12">
                    </circle>
                    <circle class="gold-dot" cx="501" cy="779" r="6" data-zone="Borde Inferior" id="nodo-13"></circle>
                    <circle class="gold-dot" cx="470" cy="782" r="6" data-zone="Borde Izquierdo Superior" id="nodo-14">
                    </circle>
                    <circle class="gold-dot" cx="451" cy="685" r="6" data-zone="Espiral Superior Derecha" id="nodo-15">
                    </circle>
                    <circle class="gold-dot" cx="301" cy="714" r="6" data-zone="Espiral Superior Derecha" id="nodo-16">
                    </circle>
                    <circle class="gold-dot" cx="268" cy="688" r="6" data-zone="Espiral Superior Derecha" id="nodo-17">
                    </circle>
                    <circle class="gold-dot" cx="371" cy="514" r="6" data-zone="Espiral Superior Derecha" id="nodo-18">
                    </circle>
                    <circle class="gold-dot" cx="368" cy="500" r="6" data-zone="Espiral Superior Derecha" id="nodo-19">
                    </circle>
                    <circle class="gold-dot" cx="205" cy="592" r="6" data-zone="Espiral Superior Derecha" id="nodo-20">
                    </circle>
                    <circle class="gold-dot" cx="201" cy="571" r="6" data-zone="Espiral Superior Derecha" id="nodo-21">
                    </circle>
                    <circle class="gold-dot" cx="376" cy="435" r="6" data-zone="Espiral Superior Derecha" id="nodo-22">
                    </circle>
                    <circle class="gold-dot" cx="359" cy="311" r="6" data-zone="Espiral Superior Derecha" id="nodo-23">
                    </circle>
                    <circle class="gold-dot" cx="249" cy="313" r="6" data-zone="Espiral Superior Derecha" id="nodo-24">
                    </circle>
                    <circle class="gold-dot" cx="255" cy="303" r="6" data-zone="Espiral Superior Derecha" id="nodo-25">
                    </circle>
                    <circle class="gold-dot" cx="407" cy="284" r="6" data-zone="Espiral Superior Derecha" id="nodo-26">
                    </circle>
                    <circle class="gold-dot" cx="407" cy="284" r="6" data-zone="Espiral Superior Derecha" id="nodo-27">
                    </circle>
                </svg>
                <picture class="img-cover">
                    <img src="./img/viz.jpg" alt="">
                </picture>
                <a href="/visualization/periods" data-link>
                    <span class="visualization--button"> CLICK <br> TO SEE <br> PERIODS </span>
                </a>
            </div>
            <div class="col-12 visualization--data">
                <h4>1 Match <strong>1 Day lived</strong></h4>
                <div class="visualization--data--table">
                    <div class="visualization--data__row ext-confused">
                        <span>Extremely confused</span>
                        <span>6</span>
                        <span>1.6%</span>
                    </div>
                    <div class="visualization--data__row gratefull">
                        <span>Grateful</span>
                        <span>6</span>
                        <span>1.6%</span>
                    </div>
                    <div class="visualization--data__row just-fine">
                        <span>Just fine</span>
                        <span>84</span>
                        <span>22.9%</span>
                    </div>
                    <div class="visualization--data__row happy-satisfied">
                        <span>Happy/Satisfied</span>
                        <span>62</span>
                        <span>16.9%</span>
                    </div>
                    <div class="visualization--data__row peaceful">
                        <span>Peaceful</span>
                        <span>60</span>
                        <span>16.3%</span>
                    </div>
                    <div class="visualization--data__row sad">
                        <span>Sad</span>
                        <span>41</span>
                        <span>11.2%</span>
                    </div>
                    <div class="visualization--data__row ext-sad">
                        <span>Extremely Sad</span>
                        <span>29</span>
                        <span>7.9%</span>
                    </div>
                    <div class="visualization--data__row exited-motiv">
                        <span>Excited / Motivated</span>
                        <span>27</span>
                        <span>7.3%</span>
                    </div>
                    <div class="visualization--data__row confused">
                        <span>Confused</span>
                        <span>20</span>
                        <span>5.4%</span>
                    </div>
                    <div class="visualization--data__row inspired">
                        <span>Inspired</span>
                        <span>12</span>
                        <span>3.2%</span>
                    </div>
                    <div class="visualization--data__row anxious-stress">
                        <span>Anxious / Stressed</span>
                        <span>9</span>
                        <span>2.4%</span>
                    </div>
                    <div class="visualization--data__row ext-happy">
                        <span>Extremely Happy</span>
                        <span>8</span>
                        <span>2.1%</span>
                    </div>
                    <div class="visualization--data__row ext-confused">
                        <span>Extremely confused</span>
                        <span>6</span>
                        <span>1.6%</span>
                    </div>
                    <div class="visualization--data__row gratefull">
                        <span>Grateful</span>
                        <span>6</span>
                        <span>1.6%</span>
                    </div>
                    <div class="visualization--data__row angry-resent">
                        <span>Angry / Resentful</span>
                        <span>2</span>
                        <span>.6%</span>
                    </div>
                    <div class="visualization--data__row">
                        <span><strong>Total</strong></span>
                        <span>366</span>
                        <span>100%</span>
                    </div>
                </div>
                <a href="/visualization/periods" data-link>
                    <button class="button button-tertiary">Explore Periods</button>
                </a>
            </div>
            <div class="visualization--pop">
                <span class="visualization--pop--hover"></span>
                <img src="./img/ring-01.png" alt="">
            </div>
            <div class="visualization--period">
                <div class="visualization--period--head">
                    <div class="visualization--period--content">
                        <h3>01</h3>
                        <p><strong>1 Jan - 11 Feb, 2024</strong></p>
                        <p><span>Range </span><strong>Days 01 to 42</strong></p>
                        <p><span>Duration </span><strong>42 days</strong></p>
                    </div>
                    <h2>A Promising Year Ahead</h2>
                </div>
                <a href="/visualization/periods" data-link>
                    <span class="visualization--period--hover"></span>
                    <img src="./img/period-01.png" alt="">
                </a>
            </div>
        </div>
    </div>
</section>
`,io=`<dialog id="modal-story">
    <div class="modal--content">
        <button class="close"></button>
        <section class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="title">The Crisis. Where is My Mind?</h1>
                    </div>
                    <div class="col-12">
                        <div class="hero__data">
                            <span><strong>~ 4 May - 18 Jun, 2024</strong></span>
                        </div>
                        <div class="hero__data">
                            <span>Range <strong>Days 125 to 170</strong></span>
                            <span>Duration<strong>∼ 46 days</strong></span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 modal--story--content">
                        <p>The period I referred to as "hell" was one of the darkest times in my life. I was consumed by
                            relentless guilt and felt mentally unwell, tormented by obsessive thoughts that plagued me
                            from morning until night.</p>
                        <p>It all began with a painful breakup that triggered a mental health crisis, one that had been
                            quietly building up for years. The accumulation of anxiety and unprocessed emotions finally
                            caught up with me. Healing from that experience turned out to be a deeply transformative
                            journey, one I’ve chosen to share through this project.</p>
                        <p>As I was having a hard time trying to heal from the weirdest breakup in my life and being
                            close to divorce. I wanted to make something meaningful with the experience, something that
                            let me explore the nuances of healing and learning how to become mentally and spiritually
                            stronger.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</dialog>
<!-- <dialog id="modal-data">
    <div class="modal--content">
        <button class="close"></button>
        <section class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="title">The Crisis. Where is My Mind?</h1>
                    </div>
                    <div class="col-12">
                        <div class="hero__data">
                            <span><strong>~ 4 May - 18 Jun, 2024</strong></span>
                        </div>
                        <div class="hero__data">
                            <span>Range <strong>Days 125 to 170</strong></span>
                            <span>Duration<strong>∼ 46 days</strong></span>
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
                            </div>
                            <div class="modal-data--row">
                                <span>125</span>
                                <span>4 May</span>
                                <span>Extremely confused <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </span>
                            </div>
                            <div class="modal-data--row">
                                <span>125</span>
                                <span>4 May</span>
                                <span>Extremely confused <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </span>
                            </div>
                            <div class="modal-data--row">
                                <span>125</span>
                                <span>4 May</span>
                                <span>Extremely confused <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </span>
                            </div>
                            <div class="modal-data--row">
                                <span>125</span>
                                <span>4 May</span>
                                <span>Extremely confused <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </span>
                            </div>
                            <div class="modal-data--row">
                                <span>125</span>
                                <span>4 May</span>
                                <span>Extremely confused <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </span>
                            </div>
                            <div class="modal-data--row">
                                <span>125</span>
                                <span>4 May</span>
                                <span>Extremely confused <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </span>
                            </div>
                            <div class="modal-data--row">
                                <span>125</span>
                                <span>4 May</span>
                                <span>Extremely confused <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </span>
                            </div>
                            <div class="modal-data--row">
                                <span>125</span>
                                <span>4 May</span>
                                <span>Extremely confused <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</dialog> -->
`,so=`<section class="hero">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="title" data-scroll data-scroll-speed="-0.2"><span>3</span>About the project</h1>
                <p>This interactive visualization complements the physicalization; it captures my journey throughout the
                    year—before, during, and after the crisis. It also highlights some milestones and the first time I
                    did certain things.</p>
            </div>
        </div>
    </div>
    <picture class="img-cover">
        <img src="./img/bg-about-01.jpg" alt="">
    </picture>
</section>
<section class="regular">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <p>It all began with a painful breakup that triggered a mental health crisis, one that had been quietly
                    building up for years. The accumulation of anxiety and unprocessed emotions finally caught up with
                    me. Healing from that experience turned out to be a deeply transformative journey, one I’ve chosen
                    to share through this project. </p>
                <p> As I was having a hard time trying to heal from the weirdest breakup in my life and being close to
                    divorce. I wanted to make something meaningful with the experience, something that let me explore
                    the nuances of healing and learning how to become mentally and spiritually stronger.</p>
            </div>
            <div class="col-12">
                <h3>Some context </h3>
                <p> As I was having a hard time trying to heal from the weirdest breakup in my life and being close to
                    divorce. I wanted to make something meaningful with the experience, something that let me explore
                    the nuances of healing and learning how to become mentally and spiritually stronger.</p>
            </div>
            <div class="col-12">
                <h2>I used my own experience as a way to reflect on universal issues like breakups, the fragility of our
                    mental health, marriage, dating, and the complexities of relationships.</h2>
            </div>
            <div class="col-12">
                <h3>Creation as a healing tool</h3>
                <p>Every working session for this project started with a lot of self doubt: Is this worth it?, Will
                    anyone care?, Is this just a stupid idea? and ended in satisfaction, I discovered how much I enjoy
                    creating and that kept me going every time.</p>
                <p>The project took almost one year of work in between my 9 to 6, it was challenging but it teach me the
                    value of patience with myself and with the outcome, I had to keep working—even when I was tired of
                    it. This project wasn’t about likes or reactions—it was about healing, growth, and trusting myself,
                    trusting the process and the healing power of craft and creativity.</p>
            </div>
            <div class="col-12">
                <h2>Every day is a gift YOU will never get back. make it matter.</h2>
            </div>
            <div class="col-12">
                <h3>The gift of life</h3>
                <p>During the making of this project I came to understand something essential: the joy we feel today
                    might become the sorrow of tomorrow, likewise, today’s pain and sadness can turn into tomorrow’s
                    peace and happiness. </p>
                <p>Everything is changing all the time, inside and outside our personal sphere, nothing is permanent,
                    not joy and not pain, I learned to see every day as a gift that I will never get back—regardless of
                    whether it was filled with joy, sadness, confusion, or chaos. In the end it adds to the rich and
                    wonderful and rare experience of being alive. </p>
                <a href="mailto:cynmarquez@polimata.mx" target="_blank" class="text-decoration-none">
                    <button class="button button-primary">Share your thoughts </button>
                </a>
            </div>
        </div>
    </div>
</section>
`,oo=`<section class="hero">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="title">Epilogue</h1>
                <p>This section is for those who struggle as I did. I wanted to share some of the lessons learned and
                    the tools that helped me in the same way many content creators out there helped me during the worst
                    moments of the crisis.</p>
                <p>All the articles, posts and blog entries, books, podcasts, videos, interviews that were like candles
                    in the darkness and warm hugs during the painful days and nights. I hope you find something that
                    resonates or make sense to you and help you in your own journey.</p>
            </div>
            <div class="col-12 buttons">
                <div class="button button-secondary" id="btn-tools">Tools for Healing</div>
                <div class="button button-secondary" id="btn-lessons">Lessons Learned</div>
            </div>
        </div>
    </div>
</section>
<section class="panels">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                            data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane"
                            aria-selected="true">Tools for healing</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                            data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane"
                            aria-selected="false">Lessons Learned</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
            tabindex="0">
            <div class="container">
                <h4>Meditation</h4>
                <span>Tool 3/4_____ 4 min.</span>
                <p>I’ve been following Buddhist teachings for years, but over time, my practice became inconsistent.
                    That inconsistency left me vulnerable—emotionally unsteady and unable to regulate my inner world.
                    The result was deep suffering, not just for me, but for those closest to me.</p>
            </div>
            <picture class="img-cover">
                <img src="./img/bg-meditation-01.jpg" alt="">
            </picture>
            <div class="container panels__large">
                <p> But something changed during this crisis. I stopped blaming others or external circumstances for my
                    pain. I decided to take full responsibility—to learn from my mistakes, to return to meditation with
                    the same effort I put into my physical health. I’m still learning, but after more than a year of
                    committed and disciplined effort, I’m staring to see some progress and you will see it too, I
                    promise, because when you practice being in the present moment and nothing else, things change,
                    anxiety decreases and each day you become more aware of your tendency to overthink, to find your way
                    into suffering telling yourself the same stories again and again. </p>
                <h2>when you practice being in the present moment, anxiety decreases and you become more aware of your
                    tendency to overthink, to find your way into suffering telling yourself the same stories again and
                    again.</h2>
                <p>Meditation is not hard, but it’s hard to dare to do absolutely nothing for at least 30 minutes a day
                    in a world that demands productivity and many other things from us. Meditation helps us to live with
                    intention and it also helps us to become stronger and better equipped to face hard moments of our
                    lives and things in a world that we can’t control.</p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="panels__recommended">
                        <h5>Recommended content</h5>
                        <a href="#!" target="_blank" rel="noopener noreferrer">The science of heart break</a>
                        <a href="#!" target="_blank" rel="noopener noreferrer">The School of Life</a>
                    </div>
                </div>
            </div>
            <div class="panels__tools">
                <div class="container">
                    <h5>More Healing Tools</h5>
                </div>
                <div class="swiper swiper-tools">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <a href="#!" target="_blank" rel="noopener noreferrer">
                                <div class="panels__tools__card">
                                    <h4>Psychotherapy </h4>
                                    <span>4 min.</span>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="#!" target="_blank" rel="noopener noreferrer">
                                <div class="panels__tools__card">
                                    <h4>Creativity and Art </h4>
                                    <span>4 min.</span>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="#!" target="_blank" rel="noopener noreferrer">
                                <div class="panels__tools__card">
                                    <h4>Community </h4>
                                    <span>4 min.</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
            <div class="container">
                <h4>Healing from a breakup</h4>
                <span>Lesson 3/4_____ 4 min.</span>
                <p>As Alain de Botton puts it in his book A Therapeutic Journey: “…it’s not really about the wrong
                    others have done to us; it’s an honest appraisal of the way we have let them do these things to us,
                    because we have been insufficiently on our own side.”</p>
            </div>
            <picture class="img-cover">
                <img src="./img/bg-meditation-01.jpg" alt="">
            </picture>
            <div class="container panels__large">
                <p> I discover that healing from a breakup it’s not about the one who hurt you, it’s about understanding
                    why did you ended up with the wrong person and or at the wrong time, in what ways were you
                    vulnerable in that particular time that you were unaware of, what kinds of threats and destructive
                    behaviors you’ve being carrying for so long, what were the narratives you keep telling to yourself
                    that can get in the way to find what you really need to be happy.</p>
                <p>It’s about realizing how little we know about ourselves, and others.</p>
                <h2>“…it’s not really about the wrong others have done to us; it’s an honest appraisal of the way we
                    have let them do these things to us, because we have been insufficiently on our own side.”</h2>
                <p>Healing from a breakup is about forgiving ourselves and the other person knowing that we both ended
                    up in this situation as a result of poor emotional skills and not loving ourselves enough before
                    trying to love someone else or get someone to love us.</p>
                <p>Scientist had shown how our brains change due to all the hormonal flood that happens when we “fall in
                    love”, but that stage is just the start in the journey of truly get to love someone, so it’s
                    important to distinguish love from dopamine craving and need of validation.</p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="panels__recommended">
                        <h5>Recommended content</h5>
                        <a href="#!" target="_blank" rel="noopener noreferrer">The science of heart break</a>
                        <a href="#!" target="_blank" rel="noopener noreferrer">The School of Life</a>
                    </div>
                </div>
            </div>
            <div class="panels__tools">
                <div class="container">
                    <h5>More Healing Tools</h5>
                </div>
                <div class="swiper swiper-lessons">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <a href="#!" target="_blank" rel="noopener noreferrer">
                                <div class="panels__tools__card">
                                    <h4>Marriage and <br> monogamy </h4>
                                    <span>4 min.</span>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="#!" target="_blank" rel="noopener noreferrer">
                                <div class="panels__tools__card">
                                    <h4>The fragility of our <br> mental health</h4>
                                    <span>4 min.</span>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="#!" target="_blank" rel="noopener noreferrer">
                                <div class="panels__tools__card">
                                    <h4>Dating</h4>
                                    <span>4 min.</span>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="#!" target="_blank" rel="noopener noreferrer">
                                <div class="panels__tools__card">
                                    <h4>Long distance <br>relationships</h4>
                                    <span>4 min.</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`,ro={"pages/home.html":to,"pages/physicalizing.html":eo,"pages/visualization.html":no,"pages/periods.html":io,"pages/about.html":so,"pages/epilogue.html":oo};async function ao(n){const t=document.querySelector("[data-router-view]");if(!t)return;t.innerHTML="";const e=ro[n];e?t.innerHTML=e:(console.error(`Page not found: ${n}`),t.innerHTML='<div class="error-page"><h1>404 - Page Not Found</h1></div>')}function lo(n){Array.from(document.body.classList).filter(e=>e.startsWith("page-")).forEach(e=>{document.body.classList.remove(e)}),n&&document.body.classList.add(n)}function co(){const n=document.querySelector("#current-date"),t=new Date,e={year:"numeric",month:"long",day:"numeric"},i=t.toLocaleDateString("en-US",e);n.textContent=i}function uo(){const n=document.querySelector(".hero"),t=document.querySelector(".visualization");n.classList.add("hide"),t.classList.add("show")}var V="top",W="bottom",B="right",z="left",xe="auto",zt=[V,W,B,z],Et="start",$t="end",Wi="clippingParents",gn="viewport",Nt="popper",Bi="reference",an=zt.reduce(function(n,t){return n.concat([t+"-"+Et,t+"-"+$t])},[]),mn=[].concat(zt,[xe]).reduce(function(n,t){return n.concat([t,t+"-"+Et,t+"-"+$t])},[]),ji="beforeRead",Fi="read",Ki="afterRead",Yi="beforeMain",qi="main",Ui="afterMain",Gi="beforeWrite",Qi="write",Xi="afterWrite",Ji=[ji,Fi,Ki,Yi,qi,Ui,Gi,Qi,Xi];function J(n){return n?(n.nodeName||"").toLowerCase():null}function j(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function bt(n){var t=j(n).Element;return n instanceof t||n instanceof Element}function F(n){var t=j(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function _n(n){if(typeof ShadowRoot>"u")return!1;var t=j(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function ho(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var i=t.styles[e]||{},s=t.attributes[e]||{},o=t.elements[e];!F(o)||!J(o)||(Object.assign(o.style,i),Object.keys(s).forEach(function(r){var a=s[r];a===!1?o.removeAttribute(r):o.setAttribute(r,a===!0?"":a)}))})}function po(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(i){var s=t.elements[i],o=t.attributes[i]||{},r=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:e[i]),a=r.reduce(function(l,c){return l[c]="",l},{});!F(s)||!J(s)||(Object.assign(s.style,a),Object.keys(o).forEach(function(l){s.removeAttribute(l)}))})}}const vn={name:"applyStyles",enabled:!0,phase:"write",fn:ho,effect:po,requires:["computeStyles"]};function Q(n){return n.split("-")[0]}var vt=Math.max,De=Math.min,xt=Math.round;function ln(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Zi(){return!/^((?!chrome|android).)*safari/i.test(ln())}function kt(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var i=n.getBoundingClientRect(),s=1,o=1;t&&F(n)&&(s=n.offsetWidth>0&&xt(i.width)/n.offsetWidth||1,o=n.offsetHeight>0&&xt(i.height)/n.offsetHeight||1);var r=bt(n)?j(n):window,a=r.visualViewport,l=!Zi()&&e,c=(i.left+(l&&a?a.offsetLeft:0))/s,d=(i.top+(l&&a?a.offsetTop:0))/o,g=i.width/s,p=i.height/o;return{width:g,height:p,top:d,right:c+g,bottom:d+p,left:c,x:c,y:d}}function En(n){var t=kt(n),e=n.offsetWidth,i=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:i}}function ts(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&_n(e)){var i=t;do{if(i&&n.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function nt(n){return j(n).getComputedStyle(n)}function fo(n){return["table","td","th"].indexOf(J(n))>=0}function ut(n){return((bt(n)?n.ownerDocument:n.document)||window.document).documentElement}function ke(n){return J(n)==="html"?n:n.assignedSlot||n.parentNode||(_n(n)?n.host:null)||ut(n)}function Fn(n){return!F(n)||nt(n).position==="fixed"?null:n.offsetParent}function go(n){var t=/firefox/i.test(ln()),e=/Trident/i.test(ln());if(e&&F(n)){var i=nt(n);if(i.position==="fixed")return null}var s=ke(n);for(_n(s)&&(s=s.host);F(s)&&["html","body"].indexOf(J(s))<0;){var o=nt(s);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return s;s=s.parentNode}return null}function Zt(n){for(var t=j(n),e=Fn(n);e&&fo(e)&&nt(e).position==="static";)e=Fn(e);return e&&(J(e)==="html"||J(e)==="body"&&nt(e).position==="static")?t:e||go(n)||t}function bn(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Qt(n,t,e){return vt(n,De(t,e))}function mo(n,t,e){var i=Qt(n,t,e);return i>e?e:i}function es(){return{top:0,right:0,bottom:0,left:0}}function ns(n){return Object.assign({},es(),n)}function is(n,t){return t.reduce(function(e,i){return e[i]=n,e},{})}var _o=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,ns(typeof t!="number"?t:is(t,zt))};function vo(n){var t,e=n.state,i=n.name,s=n.options,o=e.elements.arrow,r=e.modifiersData.popperOffsets,a=Q(e.placement),l=bn(a),c=[z,B].indexOf(a)>=0,d=c?"height":"width";if(!(!o||!r)){var g=_o(s.padding,e),p=En(o),f=l==="y"?V:z,O=l==="y"?W:B,A=e.rects.reference[d]+e.rects.reference[l]-r[l]-e.rects.popper[d],T=r[l]-e.rects.reference[l],C=Zt(o),M=C?l==="y"?C.clientHeight||0:C.clientWidth||0:0,k=A/2-T/2,N=g[f],x=M-p[d]-g[O],m=M/2-p[d]/2+k,_=Qt(N,m,x),y=l;e.modifiersData[i]=(t={},t[y]=_,t.centerOffset=_-m,t)}}function Eo(n){var t=n.state,e=n.options,i=e.element,s=i===void 0?"[data-popper-arrow]":i;s!=null&&(typeof s=="string"&&(s=t.elements.popper.querySelector(s),!s)||ts(t.elements.popper,s)&&(t.elements.arrow=s))}const ss={name:"arrow",enabled:!0,phase:"main",fn:vo,effect:Eo,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Mt(n){return n.split("-")[1]}var bo={top:"auto",right:"auto",bottom:"auto",left:"auto"};function yo(n,t){var e=n.x,i=n.y,s=t.devicePixelRatio||1;return{x:xt(e*s)/s||0,y:xt(i*s)/s||0}}function Kn(n){var t,e=n.popper,i=n.popperRect,s=n.placement,o=n.variation,r=n.offsets,a=n.position,l=n.gpuAcceleration,c=n.adaptive,d=n.roundOffsets,g=n.isFixed,p=r.x,f=p===void 0?0:p,O=r.y,A=O===void 0?0:O,T=typeof d=="function"?d({x:f,y:A}):{x:f,y:A};f=T.x,A=T.y;var C=r.hasOwnProperty("x"),M=r.hasOwnProperty("y"),k=z,N=V,x=window;if(c){var m=Zt(e),_="clientHeight",y="clientWidth";if(m===j(e)&&(m=ut(e),nt(m).position!=="static"&&a==="absolute"&&(_="scrollHeight",y="scrollWidth")),m=m,s===V||(s===z||s===B)&&o===$t){N=W;var w=g&&m===x&&x.visualViewport?x.visualViewport.height:m[_];A-=w-i.height,A*=l?1:-1}if(s===z||(s===V||s===W)&&o===$t){k=B;var u=g&&m===x&&x.visualViewport?x.visualViewport.width:m[y];f-=u-i.width,f*=l?1:-1}}var v=Object.assign({position:a},c&&bo),E=d===!0?yo({x:f,y:A},j(e)):{x:f,y:A};if(f=E.x,A=E.y,l){var b;return Object.assign({},v,(b={},b[N]=M?"0":"",b[k]=C?"0":"",b.transform=(x.devicePixelRatio||1)<=1?"translate("+f+"px, "+A+"px)":"translate3d("+f+"px, "+A+"px, 0)",b))}return Object.assign({},v,(t={},t[N]=M?A+"px":"",t[k]=C?f+"px":"",t.transform="",t))}function Ao(n){var t=n.state,e=n.options,i=e.gpuAcceleration,s=i===void 0?!0:i,o=e.adaptive,r=o===void 0?!0:o,a=e.roundOffsets,l=a===void 0?!0:a,c={placement:Q(t.placement),variation:Mt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:s,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Kn(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:r,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Kn(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const yn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ao,data:{}};var le={passive:!0};function wo(n){var t=n.state,e=n.instance,i=n.options,s=i.scroll,o=s===void 0?!0:s,r=i.resize,a=r===void 0?!0:r,l=j(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&c.forEach(function(d){d.addEventListener("scroll",e.update,le)}),a&&l.addEventListener("resize",e.update,le),function(){o&&c.forEach(function(d){d.removeEventListener("scroll",e.update,le)}),a&&l.removeEventListener("resize",e.update,le)}}const An={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:wo,data:{}};var To={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(n){return n.replace(/left|right|bottom|top/g,function(t){return To[t]})}var Co={start:"end",end:"start"};function Yn(n){return n.replace(/start|end/g,function(t){return Co[t]})}function wn(n){var t=j(n),e=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:e,scrollTop:i}}function Tn(n){return kt(ut(n)).left+wn(n).scrollLeft}function So(n,t){var e=j(n),i=ut(n),s=e.visualViewport,o=i.clientWidth,r=i.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;var c=Zi();(c||!c&&t==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a+Tn(n),y:l}}function Oo(n){var t,e=ut(n),i=wn(n),s=(t=n.ownerDocument)==null?void 0:t.body,o=vt(e.scrollWidth,e.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=vt(e.scrollHeight,e.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-i.scrollLeft+Tn(n),l=-i.scrollTop;return nt(s||e).direction==="rtl"&&(a+=vt(e.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}function Cn(n){var t=nt(n),e=t.overflow,i=t.overflowX,s=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+s+i)}function os(n){return["html","body","#document"].indexOf(J(n))>=0?n.ownerDocument.body:F(n)&&Cn(n)?n:os(ke(n))}function Xt(n,t){var e;t===void 0&&(t=[]);var i=os(n),s=i===((e=n.ownerDocument)==null?void 0:e.body),o=j(i),r=s?[o].concat(o.visualViewport||[],Cn(i)?i:[]):i,a=t.concat(r);return s?a:a.concat(Xt(ke(r)))}function cn(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function No(n,t){var e=kt(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function qn(n,t,e){return t===gn?cn(So(n,e)):bt(t)?No(t,e):cn(Oo(ut(n)))}function Do(n){var t=Xt(ke(n)),e=["absolute","fixed"].indexOf(nt(n).position)>=0,i=e&&F(n)?Zt(n):n;return bt(i)?t.filter(function(s){return bt(s)&&ts(s,i)&&J(s)!=="body"}):[]}function Lo(n,t,e,i){var s=t==="clippingParents"?Do(n):[].concat(t),o=[].concat(s,[e]),r=o[0],a=o.reduce(function(l,c){var d=qn(n,c,i);return l.top=vt(d.top,l.top),l.right=De(d.right,l.right),l.bottom=De(d.bottom,l.bottom),l.left=vt(d.left,l.left),l},qn(n,r,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function rs(n){var t=n.reference,e=n.element,i=n.placement,s=i?Q(i):null,o=i?Mt(i):null,r=t.x+t.width/2-e.width/2,a=t.y+t.height/2-e.height/2,l;switch(s){case V:l={x:r,y:t.y-e.height};break;case W:l={x:r,y:t.y+t.height};break;case B:l={x:t.x+t.width,y:a};break;case z:l={x:t.x-e.width,y:a};break;default:l={x:t.x,y:t.y}}var c=s?bn(s):null;if(c!=null){var d=c==="y"?"height":"width";switch(o){case Et:l[c]=l[c]-(t[d]/2-e[d]/2);break;case $t:l[c]=l[c]+(t[d]/2-e[d]/2);break}}return l}function Pt(n,t){t===void 0&&(t={});var e=t,i=e.placement,s=i===void 0?n.placement:i,o=e.strategy,r=o===void 0?n.strategy:o,a=e.boundary,l=a===void 0?Wi:a,c=e.rootBoundary,d=c===void 0?gn:c,g=e.elementContext,p=g===void 0?Nt:g,f=e.altBoundary,O=f===void 0?!1:f,A=e.padding,T=A===void 0?0:A,C=ns(typeof T!="number"?T:is(T,zt)),M=p===Nt?Bi:Nt,k=n.rects.popper,N=n.elements[O?M:p],x=Lo(bt(N)?N:N.contextElement||ut(n.elements.popper),l,d,r),m=kt(n.elements.reference),_=rs({reference:m,element:k,placement:s}),y=cn(Object.assign({},k,_)),w=p===Nt?y:m,u={top:x.top-w.top+C.top,bottom:w.bottom-x.bottom+C.bottom,left:x.left-w.left+C.left,right:w.right-x.right+C.right},v=n.modifiersData.offset;if(p===Nt&&v){var E=v[s];Object.keys(u).forEach(function(b){var D=[B,W].indexOf(b)>=0?1:-1,L=[V,W].indexOf(b)>=0?"y":"x";u[b]+=E[L]*D})}return u}function Io(n,t){t===void 0&&(t={});var e=t,i=e.placement,s=e.boundary,o=e.rootBoundary,r=e.padding,a=e.flipVariations,l=e.allowedAutoPlacements,c=l===void 0?mn:l,d=Mt(i),g=d?a?an:an.filter(function(O){return Mt(O)===d}):zt,p=g.filter(function(O){return c.indexOf(O)>=0});p.length===0&&(p=g);var f=p.reduce(function(O,A){return O[A]=Pt(n,{placement:A,boundary:s,rootBoundary:o,padding:r})[Q(A)],O},{});return Object.keys(f).sort(function(O,A){return f[O]-f[A]})}function $o(n){if(Q(n)===xe)return[];var t=ge(n);return[Yn(n),t,Yn(t)]}function xo(n){var t=n.state,e=n.options,i=n.name;if(!t.modifiersData[i]._skip){for(var s=e.mainAxis,o=s===void 0?!0:s,r=e.altAxis,a=r===void 0?!0:r,l=e.fallbackPlacements,c=e.padding,d=e.boundary,g=e.rootBoundary,p=e.altBoundary,f=e.flipVariations,O=f===void 0?!0:f,A=e.allowedAutoPlacements,T=t.options.placement,C=Q(T),M=C===T,k=l||(M||!O?[ge(T)]:$o(T)),N=[T].concat(k).reduce(function(wt,rt){return wt.concat(Q(rt)===xe?Io(t,{placement:rt,boundary:d,rootBoundary:g,padding:c,flipVariations:O,allowedAutoPlacements:A}):rt)},[]),x=t.rects.reference,m=t.rects.popper,_=new Map,y=!0,w=N[0],u=0;u<N.length;u++){var v=N[u],E=Q(v),b=Mt(v)===Et,D=[V,W].indexOf(E)>=0,L=D?"width":"height",I=Pt(t,{placement:v,boundary:d,rootBoundary:g,altBoundary:p,padding:c}),P=D?b?B:z:b?W:V;x[L]>m[L]&&(P=ge(P));var $=ge(P),R=[];if(o&&R.push(I[E]<=0),a&&R.push(I[P]<=0,I[$]<=0),R.every(function(wt){return wt})){w=v,y=!1;break}_.set(v,R)}if(y)for(var Z=O?3:1,G=function(rt){var Kt=N.find(function(re){var ft=_.get(re);if(ft)return ft.slice(0,rt).every(function(We){return We})});if(Kt)return w=Kt,"break"},Ft=Z;Ft>0;Ft--){var oe=G(Ft);if(oe==="break")break}t.placement!==w&&(t.modifiersData[i]._skip=!0,t.placement=w,t.reset=!0)}}const as={name:"flip",enabled:!0,phase:"main",fn:xo,requiresIfExists:["offset"],data:{_skip:!1}};function Un(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function Gn(n){return[V,B,W,z].some(function(t){return n[t]>=0})}function ko(n){var t=n.state,e=n.name,i=t.rects.reference,s=t.rects.popper,o=t.modifiersData.preventOverflow,r=Pt(t,{elementContext:"reference"}),a=Pt(t,{altBoundary:!0}),l=Un(r,i),c=Un(a,s,o),d=Gn(l),g=Gn(c);t.modifiersData[e]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:g},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":g})}const ls={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ko};function Mo(n,t,e){var i=Q(n),s=[z,V].indexOf(i)>=0?-1:1,o=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[z,B].indexOf(i)>=0?{x:a,y:r}:{x:r,y:a}}function Po(n){var t=n.state,e=n.options,i=n.name,s=e.offset,o=s===void 0?[0,0]:s,r=mn.reduce(function(d,g){return d[g]=Mo(g,t.rects,o),d},{}),a=r[t.placement],l=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[i]=r}const cs={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Po};function Ro(n){var t=n.state,e=n.name;t.modifiersData[e]=rs({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const Sn={name:"popperOffsets",enabled:!0,phase:"read",fn:Ro,data:{}};function Vo(n){return n==="x"?"y":"x"}function zo(n){var t=n.state,e=n.options,i=n.name,s=e.mainAxis,o=s===void 0?!0:s,r=e.altAxis,a=r===void 0?!1:r,l=e.boundary,c=e.rootBoundary,d=e.altBoundary,g=e.padding,p=e.tether,f=p===void 0?!0:p,O=e.tetherOffset,A=O===void 0?0:O,T=Pt(t,{boundary:l,rootBoundary:c,padding:g,altBoundary:d}),C=Q(t.placement),M=Mt(t.placement),k=!M,N=bn(C),x=Vo(N),m=t.modifiersData.popperOffsets,_=t.rects.reference,y=t.rects.popper,w=typeof A=="function"?A(Object.assign({},t.rects,{placement:t.placement})):A,u=typeof w=="number"?{mainAxis:w,altAxis:w}:Object.assign({mainAxis:0,altAxis:0},w),v=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,E={x:0,y:0};if(m){if(o){var b,D=N==="y"?V:z,L=N==="y"?W:B,I=N==="y"?"height":"width",P=m[N],$=P+T[D],R=P-T[L],Z=f?-y[I]/2:0,G=M===Et?_[I]:y[I],Ft=M===Et?-y[I]:-_[I],oe=t.elements.arrow,wt=f&&oe?En(oe):{width:0,height:0},rt=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:es(),Kt=rt[D],re=rt[L],ft=Qt(0,_[I],wt[I]),We=k?_[I]/2-Z-ft-Kt-u.mainAxis:G-ft-Kt-u.mainAxis,js=k?-_[I]/2+Z+ft+re+u.mainAxis:Ft+ft+re+u.mainAxis,Be=t.elements.arrow&&Zt(t.elements.arrow),Fs=Be?N==="y"?Be.clientTop||0:Be.clientLeft||0:0,kn=(b=v==null?void 0:v[N])!=null?b:0,Ks=P+We-kn-Fs,Ys=P+js-kn,Mn=Qt(f?De($,Ks):$,P,f?vt(R,Ys):R);m[N]=Mn,E[N]=Mn-P}if(a){var Pn,qs=N==="x"?V:z,Us=N==="x"?W:B,gt=m[x],ae=x==="y"?"height":"width",Rn=gt+T[qs],Vn=gt-T[Us],je=[V,z].indexOf(C)!==-1,zn=(Pn=v==null?void 0:v[x])!=null?Pn:0,Hn=je?Rn:gt-_[ae]-y[ae]-zn+u.altAxis,Wn=je?gt+_[ae]+y[ae]-zn-u.altAxis:Vn,Bn=f&&je?mo(Hn,gt,Wn):Qt(f?Hn:Rn,gt,f?Wn:Vn);m[x]=Bn,E[x]=Bn-gt}t.modifiersData[i]=E}}const ds={name:"preventOverflow",enabled:!0,phase:"main",fn:zo,requiresIfExists:["offset"]};function Ho(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function Wo(n){return n===j(n)||!F(n)?wn(n):Ho(n)}function Bo(n){var t=n.getBoundingClientRect(),e=xt(t.width)/n.offsetWidth||1,i=xt(t.height)/n.offsetHeight||1;return e!==1||i!==1}function jo(n,t,e){e===void 0&&(e=!1);var i=F(t),s=F(t)&&Bo(t),o=ut(t),r=kt(n,s,e),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!e)&&((J(t)!=="body"||Cn(o))&&(a=Wo(t)),F(t)?(l=kt(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):o&&(l.x=Tn(o))),{x:r.left+a.scrollLeft-l.x,y:r.top+a.scrollTop-l.y,width:r.width,height:r.height}}function Fo(n){var t=new Map,e=new Set,i=[];n.forEach(function(o){t.set(o.name,o)});function s(o){e.add(o.name);var r=[].concat(o.requires||[],o.requiresIfExists||[]);r.forEach(function(a){if(!e.has(a)){var l=t.get(a);l&&s(l)}}),i.push(o)}return n.forEach(function(o){e.has(o.name)||s(o)}),i}function Ko(n){var t=Fo(n);return Ji.reduce(function(e,i){return e.concat(t.filter(function(s){return s.phase===i}))},[])}function Yo(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function qo(n){var t=n.reduce(function(e,i){var s=e[i.name];return e[i.name]=s?Object.assign({},s,i,{options:Object.assign({},s.options,i.options),data:Object.assign({},s.data,i.data)}):i,e},{});return Object.keys(t).map(function(e){return t[e]})}var Qn={placement:"bottom",modifiers:[],strategy:"absolute"};function Xn(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function Me(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,i=e===void 0?[]:e,s=t.defaultOptions,o=s===void 0?Qn:s;return function(a,l,c){c===void 0&&(c=o);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},Qn,o),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},g=[],p=!1,f={state:d,setOptions:function(C){var M=typeof C=="function"?C(d.options):C;A(),d.options=Object.assign({},o,d.options,M),d.scrollParents={reference:bt(a)?Xt(a):a.contextElement?Xt(a.contextElement):[],popper:Xt(l)};var k=Ko(qo([].concat(i,d.options.modifiers)));return d.orderedModifiers=k.filter(function(N){return N.enabled}),O(),f.update()},forceUpdate:function(){if(!p){var C=d.elements,M=C.reference,k=C.popper;if(Xn(M,k)){d.rects={reference:jo(M,Zt(k),d.options.strategy==="fixed"),popper:En(k)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(u){return d.modifiersData[u.name]=Object.assign({},u.data)});for(var N=0;N<d.orderedModifiers.length;N++){if(d.reset===!0){d.reset=!1,N=-1;continue}var x=d.orderedModifiers[N],m=x.fn,_=x.options,y=_===void 0?{}:_,w=x.name;typeof m=="function"&&(d=m({state:d,options:y,name:w,instance:f})||d)}}}},update:Yo(function(){return new Promise(function(T){f.forceUpdate(),T(d)})}),destroy:function(){A(),p=!0}};if(!Xn(a,l))return f;f.setOptions(c).then(function(T){!p&&c.onFirstUpdate&&c.onFirstUpdate(T)});function O(){d.orderedModifiers.forEach(function(T){var C=T.name,M=T.options,k=M===void 0?{}:M,N=T.effect;if(typeof N=="function"){var x=N({state:d,name:C,instance:f,options:k}),m=function(){};g.push(x||m)}})}function A(){g.forEach(function(T){return T()}),g=[]}return f}}var Uo=Me(),Go=[An,Sn,yn,vn],Qo=Me({defaultModifiers:Go}),Xo=[An,Sn,yn,vn,cs,as,ds,ss,ls],On=Me({defaultModifiers:Xo});const us=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Ui,afterRead:Ki,afterWrite:Xi,applyStyles:vn,arrow:ss,auto:xe,basePlacements:zt,beforeMain:Yi,beforeRead:ji,beforeWrite:Gi,bottom:W,clippingParents:Wi,computeStyles:yn,createPopper:On,createPopperBase:Uo,createPopperLite:Qo,detectOverflow:Pt,end:$t,eventListeners:An,flip:as,hide:ls,left:z,main:qi,modifierPhases:Ji,offset:cs,placements:mn,popper:Nt,popperGenerator:Me,popperOffsets:Sn,preventOverflow:ds,read:Fi,reference:Bi,right:B,start:Et,top:V,variationPlacements:an,viewport:gn,write:Qi},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const at=new Map,Fe={set(n,t,e){at.has(n)||at.set(n,new Map);const i=at.get(n);if(!i.has(t)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(t,e)},get(n,t){return at.has(n)&&at.get(n).get(t)||null},remove(n,t){if(!at.has(n))return;const e=at.get(n);e.delete(t),e.size===0&&at.delete(n)}},Jo=1e6,Zo=1e3,dn="transitionend",hs=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),n),tr=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),er=n=>{do n+=Math.floor(Math.random()*Jo);while(document.getElementById(n));return n},nr=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const i=Number.parseFloat(t),s=Number.parseFloat(e);return!i&&!s?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*Zo)},ps=n=>{n.dispatchEvent(new Event(dn))},tt=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),ct=n=>tt(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(hs(n)):null,Ht=n=>{if(!tt(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const i=n.closest("summary");if(i&&i.parentNode!==e||i===null)return!1}return t},dt=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",fs=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?fs(n.parentNode):null},Le=()=>{},te=n=>{n.offsetHeight},gs=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Ke=[],ir=n=>{document.readyState==="loading"?(Ke.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Ke)t()}),Ke.push(n)):n()},K=()=>document.documentElement.dir==="rtl",q=n=>{ir(()=>{const t=gs();if(t){const e=n.NAME,i=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=i,n.jQueryInterface)}})},H=(n,t=[],e=n)=>typeof n=="function"?n(...t):e,ms=(n,t,e=!0)=>{if(!e){H(n);return}const s=nr(t)+5;let o=!1;const r=({target:a})=>{a===t&&(o=!0,t.removeEventListener(dn,r),H(n))};t.addEventListener(dn,r),setTimeout(()=>{o||ps(t)},s)},Nn=(n,t,e,i)=>{const s=n.length;let o=n.indexOf(t);return o===-1?!e&&i?n[s-1]:n[0]:(o+=e?1:-1,i&&(o=(o+s)%s),n[Math.max(0,Math.min(o,s-1))])},sr=/[^.]*(?=\..*)\.|.*/,or=/\..*/,rr=/::\d+$/,Ye={};let Jn=1;const _s={mouseenter:"mouseover",mouseleave:"mouseout"},ar=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function vs(n,t){return t&&`${t}::${Jn++}`||n.uidEvent||Jn++}function Es(n){const t=vs(n);return n.uidEvent=t,Ye[t]=Ye[t]||{},Ye[t]}function lr(n,t){return function e(i){return Dn(i,{delegateTarget:n}),e.oneOff&&h.off(n,i.type,t),t.apply(n,[i])}}function cr(n,t,e){return function i(s){const o=n.querySelectorAll(t);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return Dn(s,{delegateTarget:r}),i.oneOff&&h.off(n,s.type,t,e),e.apply(r,[s])}}function bs(n,t,e=null){return Object.values(n).find(i=>i.callable===t&&i.delegationSelector===e)}function ys(n,t,e){const i=typeof t=="string",s=i?e:t||e;let o=As(n);return ar.has(o)||(o=n),[i,s,o]}function Zn(n,t,e,i,s){if(typeof t!="string"||!n)return;let[o,r,a]=ys(t,e,i);t in _s&&(r=(O=>function(A){if(!A.relatedTarget||A.relatedTarget!==A.delegateTarget&&!A.delegateTarget.contains(A.relatedTarget))return O.call(this,A)})(r));const l=Es(n),c=l[a]||(l[a]={}),d=bs(c,r,o?e:null);if(d){d.oneOff=d.oneOff&&s;return}const g=vs(r,t.replace(sr,"")),p=o?cr(n,e,r):lr(n,r);p.delegationSelector=o?e:null,p.callable=r,p.oneOff=s,p.uidEvent=g,c[g]=p,n.addEventListener(a,p,o)}function un(n,t,e,i,s){const o=bs(t[e],i,s);o&&(n.removeEventListener(e,o,!!s),delete t[e][o.uidEvent])}function dr(n,t,e,i){const s=t[e]||{};for(const[o,r]of Object.entries(s))o.includes(i)&&un(n,t,e,r.callable,r.delegationSelector)}function As(n){return n=n.replace(or,""),_s[n]||n}const h={on(n,t,e,i){Zn(n,t,e,i,!1)},one(n,t,e,i){Zn(n,t,e,i,!0)},off(n,t,e,i){if(typeof t!="string"||!n)return;const[s,o,r]=ys(t,e,i),a=r!==t,l=Es(n),c=l[r]||{},d=t.startsWith(".");if(typeof o<"u"){if(!Object.keys(c).length)return;un(n,l,r,o,s?e:null);return}if(d)for(const g of Object.keys(l))dr(n,l,g,t.slice(1));for(const[g,p]of Object.entries(c)){const f=g.replace(rr,"");(!a||t.includes(f))&&un(n,l,r,p.callable,p.delegationSelector)}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const i=gs(),s=As(t),o=t!==s;let r=null,a=!0,l=!0,c=!1;o&&i&&(r=i.Event(t,e),i(n).trigger(r),a=!r.isPropagationStopped(),l=!r.isImmediatePropagationStopped(),c=r.isDefaultPrevented());const d=Dn(new Event(t,{bubbles:a,cancelable:!0}),e);return c&&d.preventDefault(),l&&n.dispatchEvent(d),d.defaultPrevented&&r&&r.preventDefault(),d}};function Dn(n,t={}){for(const[e,i]of Object.entries(t))try{n[e]=i}catch{Object.defineProperty(n,e,{configurable:!0,get(){return i}})}return n}function ti(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function qe(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const et={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${qe(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${qe(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(i=>i.startsWith("bs")&&!i.startsWith("bsConfig"));for(const i of e){let s=i.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),t[s]=ti(n.dataset[i])}return t},getDataAttribute(n,t){return ti(n.getAttribute(`data-bs-${qe(t)}`))}};class ee{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=tt(e)?et.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof i=="object"?i:{},...tt(e)?et.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[i,s]of Object.entries(e)){const o=t[i],r=tt(o)?"element":tr(o);if(!new RegExp(s).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${s}".`)}}}const ur="5.3.2";class U extends ee{constructor(t,e){super(),t=ct(t),t&&(this._element=t,this._config=this._getConfig(e),Fe.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Fe.remove(this._element,this.constructor.DATA_KEY),h.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){ms(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Fe.get(ct(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return ur}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Ue=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?hs(e.trim()):null}return t},S={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let i=n.parentNode.closest(t);for(;i;)e.push(i),i=i.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!dt(e)&&Ht(e))},getSelectorFromElement(n){const t=Ue(n);return t&&S.findOne(t)?t:null},getElementFromSelector(n){const t=Ue(n);return t?S.findOne(t):null},getMultipleElementsFromSelector(n){const t=Ue(n);return t?S.find(t):[]}},Pe=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,i=n.NAME;h.on(document,e,`[data-bs-dismiss="${i}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),dt(this))return;const o=S.getElementFromSelector(this)||this.closest(`.${i}`);n.getOrCreateInstance(o)[t]()})},hr="alert",pr="bs.alert",ws=`.${pr}`,fr=`close${ws}`,gr=`closed${ws}`,mr="fade",_r="show";class Re extends U{static get NAME(){return hr}close(){if(h.trigger(this._element,fr).defaultPrevented)return;this._element.classList.remove(_r);const e=this._element.classList.contains(mr);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),h.trigger(this._element,gr),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=Re.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Pe(Re,"close");q(Re);const vr="button",Er="bs.button",br=`.${Er}`,yr=".data-api",Ar="active",ei='[data-bs-toggle="button"]',wr=`click${br}${yr}`;class Ve extends U{static get NAME(){return vr}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Ar))}static jQueryInterface(t){return this.each(function(){const e=Ve.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}h.on(document,wr,ei,n=>{n.preventDefault();const t=n.target.closest(ei);Ve.getOrCreateInstance(t).toggle()});q(Ve);const Tr="swipe",Wt=".bs.swipe",Cr=`touchstart${Wt}`,Sr=`touchmove${Wt}`,Or=`touchend${Wt}`,Nr=`pointerdown${Wt}`,Dr=`pointerup${Wt}`,Lr="touch",Ir="pen",$r="pointer-event",xr=40,kr={endCallback:null,leftCallback:null,rightCallback:null},Mr={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Ie extends ee{constructor(t,e){super(),this._element=t,!(!t||!Ie.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return kr}static get DefaultType(){return Mr}static get NAME(){return Tr}dispose(){h.off(this._element,Wt)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),H(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=xr)return;const e=t/this._deltaX;this._deltaX=0,e&&H(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(h.on(this._element,Nr,t=>this._start(t)),h.on(this._element,Dr,t=>this._end(t)),this._element.classList.add($r)):(h.on(this._element,Cr,t=>this._start(t)),h.on(this._element,Sr,t=>this._move(t)),h.on(this._element,Or,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Ir||t.pointerType===Lr)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Pr="carousel",Rr="bs.carousel",ht=`.${Rr}`,Ts=".data-api",Vr="ArrowLeft",zr="ArrowRight",Hr=500,Yt="next",Ct="prev",Dt="left",me="right",Wr=`slide${ht}`,Ge=`slid${ht}`,Br=`keydown${ht}`,jr=`mouseenter${ht}`,Fr=`mouseleave${ht}`,Kr=`dragstart${ht}`,Yr=`load${ht}${Ts}`,qr=`click${ht}${Ts}`,Cs="carousel",ce="active",Ur="slide",Gr="carousel-item-end",Qr="carousel-item-start",Xr="carousel-item-next",Jr="carousel-item-prev",Ss=".active",Os=".carousel-item",Zr=Ss+Os,ta=".carousel-item img",ea=".carousel-indicators",na="[data-bs-slide], [data-bs-slide-to]",ia='[data-bs-ride="carousel"]',sa={[Vr]:me,[zr]:Dt},oa={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},ra={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ne extends U{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=S.findOne(ea,this._element),this._addEventListeners(),this._config.ride===Cs&&this.cycle()}static get Default(){return oa}static get DefaultType(){return ra}static get NAME(){return Pr}next(){this._slide(Yt)}nextWhenVisible(){!document.hidden&&Ht(this._element)&&this.next()}prev(){this._slide(Ct)}pause(){this._isSliding&&ps(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){h.one(this._element,Ge,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){h.one(this._element,Ge,()=>this.to(t));return}const i=this._getItemIndex(this._getActive());if(i===t)return;const s=t>i?Yt:Ct;this._slide(s,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&h.on(this._element,Br,t=>this._keydown(t)),this._config.pause==="hover"&&(h.on(this._element,jr,()=>this.pause()),h.on(this._element,Fr,()=>this._maybeEnableCycle())),this._config.touch&&Ie.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const i of S.find(ta,this._element))h.on(i,Kr,s=>s.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(Dt)),rightCallback:()=>this._slide(this._directionToOrder(me)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Hr+this._config.interval))}};this._swipeHelper=new Ie(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=sa[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=S.findOne(Ss,this._indicatorsElement);e.classList.remove(ce),e.removeAttribute("aria-current");const i=S.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(ce),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),s=t===Yt,o=e||Nn(this._getItems(),i,s,this._config.wrap);if(o===i)return;const r=this._getItemIndex(o),a=f=>h.trigger(this._element,f,{relatedTarget:o,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:r});if(a(Wr).defaultPrevented||!i||!o)return;const c=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(r),this._activeElement=o;const d=s?Qr:Gr,g=s?Xr:Jr;o.classList.add(g),te(o),i.classList.add(d),o.classList.add(d);const p=()=>{o.classList.remove(d,g),o.classList.add(ce),i.classList.remove(ce,g,d),this._isSliding=!1,a(Ge)};this._queueCallback(p,i,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(Ur)}_getActive(){return S.findOne(Zr,this._element)}_getItems(){return S.find(Os,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return K()?t===Dt?Ct:Yt:t===Dt?Yt:Ct}_orderToDirection(t){return K()?t===Ct?Dt:me:t===Ct?me:Dt}static jQueryInterface(t){return this.each(function(){const e=ne.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(document,qr,na,function(n){const t=S.getElementFromSelector(this);if(!t||!t.classList.contains(Cs))return;n.preventDefault();const e=ne.getOrCreateInstance(t),i=this.getAttribute("data-bs-slide-to");if(i){e.to(i),e._maybeEnableCycle();return}if(et.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});h.on(window,Yr,()=>{const n=S.find(ia);for(const t of n)ne.getOrCreateInstance(t)});q(ne);const aa="collapse",la="bs.collapse",ie=`.${la}`,ca=".data-api",da=`show${ie}`,ua=`shown${ie}`,ha=`hide${ie}`,pa=`hidden${ie}`,fa=`click${ie}${ca}`,Qe="show",It="collapse",de="collapsing",ga="collapsed",ma=`:scope .${It} .${It}`,_a="collapse-horizontal",va="width",Ea="height",ba=".collapse.show, .collapse.collapsing",hn='[data-bs-toggle="collapse"]',ya={parent:null,toggle:!0},Aa={parent:"(null|element)",toggle:"boolean"};class Jt extends U{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=S.find(hn);for(const s of i){const o=S.getSelectorFromElement(s),r=S.find(o).filter(a=>a===this._element);o!==null&&r.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ya}static get DefaultType(){return Aa}static get NAME(){return aa}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(ba).filter(a=>a!==this._element).map(a=>Jt.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||h.trigger(this._element,da).defaultPrevented)return;for(const a of t)a.hide();const i=this._getDimension();this._element.classList.remove(It),this._element.classList.add(de),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(de),this._element.classList.add(It,Qe),this._element.style[i]="",h.trigger(this._element,ua)},r=`scroll${i[0].toUpperCase()+i.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[i]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown()||h.trigger(this._element,ha).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,te(this._element),this._element.classList.add(de),this._element.classList.remove(It,Qe);for(const s of this._triggerArray){const o=S.getElementFromSelector(s);o&&!this._isShown(o)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(de),this._element.classList.add(It),h.trigger(this._element,pa)};this._element.style[e]="",this._queueCallback(i,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Qe)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=ct(t.parent),t}_getDimension(){return this._element.classList.contains(_a)?va:Ea}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(hn);for(const e of t){const i=S.getElementFromSelector(e);i&&this._addAriaAndCollapsedClass([e],this._isShown(i))}}_getFirstLevelChildren(t){const e=S.find(ma,this._config.parent);return S.find(t,this._config.parent).filter(i=>!e.includes(i))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle(ga,!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const i=Jt.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof i[t]>"u")throw new TypeError(`No method named "${t}"`);i[t]()}})}}h.on(document,fa,hn,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const t of S.getMultipleElementsFromSelector(this))Jt.getOrCreateInstance(t,{toggle:!1}).toggle()});q(Jt);const ni="dropdown",wa="bs.dropdown",yt=`.${wa}`,Ln=".data-api",Ta="Escape",ii="Tab",Ca="ArrowUp",si="ArrowDown",Sa=2,Oa=`hide${yt}`,Na=`hidden${yt}`,Da=`show${yt}`,La=`shown${yt}`,Ns=`click${yt}${Ln}`,Ds=`keydown${yt}${Ln}`,Ia=`keyup${yt}${Ln}`,Lt="show",$a="dropup",xa="dropend",ka="dropstart",Ma="dropup-center",Pa="dropdown-center",mt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ra=`${mt}.${Lt}`,_e=".dropdown-menu",Va=".navbar",za=".navbar-nav",Ha=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Wa=K()?"top-end":"top-start",Ba=K()?"top-start":"top-end",ja=K()?"bottom-end":"bottom-start",Fa=K()?"bottom-start":"bottom-end",Ka=K()?"left-start":"right-start",Ya=K()?"right-start":"left-start",qa="top",Ua="bottom",Ga={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Qa={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class X extends U{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=S.next(this._element,_e)[0]||S.prev(this._element,_e)[0]||S.findOne(_e,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Ga}static get DefaultType(){return Qa}static get NAME(){return ni}toggle(){return this._isShown()?this.hide():this.show()}show(){if(dt(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!h.trigger(this._element,Da,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(za))for(const i of[].concat(...document.body.children))h.on(i,"mouseover",Le);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Lt),this._element.classList.add(Lt),h.trigger(this._element,La,t)}}hide(){if(dt(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!h.trigger(this._element,Oa,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))h.off(i,"mouseover",Le);this._popper&&this._popper.destroy(),this._menu.classList.remove(Lt),this._element.classList.remove(Lt),this._element.setAttribute("aria-expanded","false"),et.removeDataAttribute(this._menu,"popper"),h.trigger(this._element,Na,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!tt(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${ni.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof us>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:tt(this._config.reference)?t=ct(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=On(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Lt)}_getPlacement(){const t=this._parent;if(t.classList.contains(xa))return Ka;if(t.classList.contains(ka))return Ya;if(t.classList.contains(Ma))return qa;if(t.classList.contains(Pa))return Ua;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains($a)?e?Ba:Wa:e?Fa:ja}_detectNavbar(){return this._element.closest(Va)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(et.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...H(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const i=S.find(Ha,this._menu).filter(s=>Ht(s));i.length&&Nn(i,e,t===si,!i.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=X.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===Sa||t.type==="keyup"&&t.key!==ii)return;const e=S.find(Ra);for(const i of e){const s=X.getInstance(i);if(!s||s._config.autoClose===!1)continue;const o=t.composedPath(),r=o.includes(s._menu);if(o.includes(s._element)||s._config.autoClose==="inside"&&!r||s._config.autoClose==="outside"&&r||s._menu.contains(t.target)&&(t.type==="keyup"&&t.key===ii||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:s._element};t.type==="click"&&(a.clickEvent=t),s._completeHide(a)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i=t.key===Ta,s=[Ca,si].includes(t.key);if(!s&&!i||e&&!i)return;t.preventDefault();const o=this.matches(mt)?this:S.prev(this,mt)[0]||S.next(this,mt)[0]||S.findOne(mt,t.delegateTarget.parentNode),r=X.getOrCreateInstance(o);if(s){t.stopPropagation(),r.show(),r._selectMenuItem(t);return}r._isShown()&&(t.stopPropagation(),r.hide(),o.focus())}}h.on(document,Ds,mt,X.dataApiKeydownHandler);h.on(document,Ds,_e,X.dataApiKeydownHandler);h.on(document,Ns,X.clearMenus);h.on(document,Ia,X.clearMenus);h.on(document,Ns,mt,function(n){n.preventDefault(),X.getOrCreateInstance(this).toggle()});q(X);const Ls="backdrop",Xa="fade",oi="show",ri=`mousedown.bs.${Ls}`,Ja={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Za={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Is extends ee{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Ja}static get DefaultType(){return Za}static get NAME(){return Ls}show(t){if(!this._config.isVisible){H(t);return}this._append();const e=this._getElement();this._config.isAnimated&&te(e),e.classList.add(oi),this._emulateAnimation(()=>{H(t)})}hide(t){if(!this._config.isVisible){H(t);return}this._getElement().classList.remove(oi),this._emulateAnimation(()=>{this.dispose(),H(t)})}dispose(){this._isAppended&&(h.off(this._element,ri),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Xa),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=ct(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),h.on(t,ri,()=>{H(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){ms(t,this._getElement(),this._config.isAnimated)}}const tl="focustrap",el="bs.focustrap",$e=`.${el}`,nl=`focusin${$e}`,il=`keydown.tab${$e}`,sl="Tab",ol="forward",ai="backward",rl={autofocus:!0,trapElement:null},al={autofocus:"boolean",trapElement:"element"};class $s extends ee{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return rl}static get DefaultType(){return al}static get NAME(){return tl}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),h.off(document,$e),h.on(document,nl,t=>this._handleFocusin(t)),h.on(document,il,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,h.off(document,$e))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=S.focusableChildren(e);i.length===0?e.focus():this._lastTabNavDirection===ai?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){t.key===sl&&(this._lastTabNavDirection=t.shiftKey?ai:ol)}}const li=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ci=".sticky-top",ue="padding-right",di="margin-right";class pn{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ue,e=>e+t),this._setElementAttributes(li,ue,e=>e+t),this._setElementAttributes(ci,di,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ue),this._resetElementAttributes(li,ue),this._resetElementAttributes(ci,di)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth(),o=r=>{if(r!==this._element&&window.innerWidth>r.clientWidth+s)return;this._saveInitialAttribute(r,e);const a=window.getComputedStyle(r).getPropertyValue(e);r.style.setProperty(e,`${i(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,o)}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&et.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){const i=s=>{const o=et.getDataAttribute(s,e);if(o===null){s.style.removeProperty(e);return}et.removeDataAttribute(s,e),s.style.setProperty(e,o)};this._applyManipulationCallback(t,i)}_applyManipulationCallback(t,e){if(tt(t)){e(t);return}for(const i of S.find(t,this._element))e(i)}}const ll="modal",cl="bs.modal",Y=`.${cl}`,dl=".data-api",ul="Escape",hl=`hide${Y}`,pl=`hidePrevented${Y}`,xs=`hidden${Y}`,ks=`show${Y}`,fl=`shown${Y}`,gl=`resize${Y}`,ml=`click.dismiss${Y}`,_l=`mousedown.dismiss${Y}`,vl=`keydown.dismiss${Y}`,El=`click${Y}${dl}`,ui="modal-open",bl="fade",hi="show",Xe="modal-static",yl=".modal.show",Al=".modal-dialog",wl=".modal-body",Tl='[data-bs-toggle="modal"]',Cl={backdrop:!0,focus:!0,keyboard:!0},Sl={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Rt extends U{constructor(t,e){super(t,e),this._dialog=S.findOne(Al,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new pn,this._addEventListeners()}static get Default(){return Cl}static get DefaultType(){return Sl}static get NAME(){return ll}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||h.trigger(this._element,ks,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ui),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||h.trigger(this._element,hl).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(hi),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){h.off(window,Y),h.off(this._dialog,Y),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Is({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new $s({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=S.findOne(wl,this._dialog);e&&(e.scrollTop=0),te(this._element),this._element.classList.add(hi);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,h.trigger(this._element,fl,{relatedTarget:t})};this._queueCallback(i,this._dialog,this._isAnimated())}_addEventListeners(){h.on(this._element,vl,t=>{if(t.key===ul){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),h.on(window,gl,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),h.on(this._element,_l,t=>{h.one(this._element,ml,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(ui),this._resetAdjustments(),this._scrollBar.reset(),h.trigger(this._element,xs)})}_isAnimated(){return this._element.classList.contains(bl)}_triggerBackdropTransition(){if(h.trigger(this._element,pl).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,i=this._element.style.overflowY;i==="hidden"||this._element.classList.contains(Xe)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(Xe),this._queueCallback(()=>{this._element.classList.remove(Xe),this._queueCallback(()=>{this._element.style.overflowY=i},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const s=K()?"paddingLeft":"paddingRight";this._element.style[s]=`${e}px`}if(!i&&t){const s=K()?"paddingRight":"paddingLeft";this._element.style[s]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const i=Rt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof i[t]>"u")throw new TypeError(`No method named "${t}"`);i[t](e)}})}}h.on(document,El,Tl,function(n){const t=S.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),h.one(t,ks,s=>{s.defaultPrevented||h.one(t,xs,()=>{Ht(this)&&this.focus()})});const e=S.findOne(yl);e&&Rt.getInstance(e).hide(),Rt.getOrCreateInstance(t).toggle(this)});Pe(Rt);q(Rt);const Ol="offcanvas",Nl="bs.offcanvas",st=`.${Nl}`,Ms=".data-api",Dl=`load${st}${Ms}`,Ll="Escape",pi="show",fi="showing",gi="hiding",Il="offcanvas-backdrop",Ps=".offcanvas.show",$l=`show${st}`,xl=`shown${st}`,kl=`hide${st}`,mi=`hidePrevented${st}`,Rs=`hidden${st}`,Ml=`resize${st}`,Pl=`click${st}${Ms}`,Rl=`keydown.dismiss${st}`,Vl='[data-bs-toggle="offcanvas"]',zl={backdrop:!0,keyboard:!0,scroll:!1},Hl={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class it extends U{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return zl}static get DefaultType(){return Hl}static get NAME(){return Ol}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||h.trigger(this._element,$l,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new pn().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(fi);const i=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(pi),this._element.classList.remove(fi),h.trigger(this._element,xl,{relatedTarget:t})};this._queueCallback(i,this._element,!0)}hide(){if(!this._isShown||h.trigger(this._element,kl).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(gi),this._backdrop.hide();const e=()=>{this._element.classList.remove(pi,gi),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new pn().reset(),h.trigger(this._element,Rs)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){h.trigger(this._element,mi);return}this.hide()},e=!!this._config.backdrop;return new Is({className:Il,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new $s({trapElement:this._element})}_addEventListeners(){h.on(this._element,Rl,t=>{if(t.key===Ll){if(this._config.keyboard){this.hide();return}h.trigger(this._element,mi)}})}static jQueryInterface(t){return this.each(function(){const e=it.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}h.on(document,Pl,Vl,function(n){const t=S.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),dt(this))return;h.one(t,Rs,()=>{Ht(this)&&this.focus()});const e=S.findOne(Ps);e&&e!==t&&it.getInstance(e).hide(),it.getOrCreateInstance(t).toggle(this)});h.on(window,Dl,()=>{for(const n of S.find(Ps))it.getOrCreateInstance(n).show()});h.on(window,Ml,()=>{for(const n of S.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&it.getOrCreateInstance(n).hide()});Pe(it);q(it);const Wl=/^aria-[\w-]*$/i,Vs={"*":["class","dir","id","lang","role",Wl],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Bl=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),jl=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Fl=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?Bl.has(e)?!!jl.test(n.nodeValue):!0:t.filter(i=>i instanceof RegExp).some(i=>i.test(e))};function Kl(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const s=new window.DOMParser().parseFromString(n,"text/html"),o=[].concat(...s.body.querySelectorAll("*"));for(const r of o){const a=r.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){r.remove();continue}const l=[].concat(...r.attributes),c=[].concat(t["*"]||[],t[a]||[]);for(const d of l)Fl(d,c)||r.removeAttribute(d.nodeName)}return s.body.innerHTML}const Yl="TemplateFactory",ql={allowList:Vs,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Ul={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Gl={entry:"(string|element|function|null)",selector:"(string|element)"};class Ql extends ee{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return ql}static get DefaultType(){return Ul}static get NAME(){return Yl}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[s,o]of Object.entries(this._config.content))this._setContent(t,o,s);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Gl)}_setContent(t,e,i){const s=S.findOne(i,t);if(s){if(e=this._resolvePossibleFunction(e),!e){s.remove();return}if(tt(e)){this._putElementInTemplate(ct(e),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(e);return}s.textContent=e}}_maybeSanitize(t){return this._config.sanitize?Kl(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return H(t,[this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const Xl="tooltip",Jl=new Set(["sanitize","allowList","sanitizeFn"]),Je="fade",Zl="modal",he="show",tc=".tooltip-inner",_i=`.${Zl}`,vi="hide.bs.modal",qt="hover",Ze="focus",ec="click",nc="manual",ic="hide",sc="hidden",oc="show",rc="shown",ac="inserted",lc="click",cc="focusin",dc="focusout",uc="mouseenter",hc="mouseleave",pc={AUTO:"auto",TOP:"top",RIGHT:K()?"left":"right",BOTTOM:"bottom",LEFT:K()?"right":"left"},fc={allowList:Vs,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},gc={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Bt extends U{constructor(t,e){if(typeof us>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return fc}static get DefaultType(){return gc}static get NAME(){return Xl}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),h.off(this._element.closest(_i),vi,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=h.trigger(this._element,this.constructor.eventName(oc)),i=(fs(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!i)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:o}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(o.append(s),h.trigger(this._element,this.constructor.eventName(ac))),this._popper=this._createPopper(s),s.classList.add(he),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))h.on(a,"mouseover",Le);const r=()=>{h.trigger(this._element,this.constructor.eventName(rc)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(r,this.tip,this._isAnimated())}hide(){if(!this._isShown()||h.trigger(this._element,this.constructor.eventName(ic)).defaultPrevented)return;if(this._getTipElement().classList.remove(he),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))h.off(s,"mouseover",Le);this._activeTrigger[ec]=!1,this._activeTrigger[Ze]=!1,this._activeTrigger[qt]=!1,this._isHovered=null;const i=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),h.trigger(this._element,this.constructor.eventName(sc)))};this._queueCallback(i,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Je,he),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=er(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Je),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Ql({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[tc]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Je)}_isShown(){return this.tip&&this.tip.classList.contains(he)}_createPopper(t){const e=H(this._config.placement,[this,t,this._element]),i=pc[e.toUpperCase()];return On(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return H(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:i=>{this._getTipElement().setAttribute("data-popper-placement",i.state.placement)}}]};return{...e,...H(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")h.on(this._element,this.constructor.eventName(lc),this._config.selector,i=>{this._initializeOnDelegatedTarget(i).toggle()});else if(e!==nc){const i=e===qt?this.constructor.eventName(uc):this.constructor.eventName(cc),s=e===qt?this.constructor.eventName(hc):this.constructor.eventName(dc);h.on(this._element,i,this._config.selector,o=>{const r=this._initializeOnDelegatedTarget(o);r._activeTrigger[o.type==="focusin"?Ze:qt]=!0,r._enter()}),h.on(this._element,s,this._config.selector,o=>{const r=this._initializeOnDelegatedTarget(o);r._activeTrigger[o.type==="focusout"?Ze:qt]=r._element.contains(o.relatedTarget),r._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},h.on(this._element.closest(_i),vi,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=et.getDataAttributes(this._element);for(const i of Object.keys(e))Jl.has(i)&&delete e[i];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:ct(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=Bt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}q(Bt);const mc="popover",_c=".popover-header",vc=".popover-body",Ec={...Bt.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},bc={...Bt.DefaultType,content:"(null|string|element|function)"};class In extends Bt{static get Default(){return Ec}static get DefaultType(){return bc}static get NAME(){return mc}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[_c]:this._getTitle(),[vc]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=In.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}q(In);const yc="scrollspy",Ac="bs.scrollspy",$n=`.${Ac}`,wc=".data-api",Tc=`activate${$n}`,Ei=`click${$n}`,Cc=`load${$n}${wc}`,Sc="dropdown-item",St="active",Oc='[data-bs-spy="scroll"]',tn="[href]",Nc=".nav, .list-group",bi=".nav-link",Dc=".nav-item",Lc=".list-group-item",Ic=`${bi}, ${Dc} > ${bi}, ${Lc}`,$c=".dropdown",xc=".dropdown-toggle",kc={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Mc={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ze extends U{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return kc}static get DefaultType(){return Mc}static get NAME(){return yc}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=ct(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(h.off(this._config.target,Ei),h.on(this._config.target,Ei,tn,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,s=e.offsetTop-this._element.offsetTop;if(i.scrollTo){i.scrollTo({top:s,behavior:"smooth"});return}i.scrollTop=s}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=r=>this._targetLinks.get(`#${r.target.id}`),i=r=>{this._previousScrollData.visibleEntryTop=r.target.offsetTop,this._process(e(r))},s=(this._rootElement||document.documentElement).scrollTop,o=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const r of t){if(!r.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(r));continue}const a=r.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(o&&a){if(i(r),!s)return;continue}!o&&!a&&i(r)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=S.find(tn,this._config.target);for(const e of t){if(!e.hash||dt(e))continue;const i=S.findOne(decodeURI(e.hash),this._element);Ht(i)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,i))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(St),this._activateParents(t),h.trigger(this._element,Tc,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(Sc)){S.findOne(xc,t.closest($c)).classList.add(St);return}for(const e of S.parents(t,Nc))for(const i of S.prev(e,Ic))i.classList.add(St)}_clearActiveClass(t){t.classList.remove(St);const e=S.find(`${tn}.${St}`,t);for(const i of e)i.classList.remove(St)}static jQueryInterface(t){return this.each(function(){const e=ze.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(window,Cc,()=>{for(const n of S.find(Oc))ze.getOrCreateInstance(n)});q(ze);const Pc="tab",Rc="bs.tab",At=`.${Rc}`,Vc=`hide${At}`,zc=`hidden${At}`,Hc=`show${At}`,Wc=`shown${At}`,Bc=`click${At}`,jc=`keydown${At}`,Fc=`load${At}`,Kc="ArrowLeft",yi="ArrowRight",Yc="ArrowUp",Ai="ArrowDown",en="Home",wi="End",_t="active",Ti="fade",nn="show",qc="dropdown",zs=".dropdown-toggle",Uc=".dropdown-menu",sn=`:not(${zs})`,Gc='.list-group, .nav, [role="tablist"]',Qc=".nav-item, .list-group-item",Xc=`.nav-link${sn}, .list-group-item${sn}, [role="tab"]${sn}`,Hs='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',on=`${Xc}, ${Hs}`,Jc=`.${_t}[data-bs-toggle="tab"], .${_t}[data-bs-toggle="pill"], .${_t}[data-bs-toggle="list"]`;class Vt extends U{constructor(t){super(t),this._parent=this._element.closest(Gc),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),h.on(this._element,jc,e=>this._keydown(e)))}static get NAME(){return Pc}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?h.trigger(e,Vc,{relatedTarget:t}):null;h.trigger(t,Hc,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(_t),this._activate(S.getElementFromSelector(t));const i=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(nn);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),h.trigger(t,Wc,{relatedTarget:e})};this._queueCallback(i,t,t.classList.contains(Ti))}_deactivate(t,e){if(!t)return;t.classList.remove(_t),t.blur(),this._deactivate(S.getElementFromSelector(t));const i=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(nn);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),h.trigger(t,zc,{relatedTarget:e})};this._queueCallback(i,t,t.classList.contains(Ti))}_keydown(t){if(![Kc,yi,Yc,Ai,en,wi].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(s=>!dt(s));let i;if([en,wi].includes(t.key))i=e[t.key===en?0:e.length-1];else{const s=[yi,Ai].includes(t.key);i=Nn(e,t.target,s,!0)}i&&(i.focus({preventScroll:!0}),Vt.getOrCreateInstance(i).show())}_getChildren(){return S.find(on,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const i of e)this._setInitialAttributesOnChild(i)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=S.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains(qc))return;const s=(o,r)=>{const a=S.findOne(o,i);a&&a.classList.toggle(r,e)};s(zs,_t),s(Uc,nn),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(_t)}_getInnerElement(t){return t.matches(on)?t:S.findOne(on,t)}_getOuterElement(t){return t.closest(Qc)||t}static jQueryInterface(t){return this.each(function(){const e=Vt.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(document,Bc,Hs,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!dt(this)&&Vt.getOrCreateInstance(this).show()});h.on(window,Fc,()=>{for(const n of S.find(Jc))Vt.getOrCreateInstance(n)});q(Vt);const Zc="toast",td="bs.toast",pt=`.${td}`,ed=`mouseover${pt}`,nd=`mouseout${pt}`,id=`focusin${pt}`,sd=`focusout${pt}`,od=`hide${pt}`,rd=`hidden${pt}`,ad=`show${pt}`,ld=`shown${pt}`,cd="fade",Ci="hide",pe="show",fe="showing",dd={animation:"boolean",autohide:"boolean",delay:"number"},ud={animation:!0,autohide:!0,delay:5e3};class He extends U{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ud}static get DefaultType(){return dd}static get NAME(){return Zc}show(){if(h.trigger(this._element,ad).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(cd);const e=()=>{this._element.classList.remove(fe),h.trigger(this._element,ld),this._maybeScheduleHide()};this._element.classList.remove(Ci),te(this._element),this._element.classList.add(pe,fe),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||h.trigger(this._element,od).defaultPrevented)return;const e=()=>{this._element.classList.add(Ci),this._element.classList.remove(fe,pe),h.trigger(this._element,rd)};this._element.classList.add(fe),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(pe),super.dispose()}isShown(){return this._element.classList.contains(pe)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){h.on(this._element,ed,t=>this._onInteraction(t,!0)),h.on(this._element,nd,t=>this._onInteraction(t,!1)),h.on(this._element,id,t=>this._onInteraction(t,!0)),h.on(this._element,sd,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=He.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Pe(He);q(He);const Si={"/":{page:"pages/home.html",title:"Home",bodyClass:"page-home",loader:()=>Tt(()=>import("./home-f95sOrUc.js"),__vite__mapDeps([0,1,2]))},"/physicalizing-emotions":{page:"pages/physicalizing.html",title:"Physicalizing Emotions",bodyClass:"page-physicalizing",loader:()=>Tt(()=>import("./physicalizing-BpmjRwKR.js"),__vite__mapDeps([3,4,5,2,6]))},"/visualization":{page:"pages/visualization.html",title:"Visualization",bodyClass:"page-visualization",loader:()=>Tt(()=>import("./visualization-DR2DFFYr.js"),__vite__mapDeps([7,2]))},"/visualization/periods":{page:"pages/periods.html",title:"Visualization — Periods",bodyClass:"page-periods",loader:()=>Tt(()=>import("./periods-Cq_2w1uh.js"),__vite__mapDeps([8,2]))},"/about":{page:"pages/about.html",title:"About",bodyClass:"page-about",loader:()=>Tt(()=>import("./about-D_azNDDI.js"),__vite__mapDeps([9,2]))},"/epilogue":{page:"pages/epilogue.html",title:"Epilogue",bodyClass:"page-epilogue",loader:()=>Tt(()=>import("./epilogue-RYVsrEaQ.js"),__vite__mapDeps([10,4,5,2]))}},lt="/everyday/".replace(/\/$/,"");let Ot=null,fn=!1;function hd(){let n=window.requestAnimationFrame(()=>{});for(;n--;)window.cancelAnimationFrame(n);const t=setTimeout(()=>{},0);for(let s=0;s<t;s++)clearTimeout(s);const e=setInterval(()=>{},0);for(let s=0;s<e;s++)clearInterval(s);document.querySelectorAll("canvas").forEach(s=>{const o=s.getContext("webgl")||s.getContext("webgl2");if(o){const r=o.getExtension("WEBGL_lose_context");r&&r.loseContext()}s.remove()})}const rn=async()=>{let n=window.location.pathname;lt!=="/"&&n.startsWith(lt)&&(n=n.slice(lt.length)),n=n||"/",n.startsWith("/")||(n="/"+n);const t=Si[n]||Si["/"];if(Ot!=null&&Ot.destroy)try{await Ot.destroy()}catch(r){console.warn("Error en destroy():",r)}Ot=null,hd();const e=document.querySelector("[data-router-view]");if(e){e.innerHTML="";const r=e.cloneNode(!1);e.parentNode.replaceChild(r,e)}if(document.title=t.title,lo(t.bodyClass),await ao(t.page),await Hi("#header",n==="/visualization/periods"?"componets/header-interior.html":"componets/header.html"),t.loader)try{const r=await t.loader();r!=null&&r.init&&(await r.init(),Ot=r)}catch(r){console.error("Error cargando módulo de página:",r)}t.page.includes("visualization")&&fn&&(fn=!1,setTimeout(()=>uo(),0));const s=document.getElementById("offcanvasDarkNavbar");if(s){const r=it.getInstance(s);r&&r.hide()}document.body.classList.remove("overflow-hidden","modal-open"),document.body.removeAttribute("style"),document.querySelectorAll(".modal-backdrop, .offcanvas-backdrop").forEach(r=>r.remove()),window.scrollTo(0,0)};function pd(){document.querySelector("[data-router-view]")&&(document.addEventListener("click",t=>{const e=t.target.closest("[data-link]");if(!e)return;const i=new URL(e.href);if(i.origin!==window.location.origin)return;e.classList.contains("link-back")&&(fn=!0),t.preventDefault();let s=i.pathname;lt!=="/"&&s.startsWith(lt)&&(s=s.slice(lt.length)||"/"),s=lt==="/"?s:lt+s,history.pushState({},"",s),rn()}),window.addEventListener("popstate",rn),rn())}var ve={exports:{}},Ee={exports:{}},be={exports:{}};/*!
  * Bootstrap data.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var fd=be.exports,Oi;function gd(){return Oi||(Oi=1,(function(n,t){(function(e,i){n.exports=i()})(fd,(function(){const e=new Map;return{set(s,o,r){e.has(s)||e.set(s,new Map);const a=e.get(s);if(!a.has(o)&&a.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(a.keys())[0]}.`);return}a.set(o,r)},get(s,o){return e.has(s)&&e.get(s).get(o)||null},remove(s,o){if(!e.has(s))return;const r=e.get(s);r.delete(o),r.size===0&&e.delete(s)}}}))})(be)),be.exports}var ye={exports:{}},Ut={exports:{}};/*!
  * Bootstrap index.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var md=Ut.exports,Ni;function ot(){return Ni||(Ni=1,(function(n,t){(function(e,i){i(t)})(md,(function(e){const o="transitionend",r=u=>(u&&window.CSS&&window.CSS.escape&&(u=u.replace(/#([^\s"#']+)/g,(v,E)=>`#${CSS.escape(E)}`)),u),a=u=>u==null?`${u}`:Object.prototype.toString.call(u).match(/\s([a-z]+)/i)[1].toLowerCase(),l=u=>{do u+=Math.floor(Math.random()*1e6);while(document.getElementById(u));return u},c=u=>{if(!u)return 0;let{transitionDuration:v,transitionDelay:E}=window.getComputedStyle(u);const b=Number.parseFloat(v),D=Number.parseFloat(E);return!b&&!D?0:(v=v.split(",")[0],E=E.split(",")[0],(Number.parseFloat(v)+Number.parseFloat(E))*1e3)},d=u=>{u.dispatchEvent(new Event(o))},g=u=>!u||typeof u!="object"?!1:(typeof u.jquery<"u"&&(u=u[0]),typeof u.nodeType<"u"),p=u=>g(u)?u.jquery?u[0]:u:typeof u=="string"&&u.length>0?document.querySelector(r(u)):null,f=u=>{if(!g(u)||u.getClientRects().length===0)return!1;const v=getComputedStyle(u).getPropertyValue("visibility")==="visible",E=u.closest("details:not([open])");if(!E)return v;if(E!==u){const b=u.closest("summary");if(b&&b.parentNode!==E||b===null)return!1}return v},O=u=>!u||u.nodeType!==Node.ELEMENT_NODE||u.classList.contains("disabled")?!0:typeof u.disabled<"u"?u.disabled:u.hasAttribute("disabled")&&u.getAttribute("disabled")!=="false",A=u=>{if(!document.documentElement.attachShadow)return null;if(typeof u.getRootNode=="function"){const v=u.getRootNode();return v instanceof ShadowRoot?v:null}return u instanceof ShadowRoot?u:u.parentNode?A(u.parentNode):null},T=()=>{},C=u=>{u.offsetHeight},M=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,k=[],N=u=>{document.readyState==="loading"?(k.length||document.addEventListener("DOMContentLoaded",()=>{for(const v of k)v()}),k.push(u)):u()},x=()=>document.documentElement.dir==="rtl",m=u=>{N(()=>{const v=M();if(v){const E=u.NAME,b=v.fn[E];v.fn[E]=u.jQueryInterface,v.fn[E].Constructor=u,v.fn[E].noConflict=()=>(v.fn[E]=b,u.jQueryInterface)}})},_=(u,v=[],E=u)=>typeof u=="function"?u(...v):E,y=(u,v,E=!0)=>{if(!E){_(u);return}const D=c(v)+5;let L=!1;const I=({target:P})=>{P===v&&(L=!0,v.removeEventListener(o,I),_(u))};v.addEventListener(o,I),setTimeout(()=>{L||d(v)},D)},w=(u,v,E,b)=>{const D=u.length;let L=u.indexOf(v);return L===-1?!E&&b?u[D-1]:u[0]:(L+=E?1:-1,b&&(L=(L+D)%D),u[Math.max(0,Math.min(L,D-1))])};e.defineJQueryPlugin=m,e.execute=_,e.executeAfterTransition=y,e.findShadowRoot=A,e.getElement=p,e.getNextActiveElement=w,e.getTransitionDurationFromElement=c,e.getUID=l,e.getjQuery=M,e.isDisabled=O,e.isElement=g,e.isRTL=x,e.isVisible=f,e.noop=T,e.onDOMContentLoaded=N,e.parseSelector=r,e.reflow=C,e.toType=a,e.triggerTransitionEnd=d,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}))})(Ut,Ut.exports)),Ut.exports}/*!
  * Bootstrap event-handler.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var _d=ye.exports,Di;function jt(){return Di||(Di=1,(function(n,t){(function(e,i){n.exports=i(ot())})(_d,(function(e){const i=/[^.]*(?=\..*)\.|.*/,s=/\..*/,o=/::\d+$/,r={};let a=1;const l={mouseenter:"mouseover",mouseleave:"mouseout"},c=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function d(m,_){return _&&`${_}::${a++}`||m.uidEvent||a++}function g(m){const _=d(m);return m.uidEvent=_,r[_]=r[_]||{},r[_]}function p(m,_){return function y(w){return x(w,{delegateTarget:m}),y.oneOff&&N.off(m,w.type,_),_.apply(m,[w])}}function f(m,_,y){return function w(u){const v=m.querySelectorAll(_);for(let{target:E}=u;E&&E!==this;E=E.parentNode)for(const b of v)if(b===E)return x(u,{delegateTarget:E}),w.oneOff&&N.off(m,u.type,_,y),y.apply(E,[u])}}function O(m,_,y=null){return Object.values(m).find(w=>w.callable===_&&w.delegationSelector===y)}function A(m,_,y){const w=typeof _=="string",u=w?y:_||y;let v=k(m);return c.has(v)||(v=m),[w,u,v]}function T(m,_,y,w,u){if(typeof _!="string"||!m)return;let[v,E,b]=A(_,y,w);_ in l&&(E=(Z=>function(G){if(!G.relatedTarget||G.relatedTarget!==G.delegateTarget&&!G.delegateTarget.contains(G.relatedTarget))return Z.call(this,G)})(E));const D=g(m),L=D[b]||(D[b]={}),I=O(L,E,v?y:null);if(I){I.oneOff=I.oneOff&&u;return}const P=d(E,_.replace(i,"")),$=v?f(m,y,E):p(m,E);$.delegationSelector=v?y:null,$.callable=E,$.oneOff=u,$.uidEvent=P,L[P]=$,m.addEventListener(b,$,v)}function C(m,_,y,w,u){const v=O(_[y],w,u);v&&(m.removeEventListener(y,v,!!u),delete _[y][v.uidEvent])}function M(m,_,y,w){const u=_[y]||{};for(const[v,E]of Object.entries(u))v.includes(w)&&C(m,_,y,E.callable,E.delegationSelector)}function k(m){return m=m.replace(s,""),l[m]||m}const N={on(m,_,y,w){T(m,_,y,w,!1)},one(m,_,y,w){T(m,_,y,w,!0)},off(m,_,y,w){if(typeof _!="string"||!m)return;const[u,v,E]=A(_,y,w),b=E!==_,D=g(m),L=D[E]||{},I=_.startsWith(".");if(typeof v<"u"){if(!Object.keys(L).length)return;C(m,D,E,v,u?y:null);return}if(I)for(const P of Object.keys(D))M(m,D,P,_.slice(1));for(const[P,$]of Object.entries(L)){const R=P.replace(o,"");(!b||_.includes(R))&&C(m,D,E,$.callable,$.delegationSelector)}},trigger(m,_,y){if(typeof _!="string"||!m)return null;const w=e.getjQuery(),u=k(_),v=_!==u;let E=null,b=!0,D=!0,L=!1;v&&w&&(E=w.Event(_,y),w(m).trigger(E),b=!E.isPropagationStopped(),D=!E.isImmediatePropagationStopped(),L=E.isDefaultPrevented());const I=x(new Event(_,{bubbles:b,cancelable:!0}),y);return L&&I.preventDefault(),D&&m.dispatchEvent(I),I.defaultPrevented&&E&&E.preventDefault(),I}};function x(m,_={}){for(const[y,w]of Object.entries(_))try{m[y]=w}catch{Object.defineProperty(m,y,{configurable:!0,get(){return w}})}return m}return N}))})(ye)),ye.exports}var Ae={exports:{}},we={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var vd=we.exports,Li;function Ws(){return Li||(Li=1,(function(n,t){(function(e,i){n.exports=i()})(vd,(function(){function e(o){if(o==="true")return!0;if(o==="false")return!1;if(o===Number(o).toString())return Number(o);if(o===""||o==="null")return null;if(typeof o!="string")return o;try{return JSON.parse(decodeURIComponent(o))}catch{return o}}function i(o){return o.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}return{setDataAttribute(o,r,a){o.setAttribute(`data-bs-${i(r)}`,a)},removeDataAttribute(o,r){o.removeAttribute(`data-bs-${i(r)}`)},getDataAttributes(o){if(!o)return{};const r={},a=Object.keys(o.dataset).filter(l=>l.startsWith("bs")&&!l.startsWith("bsConfig"));for(const l of a){let c=l.replace(/^bs/,"");c=c.charAt(0).toLowerCase()+c.slice(1,c.length),r[c]=e(o.dataset[l])}return r},getDataAttribute(o,r){return e(o.getAttribute(`data-bs-${i(r)}`))}}}))})(we)),we.exports}/*!
  * Bootstrap config.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ed=Ae.exports,Ii;function xn(){return Ii||(Ii=1,(function(n,t){(function(e,i){n.exports=i(Ws(),ot())})(Ed,(function(e,i){class s{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(r){return r=this._mergeConfigObj(r),r=this._configAfterMerge(r),this._typeCheckConfig(r),r}_configAfterMerge(r){return r}_mergeConfigObj(r,a){const l=i.isElement(a)?e.getDataAttribute(a,"config"):{};return{...this.constructor.Default,...typeof l=="object"?l:{},...i.isElement(a)?e.getDataAttributes(a):{},...typeof r=="object"?r:{}}}_typeCheckConfig(r,a=this.constructor.DefaultType){for(const[l,c]of Object.entries(a)){const d=r[l],g=i.isElement(d)?"element":i.toType(d);if(!new RegExp(c).test(g))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${l}" provided type "${g}" but expected type "${c}".`)}}}return s}))})(Ae)),Ae.exports}/*!
  * Bootstrap base-component.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var bd=Ee.exports,$i;function Bs(){return $i||($i=1,(function(n,t){(function(e,i){n.exports=i(gd(),jt(),xn(),ot())})(bd,(function(e,i,s,o){const r="5.3.2";class a extends s{constructor(c,d){super(),c=o.getElement(c),c&&(this._element=c,this._config=this._getConfig(d),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),i.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,d,g=!0){o.executeAfterTransition(c,d,g)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return e.get(o.getElement(c),this.DATA_KEY)}static getOrCreateInstance(c,d={}){return this.getInstance(c)||new this(c,typeof d=="object"?d:null)}static get VERSION(){return r}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}return a}))})(Ee)),Ee.exports}var Te={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var yd=Te.exports,xi;function se(){return xi||(xi=1,(function(n,t){(function(e,i){n.exports=i(ot())})(yd,(function(e){const i=o=>{let r=o.getAttribute("data-bs-target");if(!r||r==="#"){let a=o.getAttribute("href");if(!a||!a.includes("#")&&!a.startsWith("."))return null;a.includes("#")&&!a.startsWith("#")&&(a=`#${a.split("#")[1]}`),r=a&&a!=="#"?e.parseSelector(a.trim()):null}return r},s={find(o,r=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(r,o))},findOne(o,r=document.documentElement){return Element.prototype.querySelector.call(r,o)},children(o,r){return[].concat(...o.children).filter(a=>a.matches(r))},parents(o,r){const a=[];let l=o.parentNode.closest(r);for(;l;)a.push(l),l=l.parentNode.closest(r);return a},prev(o,r){let a=o.previousElementSibling;for(;a;){if(a.matches(r))return[a];a=a.previousElementSibling}return[]},next(o,r){let a=o.nextElementSibling;for(;a;){if(a.matches(r))return[a];a=a.nextElementSibling}return[]},focusableChildren(o){const r=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(a=>`${a}:not([tabindex^="-"])`).join(",");return this.find(r,o).filter(a=>!e.isDisabled(a)&&e.isVisible(a))},getSelectorFromElement(o){const r=i(o);return r&&s.findOne(r)?r:null},getElementFromSelector(o){const r=i(o);return r?s.findOne(r):null},getMultipleElementsFromSelector(o){const r=i(o);return r?s.find(r):[]}};return s}))})(Te)),Te.exports}var Ce={exports:{}};/*!
  * Bootstrap backdrop.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ad=Ce.exports,ki;function wd(){return ki||(ki=1,(function(n,t){(function(e,i){n.exports=i(jt(),xn(),ot())})(Ad,(function(e,i,s){const o="backdrop",r="fade",a="show",l=`mousedown.bs.${o}`,c={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},d={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class g extends i{constructor(f){super(),this._config=this._getConfig(f),this._isAppended=!1,this._element=null}static get Default(){return c}static get DefaultType(){return d}static get NAME(){return o}show(f){if(!this._config.isVisible){s.execute(f);return}this._append();const O=this._getElement();this._config.isAnimated&&s.reflow(O),O.classList.add(a),this._emulateAnimation(()=>{s.execute(f)})}hide(f){if(!this._config.isVisible){s.execute(f);return}this._getElement().classList.remove(a),this._emulateAnimation(()=>{this.dispose(),s.execute(f)})}dispose(){this._isAppended&&(e.off(this._element,l),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const f=document.createElement("div");f.className=this._config.className,this._config.isAnimated&&f.classList.add(r),this._element=f}return this._element}_configAfterMerge(f){return f.rootElement=s.getElement(f.rootElement),f}_append(){if(this._isAppended)return;const f=this._getElement();this._config.rootElement.append(f),e.on(f,l,()=>{s.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(f){s.executeAfterTransition(f,this._getElement(),this._config.isAnimated)}}return g}))})(Ce)),Ce.exports}var Gt={exports:{}};/*!
  * Bootstrap component-functions.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Td=Gt.exports,Mi;function Cd(){return Mi||(Mi=1,(function(n,t){(function(e,i){i(t,jt(),se(),ot())})(Td,(function(e,i,s,o){const r=(a,l="hide")=>{const c=`click.dismiss${a.EVENT_KEY}`,d=a.NAME;i.on(document,c,`[data-bs-dismiss="${d}"]`,function(g){if(["A","AREA"].includes(this.tagName)&&g.preventDefault(),o.isDisabled(this))return;const p=s.getElementFromSelector(this)||this.closest(`.${d}`);a.getOrCreateInstance(p)[l]()})};e.enableDismissTrigger=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}))})(Gt,Gt.exports)),Gt.exports}var Se={exports:{}};/*!
  * Bootstrap focustrap.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Sd=Se.exports,Pi;function Od(){return Pi||(Pi=1,(function(n,t){(function(e,i){n.exports=i(jt(),se(),xn())})(Sd,(function(e,i,s){const o="focustrap",a=".bs.focustrap",l=`focusin${a}`,c=`keydown.tab${a}`,d="Tab",g="forward",p="backward",f={autofocus:!0,trapElement:null},O={autofocus:"boolean",trapElement:"element"};class A extends s{constructor(C){super(),this._config=this._getConfig(C),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return f}static get DefaultType(){return O}static get NAME(){return o}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),e.off(document,a),e.on(document,l,C=>this._handleFocusin(C)),e.on(document,c,C=>this._handleKeydown(C)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,e.off(document,a))}_handleFocusin(C){const{trapElement:M}=this._config;if(C.target===document||C.target===M||M.contains(C.target))return;const k=i.focusableChildren(M);k.length===0?M.focus():this._lastTabNavDirection===p?k[k.length-1].focus():k[0].focus()}_handleKeydown(C){C.key===d&&(this._lastTabNavDirection=C.shiftKey?p:g)}}return A}))})(Se)),Se.exports}var Oe={exports:{}};/*!
  * Bootstrap scrollbar.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Nd=Oe.exports,Ri;function Dd(){return Ri||(Ri=1,(function(n,t){(function(e,i){n.exports=i(Ws(),se(),ot())})(Nd,(function(e,i,s){const o=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",r=".sticky-top",a="padding-right",l="margin-right";class c{constructor(){this._element=document.body}getWidth(){const g=document.documentElement.clientWidth;return Math.abs(window.innerWidth-g)}hide(){const g=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,a,p=>p+g),this._setElementAttributes(o,a,p=>p+g),this._setElementAttributes(r,l,p=>p-g)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,a),this._resetElementAttributes(o,a),this._resetElementAttributes(r,l)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(g,p,f){const O=this.getWidth(),A=T=>{if(T!==this._element&&window.innerWidth>T.clientWidth+O)return;this._saveInitialAttribute(T,p);const C=window.getComputedStyle(T).getPropertyValue(p);T.style.setProperty(p,`${f(Number.parseFloat(C))}px`)};this._applyManipulationCallback(g,A)}_saveInitialAttribute(g,p){const f=g.style.getPropertyValue(p);f&&e.setDataAttribute(g,p,f)}_resetElementAttributes(g,p){const f=O=>{const A=e.getDataAttribute(O,p);if(A===null){O.style.removeProperty(p);return}e.removeDataAttribute(O,p),O.style.setProperty(p,A)};this._applyManipulationCallback(g,f)}_applyManipulationCallback(g,p){if(s.isElement(g)){p(g);return}for(const f of i.find(g,this._element))p(f)}}return c}))})(Oe)),Oe.exports}/*!
  * Bootstrap offcanvas.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ld=ve.exports,Vi;function Id(){return Vi||(Vi=1,(function(n,t){(function(e,i){n.exports=i(Bs(),jt(),se(),wd(),Cd(),Od(),ot(),Dd())})(Ld,(function(e,i,s,o,r,a,l,c){const d="offcanvas",p=".bs.offcanvas",f=".data-api",O=`load${p}${f}`,A="Escape",T="show",C="showing",M="hiding",k="offcanvas-backdrop",N=".offcanvas.show",x=`show${p}`,m=`shown${p}`,_=`hide${p}`,y=`hidePrevented${p}`,w=`hidden${p}`,u=`resize${p}`,v=`click${p}${f}`,E=`keydown.dismiss${p}`,b='[data-bs-toggle="offcanvas"]',D={backdrop:!0,keyboard:!0,scroll:!1},L={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class I extends e{constructor($,R){super($,R),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return D}static get DefaultType(){return L}static get NAME(){return d}toggle($){return this._isShown?this.hide():this.show($)}show($){if(this._isShown||i.trigger(this._element,x,{relatedTarget:$}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new c().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(C);const Z=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(T),this._element.classList.remove(C),i.trigger(this._element,m,{relatedTarget:$})};this._queueCallback(Z,this._element,!0)}hide(){if(!this._isShown||i.trigger(this._element,_).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(M),this._backdrop.hide();const R=()=>{this._element.classList.remove(T,M),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new c().reset(),i.trigger(this._element,w)};this._queueCallback(R,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const $=()=>{if(this._config.backdrop==="static"){i.trigger(this._element,y);return}this.hide()},R=!!this._config.backdrop;return new o({className:k,isVisible:R,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:R?$:null})}_initializeFocusTrap(){return new a({trapElement:this._element})}_addEventListeners(){i.on(this._element,E,$=>{if($.key===A){if(this._config.keyboard){this.hide();return}i.trigger(this._element,y)}})}static jQueryInterface($){return this.each(function(){const R=I.getOrCreateInstance(this,$);if(typeof $=="string"){if(R[$]===void 0||$.startsWith("_")||$==="constructor")throw new TypeError(`No method named "${$}"`);R[$](this)}})}}return i.on(document,v,b,function(P){const $=s.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&P.preventDefault(),l.isDisabled(this))return;i.one($,w,()=>{l.isVisible(this)&&this.focus()});const R=s.findOne(N);R&&R!==$&&I.getInstance(R).hide(),I.getOrCreateInstance($).toggle(this)}),i.on(window,O,()=>{for(const P of s.find(N))I.getOrCreateInstance(P).show()}),i.on(window,u,()=>{for(const P of s.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(P).position!=="fixed"&&I.getOrCreateInstance(P).hide()}),r.enableDismissTrigger(I),l.defineJQueryPlugin(I),I}))})(ve)),ve.exports}Id();var Ne={exports:{}};/*!
  * Bootstrap collapse.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var $d=Ne.exports,zi;function xd(){return zi||(zi=1,(function(n,t){(function(e,i){n.exports=i(Bs(),jt(),se(),ot())})($d,(function(e,i,s,o){const r="collapse",l=".bs.collapse",c=".data-api",d=`show${l}`,g=`shown${l}`,p=`hide${l}`,f=`hidden${l}`,O=`click${l}${c}`,A="show",T="collapse",C="collapsing",M="collapsed",k=`:scope .${T} .${T}`,N="collapse-horizontal",x="width",m="height",_=".collapse.show, .collapse.collapsing",y='[data-bs-toggle="collapse"]',w={parent:null,toggle:!0},u={parent:"(null|element)",toggle:"boolean"};class v extends e{constructor(b,D){super(b,D),this._isTransitioning=!1,this._triggerArray=[];const L=s.find(y);for(const I of L){const P=s.getSelectorFromElement(I),$=s.find(P).filter(R=>R===this._element);P!==null&&$.length&&this._triggerArray.push(I)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return w}static get DefaultType(){return u}static get NAME(){return r}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let b=[];if(this._config.parent&&(b=this._getFirstLevelChildren(_).filter(R=>R!==this._element).map(R=>v.getOrCreateInstance(R,{toggle:!1}))),b.length&&b[0]._isTransitioning||i.trigger(this._element,d).defaultPrevented)return;for(const R of b)R.hide();const L=this._getDimension();this._element.classList.remove(T),this._element.classList.add(C),this._element.style[L]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const I=()=>{this._isTransitioning=!1,this._element.classList.remove(C),this._element.classList.add(T,A),this._element.style[L]="",i.trigger(this._element,g)},$=`scroll${L[0].toUpperCase()+L.slice(1)}`;this._queueCallback(I,this._element,!0),this._element.style[L]=`${this._element[$]}px`}hide(){if(this._isTransitioning||!this._isShown()||i.trigger(this._element,p).defaultPrevented)return;const D=this._getDimension();this._element.style[D]=`${this._element.getBoundingClientRect()[D]}px`,o.reflow(this._element),this._element.classList.add(C),this._element.classList.remove(T,A);for(const I of this._triggerArray){const P=s.getElementFromSelector(I);P&&!this._isShown(P)&&this._addAriaAndCollapsedClass([I],!1)}this._isTransitioning=!0;const L=()=>{this._isTransitioning=!1,this._element.classList.remove(C),this._element.classList.add(T),i.trigger(this._element,f)};this._element.style[D]="",this._queueCallback(L,this._element,!0)}_isShown(b=this._element){return b.classList.contains(A)}_configAfterMerge(b){return b.toggle=!!b.toggle,b.parent=o.getElement(b.parent),b}_getDimension(){return this._element.classList.contains(N)?x:m}_initializeChildren(){if(!this._config.parent)return;const b=this._getFirstLevelChildren(y);for(const D of b){const L=s.getElementFromSelector(D);L&&this._addAriaAndCollapsedClass([D],this._isShown(L))}}_getFirstLevelChildren(b){const D=s.find(k,this._config.parent);return s.find(b,this._config.parent).filter(L=>!D.includes(L))}_addAriaAndCollapsedClass(b,D){if(b.length)for(const L of b)L.classList.toggle(M,!D),L.setAttribute("aria-expanded",D)}static jQueryInterface(b){const D={};return typeof b=="string"&&/show|hide/.test(b)&&(D.toggle=!1),this.each(function(){const L=v.getOrCreateInstance(this,D);if(typeof b=="string"){if(typeof L[b]>"u")throw new TypeError(`No method named "${b}"`);L[b]()}})}}return i.on(document,O,y,function(E){(E.target.tagName==="A"||E.delegateTarget&&E.delegateTarget.tagName==="A")&&E.preventDefault();for(const b of s.getMultipleElementsFromSelector(this))v.getOrCreateInstance(b,{toggle:!1}).toggle()}),o.defineJQueryPlugin(v),v}))})(Ne)),Ne.exports}xd();(async()=>(await Hi("#header","componets/header.html"),pd(),co()))();export{Vt as T};

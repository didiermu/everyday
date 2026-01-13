const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/home-B9wF9J8b.js","js/three-yH4q0MRI.js","js/loadLocomotive-CH76LBRw.js","js/physicalizing-B2ncQIsy.js","js/swiper-CFnvug-O.js","css/swiper-erHEUhN6.css","css/physicalizing-EsTBEVQd.css","js/visualization-BclDaf9g.js","js/periods-v9zjKZ5S.js","js/about-DGX85CKs.js","js/epilogue-BKgZ0anD.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const Ys=`<nav class="navbar">
    <div class=" container-fluid">
        <a href="/" data-link>
            <img src="./img/cerillo2.png" alt="">
        </a>
        <button class="button button-primary button-min" id="button-menu" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation">MENU</button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel" data-bs-backdrop="static">
            <div class="offcanvas-body">
                <ul class="navbar-nav">
                    <a href="./" data-link>
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
`,Us=`<nav class="navbar">
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
`,qs={"componets/header.html":Ys,"componets/header-interior.html":Us};async function Gs(n,t){const e=document.querySelector(n);if(!e)return;const i=qs[t];e.innerHTML=i}const Qs="modulepreload",Xs=function(n){return"/everyday/"+n},zn={},Tt=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){let r=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=r(e.map(c=>{if(c=Xs(c),c in zn)return;zn[c]=!0;const u=c.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${m}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Qs,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((p,N)=>{f.addEventListener("load",p),f.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return s.then(r=>{for(const a of r||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})},Js=`<section class="intro">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 data-scroll data-scroll-speed="3" data-scroll-position="top" data-scroll-class="appear">EVERY DAY IS
                    A GIFT You WILL Never Get Back.</h1>
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
    <video src="./video/Intro_video_portrait.mp4" poster="./img/intro_video_portrait.jpg" autoplay muted loop></video>
    <button class="btn-play">PLAY</button>
</section>
<dialog id="modal-video">
    <div class="modal--content">
        <button class="close"></button>
        <video src="./video/intro_video_landscape.mp4" loop></video>
    </div>
</dialog>
`,Zs=`<section class="hero">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="title" data-scroll data-scroll-speed="3" data-scroll-position="top">
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
                <h2>I’VE USED Matches BECAUSE THEY perfectly symbolize each day lived.</h2>
                <p>Once a match is struck, it’s gone forever; we don’t know how many matches we have left.</p>
            </div>
        </div>
    </div>
    <div class="expand__image">
        <picture class="img-cover expand__image--fondo">
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
                <h2>Instead of painting the MATCHES, I wrapped each ONE AS a tiny gift.</h2>
                <video src="" poster="./img/physicalizing-04.png"></video>
                <p>That decision helped define the concept and gave its name to the project. What fascinates me about
                    physicalizations is the virtuous feedback loop they create—where the material informs the concept,
                    and the concept evolves through the process.</p>
            </div>
        </div>
    </div>
    <picture class="img-cover">
        <img src="./img/physicalizing-05.jpg" alt="">
    </picture>
</section>
<section class="regular">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>Instead of painting the MATCHES, I wrapped each ONE AS a tiny gift.</h2>
                <p>That decision helped define the concept and gave its name to the project. What fascinates me about
                    physicalizations is the virtuous feedback loop they create—where the material informs the concept,
                    and the concept evolves through the process.</p>
                <video src="" poster="./img/physicalizing-06.png"></video>
            </div>
        </div>
    </div>
</section>
<section class="regular carousel">
    <div class="container">
        <div class="row">
            <div class="col-12">
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
            <div class="col-12">
                <p>The task was emotionally challenging. But by working in silence—wrapping, photographing, and pasting
                    each match—I created space for gratitude. I honored each day, no matter how painful or joyful,
                    because each one brought me to the present moment. </p>
            </div>
        </div>
    </div>
</section>
<section class="regular">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>Although matches may appear similar at first glance, each one is distinct, much like our days.</h2>
            </div>
        </div>
    </div>
    <picture class="img-cover">
        <img src="./img/physicalizing-07.jpg" alt="">
    </picture>
</section>
<section class="regular">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>after 4 months of wrapping and pasting... the physicalization was finished on april 6, 2025</h2>
            </div>
        </div>
    </div>
    <picture class="img-cover">
        <img src="./img/physicalizing-08.jpg" alt="">
    </picture>
</section>
<section class="regular hours">
    <div class="container">
        <div class="row">
            <div class="col-12">
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
            <div class="col-12">
                <picture class="img-cover">
                    <img src="./img/physicalizing-09.png" alt="">
                </picture>
            </div>
        </div>
    </div>
</section>
<a href="./visualization" data-link class="link-decorated">NEXT: THE VISUALIZATION</a>
`,to=`<section class="hero">
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
    <div class="container">
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
                <div class="visualization__data">
                    <span>Duration</span>
                    <span><strong>366 days</strong></span>
                </div>
            </div>
            <div class="col-12 visualization--fondo">
                <picture class="img-cover">
                    <img src="./img/viz.jpg" alt="">
                </picture>
                <a href="./visualization/periods" data-ink>
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
                <a href="./visualization/periods" data-ink>
                    <button class="button button-tertiary">Explore Periods</button>
                </a>
            </div>
        </div>
    </div>
</section>
`,eo=`<dialog id="modal-story">
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
<dialog id="modal-data">
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
</dialog>

`,no=`<section class="hero">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="title"><span>3</span>About the project</h1>
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
                <a href="" class="text-decoration-none">
                    <button class="button button-primary">Share your thoughts </button>
                </a>
            </div>
        </div>
    </div>
</section>
`,io=`<section class="hero">
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
`,so={"pages/home.html":Js,"pages/physicalizing.html":Zs,"pages/visualization.html":to,"pages/periods.html":eo,"pages/about.html":no,"pages/epilogue.html":io};async function oo(n){const t=document.querySelector("[data-router-view]");if(!t)return;const e=so[n];e?t.innerHTML=e:console.error(`Page not found: ${n}`)}function ro(n){document.body.classList.forEach(t=>{t.startsWith("page-")&&document.body.classList.remove(t)}),document.body.classList.add(n)}var V="top",z="bottom",j="right",H="left",$e="auto",Vt=[V,z,j,H],Et="start",It="end",Vi="clippingParents",fn="viewport",Nt="popper",Hi="reference",rn=Vt.reduce(function(n,t){return n.concat([t+"-"+Et,t+"-"+It])},[]),pn=[].concat(Vt,[$e]).reduce(function(n,t){return n.concat([t,t+"-"+Et,t+"-"+It])},[]),Wi="beforeRead",zi="read",ji="afterRead",Fi="beforeMain",Ki="main",Bi="afterMain",Yi="beforeWrite",Ui="write",qi="afterWrite",Gi=[Wi,zi,ji,Fi,Ki,Bi,Yi,Ui,qi];function J(n){return n?(n.nodeName||"").toLowerCase():null}function F(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function bt(n){var t=F(n).Element;return n instanceof t||n instanceof Element}function K(n){var t=F(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function mn(n){if(typeof ShadowRoot>"u")return!1;var t=F(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function ao(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var i=t.styles[e]||{},s=t.attributes[e]||{},o=t.elements[e];!K(o)||!J(o)||(Object.assign(o.style,i),Object.keys(s).forEach(function(r){var a=s[r];a===!1?o.removeAttribute(r):o.setAttribute(r,a===!0?"":a)}))})}function lo(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(i){var s=t.elements[i],o=t.attributes[i]||{},r=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:e[i]),a=r.reduce(function(l,c){return l[c]="",l},{});!K(s)||!J(s)||(Object.assign(s.style,a),Object.keys(o).forEach(function(l){s.removeAttribute(l)}))})}}const gn={name:"applyStyles",enabled:!0,phase:"write",fn:ao,effect:lo,requires:["computeStyles"]};function Q(n){return n.split("-")[0]}var vt=Math.max,Se=Math.min,$t=Math.round;function an(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Qi(){return!/^((?!chrome|android).)*safari/i.test(an())}function kt(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var i=n.getBoundingClientRect(),s=1,o=1;t&&K(n)&&(s=n.offsetWidth>0&&$t(i.width)/n.offsetWidth||1,o=n.offsetHeight>0&&$t(i.height)/n.offsetHeight||1);var r=bt(n)?F(n):window,a=r.visualViewport,l=!Qi()&&e,c=(i.left+(l&&a?a.offsetLeft:0))/s,u=(i.top+(l&&a?a.offsetTop:0))/o,m=i.width/s,f=i.height/o;return{width:m,height:f,top:u,right:c+m,bottom:u+f,left:c,x:c,y:u}}function _n(n){var t=kt(n),e=n.offsetWidth,i=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:i}}function Xi(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&mn(e)){var i=t;do{if(i&&n.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function nt(n){return F(n).getComputedStyle(n)}function co(n){return["table","td","th"].indexOf(J(n))>=0}function dt(n){return((bt(n)?n.ownerDocument:n.document)||window.document).documentElement}function ke(n){return J(n)==="html"?n:n.assignedSlot||n.parentNode||(mn(n)?n.host:null)||dt(n)}function jn(n){return!K(n)||nt(n).position==="fixed"?null:n.offsetParent}function uo(n){var t=/firefox/i.test(an()),e=/Trident/i.test(an());if(e&&K(n)){var i=nt(n);if(i.position==="fixed")return null}var s=ke(n);for(mn(s)&&(s=s.host);K(s)&&["html","body"].indexOf(J(s))<0;){var o=nt(s);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return s;s=s.parentNode}return null}function Jt(n){for(var t=F(n),e=jn(n);e&&co(e)&&nt(e).position==="static";)e=jn(e);return e&&(J(e)==="html"||J(e)==="body"&&nt(e).position==="static")?t:e||uo(n)||t}function vn(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Gt(n,t,e){return vt(n,Se(t,e))}function ho(n,t,e){var i=Gt(n,t,e);return i>e?e:i}function Ji(){return{top:0,right:0,bottom:0,left:0}}function Zi(n){return Object.assign({},Ji(),n)}function ts(n,t){return t.reduce(function(e,i){return e[i]=n,e},{})}var fo=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,Zi(typeof t!="number"?t:ts(t,Vt))};function po(n){var t,e=n.state,i=n.name,s=n.options,o=e.elements.arrow,r=e.modifiersData.popperOffsets,a=Q(e.placement),l=vn(a),c=[H,j].indexOf(a)>=0,u=c?"height":"width";if(!(!o||!r)){var m=fo(s.padding,e),f=_n(o),p=l==="y"?V:H,N=l==="y"?z:j,A=e.rects.reference[u]+e.rects.reference[l]-r[l]-e.rects.popper[u],T=r[l]-e.rects.reference[l],C=Jt(o),M=C?l==="y"?C.clientHeight||0:C.clientWidth||0:0,x=A/2-T/2,S=m[p],k=M-f[u]-m[N],g=M/2-f[u]/2+x,_=Gt(S,g,k),y=l;e.modifiersData[i]=(t={},t[y]=_,t.centerOffset=_-g,t)}}function mo(n){var t=n.state,e=n.options,i=e.element,s=i===void 0?"[data-popper-arrow]":i;s!=null&&(typeof s=="string"&&(s=t.elements.popper.querySelector(s),!s)||Xi(t.elements.popper,s)&&(t.elements.arrow=s))}const es={name:"arrow",enabled:!0,phase:"main",fn:po,effect:mo,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function xt(n){return n.split("-")[1]}var go={top:"auto",right:"auto",bottom:"auto",left:"auto"};function _o(n,t){var e=n.x,i=n.y,s=t.devicePixelRatio||1;return{x:$t(e*s)/s||0,y:$t(i*s)/s||0}}function Fn(n){var t,e=n.popper,i=n.popperRect,s=n.placement,o=n.variation,r=n.offsets,a=n.position,l=n.gpuAcceleration,c=n.adaptive,u=n.roundOffsets,m=n.isFixed,f=r.x,p=f===void 0?0:f,N=r.y,A=N===void 0?0:N,T=typeof u=="function"?u({x:p,y:A}):{x:p,y:A};p=T.x,A=T.y;var C=r.hasOwnProperty("x"),M=r.hasOwnProperty("y"),x=H,S=V,k=window;if(c){var g=Jt(e),_="clientHeight",y="clientWidth";if(g===F(e)&&(g=dt(e),nt(g).position!=="static"&&a==="absolute"&&(_="scrollHeight",y="scrollWidth")),g=g,s===V||(s===H||s===j)&&o===It){S=z;var w=m&&g===k&&k.visualViewport?k.visualViewport.height:g[_];A-=w-i.height,A*=l?1:-1}if(s===H||(s===V||s===z)&&o===It){x=j;var d=m&&g===k&&k.visualViewport?k.visualViewport.width:g[y];p-=d-i.width,p*=l?1:-1}}var v=Object.assign({position:a},c&&go),E=u===!0?_o({x:p,y:A},F(e)):{x:p,y:A};if(p=E.x,A=E.y,l){var b;return Object.assign({},v,(b={},b[S]=M?"0":"",b[x]=C?"0":"",b.transform=(k.devicePixelRatio||1)<=1?"translate("+p+"px, "+A+"px)":"translate3d("+p+"px, "+A+"px, 0)",b))}return Object.assign({},v,(t={},t[S]=M?A+"px":"",t[x]=C?p+"px":"",t.transform="",t))}function vo(n){var t=n.state,e=n.options,i=e.gpuAcceleration,s=i===void 0?!0:i,o=e.adaptive,r=o===void 0?!0:o,a=e.roundOffsets,l=a===void 0?!0:a,c={placement:Q(t.placement),variation:xt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:s,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Fn(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:r,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Fn(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const En={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:vo,data:{}};var ae={passive:!0};function Eo(n){var t=n.state,e=n.instance,i=n.options,s=i.scroll,o=s===void 0?!0:s,r=i.resize,a=r===void 0?!0:r,l=F(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&c.forEach(function(u){u.addEventListener("scroll",e.update,ae)}),a&&l.addEventListener("resize",e.update,ae),function(){o&&c.forEach(function(u){u.removeEventListener("scroll",e.update,ae)}),a&&l.removeEventListener("resize",e.update,ae)}}const bn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Eo,data:{}};var bo={left:"right",right:"left",bottom:"top",top:"bottom"};function pe(n){return n.replace(/left|right|bottom|top/g,function(t){return bo[t]})}var yo={start:"end",end:"start"};function Kn(n){return n.replace(/start|end/g,function(t){return yo[t]})}function yn(n){var t=F(n),e=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:e,scrollTop:i}}function An(n){return kt(dt(n)).left+yn(n).scrollLeft}function Ao(n,t){var e=F(n),i=dt(n),s=e.visualViewport,o=i.clientWidth,r=i.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;var c=Qi();(c||!c&&t==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a+An(n),y:l}}function wo(n){var t,e=dt(n),i=yn(n),s=(t=n.ownerDocument)==null?void 0:t.body,o=vt(e.scrollWidth,e.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=vt(e.scrollHeight,e.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-i.scrollLeft+An(n),l=-i.scrollTop;return nt(s||e).direction==="rtl"&&(a+=vt(e.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}function wn(n){var t=nt(n),e=t.overflow,i=t.overflowX,s=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+s+i)}function ns(n){return["html","body","#document"].indexOf(J(n))>=0?n.ownerDocument.body:K(n)&&wn(n)?n:ns(ke(n))}function Qt(n,t){var e;t===void 0&&(t=[]);var i=ns(n),s=i===((e=n.ownerDocument)==null?void 0:e.body),o=F(i),r=s?[o].concat(o.visualViewport||[],wn(i)?i:[]):i,a=t.concat(r);return s?a:a.concat(Qt(ke(r)))}function ln(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function To(n,t){var e=kt(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function Bn(n,t,e){return t===fn?ln(Ao(n,e)):bt(t)?To(t,e):ln(wo(dt(n)))}function Co(n){var t=Qt(ke(n)),e=["absolute","fixed"].indexOf(nt(n).position)>=0,i=e&&K(n)?Jt(n):n;return bt(i)?t.filter(function(s){return bt(s)&&Xi(s,i)&&J(s)!=="body"}):[]}function Oo(n,t,e,i){var s=t==="clippingParents"?Co(n):[].concat(t),o=[].concat(s,[e]),r=o[0],a=o.reduce(function(l,c){var u=Bn(n,c,i);return l.top=vt(u.top,l.top),l.right=Se(u.right,l.right),l.bottom=Se(u.bottom,l.bottom),l.left=vt(u.left,l.left),l},Bn(n,r,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function is(n){var t=n.reference,e=n.element,i=n.placement,s=i?Q(i):null,o=i?xt(i):null,r=t.x+t.width/2-e.width/2,a=t.y+t.height/2-e.height/2,l;switch(s){case V:l={x:r,y:t.y-e.height};break;case z:l={x:r,y:t.y+t.height};break;case j:l={x:t.x+t.width,y:a};break;case H:l={x:t.x-e.width,y:a};break;default:l={x:t.x,y:t.y}}var c=s?vn(s):null;if(c!=null){var u=c==="y"?"height":"width";switch(o){case Et:l[c]=l[c]-(t[u]/2-e[u]/2);break;case It:l[c]=l[c]+(t[u]/2-e[u]/2);break}}return l}function Mt(n,t){t===void 0&&(t={});var e=t,i=e.placement,s=i===void 0?n.placement:i,o=e.strategy,r=o===void 0?n.strategy:o,a=e.boundary,l=a===void 0?Vi:a,c=e.rootBoundary,u=c===void 0?fn:c,m=e.elementContext,f=m===void 0?Nt:m,p=e.altBoundary,N=p===void 0?!1:p,A=e.padding,T=A===void 0?0:A,C=Zi(typeof T!="number"?T:ts(T,Vt)),M=f===Nt?Hi:Nt,x=n.rects.popper,S=n.elements[N?M:f],k=Oo(bt(S)?S:S.contextElement||dt(n.elements.popper),l,u,r),g=kt(n.elements.reference),_=is({reference:g,element:x,placement:s}),y=ln(Object.assign({},x,_)),w=f===Nt?y:g,d={top:k.top-w.top+C.top,bottom:w.bottom-k.bottom+C.bottom,left:k.left-w.left+C.left,right:w.right-k.right+C.right},v=n.modifiersData.offset;if(f===Nt&&v){var E=v[s];Object.keys(d).forEach(function(b){var D=[j,z].indexOf(b)>=0?1:-1,L=[V,z].indexOf(b)>=0?"y":"x";d[b]+=E[L]*D})}return d}function No(n,t){t===void 0&&(t={});var e=t,i=e.placement,s=e.boundary,o=e.rootBoundary,r=e.padding,a=e.flipVariations,l=e.allowedAutoPlacements,c=l===void 0?pn:l,u=xt(i),m=u?a?rn:rn.filter(function(N){return xt(N)===u}):Vt,f=m.filter(function(N){return c.indexOf(N)>=0});f.length===0&&(f=m);var p=f.reduce(function(N,A){return N[A]=Mt(n,{placement:A,boundary:s,rootBoundary:o,padding:r})[Q(A)],N},{});return Object.keys(p).sort(function(N,A){return p[N]-p[A]})}function So(n){if(Q(n)===$e)return[];var t=pe(n);return[Kn(n),t,Kn(t)]}function Do(n){var t=n.state,e=n.options,i=n.name;if(!t.modifiersData[i]._skip){for(var s=e.mainAxis,o=s===void 0?!0:s,r=e.altAxis,a=r===void 0?!0:r,l=e.fallbackPlacements,c=e.padding,u=e.boundary,m=e.rootBoundary,f=e.altBoundary,p=e.flipVariations,N=p===void 0?!0:p,A=e.allowedAutoPlacements,T=t.options.placement,C=Q(T),M=C===T,x=l||(M||!N?[pe(T)]:So(T)),S=[T].concat(x).reduce(function(wt,ot){return wt.concat(Q(ot)===$e?No(t,{placement:ot,boundary:u,rootBoundary:m,padding:c,flipVariations:N,allowedAutoPlacements:A}):ot)},[]),k=t.rects.reference,g=t.rects.popper,_=new Map,y=!0,w=S[0],d=0;d<S.length;d++){var v=S[d],E=Q(v),b=xt(v)===Et,D=[V,z].indexOf(E)>=0,L=D?"width":"height",I=Mt(t,{placement:v,boundary:u,rootBoundary:m,altBoundary:f,padding:c}),P=D?b?j:H:b?z:V;k[L]>g[L]&&(P=pe(P));var $=pe(P),R=[];if(o&&R.push(I[E]<=0),a&&R.push(I[P]<=0,I[$]<=0),R.every(function(wt){return wt})){w=v,y=!1;break}_.set(v,R)}if(y)for(var Z=N?3:1,G=function(ot){var Kt=S.find(function(oe){var pt=_.get(oe);if(pt)return pt.slice(0,ot).every(function(We){return We})});if(Kt)return w=Kt,"break"},Ft=Z;Ft>0;Ft--){var se=G(Ft);if(se==="break")break}t.placement!==w&&(t.modifiersData[i]._skip=!0,t.placement=w,t.reset=!0)}}const ss={name:"flip",enabled:!0,phase:"main",fn:Do,requiresIfExists:["offset"],data:{_skip:!1}};function Yn(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function Un(n){return[V,j,z,H].some(function(t){return n[t]>=0})}function Lo(n){var t=n.state,e=n.name,i=t.rects.reference,s=t.rects.popper,o=t.modifiersData.preventOverflow,r=Mt(t,{elementContext:"reference"}),a=Mt(t,{altBoundary:!0}),l=Yn(r,i),c=Yn(a,s,o),u=Un(l),m=Un(c);t.modifiersData[e]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":m})}const os={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Lo};function Io(n,t,e){var i=Q(n),s=[H,V].indexOf(i)>=0?-1:1,o=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[H,j].indexOf(i)>=0?{x:a,y:r}:{x:r,y:a}}function $o(n){var t=n.state,e=n.options,i=n.name,s=e.offset,o=s===void 0?[0,0]:s,r=pn.reduce(function(u,m){return u[m]=Io(m,t.rects,o),u},{}),a=r[t.placement],l=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[i]=r}const rs={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:$o};function ko(n){var t=n.state,e=n.name;t.modifiersData[e]=is({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const Tn={name:"popperOffsets",enabled:!0,phase:"read",fn:ko,data:{}};function xo(n){return n==="x"?"y":"x"}function Mo(n){var t=n.state,e=n.options,i=n.name,s=e.mainAxis,o=s===void 0?!0:s,r=e.altAxis,a=r===void 0?!1:r,l=e.boundary,c=e.rootBoundary,u=e.altBoundary,m=e.padding,f=e.tether,p=f===void 0?!0:f,N=e.tetherOffset,A=N===void 0?0:N,T=Mt(t,{boundary:l,rootBoundary:c,padding:m,altBoundary:u}),C=Q(t.placement),M=xt(t.placement),x=!M,S=vn(C),k=xo(S),g=t.modifiersData.popperOffsets,_=t.rects.reference,y=t.rects.popper,w=typeof A=="function"?A(Object.assign({},t.rects,{placement:t.placement})):A,d=typeof w=="number"?{mainAxis:w,altAxis:w}:Object.assign({mainAxis:0,altAxis:0},w),v=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,E={x:0,y:0};if(g){if(o){var b,D=S==="y"?V:H,L=S==="y"?z:j,I=S==="y"?"height":"width",P=g[S],$=P+T[D],R=P-T[L],Z=p?-y[I]/2:0,G=M===Et?_[I]:y[I],Ft=M===Et?-y[I]:-_[I],se=t.elements.arrow,wt=p&&se?_n(se):{width:0,height:0},ot=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Ji(),Kt=ot[D],oe=ot[L],pt=Gt(0,_[I],wt[I]),We=x?_[I]/2-Z-pt-Kt-d.mainAxis:G-pt-Kt-d.mainAxis,Ws=x?-_[I]/2+Z+pt+oe+d.mainAxis:Ft+pt+oe+d.mainAxis,ze=t.elements.arrow&&Jt(t.elements.arrow),zs=ze?S==="y"?ze.clientTop||0:ze.clientLeft||0:0,$n=(b=v==null?void 0:v[S])!=null?b:0,js=P+We-$n-zs,Fs=P+Ws-$n,kn=Gt(p?Se($,js):$,P,p?vt(R,Fs):R);g[S]=kn,E[S]=kn-P}if(a){var xn,Ks=S==="x"?V:H,Bs=S==="x"?z:j,mt=g[k],re=k==="y"?"height":"width",Mn=mt+T[Ks],Pn=mt-T[Bs],je=[V,H].indexOf(C)!==-1,Rn=(xn=v==null?void 0:v[k])!=null?xn:0,Vn=je?Mn:mt-_[re]-y[re]-Rn+d.altAxis,Hn=je?mt+_[re]+y[re]-Rn-d.altAxis:Pn,Wn=p&&je?ho(Vn,mt,Hn):Gt(p?Vn:Mn,mt,p?Hn:Pn);g[k]=Wn,E[k]=Wn-mt}t.modifiersData[i]=E}}const as={name:"preventOverflow",enabled:!0,phase:"main",fn:Mo,requiresIfExists:["offset"]};function Po(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function Ro(n){return n===F(n)||!K(n)?yn(n):Po(n)}function Vo(n){var t=n.getBoundingClientRect(),e=$t(t.width)/n.offsetWidth||1,i=$t(t.height)/n.offsetHeight||1;return e!==1||i!==1}function Ho(n,t,e){e===void 0&&(e=!1);var i=K(t),s=K(t)&&Vo(t),o=dt(t),r=kt(n,s,e),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!e)&&((J(t)!=="body"||wn(o))&&(a=Ro(t)),K(t)?(l=kt(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):o&&(l.x=An(o))),{x:r.left+a.scrollLeft-l.x,y:r.top+a.scrollTop-l.y,width:r.width,height:r.height}}function Wo(n){var t=new Map,e=new Set,i=[];n.forEach(function(o){t.set(o.name,o)});function s(o){e.add(o.name);var r=[].concat(o.requires||[],o.requiresIfExists||[]);r.forEach(function(a){if(!e.has(a)){var l=t.get(a);l&&s(l)}}),i.push(o)}return n.forEach(function(o){e.has(o.name)||s(o)}),i}function zo(n){var t=Wo(n);return Gi.reduce(function(e,i){return e.concat(t.filter(function(s){return s.phase===i}))},[])}function jo(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function Fo(n){var t=n.reduce(function(e,i){var s=e[i.name];return e[i.name]=s?Object.assign({},s,i,{options:Object.assign({},s.options,i.options),data:Object.assign({},s.data,i.data)}):i,e},{});return Object.keys(t).map(function(e){return t[e]})}var qn={placement:"bottom",modifiers:[],strategy:"absolute"};function Gn(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function xe(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,i=e===void 0?[]:e,s=t.defaultOptions,o=s===void 0?qn:s;return function(a,l,c){c===void 0&&(c=o);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},qn,o),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},m=[],f=!1,p={state:u,setOptions:function(C){var M=typeof C=="function"?C(u.options):C;A(),u.options=Object.assign({},o,u.options,M),u.scrollParents={reference:bt(a)?Qt(a):a.contextElement?Qt(a.contextElement):[],popper:Qt(l)};var x=zo(Fo([].concat(i,u.options.modifiers)));return u.orderedModifiers=x.filter(function(S){return S.enabled}),N(),p.update()},forceUpdate:function(){if(!f){var C=u.elements,M=C.reference,x=C.popper;if(Gn(M,x)){u.rects={reference:Ho(M,Jt(x),u.options.strategy==="fixed"),popper:_n(x)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(d){return u.modifiersData[d.name]=Object.assign({},d.data)});for(var S=0;S<u.orderedModifiers.length;S++){if(u.reset===!0){u.reset=!1,S=-1;continue}var k=u.orderedModifiers[S],g=k.fn,_=k.options,y=_===void 0?{}:_,w=k.name;typeof g=="function"&&(u=g({state:u,options:y,name:w,instance:p})||u)}}}},update:jo(function(){return new Promise(function(T){p.forceUpdate(),T(u)})}),destroy:function(){A(),f=!0}};if(!Gn(a,l))return p;p.setOptions(c).then(function(T){!f&&c.onFirstUpdate&&c.onFirstUpdate(T)});function N(){u.orderedModifiers.forEach(function(T){var C=T.name,M=T.options,x=M===void 0?{}:M,S=T.effect;if(typeof S=="function"){var k=S({state:u,name:C,instance:p,options:x}),g=function(){};m.push(k||g)}})}function A(){m.forEach(function(T){return T()}),m=[]}return p}}var Ko=xe(),Bo=[bn,Tn,En,gn],Yo=xe({defaultModifiers:Bo}),Uo=[bn,Tn,En,gn,rs,ss,as,es,os],Cn=xe({defaultModifiers:Uo});const ls=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Bi,afterRead:ji,afterWrite:qi,applyStyles:gn,arrow:es,auto:$e,basePlacements:Vt,beforeMain:Fi,beforeRead:Wi,beforeWrite:Yi,bottom:z,clippingParents:Vi,computeStyles:En,createPopper:Cn,createPopperBase:Ko,createPopperLite:Yo,detectOverflow:Mt,end:It,eventListeners:bn,flip:ss,hide:os,left:H,main:Ki,modifierPhases:Gi,offset:rs,placements:pn,popper:Nt,popperGenerator:xe,popperOffsets:Tn,preventOverflow:as,read:zi,reference:Hi,right:j,start:Et,top:V,variationPlacements:rn,viewport:fn,write:Ui},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const rt=new Map,Fe={set(n,t,e){rt.has(n)||rt.set(n,new Map);const i=rt.get(n);if(!i.has(t)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(t,e)},get(n,t){return rt.has(n)&&rt.get(n).get(t)||null},remove(n,t){if(!rt.has(n))return;const e=rt.get(n);e.delete(t),e.size===0&&rt.delete(n)}},qo=1e6,Go=1e3,cn="transitionend",cs=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),n),Qo=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),Xo=n=>{do n+=Math.floor(Math.random()*qo);while(document.getElementById(n));return n},Jo=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const i=Number.parseFloat(t),s=Number.parseFloat(e);return!i&&!s?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*Go)},us=n=>{n.dispatchEvent(new Event(cn))},tt=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),lt=n=>tt(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(cs(n)):null,Ht=n=>{if(!tt(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const i=n.closest("summary");if(i&&i.parentNode!==e||i===null)return!1}return t},ct=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",ds=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?ds(n.parentNode):null},De=()=>{},Zt=n=>{n.offsetHeight},hs=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Ke=[],Zo=n=>{document.readyState==="loading"?(Ke.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Ke)t()}),Ke.push(n)):n()},B=()=>document.documentElement.dir==="rtl",U=n=>{Zo(()=>{const t=hs();if(t){const e=n.NAME,i=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=i,n.jQueryInterface)}})},W=(n,t=[],e=n)=>typeof n=="function"?n(...t):e,fs=(n,t,e=!0)=>{if(!e){W(n);return}const s=Jo(t)+5;let o=!1;const r=({target:a})=>{a===t&&(o=!0,t.removeEventListener(cn,r),W(n))};t.addEventListener(cn,r),setTimeout(()=>{o||us(t)},s)},On=(n,t,e,i)=>{const s=n.length;let o=n.indexOf(t);return o===-1?!e&&i?n[s-1]:n[0]:(o+=e?1:-1,i&&(o=(o+s)%s),n[Math.max(0,Math.min(o,s-1))])},tr=/[^.]*(?=\..*)\.|.*/,er=/\..*/,nr=/::\d+$/,Be={};let Qn=1;const ps={mouseenter:"mouseover",mouseleave:"mouseout"},ir=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function ms(n,t){return t&&`${t}::${Qn++}`||n.uidEvent||Qn++}function gs(n){const t=ms(n);return n.uidEvent=t,Be[t]=Be[t]||{},Be[t]}function sr(n,t){return function e(i){return Nn(i,{delegateTarget:n}),e.oneOff&&h.off(n,i.type,t),t.apply(n,[i])}}function or(n,t,e){return function i(s){const o=n.querySelectorAll(t);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return Nn(s,{delegateTarget:r}),i.oneOff&&h.off(n,s.type,t,e),e.apply(r,[s])}}function _s(n,t,e=null){return Object.values(n).find(i=>i.callable===t&&i.delegationSelector===e)}function vs(n,t,e){const i=typeof t=="string",s=i?e:t||e;let o=Es(n);return ir.has(o)||(o=n),[i,s,o]}function Xn(n,t,e,i,s){if(typeof t!="string"||!n)return;let[o,r,a]=vs(t,e,i);t in ps&&(r=(N=>function(A){if(!A.relatedTarget||A.relatedTarget!==A.delegateTarget&&!A.delegateTarget.contains(A.relatedTarget))return N.call(this,A)})(r));const l=gs(n),c=l[a]||(l[a]={}),u=_s(c,r,o?e:null);if(u){u.oneOff=u.oneOff&&s;return}const m=ms(r,t.replace(tr,"")),f=o?or(n,e,r):sr(n,r);f.delegationSelector=o?e:null,f.callable=r,f.oneOff=s,f.uidEvent=m,c[m]=f,n.addEventListener(a,f,o)}function un(n,t,e,i,s){const o=_s(t[e],i,s);o&&(n.removeEventListener(e,o,!!s),delete t[e][o.uidEvent])}function rr(n,t,e,i){const s=t[e]||{};for(const[o,r]of Object.entries(s))o.includes(i)&&un(n,t,e,r.callable,r.delegationSelector)}function Es(n){return n=n.replace(er,""),ps[n]||n}const h={on(n,t,e,i){Xn(n,t,e,i,!1)},one(n,t,e,i){Xn(n,t,e,i,!0)},off(n,t,e,i){if(typeof t!="string"||!n)return;const[s,o,r]=vs(t,e,i),a=r!==t,l=gs(n),c=l[r]||{},u=t.startsWith(".");if(typeof o<"u"){if(!Object.keys(c).length)return;un(n,l,r,o,s?e:null);return}if(u)for(const m of Object.keys(l))rr(n,l,m,t.slice(1));for(const[m,f]of Object.entries(c)){const p=m.replace(nr,"");(!a||t.includes(p))&&un(n,l,r,f.callable,f.delegationSelector)}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const i=hs(),s=Es(t),o=t!==s;let r=null,a=!0,l=!0,c=!1;o&&i&&(r=i.Event(t,e),i(n).trigger(r),a=!r.isPropagationStopped(),l=!r.isImmediatePropagationStopped(),c=r.isDefaultPrevented());const u=Nn(new Event(t,{bubbles:a,cancelable:!0}),e);return c&&u.preventDefault(),l&&n.dispatchEvent(u),u.defaultPrevented&&r&&r.preventDefault(),u}};function Nn(n,t={}){for(const[e,i]of Object.entries(t))try{n[e]=i}catch{Object.defineProperty(n,e,{configurable:!0,get(){return i}})}return n}function Jn(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function Ye(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const et={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${Ye(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${Ye(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(i=>i.startsWith("bs")&&!i.startsWith("bsConfig"));for(const i of e){let s=i.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),t[s]=Jn(n.dataset[i])}return t},getDataAttribute(n,t){return Jn(n.getAttribute(`data-bs-${Ye(t)}`))}};class te{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=tt(e)?et.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof i=="object"?i:{},...tt(e)?et.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[i,s]of Object.entries(e)){const o=t[i],r=tt(o)?"element":Qo(o);if(!new RegExp(s).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${s}".`)}}}const ar="5.3.2";class q extends te{constructor(t,e){super(),t=lt(t),t&&(this._element=t,this._config=this._getConfig(e),Fe.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Fe.remove(this._element,this.constructor.DATA_KEY),h.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){fs(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Fe.get(lt(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return ar}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Ue=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?cs(e.trim()):null}return t},O={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let i=n.parentNode.closest(t);for(;i;)e.push(i),i=i.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!ct(e)&&Ht(e))},getSelectorFromElement(n){const t=Ue(n);return t&&O.findOne(t)?t:null},getElementFromSelector(n){const t=Ue(n);return t?O.findOne(t):null},getMultipleElementsFromSelector(n){const t=Ue(n);return t?O.find(t):[]}},Me=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,i=n.NAME;h.on(document,e,`[data-bs-dismiss="${i}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),ct(this))return;const o=O.getElementFromSelector(this)||this.closest(`.${i}`);n.getOrCreateInstance(o)[t]()})},lr="alert",cr="bs.alert",bs=`.${cr}`,ur=`close${bs}`,dr=`closed${bs}`,hr="fade",fr="show";class Pe extends q{static get NAME(){return lr}close(){if(h.trigger(this._element,ur).defaultPrevented)return;this._element.classList.remove(fr);const e=this._element.classList.contains(hr);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),h.trigger(this._element,dr),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=Pe.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Me(Pe,"close");U(Pe);const pr="button",mr="bs.button",gr=`.${mr}`,_r=".data-api",vr="active",Zn='[data-bs-toggle="button"]',Er=`click${gr}${_r}`;class Re extends q{static get NAME(){return pr}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(vr))}static jQueryInterface(t){return this.each(function(){const e=Re.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}h.on(document,Er,Zn,n=>{n.preventDefault();const t=n.target.closest(Zn);Re.getOrCreateInstance(t).toggle()});U(Re);const br="swipe",Wt=".bs.swipe",yr=`touchstart${Wt}`,Ar=`touchmove${Wt}`,wr=`touchend${Wt}`,Tr=`pointerdown${Wt}`,Cr=`pointerup${Wt}`,Or="touch",Nr="pen",Sr="pointer-event",Dr=40,Lr={endCallback:null,leftCallback:null,rightCallback:null},Ir={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Le extends te{constructor(t,e){super(),this._element=t,!(!t||!Le.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Lr}static get DefaultType(){return Ir}static get NAME(){return br}dispose(){h.off(this._element,Wt)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),W(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=Dr)return;const e=t/this._deltaX;this._deltaX=0,e&&W(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(h.on(this._element,Tr,t=>this._start(t)),h.on(this._element,Cr,t=>this._end(t)),this._element.classList.add(Sr)):(h.on(this._element,yr,t=>this._start(t)),h.on(this._element,Ar,t=>this._move(t)),h.on(this._element,wr,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Nr||t.pointerType===Or)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const $r="carousel",kr="bs.carousel",ht=`.${kr}`,ys=".data-api",xr="ArrowLeft",Mr="ArrowRight",Pr=500,Bt="next",Ct="prev",St="left",me="right",Rr=`slide${ht}`,qe=`slid${ht}`,Vr=`keydown${ht}`,Hr=`mouseenter${ht}`,Wr=`mouseleave${ht}`,zr=`dragstart${ht}`,jr=`load${ht}${ys}`,Fr=`click${ht}${ys}`,As="carousel",le="active",Kr="slide",Br="carousel-item-end",Yr="carousel-item-start",Ur="carousel-item-next",qr="carousel-item-prev",ws=".active",Ts=".carousel-item",Gr=ws+Ts,Qr=".carousel-item img",Xr=".carousel-indicators",Jr="[data-bs-slide], [data-bs-slide-to]",Zr='[data-bs-ride="carousel"]',ta={[xr]:me,[Mr]:St},ea={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},na={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ee extends q{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=O.findOne(Xr,this._element),this._addEventListeners(),this._config.ride===As&&this.cycle()}static get Default(){return ea}static get DefaultType(){return na}static get NAME(){return $r}next(){this._slide(Bt)}nextWhenVisible(){!document.hidden&&Ht(this._element)&&this.next()}prev(){this._slide(Ct)}pause(){this._isSliding&&us(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){h.one(this._element,qe,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){h.one(this._element,qe,()=>this.to(t));return}const i=this._getItemIndex(this._getActive());if(i===t)return;const s=t>i?Bt:Ct;this._slide(s,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&h.on(this._element,Vr,t=>this._keydown(t)),this._config.pause==="hover"&&(h.on(this._element,Hr,()=>this.pause()),h.on(this._element,Wr,()=>this._maybeEnableCycle())),this._config.touch&&Le.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const i of O.find(Qr,this._element))h.on(i,zr,s=>s.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(St)),rightCallback:()=>this._slide(this._directionToOrder(me)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Pr+this._config.interval))}};this._swipeHelper=new Le(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=ta[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=O.findOne(ws,this._indicatorsElement);e.classList.remove(le),e.removeAttribute("aria-current");const i=O.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(le),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),s=t===Bt,o=e||On(this._getItems(),i,s,this._config.wrap);if(o===i)return;const r=this._getItemIndex(o),a=p=>h.trigger(this._element,p,{relatedTarget:o,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:r});if(a(Rr).defaultPrevented||!i||!o)return;const c=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(r),this._activeElement=o;const u=s?Yr:Br,m=s?Ur:qr;o.classList.add(m),Zt(o),i.classList.add(u),o.classList.add(u);const f=()=>{o.classList.remove(u,m),o.classList.add(le),i.classList.remove(le,m,u),this._isSliding=!1,a(qe)};this._queueCallback(f,i,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(Kr)}_getActive(){return O.findOne(Gr,this._element)}_getItems(){return O.find(Ts,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return B()?t===St?Ct:Bt:t===St?Bt:Ct}_orderToDirection(t){return B()?t===Ct?St:me:t===Ct?me:St}static jQueryInterface(t){return this.each(function(){const e=ee.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(document,Fr,Jr,function(n){const t=O.getElementFromSelector(this);if(!t||!t.classList.contains(As))return;n.preventDefault();const e=ee.getOrCreateInstance(t),i=this.getAttribute("data-bs-slide-to");if(i){e.to(i),e._maybeEnableCycle();return}if(et.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});h.on(window,jr,()=>{const n=O.find(Zr);for(const t of n)ee.getOrCreateInstance(t)});U(ee);const ia="collapse",sa="bs.collapse",ne=`.${sa}`,oa=".data-api",ra=`show${ne}`,aa=`shown${ne}`,la=`hide${ne}`,ca=`hidden${ne}`,ua=`click${ne}${oa}`,Ge="show",Lt="collapse",ce="collapsing",da="collapsed",ha=`:scope .${Lt} .${Lt}`,fa="collapse-horizontal",pa="width",ma="height",ga=".collapse.show, .collapse.collapsing",dn='[data-bs-toggle="collapse"]',_a={parent:null,toggle:!0},va={parent:"(null|element)",toggle:"boolean"};class Xt extends q{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=O.find(dn);for(const s of i){const o=O.getSelectorFromElement(s),r=O.find(o).filter(a=>a===this._element);o!==null&&r.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return _a}static get DefaultType(){return va}static get NAME(){return ia}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(ga).filter(a=>a!==this._element).map(a=>Xt.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||h.trigger(this._element,ra).defaultPrevented)return;for(const a of t)a.hide();const i=this._getDimension();this._element.classList.remove(Lt),this._element.classList.add(ce),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(ce),this._element.classList.add(Lt,Ge),this._element.style[i]="",h.trigger(this._element,aa)},r=`scroll${i[0].toUpperCase()+i.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[i]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown()||h.trigger(this._element,la).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Zt(this._element),this._element.classList.add(ce),this._element.classList.remove(Lt,Ge);for(const s of this._triggerArray){const o=O.getElementFromSelector(s);o&&!this._isShown(o)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(ce),this._element.classList.add(Lt),h.trigger(this._element,ca)};this._element.style[e]="",this._queueCallback(i,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Ge)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=lt(t.parent),t}_getDimension(){return this._element.classList.contains(fa)?pa:ma}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(dn);for(const e of t){const i=O.getElementFromSelector(e);i&&this._addAriaAndCollapsedClass([e],this._isShown(i))}}_getFirstLevelChildren(t){const e=O.find(ha,this._config.parent);return O.find(t,this._config.parent).filter(i=>!e.includes(i))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle(da,!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const i=Xt.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof i[t]>"u")throw new TypeError(`No method named "${t}"`);i[t]()}})}}h.on(document,ua,dn,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const t of O.getMultipleElementsFromSelector(this))Xt.getOrCreateInstance(t,{toggle:!1}).toggle()});U(Xt);const ti="dropdown",Ea="bs.dropdown",yt=`.${Ea}`,Sn=".data-api",ba="Escape",ei="Tab",ya="ArrowUp",ni="ArrowDown",Aa=2,wa=`hide${yt}`,Ta=`hidden${yt}`,Ca=`show${yt}`,Oa=`shown${yt}`,Cs=`click${yt}${Sn}`,Os=`keydown${yt}${Sn}`,Na=`keyup${yt}${Sn}`,Dt="show",Sa="dropup",Da="dropend",La="dropstart",Ia="dropup-center",$a="dropdown-center",gt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',ka=`${gt}.${Dt}`,ge=".dropdown-menu",xa=".navbar",Ma=".navbar-nav",Pa=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ra=B()?"top-end":"top-start",Va=B()?"top-start":"top-end",Ha=B()?"bottom-end":"bottom-start",Wa=B()?"bottom-start":"bottom-end",za=B()?"left-start":"right-start",ja=B()?"right-start":"left-start",Fa="top",Ka="bottom",Ba={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Ya={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class X extends q{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=O.next(this._element,ge)[0]||O.prev(this._element,ge)[0]||O.findOne(ge,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Ba}static get DefaultType(){return Ya}static get NAME(){return ti}toggle(){return this._isShown()?this.hide():this.show()}show(){if(ct(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!h.trigger(this._element,Ca,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Ma))for(const i of[].concat(...document.body.children))h.on(i,"mouseover",De);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Dt),this._element.classList.add(Dt),h.trigger(this._element,Oa,t)}}hide(){if(ct(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!h.trigger(this._element,wa,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))h.off(i,"mouseover",De);this._popper&&this._popper.destroy(),this._menu.classList.remove(Dt),this._element.classList.remove(Dt),this._element.setAttribute("aria-expanded","false"),et.removeDataAttribute(this._menu,"popper"),h.trigger(this._element,Ta,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!tt(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${ti.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof ls>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:tt(this._config.reference)?t=lt(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=Cn(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Dt)}_getPlacement(){const t=this._parent;if(t.classList.contains(Da))return za;if(t.classList.contains(La))return ja;if(t.classList.contains(Ia))return Fa;if(t.classList.contains($a))return Ka;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(Sa)?e?Va:Ra:e?Wa:Ha}_detectNavbar(){return this._element.closest(xa)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(et.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...W(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const i=O.find(Pa,this._menu).filter(s=>Ht(s));i.length&&On(i,e,t===ni,!i.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=X.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===Aa||t.type==="keyup"&&t.key!==ei)return;const e=O.find(ka);for(const i of e){const s=X.getInstance(i);if(!s||s._config.autoClose===!1)continue;const o=t.composedPath(),r=o.includes(s._menu);if(o.includes(s._element)||s._config.autoClose==="inside"&&!r||s._config.autoClose==="outside"&&r||s._menu.contains(t.target)&&(t.type==="keyup"&&t.key===ei||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:s._element};t.type==="click"&&(a.clickEvent=t),s._completeHide(a)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i=t.key===ba,s=[ya,ni].includes(t.key);if(!s&&!i||e&&!i)return;t.preventDefault();const o=this.matches(gt)?this:O.prev(this,gt)[0]||O.next(this,gt)[0]||O.findOne(gt,t.delegateTarget.parentNode),r=X.getOrCreateInstance(o);if(s){t.stopPropagation(),r.show(),r._selectMenuItem(t);return}r._isShown()&&(t.stopPropagation(),r.hide(),o.focus())}}h.on(document,Os,gt,X.dataApiKeydownHandler);h.on(document,Os,ge,X.dataApiKeydownHandler);h.on(document,Cs,X.clearMenus);h.on(document,Na,X.clearMenus);h.on(document,Cs,gt,function(n){n.preventDefault(),X.getOrCreateInstance(this).toggle()});U(X);const Ns="backdrop",Ua="fade",ii="show",si=`mousedown.bs.${Ns}`,qa={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Ga={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ss extends te{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return qa}static get DefaultType(){return Ga}static get NAME(){return Ns}show(t){if(!this._config.isVisible){W(t);return}this._append();const e=this._getElement();this._config.isAnimated&&Zt(e),e.classList.add(ii),this._emulateAnimation(()=>{W(t)})}hide(t){if(!this._config.isVisible){W(t);return}this._getElement().classList.remove(ii),this._emulateAnimation(()=>{this.dispose(),W(t)})}dispose(){this._isAppended&&(h.off(this._element,si),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Ua),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=lt(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),h.on(t,si,()=>{W(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){fs(t,this._getElement(),this._config.isAnimated)}}const Qa="focustrap",Xa="bs.focustrap",Ie=`.${Xa}`,Ja=`focusin${Ie}`,Za=`keydown.tab${Ie}`,tl="Tab",el="forward",oi="backward",nl={autofocus:!0,trapElement:null},il={autofocus:"boolean",trapElement:"element"};class Ds extends te{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return nl}static get DefaultType(){return il}static get NAME(){return Qa}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),h.off(document,Ie),h.on(document,Ja,t=>this._handleFocusin(t)),h.on(document,Za,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,h.off(document,Ie))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=O.focusableChildren(e);i.length===0?e.focus():this._lastTabNavDirection===oi?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){t.key===tl&&(this._lastTabNavDirection=t.shiftKey?oi:el)}}const ri=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ai=".sticky-top",ue="padding-right",li="margin-right";class hn{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ue,e=>e+t),this._setElementAttributes(ri,ue,e=>e+t),this._setElementAttributes(ai,li,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ue),this._resetElementAttributes(ri,ue),this._resetElementAttributes(ai,li)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth(),o=r=>{if(r!==this._element&&window.innerWidth>r.clientWidth+s)return;this._saveInitialAttribute(r,e);const a=window.getComputedStyle(r).getPropertyValue(e);r.style.setProperty(e,`${i(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,o)}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&et.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){const i=s=>{const o=et.getDataAttribute(s,e);if(o===null){s.style.removeProperty(e);return}et.removeDataAttribute(s,e),s.style.setProperty(e,o)};this._applyManipulationCallback(t,i)}_applyManipulationCallback(t,e){if(tt(t)){e(t);return}for(const i of O.find(t,this._element))e(i)}}const sl="modal",ol="bs.modal",Y=`.${ol}`,rl=".data-api",al="Escape",ll=`hide${Y}`,cl=`hidePrevented${Y}`,Ls=`hidden${Y}`,Is=`show${Y}`,ul=`shown${Y}`,dl=`resize${Y}`,hl=`click.dismiss${Y}`,fl=`mousedown.dismiss${Y}`,pl=`keydown.dismiss${Y}`,ml=`click${Y}${rl}`,ci="modal-open",gl="fade",ui="show",Qe="modal-static",_l=".modal.show",vl=".modal-dialog",El=".modal-body",bl='[data-bs-toggle="modal"]',yl={backdrop:!0,focus:!0,keyboard:!0},Al={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Pt extends q{constructor(t,e){super(t,e),this._dialog=O.findOne(vl,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new hn,this._addEventListeners()}static get Default(){return yl}static get DefaultType(){return Al}static get NAME(){return sl}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||h.trigger(this._element,Is,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ci),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||h.trigger(this._element,ll).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ui),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){h.off(window,Y),h.off(this._dialog,Y),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ss({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ds({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=O.findOne(El,this._dialog);e&&(e.scrollTop=0),Zt(this._element),this._element.classList.add(ui);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,h.trigger(this._element,ul,{relatedTarget:t})};this._queueCallback(i,this._dialog,this._isAnimated())}_addEventListeners(){h.on(this._element,pl,t=>{if(t.key===al){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),h.on(window,dl,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),h.on(this._element,fl,t=>{h.one(this._element,hl,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(ci),this._resetAdjustments(),this._scrollBar.reset(),h.trigger(this._element,Ls)})}_isAnimated(){return this._element.classList.contains(gl)}_triggerBackdropTransition(){if(h.trigger(this._element,cl).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,i=this._element.style.overflowY;i==="hidden"||this._element.classList.contains(Qe)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(Qe),this._queueCallback(()=>{this._element.classList.remove(Qe),this._queueCallback(()=>{this._element.style.overflowY=i},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const s=B()?"paddingLeft":"paddingRight";this._element.style[s]=`${e}px`}if(!i&&t){const s=B()?"paddingRight":"paddingLeft";this._element.style[s]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const i=Pt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof i[t]>"u")throw new TypeError(`No method named "${t}"`);i[t](e)}})}}h.on(document,ml,bl,function(n){const t=O.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),h.one(t,Is,s=>{s.defaultPrevented||h.one(t,Ls,()=>{Ht(this)&&this.focus()})});const e=O.findOne(_l);e&&Pt.getInstance(e).hide(),Pt.getOrCreateInstance(t).toggle(this)});Me(Pt);U(Pt);const wl="offcanvas",Tl="bs.offcanvas",it=`.${Tl}`,$s=".data-api",Cl=`load${it}${$s}`,Ol="Escape",di="show",hi="showing",fi="hiding",Nl="offcanvas-backdrop",ks=".offcanvas.show",Sl=`show${it}`,Dl=`shown${it}`,Ll=`hide${it}`,pi=`hidePrevented${it}`,xs=`hidden${it}`,Il=`resize${it}`,$l=`click${it}${$s}`,kl=`keydown.dismiss${it}`,xl='[data-bs-toggle="offcanvas"]',Ml={backdrop:!0,keyboard:!0,scroll:!1},Pl={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class ut extends q{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Ml}static get DefaultType(){return Pl}static get NAME(){return wl}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||h.trigger(this._element,Sl,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new hn().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(hi);const i=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(di),this._element.classList.remove(hi),h.trigger(this._element,Dl,{relatedTarget:t})};this._queueCallback(i,this._element,!0)}hide(){if(!this._isShown||h.trigger(this._element,Ll).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(fi),this._backdrop.hide();const e=()=>{this._element.classList.remove(di,fi),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new hn().reset(),h.trigger(this._element,xs)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){h.trigger(this._element,pi);return}this.hide()},e=!!this._config.backdrop;return new Ss({className:Nl,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new Ds({trapElement:this._element})}_addEventListeners(){h.on(this._element,kl,t=>{if(t.key===Ol){if(this._config.keyboard){this.hide();return}h.trigger(this._element,pi)}})}static jQueryInterface(t){return this.each(function(){const e=ut.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}h.on(document,$l,xl,function(n){const t=O.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),ct(this))return;h.one(t,xs,()=>{Ht(this)&&this.focus()});const e=O.findOne(ks);e&&e!==t&&ut.getInstance(e).hide(),ut.getOrCreateInstance(t).toggle(this)});h.on(window,Cl,()=>{for(const n of O.find(ks))ut.getOrCreateInstance(n).show()});h.on(window,Il,()=>{for(const n of O.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&ut.getOrCreateInstance(n).hide()});Me(ut);U(ut);const Rl=/^aria-[\w-]*$/i,Ms={"*":["class","dir","id","lang","role",Rl],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Vl=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Hl=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Wl=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?Vl.has(e)?!!Hl.test(n.nodeValue):!0:t.filter(i=>i instanceof RegExp).some(i=>i.test(e))};function zl(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const s=new window.DOMParser().parseFromString(n,"text/html"),o=[].concat(...s.body.querySelectorAll("*"));for(const r of o){const a=r.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){r.remove();continue}const l=[].concat(...r.attributes),c=[].concat(t["*"]||[],t[a]||[]);for(const u of l)Wl(u,c)||r.removeAttribute(u.nodeName)}return s.body.innerHTML}const jl="TemplateFactory",Fl={allowList:Ms,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Kl={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Bl={entry:"(string|element|function|null)",selector:"(string|element)"};class Yl extends te{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Fl}static get DefaultType(){return Kl}static get NAME(){return jl}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[s,o]of Object.entries(this._config.content))this._setContent(t,o,s);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Bl)}_setContent(t,e,i){const s=O.findOne(i,t);if(s){if(e=this._resolvePossibleFunction(e),!e){s.remove();return}if(tt(e)){this._putElementInTemplate(lt(e),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(e);return}s.textContent=e}}_maybeSanitize(t){return this._config.sanitize?zl(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return W(t,[this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const Ul="tooltip",ql=new Set(["sanitize","allowList","sanitizeFn"]),Xe="fade",Gl="modal",de="show",Ql=".tooltip-inner",mi=`.${Gl}`,gi="hide.bs.modal",Yt="hover",Je="focus",Xl="click",Jl="manual",Zl="hide",tc="hidden",ec="show",nc="shown",ic="inserted",sc="click",oc="focusin",rc="focusout",ac="mouseenter",lc="mouseleave",cc={AUTO:"auto",TOP:"top",RIGHT:B()?"left":"right",BOTTOM:"bottom",LEFT:B()?"right":"left"},uc={allowList:Ms,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},dc={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class zt extends q{constructor(t,e){if(typeof ls>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return uc}static get DefaultType(){return dc}static get NAME(){return Ul}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),h.off(this._element.closest(mi),gi,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=h.trigger(this._element,this.constructor.eventName(ec)),i=(ds(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!i)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:o}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(o.append(s),h.trigger(this._element,this.constructor.eventName(ic))),this._popper=this._createPopper(s),s.classList.add(de),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))h.on(a,"mouseover",De);const r=()=>{h.trigger(this._element,this.constructor.eventName(nc)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(r,this.tip,this._isAnimated())}hide(){if(!this._isShown()||h.trigger(this._element,this.constructor.eventName(Zl)).defaultPrevented)return;if(this._getTipElement().classList.remove(de),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))h.off(s,"mouseover",De);this._activeTrigger[Xl]=!1,this._activeTrigger[Je]=!1,this._activeTrigger[Yt]=!1,this._isHovered=null;const i=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),h.trigger(this._element,this.constructor.eventName(tc)))};this._queueCallback(i,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Xe,de),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=Xo(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Xe),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Yl({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Ql]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Xe)}_isShown(){return this.tip&&this.tip.classList.contains(de)}_createPopper(t){const e=W(this._config.placement,[this,t,this._element]),i=cc[e.toUpperCase()];return Cn(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return W(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:i=>{this._getTipElement().setAttribute("data-popper-placement",i.state.placement)}}]};return{...e,...W(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")h.on(this._element,this.constructor.eventName(sc),this._config.selector,i=>{this._initializeOnDelegatedTarget(i).toggle()});else if(e!==Jl){const i=e===Yt?this.constructor.eventName(ac):this.constructor.eventName(oc),s=e===Yt?this.constructor.eventName(lc):this.constructor.eventName(rc);h.on(this._element,i,this._config.selector,o=>{const r=this._initializeOnDelegatedTarget(o);r._activeTrigger[o.type==="focusin"?Je:Yt]=!0,r._enter()}),h.on(this._element,s,this._config.selector,o=>{const r=this._initializeOnDelegatedTarget(o);r._activeTrigger[o.type==="focusout"?Je:Yt]=r._element.contains(o.relatedTarget),r._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},h.on(this._element.closest(mi),gi,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=et.getDataAttributes(this._element);for(const i of Object.keys(e))ql.has(i)&&delete e[i];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:lt(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=zt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}U(zt);const hc="popover",fc=".popover-header",pc=".popover-body",mc={...zt.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},gc={...zt.DefaultType,content:"(null|string|element|function)"};class Dn extends zt{static get Default(){return mc}static get DefaultType(){return gc}static get NAME(){return hc}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[fc]:this._getTitle(),[pc]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=Dn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}U(Dn);const _c="scrollspy",vc="bs.scrollspy",Ln=`.${vc}`,Ec=".data-api",bc=`activate${Ln}`,_i=`click${Ln}`,yc=`load${Ln}${Ec}`,Ac="dropdown-item",Ot="active",wc='[data-bs-spy="scroll"]',Ze="[href]",Tc=".nav, .list-group",vi=".nav-link",Cc=".nav-item",Oc=".list-group-item",Nc=`${vi}, ${Cc} > ${vi}, ${Oc}`,Sc=".dropdown",Dc=".dropdown-toggle",Lc={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Ic={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Ve extends q{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Lc}static get DefaultType(){return Ic}static get NAME(){return _c}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=lt(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(h.off(this._config.target,_i),h.on(this._config.target,_i,Ze,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,s=e.offsetTop-this._element.offsetTop;if(i.scrollTo){i.scrollTo({top:s,behavior:"smooth"});return}i.scrollTop=s}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=r=>this._targetLinks.get(`#${r.target.id}`),i=r=>{this._previousScrollData.visibleEntryTop=r.target.offsetTop,this._process(e(r))},s=(this._rootElement||document.documentElement).scrollTop,o=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const r of t){if(!r.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(r));continue}const a=r.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(o&&a){if(i(r),!s)return;continue}!o&&!a&&i(r)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=O.find(Ze,this._config.target);for(const e of t){if(!e.hash||ct(e))continue;const i=O.findOne(decodeURI(e.hash),this._element);Ht(i)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,i))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Ot),this._activateParents(t),h.trigger(this._element,bc,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(Ac)){O.findOne(Dc,t.closest(Sc)).classList.add(Ot);return}for(const e of O.parents(t,Tc))for(const i of O.prev(e,Nc))i.classList.add(Ot)}_clearActiveClass(t){t.classList.remove(Ot);const e=O.find(`${Ze}.${Ot}`,t);for(const i of e)i.classList.remove(Ot)}static jQueryInterface(t){return this.each(function(){const e=Ve.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(window,yc,()=>{for(const n of O.find(wc))Ve.getOrCreateInstance(n)});U(Ve);const $c="tab",kc="bs.tab",At=`.${kc}`,xc=`hide${At}`,Mc=`hidden${At}`,Pc=`show${At}`,Rc=`shown${At}`,Vc=`click${At}`,Hc=`keydown${At}`,Wc=`load${At}`,zc="ArrowLeft",Ei="ArrowRight",jc="ArrowUp",bi="ArrowDown",tn="Home",yi="End",_t="active",Ai="fade",en="show",Fc="dropdown",Ps=".dropdown-toggle",Kc=".dropdown-menu",nn=`:not(${Ps})`,Bc='.list-group, .nav, [role="tablist"]',Yc=".nav-item, .list-group-item",Uc=`.nav-link${nn}, .list-group-item${nn}, [role="tab"]${nn}`,Rs='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',sn=`${Uc}, ${Rs}`,qc=`.${_t}[data-bs-toggle="tab"], .${_t}[data-bs-toggle="pill"], .${_t}[data-bs-toggle="list"]`;class Rt extends q{constructor(t){super(t),this._parent=this._element.closest(Bc),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),h.on(this._element,Hc,e=>this._keydown(e)))}static get NAME(){return $c}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?h.trigger(e,xc,{relatedTarget:t}):null;h.trigger(t,Pc,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(_t),this._activate(O.getElementFromSelector(t));const i=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(en);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),h.trigger(t,Rc,{relatedTarget:e})};this._queueCallback(i,t,t.classList.contains(Ai))}_deactivate(t,e){if(!t)return;t.classList.remove(_t),t.blur(),this._deactivate(O.getElementFromSelector(t));const i=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(en);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),h.trigger(t,Mc,{relatedTarget:e})};this._queueCallback(i,t,t.classList.contains(Ai))}_keydown(t){if(![zc,Ei,jc,bi,tn,yi].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(s=>!ct(s));let i;if([tn,yi].includes(t.key))i=e[t.key===tn?0:e.length-1];else{const s=[Ei,bi].includes(t.key);i=On(e,t.target,s,!0)}i&&(i.focus({preventScroll:!0}),Rt.getOrCreateInstance(i).show())}_getChildren(){return O.find(sn,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const i of e)this._setInitialAttributesOnChild(i)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=O.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains(Fc))return;const s=(o,r)=>{const a=O.findOne(o,i);a&&a.classList.toggle(r,e)};s(Ps,_t),s(Kc,en),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(_t)}_getInnerElement(t){return t.matches(sn)?t:O.findOne(sn,t)}_getOuterElement(t){return t.closest(Yc)||t}static jQueryInterface(t){return this.each(function(){const e=Rt.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(document,Vc,Rs,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!ct(this)&&Rt.getOrCreateInstance(this).show()});h.on(window,Wc,()=>{for(const n of O.find(qc))Rt.getOrCreateInstance(n)});U(Rt);const Gc="toast",Qc="bs.toast",ft=`.${Qc}`,Xc=`mouseover${ft}`,Jc=`mouseout${ft}`,Zc=`focusin${ft}`,tu=`focusout${ft}`,eu=`hide${ft}`,nu=`hidden${ft}`,iu=`show${ft}`,su=`shown${ft}`,ou="fade",wi="hide",he="show",fe="showing",ru={animation:"boolean",autohide:"boolean",delay:"number"},au={animation:!0,autohide:!0,delay:5e3};class He extends q{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return au}static get DefaultType(){return ru}static get NAME(){return Gc}show(){if(h.trigger(this._element,iu).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(ou);const e=()=>{this._element.classList.remove(fe),h.trigger(this._element,su),this._maybeScheduleHide()};this._element.classList.remove(wi),Zt(this._element),this._element.classList.add(he,fe),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||h.trigger(this._element,eu).defaultPrevented)return;const e=()=>{this._element.classList.add(wi),this._element.classList.remove(fe,he),h.trigger(this._element,nu)};this._element.classList.add(fe),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(he),super.dispose()}isShown(){return this._element.classList.contains(he)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){h.on(this._element,Xc,t=>this._onInteraction(t,!0)),h.on(this._element,Jc,t=>this._onInteraction(t,!1)),h.on(this._element,Zc,t=>this._onInteraction(t,!0)),h.on(this._element,tu,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=He.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Me(He);U(He);const Ti={"/":{page:"pages/home.html",title:"Home",bodyClass:"page-home",init:async()=>{const{init:n}=await Tt(async()=>{const{init:t}=await import("./home-B9wF9J8b.js");return{init:t}},__vite__mapDeps([0,1,2]));n()}},"/physicalizing-emotions":{page:"pages/physicalizing.html",title:"Physicalizing Emotions",bodyClass:"page-physicalizing",init:async()=>{const{init:n}=await Tt(async()=>{const{init:t}=await import("./physicalizing-B2ncQIsy.js");return{init:t}},__vite__mapDeps([3,4,5,2,6]));n()}},"/visualization":{page:"pages/visualization.html",title:"Visualization",bodyClass:"page-visualization",init:async()=>{const{init:n}=await Tt(async()=>{const{init:t}=await import("./visualization-BclDaf9g.js");return{init:t}},__vite__mapDeps([7,2]));n()}},"/visualization/periods":{page:"pages/periods.html",title:"Visualization – Periods",bodyClass:"page-periods",init:async()=>{const{init:n}=await Tt(async()=>{const{init:t}=await import("./periods-v9zjKZ5S.js");return{init:t}},__vite__mapDeps([8,2]));n()}},"/about":{page:"pages/about.html",title:"About",bodyClass:"page-about",init:async()=>{const{init:n}=await Tt(async()=>{const{init:t}=await import("./about-DGX85CKs.js");return{init:t}},__vite__mapDeps([9,2]));n()}},"/epilogue":{page:"pages/epilogue.html",title:"Epilogue",bodyClass:"page-epilogue",init:async()=>{const{init:n}=await Tt(async()=>{const{init:t}=await import("./epilogue-BKgZ0anD.js");return{init:t}},__vite__mapDeps([10,4,5,2]));n()}}},at="/everyday/".replace(/\/$/,""),on=async()=>{let n=window.location.pathname;at!=="/"&&n.startsWith(at)&&(n=n.slice(at.length)),n=n||"/",n.startsWith("/")||(n="/"+n);const t=Ti[n]||Ti["/"];document.title=t.title,ro(t.bodyClass),await oo(t.page),t.init&&await t.init(),window.scrollTo(0,0)};function lu(){document.querySelector("[data-router-view]")&&(document.addEventListener("click",t=>{const e=t.target.closest("[data-link]");if(!e)return;const i=new URL(e.href);if(i.origin!==window.location.origin)return;e.classList.contains("link-back"),t.preventDefault();let s=i.pathname;at!=="/"&&s.startsWith(at)&&(s=s.slice(at.length)||"/"),s=at==="/"?s:at+s,history.pushState({},"",s),on()}),window.addEventListener("popstate",on),on())}var _e={exports:{}},ve={exports:{}},Ee={exports:{}};/*!
  * Bootstrap data.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var cu=Ee.exports,Ci;function uu(){return Ci||(Ci=1,(function(n,t){(function(e,i){n.exports=i()})(cu,(function(){const e=new Map;return{set(s,o,r){e.has(s)||e.set(s,new Map);const a=e.get(s);if(!a.has(o)&&a.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(a.keys())[0]}.`);return}a.set(o,r)},get(s,o){return e.has(s)&&e.get(s).get(o)||null},remove(s,o){if(!e.has(s))return;const r=e.get(s);r.delete(o),r.size===0&&e.delete(s)}}}))})(Ee)),Ee.exports}var be={exports:{}},Ut={exports:{}};/*!
  * Bootstrap index.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var du=Ut.exports,Oi;function st(){return Oi||(Oi=1,(function(n,t){(function(e,i){i(t)})(du,(function(e){const o="transitionend",r=d=>(d&&window.CSS&&window.CSS.escape&&(d=d.replace(/#([^\s"#']+)/g,(v,E)=>`#${CSS.escape(E)}`)),d),a=d=>d==null?`${d}`:Object.prototype.toString.call(d).match(/\s([a-z]+)/i)[1].toLowerCase(),l=d=>{do d+=Math.floor(Math.random()*1e6);while(document.getElementById(d));return d},c=d=>{if(!d)return 0;let{transitionDuration:v,transitionDelay:E}=window.getComputedStyle(d);const b=Number.parseFloat(v),D=Number.parseFloat(E);return!b&&!D?0:(v=v.split(",")[0],E=E.split(",")[0],(Number.parseFloat(v)+Number.parseFloat(E))*1e3)},u=d=>{d.dispatchEvent(new Event(o))},m=d=>!d||typeof d!="object"?!1:(typeof d.jquery<"u"&&(d=d[0]),typeof d.nodeType<"u"),f=d=>m(d)?d.jquery?d[0]:d:typeof d=="string"&&d.length>0?document.querySelector(r(d)):null,p=d=>{if(!m(d)||d.getClientRects().length===0)return!1;const v=getComputedStyle(d).getPropertyValue("visibility")==="visible",E=d.closest("details:not([open])");if(!E)return v;if(E!==d){const b=d.closest("summary");if(b&&b.parentNode!==E||b===null)return!1}return v},N=d=>!d||d.nodeType!==Node.ELEMENT_NODE||d.classList.contains("disabled")?!0:typeof d.disabled<"u"?d.disabled:d.hasAttribute("disabled")&&d.getAttribute("disabled")!=="false",A=d=>{if(!document.documentElement.attachShadow)return null;if(typeof d.getRootNode=="function"){const v=d.getRootNode();return v instanceof ShadowRoot?v:null}return d instanceof ShadowRoot?d:d.parentNode?A(d.parentNode):null},T=()=>{},C=d=>{d.offsetHeight},M=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,x=[],S=d=>{document.readyState==="loading"?(x.length||document.addEventListener("DOMContentLoaded",()=>{for(const v of x)v()}),x.push(d)):d()},k=()=>document.documentElement.dir==="rtl",g=d=>{S(()=>{const v=M();if(v){const E=d.NAME,b=v.fn[E];v.fn[E]=d.jQueryInterface,v.fn[E].Constructor=d,v.fn[E].noConflict=()=>(v.fn[E]=b,d.jQueryInterface)}})},_=(d,v=[],E=d)=>typeof d=="function"?d(...v):E,y=(d,v,E=!0)=>{if(!E){_(d);return}const D=c(v)+5;let L=!1;const I=({target:P})=>{P===v&&(L=!0,v.removeEventListener(o,I),_(d))};v.addEventListener(o,I),setTimeout(()=>{L||u(v)},D)},w=(d,v,E,b)=>{const D=d.length;let L=d.indexOf(v);return L===-1?!E&&b?d[D-1]:d[0]:(L+=E?1:-1,b&&(L=(L+D)%D),d[Math.max(0,Math.min(L,D-1))])};e.defineJQueryPlugin=g,e.execute=_,e.executeAfterTransition=y,e.findShadowRoot=A,e.getElement=f,e.getNextActiveElement=w,e.getTransitionDurationFromElement=c,e.getUID=l,e.getjQuery=M,e.isDisabled=N,e.isElement=m,e.isRTL=k,e.isVisible=p,e.noop=T,e.onDOMContentLoaded=S,e.parseSelector=r,e.reflow=C,e.toType=a,e.triggerTransitionEnd=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}))})(Ut,Ut.exports)),Ut.exports}/*!
  * Bootstrap event-handler.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var hu=be.exports,Ni;function jt(){return Ni||(Ni=1,(function(n,t){(function(e,i){n.exports=i(st())})(hu,(function(e){const i=/[^.]*(?=\..*)\.|.*/,s=/\..*/,o=/::\d+$/,r={};let a=1;const l={mouseenter:"mouseover",mouseleave:"mouseout"},c=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function u(g,_){return _&&`${_}::${a++}`||g.uidEvent||a++}function m(g){const _=u(g);return g.uidEvent=_,r[_]=r[_]||{},r[_]}function f(g,_){return function y(w){return k(w,{delegateTarget:g}),y.oneOff&&S.off(g,w.type,_),_.apply(g,[w])}}function p(g,_,y){return function w(d){const v=g.querySelectorAll(_);for(let{target:E}=d;E&&E!==this;E=E.parentNode)for(const b of v)if(b===E)return k(d,{delegateTarget:E}),w.oneOff&&S.off(g,d.type,_,y),y.apply(E,[d])}}function N(g,_,y=null){return Object.values(g).find(w=>w.callable===_&&w.delegationSelector===y)}function A(g,_,y){const w=typeof _=="string",d=w?y:_||y;let v=x(g);return c.has(v)||(v=g),[w,d,v]}function T(g,_,y,w,d){if(typeof _!="string"||!g)return;let[v,E,b]=A(_,y,w);_ in l&&(E=(Z=>function(G){if(!G.relatedTarget||G.relatedTarget!==G.delegateTarget&&!G.delegateTarget.contains(G.relatedTarget))return Z.call(this,G)})(E));const D=m(g),L=D[b]||(D[b]={}),I=N(L,E,v?y:null);if(I){I.oneOff=I.oneOff&&d;return}const P=u(E,_.replace(i,"")),$=v?p(g,y,E):f(g,E);$.delegationSelector=v?y:null,$.callable=E,$.oneOff=d,$.uidEvent=P,L[P]=$,g.addEventListener(b,$,v)}function C(g,_,y,w,d){const v=N(_[y],w,d);v&&(g.removeEventListener(y,v,!!d),delete _[y][v.uidEvent])}function M(g,_,y,w){const d=_[y]||{};for(const[v,E]of Object.entries(d))v.includes(w)&&C(g,_,y,E.callable,E.delegationSelector)}function x(g){return g=g.replace(s,""),l[g]||g}const S={on(g,_,y,w){T(g,_,y,w,!1)},one(g,_,y,w){T(g,_,y,w,!0)},off(g,_,y,w){if(typeof _!="string"||!g)return;const[d,v,E]=A(_,y,w),b=E!==_,D=m(g),L=D[E]||{},I=_.startsWith(".");if(typeof v<"u"){if(!Object.keys(L).length)return;C(g,D,E,v,d?y:null);return}if(I)for(const P of Object.keys(D))M(g,D,P,_.slice(1));for(const[P,$]of Object.entries(L)){const R=P.replace(o,"");(!b||_.includes(R))&&C(g,D,E,$.callable,$.delegationSelector)}},trigger(g,_,y){if(typeof _!="string"||!g)return null;const w=e.getjQuery(),d=x(_),v=_!==d;let E=null,b=!0,D=!0,L=!1;v&&w&&(E=w.Event(_,y),w(g).trigger(E),b=!E.isPropagationStopped(),D=!E.isImmediatePropagationStopped(),L=E.isDefaultPrevented());const I=k(new Event(_,{bubbles:b,cancelable:!0}),y);return L&&I.preventDefault(),D&&g.dispatchEvent(I),I.defaultPrevented&&E&&E.preventDefault(),I}};function k(g,_={}){for(const[y,w]of Object.entries(_))try{g[y]=w}catch{Object.defineProperty(g,y,{configurable:!0,get(){return w}})}return g}return S}))})(be)),be.exports}var ye={exports:{}},Ae={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var fu=Ae.exports,Si;function Vs(){return Si||(Si=1,(function(n,t){(function(e,i){n.exports=i()})(fu,(function(){function e(o){if(o==="true")return!0;if(o==="false")return!1;if(o===Number(o).toString())return Number(o);if(o===""||o==="null")return null;if(typeof o!="string")return o;try{return JSON.parse(decodeURIComponent(o))}catch{return o}}function i(o){return o.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}return{setDataAttribute(o,r,a){o.setAttribute(`data-bs-${i(r)}`,a)},removeDataAttribute(o,r){o.removeAttribute(`data-bs-${i(r)}`)},getDataAttributes(o){if(!o)return{};const r={},a=Object.keys(o.dataset).filter(l=>l.startsWith("bs")&&!l.startsWith("bsConfig"));for(const l of a){let c=l.replace(/^bs/,"");c=c.charAt(0).toLowerCase()+c.slice(1,c.length),r[c]=e(o.dataset[l])}return r},getDataAttribute(o,r){return e(o.getAttribute(`data-bs-${i(r)}`))}}}))})(Ae)),Ae.exports}/*!
  * Bootstrap config.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var pu=ye.exports,Di;function In(){return Di||(Di=1,(function(n,t){(function(e,i){n.exports=i(Vs(),st())})(pu,(function(e,i){class s{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(r){return r=this._mergeConfigObj(r),r=this._configAfterMerge(r),this._typeCheckConfig(r),r}_configAfterMerge(r){return r}_mergeConfigObj(r,a){const l=i.isElement(a)?e.getDataAttribute(a,"config"):{};return{...this.constructor.Default,...typeof l=="object"?l:{},...i.isElement(a)?e.getDataAttributes(a):{},...typeof r=="object"?r:{}}}_typeCheckConfig(r,a=this.constructor.DefaultType){for(const[l,c]of Object.entries(a)){const u=r[l],m=i.isElement(u)?"element":i.toType(u);if(!new RegExp(c).test(m))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${l}" provided type "${m}" but expected type "${c}".`)}}}return s}))})(ye)),ye.exports}/*!
  * Bootstrap base-component.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var mu=ve.exports,Li;function Hs(){return Li||(Li=1,(function(n,t){(function(e,i){n.exports=i(uu(),jt(),In(),st())})(mu,(function(e,i,s,o){const r="5.3.2";class a extends s{constructor(c,u){super(),c=o.getElement(c),c&&(this._element=c,this._config=this._getConfig(u),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),i.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,u,m=!0){o.executeAfterTransition(c,u,m)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return e.get(o.getElement(c),this.DATA_KEY)}static getOrCreateInstance(c,u={}){return this.getInstance(c)||new this(c,typeof u=="object"?u:null)}static get VERSION(){return r}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}return a}))})(ve)),ve.exports}var we={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var gu=we.exports,Ii;function ie(){return Ii||(Ii=1,(function(n,t){(function(e,i){n.exports=i(st())})(gu,(function(e){const i=o=>{let r=o.getAttribute("data-bs-target");if(!r||r==="#"){let a=o.getAttribute("href");if(!a||!a.includes("#")&&!a.startsWith("."))return null;a.includes("#")&&!a.startsWith("#")&&(a=`#${a.split("#")[1]}`),r=a&&a!=="#"?e.parseSelector(a.trim()):null}return r},s={find(o,r=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(r,o))},findOne(o,r=document.documentElement){return Element.prototype.querySelector.call(r,o)},children(o,r){return[].concat(...o.children).filter(a=>a.matches(r))},parents(o,r){const a=[];let l=o.parentNode.closest(r);for(;l;)a.push(l),l=l.parentNode.closest(r);return a},prev(o,r){let a=o.previousElementSibling;for(;a;){if(a.matches(r))return[a];a=a.previousElementSibling}return[]},next(o,r){let a=o.nextElementSibling;for(;a;){if(a.matches(r))return[a];a=a.nextElementSibling}return[]},focusableChildren(o){const r=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(a=>`${a}:not([tabindex^="-"])`).join(",");return this.find(r,o).filter(a=>!e.isDisabled(a)&&e.isVisible(a))},getSelectorFromElement(o){const r=i(o);return r&&s.findOne(r)?r:null},getElementFromSelector(o){const r=i(o);return r?s.findOne(r):null},getMultipleElementsFromSelector(o){const r=i(o);return r?s.find(r):[]}};return s}))})(we)),we.exports}var Te={exports:{}};/*!
  * Bootstrap backdrop.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var _u=Te.exports,$i;function vu(){return $i||($i=1,(function(n,t){(function(e,i){n.exports=i(jt(),In(),st())})(_u,(function(e,i,s){const o="backdrop",r="fade",a="show",l=`mousedown.bs.${o}`,c={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},u={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class m extends i{constructor(p){super(),this._config=this._getConfig(p),this._isAppended=!1,this._element=null}static get Default(){return c}static get DefaultType(){return u}static get NAME(){return o}show(p){if(!this._config.isVisible){s.execute(p);return}this._append();const N=this._getElement();this._config.isAnimated&&s.reflow(N),N.classList.add(a),this._emulateAnimation(()=>{s.execute(p)})}hide(p){if(!this._config.isVisible){s.execute(p);return}this._getElement().classList.remove(a),this._emulateAnimation(()=>{this.dispose(),s.execute(p)})}dispose(){this._isAppended&&(e.off(this._element,l),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const p=document.createElement("div");p.className=this._config.className,this._config.isAnimated&&p.classList.add(r),this._element=p}return this._element}_configAfterMerge(p){return p.rootElement=s.getElement(p.rootElement),p}_append(){if(this._isAppended)return;const p=this._getElement();this._config.rootElement.append(p),e.on(p,l,()=>{s.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(p){s.executeAfterTransition(p,this._getElement(),this._config.isAnimated)}}return m}))})(Te)),Te.exports}var qt={exports:{}};/*!
  * Bootstrap component-functions.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Eu=qt.exports,ki;function bu(){return ki||(ki=1,(function(n,t){(function(e,i){i(t,jt(),ie(),st())})(Eu,(function(e,i,s,o){const r=(a,l="hide")=>{const c=`click.dismiss${a.EVENT_KEY}`,u=a.NAME;i.on(document,c,`[data-bs-dismiss="${u}"]`,function(m){if(["A","AREA"].includes(this.tagName)&&m.preventDefault(),o.isDisabled(this))return;const f=s.getElementFromSelector(this)||this.closest(`.${u}`);a.getOrCreateInstance(f)[l]()})};e.enableDismissTrigger=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}))})(qt,qt.exports)),qt.exports}var Ce={exports:{}};/*!
  * Bootstrap focustrap.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var yu=Ce.exports,xi;function Au(){return xi||(xi=1,(function(n,t){(function(e,i){n.exports=i(jt(),ie(),In())})(yu,(function(e,i,s){const o="focustrap",a=".bs.focustrap",l=`focusin${a}`,c=`keydown.tab${a}`,u="Tab",m="forward",f="backward",p={autofocus:!0,trapElement:null},N={autofocus:"boolean",trapElement:"element"};class A extends s{constructor(C){super(),this._config=this._getConfig(C),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return p}static get DefaultType(){return N}static get NAME(){return o}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),e.off(document,a),e.on(document,l,C=>this._handleFocusin(C)),e.on(document,c,C=>this._handleKeydown(C)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,e.off(document,a))}_handleFocusin(C){const{trapElement:M}=this._config;if(C.target===document||C.target===M||M.contains(C.target))return;const x=i.focusableChildren(M);x.length===0?M.focus():this._lastTabNavDirection===f?x[x.length-1].focus():x[0].focus()}_handleKeydown(C){C.key===u&&(this._lastTabNavDirection=C.shiftKey?f:m)}}return A}))})(Ce)),Ce.exports}var Oe={exports:{}};/*!
  * Bootstrap scrollbar.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var wu=Oe.exports,Mi;function Tu(){return Mi||(Mi=1,(function(n,t){(function(e,i){n.exports=i(Vs(),ie(),st())})(wu,(function(e,i,s){const o=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",r=".sticky-top",a="padding-right",l="margin-right";class c{constructor(){this._element=document.body}getWidth(){const m=document.documentElement.clientWidth;return Math.abs(window.innerWidth-m)}hide(){const m=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,a,f=>f+m),this._setElementAttributes(o,a,f=>f+m),this._setElementAttributes(r,l,f=>f-m)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,a),this._resetElementAttributes(o,a),this._resetElementAttributes(r,l)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(m,f,p){const N=this.getWidth(),A=T=>{if(T!==this._element&&window.innerWidth>T.clientWidth+N)return;this._saveInitialAttribute(T,f);const C=window.getComputedStyle(T).getPropertyValue(f);T.style.setProperty(f,`${p(Number.parseFloat(C))}px`)};this._applyManipulationCallback(m,A)}_saveInitialAttribute(m,f){const p=m.style.getPropertyValue(f);p&&e.setDataAttribute(m,f,p)}_resetElementAttributes(m,f){const p=N=>{const A=e.getDataAttribute(N,f);if(A===null){N.style.removeProperty(f);return}e.removeDataAttribute(N,f),N.style.setProperty(f,A)};this._applyManipulationCallback(m,p)}_applyManipulationCallback(m,f){if(s.isElement(m)){f(m);return}for(const p of i.find(m,this._element))f(p)}}return c}))})(Oe)),Oe.exports}/*!
  * Bootstrap offcanvas.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Cu=_e.exports,Pi;function Ou(){return Pi||(Pi=1,(function(n,t){(function(e,i){n.exports=i(Hs(),jt(),ie(),vu(),bu(),Au(),st(),Tu())})(Cu,(function(e,i,s,o,r,a,l,c){const u="offcanvas",f=".bs.offcanvas",p=".data-api",N=`load${f}${p}`,A="Escape",T="show",C="showing",M="hiding",x="offcanvas-backdrop",S=".offcanvas.show",k=`show${f}`,g=`shown${f}`,_=`hide${f}`,y=`hidePrevented${f}`,w=`hidden${f}`,d=`resize${f}`,v=`click${f}${p}`,E=`keydown.dismiss${f}`,b='[data-bs-toggle="offcanvas"]',D={backdrop:!0,keyboard:!0,scroll:!1},L={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class I extends e{constructor($,R){super($,R),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return D}static get DefaultType(){return L}static get NAME(){return u}toggle($){return this._isShown?this.hide():this.show($)}show($){if(this._isShown||i.trigger(this._element,k,{relatedTarget:$}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new c().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(C);const Z=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(T),this._element.classList.remove(C),i.trigger(this._element,g,{relatedTarget:$})};this._queueCallback(Z,this._element,!0)}hide(){if(!this._isShown||i.trigger(this._element,_).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(M),this._backdrop.hide();const R=()=>{this._element.classList.remove(T,M),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new c().reset(),i.trigger(this._element,w)};this._queueCallback(R,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const $=()=>{if(this._config.backdrop==="static"){i.trigger(this._element,y);return}this.hide()},R=!!this._config.backdrop;return new o({className:x,isVisible:R,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:R?$:null})}_initializeFocusTrap(){return new a({trapElement:this._element})}_addEventListeners(){i.on(this._element,E,$=>{if($.key===A){if(this._config.keyboard){this.hide();return}i.trigger(this._element,y)}})}static jQueryInterface($){return this.each(function(){const R=I.getOrCreateInstance(this,$);if(typeof $=="string"){if(R[$]===void 0||$.startsWith("_")||$==="constructor")throw new TypeError(`No method named "${$}"`);R[$](this)}})}}return i.on(document,v,b,function(P){const $=s.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&P.preventDefault(),l.isDisabled(this))return;i.one($,w,()=>{l.isVisible(this)&&this.focus()});const R=s.findOne(S);R&&R!==$&&I.getInstance(R).hide(),I.getOrCreateInstance($).toggle(this)}),i.on(window,N,()=>{for(const P of s.find(S))I.getOrCreateInstance(P).show()}),i.on(window,d,()=>{for(const P of s.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(P).position!=="fixed"&&I.getOrCreateInstance(P).hide()}),r.enableDismissTrigger(I),l.defineJQueryPlugin(I),I}))})(_e)),_e.exports}Ou();var Ne={exports:{}};/*!
  * Bootstrap collapse.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Nu=Ne.exports,Ri;function Su(){return Ri||(Ri=1,(function(n,t){(function(e,i){n.exports=i(Hs(),jt(),ie(),st())})(Nu,(function(e,i,s,o){const r="collapse",l=".bs.collapse",c=".data-api",u=`show${l}`,m=`shown${l}`,f=`hide${l}`,p=`hidden${l}`,N=`click${l}${c}`,A="show",T="collapse",C="collapsing",M="collapsed",x=`:scope .${T} .${T}`,S="collapse-horizontal",k="width",g="height",_=".collapse.show, .collapse.collapsing",y='[data-bs-toggle="collapse"]',w={parent:null,toggle:!0},d={parent:"(null|element)",toggle:"boolean"};class v extends e{constructor(b,D){super(b,D),this._isTransitioning=!1,this._triggerArray=[];const L=s.find(y);for(const I of L){const P=s.getSelectorFromElement(I),$=s.find(P).filter(R=>R===this._element);P!==null&&$.length&&this._triggerArray.push(I)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return w}static get DefaultType(){return d}static get NAME(){return r}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let b=[];if(this._config.parent&&(b=this._getFirstLevelChildren(_).filter(R=>R!==this._element).map(R=>v.getOrCreateInstance(R,{toggle:!1}))),b.length&&b[0]._isTransitioning||i.trigger(this._element,u).defaultPrevented)return;for(const R of b)R.hide();const L=this._getDimension();this._element.classList.remove(T),this._element.classList.add(C),this._element.style[L]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const I=()=>{this._isTransitioning=!1,this._element.classList.remove(C),this._element.classList.add(T,A),this._element.style[L]="",i.trigger(this._element,m)},$=`scroll${L[0].toUpperCase()+L.slice(1)}`;this._queueCallback(I,this._element,!0),this._element.style[L]=`${this._element[$]}px`}hide(){if(this._isTransitioning||!this._isShown()||i.trigger(this._element,f).defaultPrevented)return;const D=this._getDimension();this._element.style[D]=`${this._element.getBoundingClientRect()[D]}px`,o.reflow(this._element),this._element.classList.add(C),this._element.classList.remove(T,A);for(const I of this._triggerArray){const P=s.getElementFromSelector(I);P&&!this._isShown(P)&&this._addAriaAndCollapsedClass([I],!1)}this._isTransitioning=!0;const L=()=>{this._isTransitioning=!1,this._element.classList.remove(C),this._element.classList.add(T),i.trigger(this._element,p)};this._element.style[D]="",this._queueCallback(L,this._element,!0)}_isShown(b=this._element){return b.classList.contains(A)}_configAfterMerge(b){return b.toggle=!!b.toggle,b.parent=o.getElement(b.parent),b}_getDimension(){return this._element.classList.contains(S)?k:g}_initializeChildren(){if(!this._config.parent)return;const b=this._getFirstLevelChildren(y);for(const D of b){const L=s.getElementFromSelector(D);L&&this._addAriaAndCollapsedClass([D],this._isShown(L))}}_getFirstLevelChildren(b){const D=s.find(x,this._config.parent);return s.find(b,this._config.parent).filter(L=>!D.includes(L))}_addAriaAndCollapsedClass(b,D){if(b.length)for(const L of b)L.classList.toggle(M,!D),L.setAttribute("aria-expanded",D)}static jQueryInterface(b){const D={};return typeof b=="string"&&/show|hide/.test(b)&&(D.toggle=!1),this.each(function(){const L=v.getOrCreateInstance(this,D);if(typeof b=="string"){if(typeof L[b]>"u")throw new TypeError(`No method named "${b}"`);L[b]()}})}}return i.on(document,N,y,function(E){(E.target.tagName==="A"||E.delegateTarget&&E.delegateTarget.tagName==="A")&&E.preventDefault();for(const b of s.getMultipleElementsFromSelector(this))v.getOrCreateInstance(b,{toggle:!1}).toggle()}),o.defineJQueryPlugin(v),v}))})(Ne)),Ne.exports}Su();(async()=>(await Gs("#header","componets/header.html"),lu()))();export{Rt as T};

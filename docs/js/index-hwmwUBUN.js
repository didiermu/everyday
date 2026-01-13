const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/home-qLPUnyHo.js","js/three-yH4q0MRI.js","js/loadLocomotive-DUo0yfuB.js","js/physicalizing-ql6NHFDt.js","js/swiper-CFnvug-O.js","css/swiper-erHEUhN6.css","css/physicalizing-EsTBEVQd.css","js/visualization-C7nhozuL.js","js/periods-D_KyCaCk.js","js/about-ClI4Tt_7.js","js/epilogue-gtZes7Rr.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const Gi=`<nav class="navbar">
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
`,Qi=`<nav class="navbar">
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
`,Xi={"componets/header.html":Gi,"componets/header-interior.html":Qi};async function Ws(n,t){const e=document.querySelector(n);if(!e)return;const s=Xi[t];s?e.innerHTML=s:console.error(`Component not found: ${t}`)}const Ji="modulepreload",Zi=function(n){return"/everyday/"+n},jn={},Tt=function(t,e,s){let i=Promise.resolve();if(e&&e.length>0){let r=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=r(e.map(c=>{if(c=Zi(c),c in jn)return;jn[c]=!0;const u=c.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${m}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Ji,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((p,N)=>{f.addEventListener("load",p),f.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return i.then(r=>{for(const a of r||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})},to=`<section class="intro">
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
`,eo=`<section class="hero">
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
                <a href="/visualization/periods" data-ink>
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
                <a href="/visualization/periods" data-ink>
                    <button class="button button-tertiary">Explore Periods</button>
                </a>
            </div>
        </div>
    </div>
</section>
`,so=`<dialog id="modal-story">
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

`,io=`<section class="hero">
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
`,ro={"pages/home.html":to,"pages/physicalizing.html":eo,"pages/visualization.html":no,"pages/periods.html":so,"pages/about.html":io,"pages/epilogue.html":oo};async function ao(n){const t=document.querySelector("[data-router-view]");if(!t)return;const e=ro[n];e?t.innerHTML=e:console.error(`Page not found: ${n}`)}function lo(n){document.body.classList.forEach(t=>{t.startsWith("page-")&&document.body.classList.remove(t)}),document.body.classList.add(n)}function co(){const n=document.querySelector(".hero"),t=document.querySelector(".visualization");n.classList.add("hide"),t.classList.add("show")}var V="top",z="bottom",j="right",H="left",ke="auto",Ht=[V,z,j,H],Et="start",$t="end",zs="clippingParents",pn="viewport",St="popper",js="reference",rn=Ht.reduce(function(n,t){return n.concat([t+"-"+Et,t+"-"+$t])},[]),mn=[].concat(Ht,[ke]).reduce(function(n,t){return n.concat([t,t+"-"+Et,t+"-"+$t])},[]),Fs="beforeRead",Bs="read",Ks="afterRead",Ys="beforeMain",Us="main",qs="afterMain",Gs="beforeWrite",Qs="write",Xs="afterWrite",Js=[Fs,Bs,Ks,Ys,Us,qs,Gs,Qs,Xs];function J(n){return n?(n.nodeName||"").toLowerCase():null}function F(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function bt(n){var t=F(n).Element;return n instanceof t||n instanceof Element}function B(n){var t=F(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function gn(n){if(typeof ShadowRoot>"u")return!1;var t=F(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function uo(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var s=t.styles[e]||{},i=t.attributes[e]||{},o=t.elements[e];!B(o)||!J(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(r){var a=i[r];a===!1?o.removeAttribute(r):o.setAttribute(r,a===!0?"":a)}))})}function ho(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(s){var i=t.elements[s],o=t.attributes[s]||{},r=Object.keys(t.styles.hasOwnProperty(s)?t.styles[s]:e[s]),a=r.reduce(function(l,c){return l[c]="",l},{});!B(i)||!J(i)||(Object.assign(i.style,a),Object.keys(o).forEach(function(l){i.removeAttribute(l)}))})}}const _n={name:"applyStyles",enabled:!0,phase:"write",fn:uo,effect:ho,requires:["computeStyles"]};function Q(n){return n.split("-")[0]}var vt=Math.max,De=Math.min,kt=Math.round;function an(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Zs(){return!/^((?!chrome|android).)*safari/i.test(an())}function xt(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var s=n.getBoundingClientRect(),i=1,o=1;t&&B(n)&&(i=n.offsetWidth>0&&kt(s.width)/n.offsetWidth||1,o=n.offsetHeight>0&&kt(s.height)/n.offsetHeight||1);var r=bt(n)?F(n):window,a=r.visualViewport,l=!Zs()&&e,c=(s.left+(l&&a?a.offsetLeft:0))/i,u=(s.top+(l&&a?a.offsetTop:0))/o,m=s.width/i,f=s.height/o;return{width:m,height:f,top:u,right:c+m,bottom:u+f,left:c,x:c,y:u}}function vn(n){var t=xt(n),e=n.offsetWidth,s=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-s)<=1&&(s=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:s}}function ti(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&gn(e)){var s=t;do{if(s&&n.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function nt(n){return F(n).getComputedStyle(n)}function fo(n){return["table","td","th"].indexOf(J(n))>=0}function dt(n){return((bt(n)?n.ownerDocument:n.document)||window.document).documentElement}function xe(n){return J(n)==="html"?n:n.assignedSlot||n.parentNode||(gn(n)?n.host:null)||dt(n)}function Fn(n){return!B(n)||nt(n).position==="fixed"?null:n.offsetParent}function po(n){var t=/firefox/i.test(an()),e=/Trident/i.test(an());if(e&&B(n)){var s=nt(n);if(s.position==="fixed")return null}var i=xe(n);for(gn(i)&&(i=i.host);B(i)&&["html","body"].indexOf(J(i))<0;){var o=nt(i);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return i;i=i.parentNode}return null}function Zt(n){for(var t=F(n),e=Fn(n);e&&fo(e)&&nt(e).position==="static";)e=Fn(e);return e&&(J(e)==="html"||J(e)==="body"&&nt(e).position==="static")?t:e||po(n)||t}function En(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Qt(n,t,e){return vt(n,De(t,e))}function mo(n,t,e){var s=Qt(n,t,e);return s>e?e:s}function ei(){return{top:0,right:0,bottom:0,left:0}}function ni(n){return Object.assign({},ei(),n)}function si(n,t){return t.reduce(function(e,s){return e[s]=n,e},{})}var go=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,ni(typeof t!="number"?t:si(t,Ht))};function _o(n){var t,e=n.state,s=n.name,i=n.options,o=e.elements.arrow,r=e.modifiersData.popperOffsets,a=Q(e.placement),l=En(a),c=[H,j].indexOf(a)>=0,u=c?"height":"width";if(!(!o||!r)){var m=go(i.padding,e),f=vn(o),p=l==="y"?V:H,N=l==="y"?z:j,A=e.rects.reference[u]+e.rects.reference[l]-r[l]-e.rects.popper[u],T=r[l]-e.rects.reference[l],C=Zt(o),M=C?l==="y"?C.clientHeight||0:C.clientWidth||0:0,x=A/2-T/2,S=m[p],k=M-f[u]-m[N],g=M/2-f[u]/2+x,_=Qt(S,g,k),y=l;e.modifiersData[s]=(t={},t[y]=_,t.centerOffset=_-g,t)}}function vo(n){var t=n.state,e=n.options,s=e.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||ti(t.elements.popper,i)&&(t.elements.arrow=i))}const ii={name:"arrow",enabled:!0,phase:"main",fn:_o,effect:vo,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Mt(n){return n.split("-")[1]}var Eo={top:"auto",right:"auto",bottom:"auto",left:"auto"};function bo(n,t){var e=n.x,s=n.y,i=t.devicePixelRatio||1;return{x:kt(e*i)/i||0,y:kt(s*i)/i||0}}function Bn(n){var t,e=n.popper,s=n.popperRect,i=n.placement,o=n.variation,r=n.offsets,a=n.position,l=n.gpuAcceleration,c=n.adaptive,u=n.roundOffsets,m=n.isFixed,f=r.x,p=f===void 0?0:f,N=r.y,A=N===void 0?0:N,T=typeof u=="function"?u({x:p,y:A}):{x:p,y:A};p=T.x,A=T.y;var C=r.hasOwnProperty("x"),M=r.hasOwnProperty("y"),x=H,S=V,k=window;if(c){var g=Zt(e),_="clientHeight",y="clientWidth";if(g===F(e)&&(g=dt(e),nt(g).position!=="static"&&a==="absolute"&&(_="scrollHeight",y="scrollWidth")),g=g,i===V||(i===H||i===j)&&o===$t){S=z;var w=m&&g===k&&k.visualViewport?k.visualViewport.height:g[_];A-=w-s.height,A*=l?1:-1}if(i===H||(i===V||i===z)&&o===$t){x=j;var d=m&&g===k&&k.visualViewport?k.visualViewport.width:g[y];p-=d-s.width,p*=l?1:-1}}var v=Object.assign({position:a},c&&Eo),E=u===!0?bo({x:p,y:A},F(e)):{x:p,y:A};if(p=E.x,A=E.y,l){var b;return Object.assign({},v,(b={},b[S]=M?"0":"",b[x]=C?"0":"",b.transform=(k.devicePixelRatio||1)<=1?"translate("+p+"px, "+A+"px)":"translate3d("+p+"px, "+A+"px, 0)",b))}return Object.assign({},v,(t={},t[S]=M?A+"px":"",t[x]=C?p+"px":"",t.transform="",t))}function yo(n){var t=n.state,e=n.options,s=e.gpuAcceleration,i=s===void 0?!0:s,o=e.adaptive,r=o===void 0?!0:o,a=e.roundOffsets,l=a===void 0?!0:a,c={placement:Q(t.placement),variation:Mt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Bn(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:r,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Bn(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const bn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:yo,data:{}};var le={passive:!0};function Ao(n){var t=n.state,e=n.instance,s=n.options,i=s.scroll,o=i===void 0?!0:i,r=s.resize,a=r===void 0?!0:r,l=F(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&c.forEach(function(u){u.addEventListener("scroll",e.update,le)}),a&&l.addEventListener("resize",e.update,le),function(){o&&c.forEach(function(u){u.removeEventListener("scroll",e.update,le)}),a&&l.removeEventListener("resize",e.update,le)}}const yn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ao,data:{}};var wo={left:"right",right:"left",bottom:"top",top:"bottom"};function me(n){return n.replace(/left|right|bottom|top/g,function(t){return wo[t]})}var To={start:"end",end:"start"};function Kn(n){return n.replace(/start|end/g,function(t){return To[t]})}function An(n){var t=F(n),e=t.pageXOffset,s=t.pageYOffset;return{scrollLeft:e,scrollTop:s}}function wn(n){return xt(dt(n)).left+An(n).scrollLeft}function Co(n,t){var e=F(n),s=dt(n),i=e.visualViewport,o=s.clientWidth,r=s.clientHeight,a=0,l=0;if(i){o=i.width,r=i.height;var c=Zs();(c||!c&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:r,x:a+wn(n),y:l}}function Oo(n){var t,e=dt(n),s=An(n),i=(t=n.ownerDocument)==null?void 0:t.body,o=vt(e.scrollWidth,e.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),r=vt(e.scrollHeight,e.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-s.scrollLeft+wn(n),l=-s.scrollTop;return nt(i||e).direction==="rtl"&&(a+=vt(e.clientWidth,i?i.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}function Tn(n){var t=nt(n),e=t.overflow,s=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+i+s)}function oi(n){return["html","body","#document"].indexOf(J(n))>=0?n.ownerDocument.body:B(n)&&Tn(n)?n:oi(xe(n))}function Xt(n,t){var e;t===void 0&&(t=[]);var s=oi(n),i=s===((e=n.ownerDocument)==null?void 0:e.body),o=F(s),r=i?[o].concat(o.visualViewport||[],Tn(s)?s:[]):s,a=t.concat(r);return i?a:a.concat(Xt(xe(r)))}function ln(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function No(n,t){var e=xt(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function Yn(n,t,e){return t===pn?ln(Co(n,e)):bt(t)?No(t,e):ln(Oo(dt(n)))}function So(n){var t=Xt(xe(n)),e=["absolute","fixed"].indexOf(nt(n).position)>=0,s=e&&B(n)?Zt(n):n;return bt(s)?t.filter(function(i){return bt(i)&&ti(i,s)&&J(i)!=="body"}):[]}function Do(n,t,e,s){var i=t==="clippingParents"?So(n):[].concat(t),o=[].concat(i,[e]),r=o[0],a=o.reduce(function(l,c){var u=Yn(n,c,s);return l.top=vt(u.top,l.top),l.right=De(u.right,l.right),l.bottom=De(u.bottom,l.bottom),l.left=vt(u.left,l.left),l},Yn(n,r,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ri(n){var t=n.reference,e=n.element,s=n.placement,i=s?Q(s):null,o=s?Mt(s):null,r=t.x+t.width/2-e.width/2,a=t.y+t.height/2-e.height/2,l;switch(i){case V:l={x:r,y:t.y-e.height};break;case z:l={x:r,y:t.y+t.height};break;case j:l={x:t.x+t.width,y:a};break;case H:l={x:t.x-e.width,y:a};break;default:l={x:t.x,y:t.y}}var c=i?En(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(o){case Et:l[c]=l[c]-(t[u]/2-e[u]/2);break;case $t:l[c]=l[c]+(t[u]/2-e[u]/2);break}}return l}function Pt(n,t){t===void 0&&(t={});var e=t,s=e.placement,i=s===void 0?n.placement:s,o=e.strategy,r=o===void 0?n.strategy:o,a=e.boundary,l=a===void 0?zs:a,c=e.rootBoundary,u=c===void 0?pn:c,m=e.elementContext,f=m===void 0?St:m,p=e.altBoundary,N=p===void 0?!1:p,A=e.padding,T=A===void 0?0:A,C=ni(typeof T!="number"?T:si(T,Ht)),M=f===St?js:St,x=n.rects.popper,S=n.elements[N?M:f],k=Do(bt(S)?S:S.contextElement||dt(n.elements.popper),l,u,r),g=xt(n.elements.reference),_=ri({reference:g,element:x,placement:i}),y=ln(Object.assign({},x,_)),w=f===St?y:g,d={top:k.top-w.top+C.top,bottom:w.bottom-k.bottom+C.bottom,left:k.left-w.left+C.left,right:w.right-k.right+C.right},v=n.modifiersData.offset;if(f===St&&v){var E=v[i];Object.keys(d).forEach(function(b){var D=[j,z].indexOf(b)>=0?1:-1,L=[V,z].indexOf(b)>=0?"y":"x";d[b]+=E[L]*D})}return d}function Lo(n,t){t===void 0&&(t={});var e=t,s=e.placement,i=e.boundary,o=e.rootBoundary,r=e.padding,a=e.flipVariations,l=e.allowedAutoPlacements,c=l===void 0?mn:l,u=Mt(s),m=u?a?rn:rn.filter(function(N){return Mt(N)===u}):Ht,f=m.filter(function(N){return c.indexOf(N)>=0});f.length===0&&(f=m);var p=f.reduce(function(N,A){return N[A]=Pt(n,{placement:A,boundary:i,rootBoundary:o,padding:r})[Q(A)],N},{});return Object.keys(p).sort(function(N,A){return p[N]-p[A]})}function Io(n){if(Q(n)===ke)return[];var t=me(n);return[Kn(n),t,Kn(t)]}function $o(n){var t=n.state,e=n.options,s=n.name;if(!t.modifiersData[s]._skip){for(var i=e.mainAxis,o=i===void 0?!0:i,r=e.altAxis,a=r===void 0?!0:r,l=e.fallbackPlacements,c=e.padding,u=e.boundary,m=e.rootBoundary,f=e.altBoundary,p=e.flipVariations,N=p===void 0?!0:p,A=e.allowedAutoPlacements,T=t.options.placement,C=Q(T),M=C===T,x=l||(M||!N?[me(T)]:Io(T)),S=[T].concat(x).reduce(function(wt,rt){return wt.concat(Q(rt)===ke?Lo(t,{placement:rt,boundary:u,rootBoundary:m,padding:c,flipVariations:N,allowedAutoPlacements:A}):rt)},[]),k=t.rects.reference,g=t.rects.popper,_=new Map,y=!0,w=S[0],d=0;d<S.length;d++){var v=S[d],E=Q(v),b=Mt(v)===Et,D=[V,z].indexOf(E)>=0,L=D?"width":"height",I=Pt(t,{placement:v,boundary:u,rootBoundary:m,altBoundary:f,padding:c}),P=D?b?j:H:b?z:V;k[L]>g[L]&&(P=me(P));var $=me(P),R=[];if(o&&R.push(I[E]<=0),a&&R.push(I[P]<=0,I[$]<=0),R.every(function(wt){return wt})){w=v,y=!1;break}_.set(v,R)}if(y)for(var Z=N?3:1,G=function(rt){var Kt=S.find(function(re){var pt=_.get(re);if(pt)return pt.slice(0,rt).every(function(ze){return ze})});if(Kt)return w=Kt,"break"},Bt=Z;Bt>0;Bt--){var oe=G(Bt);if(oe==="break")break}t.placement!==w&&(t.modifiersData[s]._skip=!0,t.placement=w,t.reset=!0)}}const ai={name:"flip",enabled:!0,phase:"main",fn:$o,requiresIfExists:["offset"],data:{_skip:!1}};function Un(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function qn(n){return[V,j,z,H].some(function(t){return n[t]>=0})}function ko(n){var t=n.state,e=n.name,s=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,r=Pt(t,{elementContext:"reference"}),a=Pt(t,{altBoundary:!0}),l=Un(r,s),c=Un(a,i,o),u=qn(l),m=qn(c);t.modifiersData[e]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":m})}const li={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ko};function xo(n,t,e){var s=Q(n),i=[H,V].indexOf(s)>=0?-1:1,o=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,r=o[0],a=o[1];return r=r||0,a=(a||0)*i,[H,j].indexOf(s)>=0?{x:a,y:r}:{x:r,y:a}}function Mo(n){var t=n.state,e=n.options,s=n.name,i=e.offset,o=i===void 0?[0,0]:i,r=mn.reduce(function(u,m){return u[m]=xo(m,t.rects,o),u},{}),a=r[t.placement],l=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[s]=r}const ci={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Mo};function Po(n){var t=n.state,e=n.name;t.modifiersData[e]=ri({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const Cn={name:"popperOffsets",enabled:!0,phase:"read",fn:Po,data:{}};function Ro(n){return n==="x"?"y":"x"}function Vo(n){var t=n.state,e=n.options,s=n.name,i=e.mainAxis,o=i===void 0?!0:i,r=e.altAxis,a=r===void 0?!1:r,l=e.boundary,c=e.rootBoundary,u=e.altBoundary,m=e.padding,f=e.tether,p=f===void 0?!0:f,N=e.tetherOffset,A=N===void 0?0:N,T=Pt(t,{boundary:l,rootBoundary:c,padding:m,altBoundary:u}),C=Q(t.placement),M=Mt(t.placement),x=!M,S=En(C),k=Ro(S),g=t.modifiersData.popperOffsets,_=t.rects.reference,y=t.rects.popper,w=typeof A=="function"?A(Object.assign({},t.rects,{placement:t.placement})):A,d=typeof w=="number"?{mainAxis:w,altAxis:w}:Object.assign({mainAxis:0,altAxis:0},w),v=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,E={x:0,y:0};if(g){if(o){var b,D=S==="y"?V:H,L=S==="y"?z:j,I=S==="y"?"height":"width",P=g[S],$=P+T[D],R=P-T[L],Z=p?-y[I]/2:0,G=M===Et?_[I]:y[I],Bt=M===Et?-y[I]:-_[I],oe=t.elements.arrow,wt=p&&oe?vn(oe):{width:0,height:0},rt=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ei(),Kt=rt[D],re=rt[L],pt=Qt(0,_[I],wt[I]),ze=x?_[I]/2-Z-pt-Kt-d.mainAxis:G-pt-Kt-d.mainAxis,Fi=x?-_[I]/2+Z+pt+re+d.mainAxis:Bt+pt+re+d.mainAxis,je=t.elements.arrow&&Zt(t.elements.arrow),Bi=je?S==="y"?je.clientTop||0:je.clientLeft||0:0,kn=(b=v==null?void 0:v[S])!=null?b:0,Ki=P+ze-kn-Bi,Yi=P+Fi-kn,xn=Qt(p?De($,Ki):$,P,p?vt(R,Yi):R);g[S]=xn,E[S]=xn-P}if(a){var Mn,Ui=S==="x"?V:H,qi=S==="x"?z:j,mt=g[k],ae=k==="y"?"height":"width",Pn=mt+T[Ui],Rn=mt-T[qi],Fe=[V,H].indexOf(C)!==-1,Vn=(Mn=v==null?void 0:v[k])!=null?Mn:0,Hn=Fe?Pn:mt-_[ae]-y[ae]-Vn+d.altAxis,Wn=Fe?mt+_[ae]+y[ae]-Vn-d.altAxis:Rn,zn=p&&Fe?mo(Hn,mt,Wn):Qt(p?Hn:Pn,mt,p?Wn:Rn);g[k]=zn,E[k]=zn-mt}t.modifiersData[s]=E}}const ui={name:"preventOverflow",enabled:!0,phase:"main",fn:Vo,requiresIfExists:["offset"]};function Ho(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function Wo(n){return n===F(n)||!B(n)?An(n):Ho(n)}function zo(n){var t=n.getBoundingClientRect(),e=kt(t.width)/n.offsetWidth||1,s=kt(t.height)/n.offsetHeight||1;return e!==1||s!==1}function jo(n,t,e){e===void 0&&(e=!1);var s=B(t),i=B(t)&&zo(t),o=dt(t),r=xt(n,i,e),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!e)&&((J(t)!=="body"||Tn(o))&&(a=Wo(t)),B(t)?(l=xt(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):o&&(l.x=wn(o))),{x:r.left+a.scrollLeft-l.x,y:r.top+a.scrollTop-l.y,width:r.width,height:r.height}}function Fo(n){var t=new Map,e=new Set,s=[];n.forEach(function(o){t.set(o.name,o)});function i(o){e.add(o.name);var r=[].concat(o.requires||[],o.requiresIfExists||[]);r.forEach(function(a){if(!e.has(a)){var l=t.get(a);l&&i(l)}}),s.push(o)}return n.forEach(function(o){e.has(o.name)||i(o)}),s}function Bo(n){var t=Fo(n);return Js.reduce(function(e,s){return e.concat(t.filter(function(i){return i.phase===s}))},[])}function Ko(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function Yo(n){var t=n.reduce(function(e,s){var i=e[s.name];return e[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,e},{});return Object.keys(t).map(function(e){return t[e]})}var Gn={placement:"bottom",modifiers:[],strategy:"absolute"};function Qn(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function Me(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,s=e===void 0?[]:e,i=t.defaultOptions,o=i===void 0?Gn:i;return function(a,l,c){c===void 0&&(c=o);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Gn,o),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},m=[],f=!1,p={state:u,setOptions:function(C){var M=typeof C=="function"?C(u.options):C;A(),u.options=Object.assign({},o,u.options,M),u.scrollParents={reference:bt(a)?Xt(a):a.contextElement?Xt(a.contextElement):[],popper:Xt(l)};var x=Bo(Yo([].concat(s,u.options.modifiers)));return u.orderedModifiers=x.filter(function(S){return S.enabled}),N(),p.update()},forceUpdate:function(){if(!f){var C=u.elements,M=C.reference,x=C.popper;if(Qn(M,x)){u.rects={reference:jo(M,Zt(x),u.options.strategy==="fixed"),popper:vn(x)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(d){return u.modifiersData[d.name]=Object.assign({},d.data)});for(var S=0;S<u.orderedModifiers.length;S++){if(u.reset===!0){u.reset=!1,S=-1;continue}var k=u.orderedModifiers[S],g=k.fn,_=k.options,y=_===void 0?{}:_,w=k.name;typeof g=="function"&&(u=g({state:u,options:y,name:w,instance:p})||u)}}}},update:Ko(function(){return new Promise(function(T){p.forceUpdate(),T(u)})}),destroy:function(){A(),f=!0}};if(!Qn(a,l))return p;p.setOptions(c).then(function(T){!f&&c.onFirstUpdate&&c.onFirstUpdate(T)});function N(){u.orderedModifiers.forEach(function(T){var C=T.name,M=T.options,x=M===void 0?{}:M,S=T.effect;if(typeof S=="function"){var k=S({state:u,name:C,instance:p,options:x}),g=function(){};m.push(k||g)}})}function A(){m.forEach(function(T){return T()}),m=[]}return p}}var Uo=Me(),qo=[yn,Cn,bn,_n],Go=Me({defaultModifiers:qo}),Qo=[yn,Cn,bn,_n,ci,ai,ui,ii,li],On=Me({defaultModifiers:Qo});const di=Object.freeze(Object.defineProperty({__proto__:null,afterMain:qs,afterRead:Ks,afterWrite:Xs,applyStyles:_n,arrow:ii,auto:ke,basePlacements:Ht,beforeMain:Ys,beforeRead:Fs,beforeWrite:Gs,bottom:z,clippingParents:zs,computeStyles:bn,createPopper:On,createPopperBase:Uo,createPopperLite:Go,detectOverflow:Pt,end:$t,eventListeners:yn,flip:ai,hide:li,left:H,main:Us,modifierPhases:Js,offset:ci,placements:mn,popper:St,popperGenerator:Me,popperOffsets:Cn,preventOverflow:ui,read:Bs,reference:js,right:j,start:Et,top:V,variationPlacements:rn,viewport:pn,write:Qs},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const at=new Map,Be={set(n,t,e){at.has(n)||at.set(n,new Map);const s=at.get(n);if(!s.has(t)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(t,e)},get(n,t){return at.has(n)&&at.get(n).get(t)||null},remove(n,t){if(!at.has(n))return;const e=at.get(n);e.delete(t),e.size===0&&at.delete(n)}},Xo=1e6,Jo=1e3,cn="transitionend",hi=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),n),Zo=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),tr=n=>{do n+=Math.floor(Math.random()*Xo);while(document.getElementById(n));return n},er=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const s=Number.parseFloat(t),i=Number.parseFloat(e);return!s&&!i?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*Jo)},fi=n=>{n.dispatchEvent(new Event(cn))},tt=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),ct=n=>tt(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(hi(n)):null,Wt=n=>{if(!tt(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const s=n.closest("summary");if(s&&s.parentNode!==e||s===null)return!1}return t},ut=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",pi=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?pi(n.parentNode):null},Le=()=>{},te=n=>{n.offsetHeight},mi=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Ke=[],nr=n=>{document.readyState==="loading"?(Ke.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Ke)t()}),Ke.push(n)):n()},K=()=>document.documentElement.dir==="rtl",U=n=>{nr(()=>{const t=mi();if(t){const e=n.NAME,s=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=s,n.jQueryInterface)}})},W=(n,t=[],e=n)=>typeof n=="function"?n(...t):e,gi=(n,t,e=!0)=>{if(!e){W(n);return}const i=er(t)+5;let o=!1;const r=({target:a})=>{a===t&&(o=!0,t.removeEventListener(cn,r),W(n))};t.addEventListener(cn,r),setTimeout(()=>{o||fi(t)},i)},Nn=(n,t,e,s)=>{const i=n.length;let o=n.indexOf(t);return o===-1?!e&&s?n[i-1]:n[0]:(o+=e?1:-1,s&&(o=(o+i)%i),n[Math.max(0,Math.min(o,i-1))])},sr=/[^.]*(?=\..*)\.|.*/,ir=/\..*/,or=/::\d+$/,Ye={};let Xn=1;const _i={mouseenter:"mouseover",mouseleave:"mouseout"},rr=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function vi(n,t){return t&&`${t}::${Xn++}`||n.uidEvent||Xn++}function Ei(n){const t=vi(n);return n.uidEvent=t,Ye[t]=Ye[t]||{},Ye[t]}function ar(n,t){return function e(s){return Sn(s,{delegateTarget:n}),e.oneOff&&h.off(n,s.type,t),t.apply(n,[s])}}function lr(n,t,e){return function s(i){const o=n.querySelectorAll(t);for(let{target:r}=i;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return Sn(i,{delegateTarget:r}),s.oneOff&&h.off(n,i.type,t,e),e.apply(r,[i])}}function bi(n,t,e=null){return Object.values(n).find(s=>s.callable===t&&s.delegationSelector===e)}function yi(n,t,e){const s=typeof t=="string",i=s?e:t||e;let o=Ai(n);return rr.has(o)||(o=n),[s,i,o]}function Jn(n,t,e,s,i){if(typeof t!="string"||!n)return;let[o,r,a]=yi(t,e,s);t in _i&&(r=(N=>function(A){if(!A.relatedTarget||A.relatedTarget!==A.delegateTarget&&!A.delegateTarget.contains(A.relatedTarget))return N.call(this,A)})(r));const l=Ei(n),c=l[a]||(l[a]={}),u=bi(c,r,o?e:null);if(u){u.oneOff=u.oneOff&&i;return}const m=vi(r,t.replace(sr,"")),f=o?lr(n,e,r):ar(n,r);f.delegationSelector=o?e:null,f.callable=r,f.oneOff=i,f.uidEvent=m,c[m]=f,n.addEventListener(a,f,o)}function un(n,t,e,s,i){const o=bi(t[e],s,i);o&&(n.removeEventListener(e,o,!!i),delete t[e][o.uidEvent])}function cr(n,t,e,s){const i=t[e]||{};for(const[o,r]of Object.entries(i))o.includes(s)&&un(n,t,e,r.callable,r.delegationSelector)}function Ai(n){return n=n.replace(ir,""),_i[n]||n}const h={on(n,t,e,s){Jn(n,t,e,s,!1)},one(n,t,e,s){Jn(n,t,e,s,!0)},off(n,t,e,s){if(typeof t!="string"||!n)return;const[i,o,r]=yi(t,e,s),a=r!==t,l=Ei(n),c=l[r]||{},u=t.startsWith(".");if(typeof o<"u"){if(!Object.keys(c).length)return;un(n,l,r,o,i?e:null);return}if(u)for(const m of Object.keys(l))cr(n,l,m,t.slice(1));for(const[m,f]of Object.entries(c)){const p=m.replace(or,"");(!a||t.includes(p))&&un(n,l,r,f.callable,f.delegationSelector)}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const s=mi(),i=Ai(t),o=t!==i;let r=null,a=!0,l=!0,c=!1;o&&s&&(r=s.Event(t,e),s(n).trigger(r),a=!r.isPropagationStopped(),l=!r.isImmediatePropagationStopped(),c=r.isDefaultPrevented());const u=Sn(new Event(t,{bubbles:a,cancelable:!0}),e);return c&&u.preventDefault(),l&&n.dispatchEvent(u),u.defaultPrevented&&r&&r.preventDefault(),u}};function Sn(n,t={}){for(const[e,s]of Object.entries(t))try{n[e]=s}catch{Object.defineProperty(n,e,{configurable:!0,get(){return s}})}return n}function Zn(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function Ue(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const et={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${Ue(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${Ue(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of e){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=Zn(n.dataset[s])}return t},getDataAttribute(n,t){return Zn(n.getAttribute(`data-bs-${Ue(t)}`))}};class ee{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const s=tt(e)?et.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...tt(e)?et.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[s,i]of Object.entries(e)){const o=t[s],r=tt(o)?"element":Zo(o);if(!new RegExp(i).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${i}".`)}}}const ur="5.3.2";class q extends ee{constructor(t,e){super(),t=ct(t),t&&(this._element=t,this._config=this._getConfig(e),Be.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Be.remove(this._element,this.constructor.DATA_KEY),h.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,s=!0){gi(t,e,s)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Be.get(ct(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return ur}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const qe=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?hi(e.trim()):null}return t},O={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let s=n.parentNode.closest(t);for(;s;)e.push(s),s=s.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!ut(e)&&Wt(e))},getSelectorFromElement(n){const t=qe(n);return t&&O.findOne(t)?t:null},getElementFromSelector(n){const t=qe(n);return t?O.findOne(t):null},getMultipleElementsFromSelector(n){const t=qe(n);return t?O.find(t):[]}},Pe=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,s=n.NAME;h.on(document,e,`[data-bs-dismiss="${s}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),ut(this))return;const o=O.getElementFromSelector(this)||this.closest(`.${s}`);n.getOrCreateInstance(o)[t]()})},dr="alert",hr="bs.alert",wi=`.${hr}`,fr=`close${wi}`,pr=`closed${wi}`,mr="fade",gr="show";class Re extends q{static get NAME(){return dr}close(){if(h.trigger(this._element,fr).defaultPrevented)return;this._element.classList.remove(gr);const e=this._element.classList.contains(mr);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),h.trigger(this._element,pr),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=Re.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Pe(Re,"close");U(Re);const _r="button",vr="bs.button",Er=`.${vr}`,br=".data-api",yr="active",ts='[data-bs-toggle="button"]',Ar=`click${Er}${br}`;class Ve extends q{static get NAME(){return _r}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(yr))}static jQueryInterface(t){return this.each(function(){const e=Ve.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}h.on(document,Ar,ts,n=>{n.preventDefault();const t=n.target.closest(ts);Ve.getOrCreateInstance(t).toggle()});U(Ve);const wr="swipe",zt=".bs.swipe",Tr=`touchstart${zt}`,Cr=`touchmove${zt}`,Or=`touchend${zt}`,Nr=`pointerdown${zt}`,Sr=`pointerup${zt}`,Dr="touch",Lr="pen",Ir="pointer-event",$r=40,kr={endCallback:null,leftCallback:null,rightCallback:null},xr={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Ie extends ee{constructor(t,e){super(),this._element=t,!(!t||!Ie.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return kr}static get DefaultType(){return xr}static get NAME(){return wr}dispose(){h.off(this._element,zt)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),W(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=$r)return;const e=t/this._deltaX;this._deltaX=0,e&&W(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(h.on(this._element,Nr,t=>this._start(t)),h.on(this._element,Sr,t=>this._end(t)),this._element.classList.add(Ir)):(h.on(this._element,Tr,t=>this._start(t)),h.on(this._element,Cr,t=>this._move(t)),h.on(this._element,Or,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Lr||t.pointerType===Dr)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Mr="carousel",Pr="bs.carousel",ht=`.${Pr}`,Ti=".data-api",Rr="ArrowLeft",Vr="ArrowRight",Hr=500,Yt="next",Ct="prev",Dt="left",ge="right",Wr=`slide${ht}`,Ge=`slid${ht}`,zr=`keydown${ht}`,jr=`mouseenter${ht}`,Fr=`mouseleave${ht}`,Br=`dragstart${ht}`,Kr=`load${ht}${Ti}`,Yr=`click${ht}${Ti}`,Ci="carousel",ce="active",Ur="slide",qr="carousel-item-end",Gr="carousel-item-start",Qr="carousel-item-next",Xr="carousel-item-prev",Oi=".active",Ni=".carousel-item",Jr=Oi+Ni,Zr=".carousel-item img",ta=".carousel-indicators",ea="[data-bs-slide], [data-bs-slide-to]",na='[data-bs-ride="carousel"]',sa={[Rr]:ge,[Vr]:Dt},ia={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},oa={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ne extends q{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=O.findOne(ta,this._element),this._addEventListeners(),this._config.ride===Ci&&this.cycle()}static get Default(){return ia}static get DefaultType(){return oa}static get NAME(){return Mr}next(){this._slide(Yt)}nextWhenVisible(){!document.hidden&&Wt(this._element)&&this.next()}prev(){this._slide(Ct)}pause(){this._isSliding&&fi(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){h.one(this._element,Ge,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){h.one(this._element,Ge,()=>this.to(t));return}const s=this._getItemIndex(this._getActive());if(s===t)return;const i=t>s?Yt:Ct;this._slide(i,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&h.on(this._element,zr,t=>this._keydown(t)),this._config.pause==="hover"&&(h.on(this._element,jr,()=>this.pause()),h.on(this._element,Fr,()=>this._maybeEnableCycle())),this._config.touch&&Ie.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of O.find(Zr,this._element))h.on(s,Br,i=>i.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(Dt)),rightCallback:()=>this._slide(this._directionToOrder(ge)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Hr+this._config.interval))}};this._swipeHelper=new Ie(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=sa[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=O.findOne(Oi,this._indicatorsElement);e.classList.remove(ce),e.removeAttribute("aria-current");const s=O.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);s&&(s.classList.add(ce),s.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const s=this._getActive(),i=t===Yt,o=e||Nn(this._getItems(),s,i,this._config.wrap);if(o===s)return;const r=this._getItemIndex(o),a=p=>h.trigger(this._element,p,{relatedTarget:o,direction:this._orderToDirection(t),from:this._getItemIndex(s),to:r});if(a(Wr).defaultPrevented||!s||!o)return;const c=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(r),this._activeElement=o;const u=i?Gr:qr,m=i?Qr:Xr;o.classList.add(m),te(o),s.classList.add(u),o.classList.add(u);const f=()=>{o.classList.remove(u,m),o.classList.add(ce),s.classList.remove(ce,m,u),this._isSliding=!1,a(Ge)};this._queueCallback(f,s,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(Ur)}_getActive(){return O.findOne(Jr,this._element)}_getItems(){return O.find(Ni,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return K()?t===Dt?Ct:Yt:t===Dt?Yt:Ct}_orderToDirection(t){return K()?t===Ct?Dt:ge:t===Ct?ge:Dt}static jQueryInterface(t){return this.each(function(){const e=ne.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(document,Yr,ea,function(n){const t=O.getElementFromSelector(this);if(!t||!t.classList.contains(Ci))return;n.preventDefault();const e=ne.getOrCreateInstance(t),s=this.getAttribute("data-bs-slide-to");if(s){e.to(s),e._maybeEnableCycle();return}if(et.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});h.on(window,Kr,()=>{const n=O.find(na);for(const t of n)ne.getOrCreateInstance(t)});U(ne);const ra="collapse",aa="bs.collapse",se=`.${aa}`,la=".data-api",ca=`show${se}`,ua=`shown${se}`,da=`hide${se}`,ha=`hidden${se}`,fa=`click${se}${la}`,Qe="show",It="collapse",ue="collapsing",pa="collapsed",ma=`:scope .${It} .${It}`,ga="collapse-horizontal",_a="width",va="height",Ea=".collapse.show, .collapse.collapsing",dn='[data-bs-toggle="collapse"]',ba={parent:null,toggle:!0},ya={parent:"(null|element)",toggle:"boolean"};class Jt extends q{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const s=O.find(dn);for(const i of s){const o=O.getSelectorFromElement(i),r=O.find(o).filter(a=>a===this._element);o!==null&&r.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ba}static get DefaultType(){return ya}static get NAME(){return ra}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(Ea).filter(a=>a!==this._element).map(a=>Jt.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||h.trigger(this._element,ca).defaultPrevented)return;for(const a of t)a.hide();const s=this._getDimension();this._element.classList.remove(It),this._element.classList.add(ue),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(ue),this._element.classList.add(It,Qe),this._element.style[s]="",h.trigger(this._element,ua)},r=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[s]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown()||h.trigger(this._element,da).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,te(this._element),this._element.classList.add(ue),this._element.classList.remove(It,Qe);for(const i of this._triggerArray){const o=O.getElementFromSelector(i);o&&!this._isShown(o)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(ue),this._element.classList.add(It),h.trigger(this._element,ha)};this._element.style[e]="",this._queueCallback(s,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Qe)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=ct(t.parent),t}_getDimension(){return this._element.classList.contains(ga)?_a:va}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(dn);for(const e of t){const s=O.getElementFromSelector(e);s&&this._addAriaAndCollapsedClass([e],this._isShown(s))}}_getFirstLevelChildren(t){const e=O.find(ma,this._config.parent);return O.find(t,this._config.parent).filter(s=>!e.includes(s))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const s of t)s.classList.toggle(pa,!e),s.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const s=Jt.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t]()}})}}h.on(document,fa,dn,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const t of O.getMultipleElementsFromSelector(this))Jt.getOrCreateInstance(t,{toggle:!1}).toggle()});U(Jt);const es="dropdown",Aa="bs.dropdown",yt=`.${Aa}`,Dn=".data-api",wa="Escape",ns="Tab",Ta="ArrowUp",ss="ArrowDown",Ca=2,Oa=`hide${yt}`,Na=`hidden${yt}`,Sa=`show${yt}`,Da=`shown${yt}`,Si=`click${yt}${Dn}`,Di=`keydown${yt}${Dn}`,La=`keyup${yt}${Dn}`,Lt="show",Ia="dropup",$a="dropend",ka="dropstart",xa="dropup-center",Ma="dropdown-center",gt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Pa=`${gt}.${Lt}`,_e=".dropdown-menu",Ra=".navbar",Va=".navbar-nav",Ha=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Wa=K()?"top-end":"top-start",za=K()?"top-start":"top-end",ja=K()?"bottom-end":"bottom-start",Fa=K()?"bottom-start":"bottom-end",Ba=K()?"left-start":"right-start",Ka=K()?"right-start":"left-start",Ya="top",Ua="bottom",qa={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Ga={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class X extends q{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=O.next(this._element,_e)[0]||O.prev(this._element,_e)[0]||O.findOne(_e,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return qa}static get DefaultType(){return Ga}static get NAME(){return es}toggle(){return this._isShown()?this.hide():this.show()}show(){if(ut(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!h.trigger(this._element,Sa,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Va))for(const s of[].concat(...document.body.children))h.on(s,"mouseover",Le);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Lt),this._element.classList.add(Lt),h.trigger(this._element,Da,t)}}hide(){if(ut(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!h.trigger(this._element,Oa,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))h.off(s,"mouseover",Le);this._popper&&this._popper.destroy(),this._menu.classList.remove(Lt),this._element.classList.remove(Lt),this._element.setAttribute("aria-expanded","false"),et.removeDataAttribute(this._menu,"popper"),h.trigger(this._element,Na,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!tt(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${es.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof di>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:tt(this._config.reference)?t=ct(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=On(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Lt)}_getPlacement(){const t=this._parent;if(t.classList.contains($a))return Ba;if(t.classList.contains(ka))return Ka;if(t.classList.contains(xa))return Ya;if(t.classList.contains(Ma))return Ua;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(Ia)?e?za:Wa:e?Fa:ja}_detectNavbar(){return this._element.closest(Ra)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(et.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...W(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const s=O.find(Ha,this._menu).filter(i=>Wt(i));s.length&&Nn(s,e,t===ss,!s.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=X.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===Ca||t.type==="keyup"&&t.key!==ns)return;const e=O.find(Pa);for(const s of e){const i=X.getInstance(s);if(!i||i._config.autoClose===!1)continue;const o=t.composedPath(),r=o.includes(i._menu);if(o.includes(i._element)||i._config.autoClose==="inside"&&!r||i._config.autoClose==="outside"&&r||i._menu.contains(t.target)&&(t.type==="keyup"&&t.key===ns||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:i._element};t.type==="click"&&(a.clickEvent=t),i._completeHide(a)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),s=t.key===wa,i=[Ta,ss].includes(t.key);if(!i&&!s||e&&!s)return;t.preventDefault();const o=this.matches(gt)?this:O.prev(this,gt)[0]||O.next(this,gt)[0]||O.findOne(gt,t.delegateTarget.parentNode),r=X.getOrCreateInstance(o);if(i){t.stopPropagation(),r.show(),r._selectMenuItem(t);return}r._isShown()&&(t.stopPropagation(),r.hide(),o.focus())}}h.on(document,Di,gt,X.dataApiKeydownHandler);h.on(document,Di,_e,X.dataApiKeydownHandler);h.on(document,Si,X.clearMenus);h.on(document,La,X.clearMenus);h.on(document,Si,gt,function(n){n.preventDefault(),X.getOrCreateInstance(this).toggle()});U(X);const Li="backdrop",Qa="fade",is="show",os=`mousedown.bs.${Li}`,Xa={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Ja={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ii extends ee{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Xa}static get DefaultType(){return Ja}static get NAME(){return Li}show(t){if(!this._config.isVisible){W(t);return}this._append();const e=this._getElement();this._config.isAnimated&&te(e),e.classList.add(is),this._emulateAnimation(()=>{W(t)})}hide(t){if(!this._config.isVisible){W(t);return}this._getElement().classList.remove(is),this._emulateAnimation(()=>{this.dispose(),W(t)})}dispose(){this._isAppended&&(h.off(this._element,os),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Qa),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=ct(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),h.on(t,os,()=>{W(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){gi(t,this._getElement(),this._config.isAnimated)}}const Za="focustrap",tl="bs.focustrap",$e=`.${tl}`,el=`focusin${$e}`,nl=`keydown.tab${$e}`,sl="Tab",il="forward",rs="backward",ol={autofocus:!0,trapElement:null},rl={autofocus:"boolean",trapElement:"element"};class $i extends ee{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return ol}static get DefaultType(){return rl}static get NAME(){return Za}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),h.off(document,$e),h.on(document,el,t=>this._handleFocusin(t)),h.on(document,nl,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,h.off(document,$e))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const s=O.focusableChildren(e);s.length===0?e.focus():this._lastTabNavDirection===rs?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){t.key===sl&&(this._lastTabNavDirection=t.shiftKey?rs:il)}}const as=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ls=".sticky-top",de="padding-right",cs="margin-right";class hn{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,de,e=>e+t),this._setElementAttributes(as,de,e=>e+t),this._setElementAttributes(ls,cs,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,de),this._resetElementAttributes(as,de),this._resetElementAttributes(ls,cs)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,s){const i=this.getWidth(),o=r=>{if(r!==this._element&&window.innerWidth>r.clientWidth+i)return;this._saveInitialAttribute(r,e);const a=window.getComputedStyle(r).getPropertyValue(e);r.style.setProperty(e,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,o)}_saveInitialAttribute(t,e){const s=t.style.getPropertyValue(e);s&&et.setDataAttribute(t,e,s)}_resetElementAttributes(t,e){const s=i=>{const o=et.getDataAttribute(i,e);if(o===null){i.style.removeProperty(e);return}et.removeDataAttribute(i,e),i.style.setProperty(e,o)};this._applyManipulationCallback(t,s)}_applyManipulationCallback(t,e){if(tt(t)){e(t);return}for(const s of O.find(t,this._element))e(s)}}const al="modal",ll="bs.modal",Y=`.${ll}`,cl=".data-api",ul="Escape",dl=`hide${Y}`,hl=`hidePrevented${Y}`,ki=`hidden${Y}`,xi=`show${Y}`,fl=`shown${Y}`,pl=`resize${Y}`,ml=`click.dismiss${Y}`,gl=`mousedown.dismiss${Y}`,_l=`keydown.dismiss${Y}`,vl=`click${Y}${cl}`,us="modal-open",El="fade",ds="show",Xe="modal-static",bl=".modal.show",yl=".modal-dialog",Al=".modal-body",wl='[data-bs-toggle="modal"]',Tl={backdrop:!0,focus:!0,keyboard:!0},Cl={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Rt extends q{constructor(t,e){super(t,e),this._dialog=O.findOne(yl,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new hn,this._addEventListeners()}static get Default(){return Tl}static get DefaultType(){return Cl}static get NAME(){return al}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||h.trigger(this._element,xi,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(us),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||h.trigger(this._element,dl).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ds),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){h.off(window,Y),h.off(this._dialog,Y),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ii({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new $i({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=O.findOne(Al,this._dialog);e&&(e.scrollTop=0),te(this._element),this._element.classList.add(ds);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,h.trigger(this._element,fl,{relatedTarget:t})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){h.on(this._element,_l,t=>{if(t.key===ul){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),h.on(window,pl,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),h.on(this._element,gl,t=>{h.one(this._element,ml,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(us),this._resetAdjustments(),this._scrollBar.reset(),h.trigger(this._element,ki)})}_isAnimated(){return this._element.classList.contains(El)}_triggerBackdropTransition(){if(h.trigger(this._element,hl).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(Xe)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(Xe),this._queueCallback(()=>{this._element.classList.remove(Xe),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),s=e>0;if(s&&!t){const i=K()?"paddingLeft":"paddingRight";this._element.style[i]=`${e}px`}if(!s&&t){const i=K()?"paddingRight":"paddingLeft";this._element.style[i]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const s=Rt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t](e)}})}}h.on(document,vl,wl,function(n){const t=O.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),h.one(t,xi,i=>{i.defaultPrevented||h.one(t,ki,()=>{Wt(this)&&this.focus()})});const e=O.findOne(bl);e&&Rt.getInstance(e).hide(),Rt.getOrCreateInstance(t).toggle(this)});Pe(Rt);U(Rt);const Ol="offcanvas",Nl="bs.offcanvas",it=`.${Nl}`,Mi=".data-api",Sl=`load${it}${Mi}`,Dl="Escape",hs="show",fs="showing",ps="hiding",Ll="offcanvas-backdrop",Pi=".offcanvas.show",Il=`show${it}`,$l=`shown${it}`,kl=`hide${it}`,ms=`hidePrevented${it}`,Ri=`hidden${it}`,xl=`resize${it}`,Ml=`click${it}${Mi}`,Pl=`keydown.dismiss${it}`,Rl='[data-bs-toggle="offcanvas"]',Vl={backdrop:!0,keyboard:!0,scroll:!1},Hl={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class st extends q{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Vl}static get DefaultType(){return Hl}static get NAME(){return Ol}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||h.trigger(this._element,Il,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new hn().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(fs);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(hs),this._element.classList.remove(fs),h.trigger(this._element,$l,{relatedTarget:t})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||h.trigger(this._element,kl).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ps),this._backdrop.hide();const e=()=>{this._element.classList.remove(hs,ps),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new hn().reset(),h.trigger(this._element,Ri)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){h.trigger(this._element,ms);return}this.hide()},e=!!this._config.backdrop;return new Ii({className:Ll,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new $i({trapElement:this._element})}_addEventListeners(){h.on(this._element,Pl,t=>{if(t.key===Dl){if(this._config.keyboard){this.hide();return}h.trigger(this._element,ms)}})}static jQueryInterface(t){return this.each(function(){const e=st.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}h.on(document,Ml,Rl,function(n){const t=O.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),ut(this))return;h.one(t,Ri,()=>{Wt(this)&&this.focus()});const e=O.findOne(Pi);e&&e!==t&&st.getInstance(e).hide(),st.getOrCreateInstance(t).toggle(this)});h.on(window,Sl,()=>{for(const n of O.find(Pi))st.getOrCreateInstance(n).show()});h.on(window,xl,()=>{for(const n of O.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&st.getOrCreateInstance(n).hide()});Pe(st);U(st);const Wl=/^aria-[\w-]*$/i,Vi={"*":["class","dir","id","lang","role",Wl],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},zl=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),jl=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Fl=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?zl.has(e)?!!jl.test(n.nodeValue):!0:t.filter(s=>s instanceof RegExp).some(s=>s.test(e))};function Bl(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const i=new window.DOMParser().parseFromString(n,"text/html"),o=[].concat(...i.body.querySelectorAll("*"));for(const r of o){const a=r.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){r.remove();continue}const l=[].concat(...r.attributes),c=[].concat(t["*"]||[],t[a]||[]);for(const u of l)Fl(u,c)||r.removeAttribute(u.nodeName)}return i.body.innerHTML}const Kl="TemplateFactory",Yl={allowList:Vi,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Ul={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},ql={entry:"(string|element|function|null)",selector:"(string|element)"};class Gl extends ee{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Yl}static get DefaultType(){return Ul}static get NAME(){return Kl}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,o]of Object.entries(this._config.content))this._setContent(t,o,i);const e=t.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&e.classList.add(...s.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,s]of Object.entries(t))super._typeCheckConfig({selector:e,entry:s},ql)}_setContent(t,e,s){const i=O.findOne(s,t);if(i){if(e=this._resolvePossibleFunction(e),!e){i.remove();return}if(tt(e)){this._putElementInTemplate(ct(e),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(e);return}i.textContent=e}}_maybeSanitize(t){return this._config.sanitize?Bl(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return W(t,[this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const Ql="tooltip",Xl=new Set(["sanitize","allowList","sanitizeFn"]),Je="fade",Jl="modal",he="show",Zl=".tooltip-inner",gs=`.${Jl}`,_s="hide.bs.modal",Ut="hover",Ze="focus",tc="click",ec="manual",nc="hide",sc="hidden",ic="show",oc="shown",rc="inserted",ac="click",lc="focusin",cc="focusout",uc="mouseenter",dc="mouseleave",hc={AUTO:"auto",TOP:"top",RIGHT:K()?"left":"right",BOTTOM:"bottom",LEFT:K()?"right":"left"},fc={allowList:Vi,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},pc={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class jt extends q{constructor(t,e){if(typeof di>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return fc}static get DefaultType(){return pc}static get NAME(){return Ql}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),h.off(this._element.closest(gs),_s,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=h.trigger(this._element,this.constructor.eventName(ic)),s=(pi(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!s)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:o}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(o.append(i),h.trigger(this._element,this.constructor.eventName(rc))),this._popper=this._createPopper(i),i.classList.add(he),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))h.on(a,"mouseover",Le);const r=()=>{h.trigger(this._element,this.constructor.eventName(oc)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(r,this.tip,this._isAnimated())}hide(){if(!this._isShown()||h.trigger(this._element,this.constructor.eventName(nc)).defaultPrevented)return;if(this._getTipElement().classList.remove(he),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))h.off(i,"mouseover",Le);this._activeTrigger[tc]=!1,this._activeTrigger[Ze]=!1,this._activeTrigger[Ut]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),h.trigger(this._element,this.constructor.eventName(sc)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Je,he),e.classList.add(`bs-${this.constructor.NAME}-auto`);const s=tr(this.constructor.NAME).toString();return e.setAttribute("id",s),this._isAnimated()&&e.classList.add(Je),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Gl({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Zl]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Je)}_isShown(){return this.tip&&this.tip.classList.contains(he)}_createPopper(t){const e=W(this._config.placement,[this,t,this._element]),s=hc[e.toUpperCase()];return On(this._element,t,this._getPopperConfig(s))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return W(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...e,...W(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")h.on(this._element,this.constructor.eventName(ac),this._config.selector,s=>{this._initializeOnDelegatedTarget(s).toggle()});else if(e!==ec){const s=e===Ut?this.constructor.eventName(uc):this.constructor.eventName(lc),i=e===Ut?this.constructor.eventName(dc):this.constructor.eventName(cc);h.on(this._element,s,this._config.selector,o=>{const r=this._initializeOnDelegatedTarget(o);r._activeTrigger[o.type==="focusin"?Ze:Ut]=!0,r._enter()}),h.on(this._element,i,this._config.selector,o=>{const r=this._initializeOnDelegatedTarget(o);r._activeTrigger[o.type==="focusout"?Ze:Ut]=r._element.contains(o.relatedTarget),r._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},h.on(this._element.closest(gs),_s,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=et.getDataAttributes(this._element);for(const s of Object.keys(e))Xl.has(s)&&delete e[s];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:ct(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,s]of Object.entries(this._config))this.constructor.Default[e]!==s&&(t[e]=s);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=jt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}U(jt);const mc="popover",gc=".popover-header",_c=".popover-body",vc={...jt.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Ec={...jt.DefaultType,content:"(null|string|element|function)"};class Ln extends jt{static get Default(){return vc}static get DefaultType(){return Ec}static get NAME(){return mc}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[gc]:this._getTitle(),[_c]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=Ln.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}U(Ln);const bc="scrollspy",yc="bs.scrollspy",In=`.${yc}`,Ac=".data-api",wc=`activate${In}`,vs=`click${In}`,Tc=`load${In}${Ac}`,Cc="dropdown-item",Ot="active",Oc='[data-bs-spy="scroll"]',tn="[href]",Nc=".nav, .list-group",Es=".nav-link",Sc=".nav-item",Dc=".list-group-item",Lc=`${Es}, ${Sc} > ${Es}, ${Dc}`,Ic=".dropdown",$c=".dropdown-toggle",kc={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},xc={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class He extends q{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return kc}static get DefaultType(){return xc}static get NAME(){return bc}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=ct(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(h.off(this._config.target,vs),h.on(this._config.target,vs,tn,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const s=this._rootElement||window,i=e.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:i,behavior:"smooth"});return}s.scrollTop=i}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=r=>this._targetLinks.get(`#${r.target.id}`),s=r=>{this._previousScrollData.visibleEntryTop=r.target.offsetTop,this._process(e(r))},i=(this._rootElement||document.documentElement).scrollTop,o=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const r of t){if(!r.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(r));continue}const a=r.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(o&&a){if(s(r),!i)return;continue}!o&&!a&&s(r)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=O.find(tn,this._config.target);for(const e of t){if(!e.hash||ut(e))continue;const s=O.findOne(decodeURI(e.hash),this._element);Wt(s)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,s))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Ot),this._activateParents(t),h.trigger(this._element,wc,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(Cc)){O.findOne($c,t.closest(Ic)).classList.add(Ot);return}for(const e of O.parents(t,Nc))for(const s of O.prev(e,Lc))s.classList.add(Ot)}_clearActiveClass(t){t.classList.remove(Ot);const e=O.find(`${tn}.${Ot}`,t);for(const s of e)s.classList.remove(Ot)}static jQueryInterface(t){return this.each(function(){const e=He.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(window,Tc,()=>{for(const n of O.find(Oc))He.getOrCreateInstance(n)});U(He);const Mc="tab",Pc="bs.tab",At=`.${Pc}`,Rc=`hide${At}`,Vc=`hidden${At}`,Hc=`show${At}`,Wc=`shown${At}`,zc=`click${At}`,jc=`keydown${At}`,Fc=`load${At}`,Bc="ArrowLeft",bs="ArrowRight",Kc="ArrowUp",ys="ArrowDown",en="Home",As="End",_t="active",ws="fade",nn="show",Yc="dropdown",Hi=".dropdown-toggle",Uc=".dropdown-menu",sn=`:not(${Hi})`,qc='.list-group, .nav, [role="tablist"]',Gc=".nav-item, .list-group-item",Qc=`.nav-link${sn}, .list-group-item${sn}, [role="tab"]${sn}`,Wi='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',on=`${Qc}, ${Wi}`,Xc=`.${_t}[data-bs-toggle="tab"], .${_t}[data-bs-toggle="pill"], .${_t}[data-bs-toggle="list"]`;class Vt extends q{constructor(t){super(t),this._parent=this._element.closest(qc),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),h.on(this._element,jc,e=>this._keydown(e)))}static get NAME(){return Mc}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),s=e?h.trigger(e,Rc,{relatedTarget:t}):null;h.trigger(t,Hc,{relatedTarget:e}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(_t),this._activate(O.getElementFromSelector(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(nn);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),h.trigger(t,Wc,{relatedTarget:e})};this._queueCallback(s,t,t.classList.contains(ws))}_deactivate(t,e){if(!t)return;t.classList.remove(_t),t.blur(),this._deactivate(O.getElementFromSelector(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(nn);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),h.trigger(t,Vc,{relatedTarget:e})};this._queueCallback(s,t,t.classList.contains(ws))}_keydown(t){if(![Bc,bs,Kc,ys,en,As].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(i=>!ut(i));let s;if([en,As].includes(t.key))s=e[t.key===en?0:e.length-1];else{const i=[bs,ys].includes(t.key);s=Nn(e,t.target,i,!0)}s&&(s.focus({preventScroll:!0}),Vt.getOrCreateInstance(s).show())}_getChildren(){return O.find(on,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const s of e)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),s=this._getOuterElement(t);t.setAttribute("aria-selected",e),s!==t&&this._setAttributeIfNotExists(s,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=O.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const s=this._getOuterElement(t);if(!s.classList.contains(Yc))return;const i=(o,r)=>{const a=O.findOne(o,s);a&&a.classList.toggle(r,e)};i(Hi,_t),i(Uc,nn),s.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,s){t.hasAttribute(e)||t.setAttribute(e,s)}_elemIsActive(t){return t.classList.contains(_t)}_getInnerElement(t){return t.matches(on)?t:O.findOne(on,t)}_getOuterElement(t){return t.closest(Gc)||t}static jQueryInterface(t){return this.each(function(){const e=Vt.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(document,zc,Wi,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!ut(this)&&Vt.getOrCreateInstance(this).show()});h.on(window,Fc,()=>{for(const n of O.find(Xc))Vt.getOrCreateInstance(n)});U(Vt);const Jc="toast",Zc="bs.toast",ft=`.${Zc}`,tu=`mouseover${ft}`,eu=`mouseout${ft}`,nu=`focusin${ft}`,su=`focusout${ft}`,iu=`hide${ft}`,ou=`hidden${ft}`,ru=`show${ft}`,au=`shown${ft}`,lu="fade",Ts="hide",fe="show",pe="showing",cu={animation:"boolean",autohide:"boolean",delay:"number"},uu={animation:!0,autohide:!0,delay:5e3};class We extends q{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return uu}static get DefaultType(){return cu}static get NAME(){return Jc}show(){if(h.trigger(this._element,ru).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(lu);const e=()=>{this._element.classList.remove(pe),h.trigger(this._element,au),this._maybeScheduleHide()};this._element.classList.remove(Ts),te(this._element),this._element.classList.add(fe,pe),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||h.trigger(this._element,iu).defaultPrevented)return;const e=()=>{this._element.classList.add(Ts),this._element.classList.remove(pe,fe),h.trigger(this._element,ou)};this._element.classList.add(pe),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(fe),super.dispose()}isShown(){return this._element.classList.contains(fe)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){h.on(this._element,tu,t=>this._onInteraction(t,!0)),h.on(this._element,eu,t=>this._onInteraction(t,!1)),h.on(this._element,nu,t=>this._onInteraction(t,!0)),h.on(this._element,su,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=We.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Pe(We);U(We);const Cs={"/":{page:"pages/home.html",title:"Home",bodyClass:"page-home",loader:()=>Tt(()=>import("./home-qLPUnyHo.js"),__vite__mapDeps([0,1,2]))},"/physicalizing-emotions":{page:"pages/physicalizing.html",title:"Physicalizing Emotions",bodyClass:"page-physicalizing",loader:()=>Tt(()=>import("./physicalizing-ql6NHFDt.js"),__vite__mapDeps([3,4,5,2,6]))},"/visualization":{page:"pages/visualization.html",title:"Visualization",bodyClass:"page-visualization",loader:()=>Tt(()=>import("./visualization-C7nhozuL.js"),__vite__mapDeps([7,2]))},"/visualization/periods":{page:"pages/periods.html",title:"Visualization – Periods",bodyClass:"page-periods",loader:()=>Tt(()=>import("./periods-D_KyCaCk.js"),__vite__mapDeps([8,2]))},"/about":{page:"pages/about.html",title:"About",bodyClass:"page-about",loader:()=>Tt(()=>import("./about-ClI4Tt_7.js"),__vite__mapDeps([9,2]))},"/epilogue":{page:"pages/epilogue.html",title:"Epilogue",bodyClass:"page-epilogue",loader:()=>Tt(()=>import("./epilogue-gtZes7Rr.js"),__vite__mapDeps([10,4,5,2]))}},lt="/everyday/".replace(/\/$/,"");let Nt=null,fn=!1;const Os=async()=>{let n=window.location.pathname;lt!=="/"&&n.startsWith(lt)&&(n=n.slice(lt.length)),n=n||"/",n.startsWith("/")||(n="/"+n);const t=Cs[n]||Cs["/"];if(Nt!=null&&Nt.destroy)try{Nt.destroy()}catch(i){console.warn("Error en destroy():",i)}if(Nt=null,document.title=t.title,lo(t.bodyClass),await ao(t.page),await Ws("#header",n==="/visualization/periods"?"componets/header-interior.html":"componets/header.html"),t.loader){const i=await t.loader();i!=null&&i.init&&(i.init(),Nt=i)}t.page.includes("visualization")&&fn&&(fn=!1,setTimeout(()=>co(),0));const s=document.getElementById("offcanvasDarkNavbar");if(s){const i=st.getInstance(s);i&&i.hide()}document.body.classList.remove("overflow-hidden"),document.body.removeAttribute("style"),window.scrollTo(0,0)};function du(){document.querySelector("[data-router-view]")&&(document.addEventListener("click",t=>{const e=t.target.closest("[data-link]");if(!e)return;const s=new URL(e.href);if(s.origin!==window.location.origin)return;e.classList.contains("link-back")&&(fn=!0),t.preventDefault();let i=s.pathname;lt!=="/"&&i.startsWith(lt)&&(i=i.slice(lt.length)||"/"),i=lt==="/"?i:lt+i,window.location.href=i}),window.addEventListener("popstate",Os),Os())}var ve={exports:{}},Ee={exports:{}},be={exports:{}};/*!
  * Bootstrap data.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var hu=be.exports,Ns;function fu(){return Ns||(Ns=1,(function(n,t){(function(e,s){n.exports=s()})(hu,(function(){const e=new Map;return{set(i,o,r){e.has(i)||e.set(i,new Map);const a=e.get(i);if(!a.has(o)&&a.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(a.keys())[0]}.`);return}a.set(o,r)},get(i,o){return e.has(i)&&e.get(i).get(o)||null},remove(i,o){if(!e.has(i))return;const r=e.get(i);r.delete(o),r.size===0&&e.delete(i)}}}))})(be)),be.exports}var ye={exports:{}},qt={exports:{}};/*!
  * Bootstrap index.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var pu=qt.exports,Ss;function ot(){return Ss||(Ss=1,(function(n,t){(function(e,s){s(t)})(pu,(function(e){const o="transitionend",r=d=>(d&&window.CSS&&window.CSS.escape&&(d=d.replace(/#([^\s"#']+)/g,(v,E)=>`#${CSS.escape(E)}`)),d),a=d=>d==null?`${d}`:Object.prototype.toString.call(d).match(/\s([a-z]+)/i)[1].toLowerCase(),l=d=>{do d+=Math.floor(Math.random()*1e6);while(document.getElementById(d));return d},c=d=>{if(!d)return 0;let{transitionDuration:v,transitionDelay:E}=window.getComputedStyle(d);const b=Number.parseFloat(v),D=Number.parseFloat(E);return!b&&!D?0:(v=v.split(",")[0],E=E.split(",")[0],(Number.parseFloat(v)+Number.parseFloat(E))*1e3)},u=d=>{d.dispatchEvent(new Event(o))},m=d=>!d||typeof d!="object"?!1:(typeof d.jquery<"u"&&(d=d[0]),typeof d.nodeType<"u"),f=d=>m(d)?d.jquery?d[0]:d:typeof d=="string"&&d.length>0?document.querySelector(r(d)):null,p=d=>{if(!m(d)||d.getClientRects().length===0)return!1;const v=getComputedStyle(d).getPropertyValue("visibility")==="visible",E=d.closest("details:not([open])");if(!E)return v;if(E!==d){const b=d.closest("summary");if(b&&b.parentNode!==E||b===null)return!1}return v},N=d=>!d||d.nodeType!==Node.ELEMENT_NODE||d.classList.contains("disabled")?!0:typeof d.disabled<"u"?d.disabled:d.hasAttribute("disabled")&&d.getAttribute("disabled")!=="false",A=d=>{if(!document.documentElement.attachShadow)return null;if(typeof d.getRootNode=="function"){const v=d.getRootNode();return v instanceof ShadowRoot?v:null}return d instanceof ShadowRoot?d:d.parentNode?A(d.parentNode):null},T=()=>{},C=d=>{d.offsetHeight},M=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,x=[],S=d=>{document.readyState==="loading"?(x.length||document.addEventListener("DOMContentLoaded",()=>{for(const v of x)v()}),x.push(d)):d()},k=()=>document.documentElement.dir==="rtl",g=d=>{S(()=>{const v=M();if(v){const E=d.NAME,b=v.fn[E];v.fn[E]=d.jQueryInterface,v.fn[E].Constructor=d,v.fn[E].noConflict=()=>(v.fn[E]=b,d.jQueryInterface)}})},_=(d,v=[],E=d)=>typeof d=="function"?d(...v):E,y=(d,v,E=!0)=>{if(!E){_(d);return}const D=c(v)+5;let L=!1;const I=({target:P})=>{P===v&&(L=!0,v.removeEventListener(o,I),_(d))};v.addEventListener(o,I),setTimeout(()=>{L||u(v)},D)},w=(d,v,E,b)=>{const D=d.length;let L=d.indexOf(v);return L===-1?!E&&b?d[D-1]:d[0]:(L+=E?1:-1,b&&(L=(L+D)%D),d[Math.max(0,Math.min(L,D-1))])};e.defineJQueryPlugin=g,e.execute=_,e.executeAfterTransition=y,e.findShadowRoot=A,e.getElement=f,e.getNextActiveElement=w,e.getTransitionDurationFromElement=c,e.getUID=l,e.getjQuery=M,e.isDisabled=N,e.isElement=m,e.isRTL=k,e.isVisible=p,e.noop=T,e.onDOMContentLoaded=S,e.parseSelector=r,e.reflow=C,e.toType=a,e.triggerTransitionEnd=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}))})(qt,qt.exports)),qt.exports}/*!
  * Bootstrap event-handler.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var mu=ye.exports,Ds;function Ft(){return Ds||(Ds=1,(function(n,t){(function(e,s){n.exports=s(ot())})(mu,(function(e){const s=/[^.]*(?=\..*)\.|.*/,i=/\..*/,o=/::\d+$/,r={};let a=1;const l={mouseenter:"mouseover",mouseleave:"mouseout"},c=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function u(g,_){return _&&`${_}::${a++}`||g.uidEvent||a++}function m(g){const _=u(g);return g.uidEvent=_,r[_]=r[_]||{},r[_]}function f(g,_){return function y(w){return k(w,{delegateTarget:g}),y.oneOff&&S.off(g,w.type,_),_.apply(g,[w])}}function p(g,_,y){return function w(d){const v=g.querySelectorAll(_);for(let{target:E}=d;E&&E!==this;E=E.parentNode)for(const b of v)if(b===E)return k(d,{delegateTarget:E}),w.oneOff&&S.off(g,d.type,_,y),y.apply(E,[d])}}function N(g,_,y=null){return Object.values(g).find(w=>w.callable===_&&w.delegationSelector===y)}function A(g,_,y){const w=typeof _=="string",d=w?y:_||y;let v=x(g);return c.has(v)||(v=g),[w,d,v]}function T(g,_,y,w,d){if(typeof _!="string"||!g)return;let[v,E,b]=A(_,y,w);_ in l&&(E=(Z=>function(G){if(!G.relatedTarget||G.relatedTarget!==G.delegateTarget&&!G.delegateTarget.contains(G.relatedTarget))return Z.call(this,G)})(E));const D=m(g),L=D[b]||(D[b]={}),I=N(L,E,v?y:null);if(I){I.oneOff=I.oneOff&&d;return}const P=u(E,_.replace(s,"")),$=v?p(g,y,E):f(g,E);$.delegationSelector=v?y:null,$.callable=E,$.oneOff=d,$.uidEvent=P,L[P]=$,g.addEventListener(b,$,v)}function C(g,_,y,w,d){const v=N(_[y],w,d);v&&(g.removeEventListener(y,v,!!d),delete _[y][v.uidEvent])}function M(g,_,y,w){const d=_[y]||{};for(const[v,E]of Object.entries(d))v.includes(w)&&C(g,_,y,E.callable,E.delegationSelector)}function x(g){return g=g.replace(i,""),l[g]||g}const S={on(g,_,y,w){T(g,_,y,w,!1)},one(g,_,y,w){T(g,_,y,w,!0)},off(g,_,y,w){if(typeof _!="string"||!g)return;const[d,v,E]=A(_,y,w),b=E!==_,D=m(g),L=D[E]||{},I=_.startsWith(".");if(typeof v<"u"){if(!Object.keys(L).length)return;C(g,D,E,v,d?y:null);return}if(I)for(const P of Object.keys(D))M(g,D,P,_.slice(1));for(const[P,$]of Object.entries(L)){const R=P.replace(o,"");(!b||_.includes(R))&&C(g,D,E,$.callable,$.delegationSelector)}},trigger(g,_,y){if(typeof _!="string"||!g)return null;const w=e.getjQuery(),d=x(_),v=_!==d;let E=null,b=!0,D=!0,L=!1;v&&w&&(E=w.Event(_,y),w(g).trigger(E),b=!E.isPropagationStopped(),D=!E.isImmediatePropagationStopped(),L=E.isDefaultPrevented());const I=k(new Event(_,{bubbles:b,cancelable:!0}),y);return L&&I.preventDefault(),D&&g.dispatchEvent(I),I.defaultPrevented&&E&&E.preventDefault(),I}};function k(g,_={}){for(const[y,w]of Object.entries(_))try{g[y]=w}catch{Object.defineProperty(g,y,{configurable:!0,get(){return w}})}return g}return S}))})(ye)),ye.exports}var Ae={exports:{}},we={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var gu=we.exports,Ls;function zi(){return Ls||(Ls=1,(function(n,t){(function(e,s){n.exports=s()})(gu,(function(){function e(o){if(o==="true")return!0;if(o==="false")return!1;if(o===Number(o).toString())return Number(o);if(o===""||o==="null")return null;if(typeof o!="string")return o;try{return JSON.parse(decodeURIComponent(o))}catch{return o}}function s(o){return o.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}return{setDataAttribute(o,r,a){o.setAttribute(`data-bs-${s(r)}`,a)},removeDataAttribute(o,r){o.removeAttribute(`data-bs-${s(r)}`)},getDataAttributes(o){if(!o)return{};const r={},a=Object.keys(o.dataset).filter(l=>l.startsWith("bs")&&!l.startsWith("bsConfig"));for(const l of a){let c=l.replace(/^bs/,"");c=c.charAt(0).toLowerCase()+c.slice(1,c.length),r[c]=e(o.dataset[l])}return r},getDataAttribute(o,r){return e(o.getAttribute(`data-bs-${s(r)}`))}}}))})(we)),we.exports}/*!
  * Bootstrap config.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var _u=Ae.exports,Is;function $n(){return Is||(Is=1,(function(n,t){(function(e,s){n.exports=s(zi(),ot())})(_u,(function(e,s){class i{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(r){return r=this._mergeConfigObj(r),r=this._configAfterMerge(r),this._typeCheckConfig(r),r}_configAfterMerge(r){return r}_mergeConfigObj(r,a){const l=s.isElement(a)?e.getDataAttribute(a,"config"):{};return{...this.constructor.Default,...typeof l=="object"?l:{},...s.isElement(a)?e.getDataAttributes(a):{},...typeof r=="object"?r:{}}}_typeCheckConfig(r,a=this.constructor.DefaultType){for(const[l,c]of Object.entries(a)){const u=r[l],m=s.isElement(u)?"element":s.toType(u);if(!new RegExp(c).test(m))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${l}" provided type "${m}" but expected type "${c}".`)}}}return i}))})(Ae)),Ae.exports}/*!
  * Bootstrap base-component.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var vu=Ee.exports,$s;function ji(){return $s||($s=1,(function(n,t){(function(e,s){n.exports=s(fu(),Ft(),$n(),ot())})(vu,(function(e,s,i,o){const r="5.3.2";class a extends i{constructor(c,u){super(),c=o.getElement(c),c&&(this._element=c,this._config=this._getConfig(u),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),s.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,u,m=!0){o.executeAfterTransition(c,u,m)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return e.get(o.getElement(c),this.DATA_KEY)}static getOrCreateInstance(c,u={}){return this.getInstance(c)||new this(c,typeof u=="object"?u:null)}static get VERSION(){return r}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}return a}))})(Ee)),Ee.exports}var Te={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Eu=Te.exports,ks;function ie(){return ks||(ks=1,(function(n,t){(function(e,s){n.exports=s(ot())})(Eu,(function(e){const s=o=>{let r=o.getAttribute("data-bs-target");if(!r||r==="#"){let a=o.getAttribute("href");if(!a||!a.includes("#")&&!a.startsWith("."))return null;a.includes("#")&&!a.startsWith("#")&&(a=`#${a.split("#")[1]}`),r=a&&a!=="#"?e.parseSelector(a.trim()):null}return r},i={find(o,r=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(r,o))},findOne(o,r=document.documentElement){return Element.prototype.querySelector.call(r,o)},children(o,r){return[].concat(...o.children).filter(a=>a.matches(r))},parents(o,r){const a=[];let l=o.parentNode.closest(r);for(;l;)a.push(l),l=l.parentNode.closest(r);return a},prev(o,r){let a=o.previousElementSibling;for(;a;){if(a.matches(r))return[a];a=a.previousElementSibling}return[]},next(o,r){let a=o.nextElementSibling;for(;a;){if(a.matches(r))return[a];a=a.nextElementSibling}return[]},focusableChildren(o){const r=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(a=>`${a}:not([tabindex^="-"])`).join(",");return this.find(r,o).filter(a=>!e.isDisabled(a)&&e.isVisible(a))},getSelectorFromElement(o){const r=s(o);return r&&i.findOne(r)?r:null},getElementFromSelector(o){const r=s(o);return r?i.findOne(r):null},getMultipleElementsFromSelector(o){const r=s(o);return r?i.find(r):[]}};return i}))})(Te)),Te.exports}var Ce={exports:{}};/*!
  * Bootstrap backdrop.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var bu=Ce.exports,xs;function yu(){return xs||(xs=1,(function(n,t){(function(e,s){n.exports=s(Ft(),$n(),ot())})(bu,(function(e,s,i){const o="backdrop",r="fade",a="show",l=`mousedown.bs.${o}`,c={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},u={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class m extends s{constructor(p){super(),this._config=this._getConfig(p),this._isAppended=!1,this._element=null}static get Default(){return c}static get DefaultType(){return u}static get NAME(){return o}show(p){if(!this._config.isVisible){i.execute(p);return}this._append();const N=this._getElement();this._config.isAnimated&&i.reflow(N),N.classList.add(a),this._emulateAnimation(()=>{i.execute(p)})}hide(p){if(!this._config.isVisible){i.execute(p);return}this._getElement().classList.remove(a),this._emulateAnimation(()=>{this.dispose(),i.execute(p)})}dispose(){this._isAppended&&(e.off(this._element,l),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const p=document.createElement("div");p.className=this._config.className,this._config.isAnimated&&p.classList.add(r),this._element=p}return this._element}_configAfterMerge(p){return p.rootElement=i.getElement(p.rootElement),p}_append(){if(this._isAppended)return;const p=this._getElement();this._config.rootElement.append(p),e.on(p,l,()=>{i.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(p){i.executeAfterTransition(p,this._getElement(),this._config.isAnimated)}}return m}))})(Ce)),Ce.exports}var Gt={exports:{}};/*!
  * Bootstrap component-functions.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Au=Gt.exports,Ms;function wu(){return Ms||(Ms=1,(function(n,t){(function(e,s){s(t,Ft(),ie(),ot())})(Au,(function(e,s,i,o){const r=(a,l="hide")=>{const c=`click.dismiss${a.EVENT_KEY}`,u=a.NAME;s.on(document,c,`[data-bs-dismiss="${u}"]`,function(m){if(["A","AREA"].includes(this.tagName)&&m.preventDefault(),o.isDisabled(this))return;const f=i.getElementFromSelector(this)||this.closest(`.${u}`);a.getOrCreateInstance(f)[l]()})};e.enableDismissTrigger=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}))})(Gt,Gt.exports)),Gt.exports}var Oe={exports:{}};/*!
  * Bootstrap focustrap.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Tu=Oe.exports,Ps;function Cu(){return Ps||(Ps=1,(function(n,t){(function(e,s){n.exports=s(Ft(),ie(),$n())})(Tu,(function(e,s,i){const o="focustrap",a=".bs.focustrap",l=`focusin${a}`,c=`keydown.tab${a}`,u="Tab",m="forward",f="backward",p={autofocus:!0,trapElement:null},N={autofocus:"boolean",trapElement:"element"};class A extends i{constructor(C){super(),this._config=this._getConfig(C),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return p}static get DefaultType(){return N}static get NAME(){return o}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),e.off(document,a),e.on(document,l,C=>this._handleFocusin(C)),e.on(document,c,C=>this._handleKeydown(C)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,e.off(document,a))}_handleFocusin(C){const{trapElement:M}=this._config;if(C.target===document||C.target===M||M.contains(C.target))return;const x=s.focusableChildren(M);x.length===0?M.focus():this._lastTabNavDirection===f?x[x.length-1].focus():x[0].focus()}_handleKeydown(C){C.key===u&&(this._lastTabNavDirection=C.shiftKey?f:m)}}return A}))})(Oe)),Oe.exports}var Ne={exports:{}};/*!
  * Bootstrap scrollbar.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ou=Ne.exports,Rs;function Nu(){return Rs||(Rs=1,(function(n,t){(function(e,s){n.exports=s(zi(),ie(),ot())})(Ou,(function(e,s,i){const o=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",r=".sticky-top",a="padding-right",l="margin-right";class c{constructor(){this._element=document.body}getWidth(){const m=document.documentElement.clientWidth;return Math.abs(window.innerWidth-m)}hide(){const m=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,a,f=>f+m),this._setElementAttributes(o,a,f=>f+m),this._setElementAttributes(r,l,f=>f-m)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,a),this._resetElementAttributes(o,a),this._resetElementAttributes(r,l)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(m,f,p){const N=this.getWidth(),A=T=>{if(T!==this._element&&window.innerWidth>T.clientWidth+N)return;this._saveInitialAttribute(T,f);const C=window.getComputedStyle(T).getPropertyValue(f);T.style.setProperty(f,`${p(Number.parseFloat(C))}px`)};this._applyManipulationCallback(m,A)}_saveInitialAttribute(m,f){const p=m.style.getPropertyValue(f);p&&e.setDataAttribute(m,f,p)}_resetElementAttributes(m,f){const p=N=>{const A=e.getDataAttribute(N,f);if(A===null){N.style.removeProperty(f);return}e.removeDataAttribute(N,f),N.style.setProperty(f,A)};this._applyManipulationCallback(m,p)}_applyManipulationCallback(m,f){if(i.isElement(m)){f(m);return}for(const p of s.find(m,this._element))f(p)}}return c}))})(Ne)),Ne.exports}/*!
  * Bootstrap offcanvas.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Su=ve.exports,Vs;function Du(){return Vs||(Vs=1,(function(n,t){(function(e,s){n.exports=s(ji(),Ft(),ie(),yu(),wu(),Cu(),ot(),Nu())})(Su,(function(e,s,i,o,r,a,l,c){const u="offcanvas",f=".bs.offcanvas",p=".data-api",N=`load${f}${p}`,A="Escape",T="show",C="showing",M="hiding",x="offcanvas-backdrop",S=".offcanvas.show",k=`show${f}`,g=`shown${f}`,_=`hide${f}`,y=`hidePrevented${f}`,w=`hidden${f}`,d=`resize${f}`,v=`click${f}${p}`,E=`keydown.dismiss${f}`,b='[data-bs-toggle="offcanvas"]',D={backdrop:!0,keyboard:!0,scroll:!1},L={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class I extends e{constructor($,R){super($,R),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return D}static get DefaultType(){return L}static get NAME(){return u}toggle($){return this._isShown?this.hide():this.show($)}show($){if(this._isShown||s.trigger(this._element,k,{relatedTarget:$}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new c().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(C);const Z=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(T),this._element.classList.remove(C),s.trigger(this._element,g,{relatedTarget:$})};this._queueCallback(Z,this._element,!0)}hide(){if(!this._isShown||s.trigger(this._element,_).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(M),this._backdrop.hide();const R=()=>{this._element.classList.remove(T,M),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new c().reset(),s.trigger(this._element,w)};this._queueCallback(R,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const $=()=>{if(this._config.backdrop==="static"){s.trigger(this._element,y);return}this.hide()},R=!!this._config.backdrop;return new o({className:x,isVisible:R,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:R?$:null})}_initializeFocusTrap(){return new a({trapElement:this._element})}_addEventListeners(){s.on(this._element,E,$=>{if($.key===A){if(this._config.keyboard){this.hide();return}s.trigger(this._element,y)}})}static jQueryInterface($){return this.each(function(){const R=I.getOrCreateInstance(this,$);if(typeof $=="string"){if(R[$]===void 0||$.startsWith("_")||$==="constructor")throw new TypeError(`No method named "${$}"`);R[$](this)}})}}return s.on(document,v,b,function(P){const $=i.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&P.preventDefault(),l.isDisabled(this))return;s.one($,w,()=>{l.isVisible(this)&&this.focus()});const R=i.findOne(S);R&&R!==$&&I.getInstance(R).hide(),I.getOrCreateInstance($).toggle(this)}),s.on(window,N,()=>{for(const P of i.find(S))I.getOrCreateInstance(P).show()}),s.on(window,d,()=>{for(const P of i.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(P).position!=="fixed"&&I.getOrCreateInstance(P).hide()}),r.enableDismissTrigger(I),l.defineJQueryPlugin(I),I}))})(ve)),ve.exports}Du();var Se={exports:{}};/*!
  * Bootstrap collapse.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Lu=Se.exports,Hs;function Iu(){return Hs||(Hs=1,(function(n,t){(function(e,s){n.exports=s(ji(),Ft(),ie(),ot())})(Lu,(function(e,s,i,o){const r="collapse",l=".bs.collapse",c=".data-api",u=`show${l}`,m=`shown${l}`,f=`hide${l}`,p=`hidden${l}`,N=`click${l}${c}`,A="show",T="collapse",C="collapsing",M="collapsed",x=`:scope .${T} .${T}`,S="collapse-horizontal",k="width",g="height",_=".collapse.show, .collapse.collapsing",y='[data-bs-toggle="collapse"]',w={parent:null,toggle:!0},d={parent:"(null|element)",toggle:"boolean"};class v extends e{constructor(b,D){super(b,D),this._isTransitioning=!1,this._triggerArray=[];const L=i.find(y);for(const I of L){const P=i.getSelectorFromElement(I),$=i.find(P).filter(R=>R===this._element);P!==null&&$.length&&this._triggerArray.push(I)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return w}static get DefaultType(){return d}static get NAME(){return r}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let b=[];if(this._config.parent&&(b=this._getFirstLevelChildren(_).filter(R=>R!==this._element).map(R=>v.getOrCreateInstance(R,{toggle:!1}))),b.length&&b[0]._isTransitioning||s.trigger(this._element,u).defaultPrevented)return;for(const R of b)R.hide();const L=this._getDimension();this._element.classList.remove(T),this._element.classList.add(C),this._element.style[L]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const I=()=>{this._isTransitioning=!1,this._element.classList.remove(C),this._element.classList.add(T,A),this._element.style[L]="",s.trigger(this._element,m)},$=`scroll${L[0].toUpperCase()+L.slice(1)}`;this._queueCallback(I,this._element,!0),this._element.style[L]=`${this._element[$]}px`}hide(){if(this._isTransitioning||!this._isShown()||s.trigger(this._element,f).defaultPrevented)return;const D=this._getDimension();this._element.style[D]=`${this._element.getBoundingClientRect()[D]}px`,o.reflow(this._element),this._element.classList.add(C),this._element.classList.remove(T,A);for(const I of this._triggerArray){const P=i.getElementFromSelector(I);P&&!this._isShown(P)&&this._addAriaAndCollapsedClass([I],!1)}this._isTransitioning=!0;const L=()=>{this._isTransitioning=!1,this._element.classList.remove(C),this._element.classList.add(T),s.trigger(this._element,p)};this._element.style[D]="",this._queueCallback(L,this._element,!0)}_isShown(b=this._element){return b.classList.contains(A)}_configAfterMerge(b){return b.toggle=!!b.toggle,b.parent=o.getElement(b.parent),b}_getDimension(){return this._element.classList.contains(S)?k:g}_initializeChildren(){if(!this._config.parent)return;const b=this._getFirstLevelChildren(y);for(const D of b){const L=i.getElementFromSelector(D);L&&this._addAriaAndCollapsedClass([D],this._isShown(L))}}_getFirstLevelChildren(b){const D=i.find(x,this._config.parent);return i.find(b,this._config.parent).filter(L=>!D.includes(L))}_addAriaAndCollapsedClass(b,D){if(b.length)for(const L of b)L.classList.toggle(M,!D),L.setAttribute("aria-expanded",D)}static jQueryInterface(b){const D={};return typeof b=="string"&&/show|hide/.test(b)&&(D.toggle=!1),this.each(function(){const L=v.getOrCreateInstance(this,D);if(typeof b=="string"){if(typeof L[b]>"u")throw new TypeError(`No method named "${b}"`);L[b]()}})}}return s.on(document,N,y,function(E){(E.target.tagName==="A"||E.delegateTarget&&E.delegateTarget.tagName==="A")&&E.preventDefault();for(const b of i.getMultipleElementsFromSelector(this))v.getOrCreateInstance(b,{toggle:!1}).toggle()}),o.defineJQueryPlugin(v),v}))})(Se)),Se.exports}Iu();(async()=>(await Ws("#header","componets/header.html"),du()))();export{Vt as T};

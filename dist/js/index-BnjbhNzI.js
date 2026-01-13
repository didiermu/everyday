const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./home-B9wF9J8b.js","./three-yH4q0MRI.js","./loadLocomotive-CH76LBRw.js","./physicalizing-B2ncQIsy.js","./swiper-CFnvug-O.js","../css/swiper-erHEUhN6.css","../css/physicalizing-EsTBEVQd.css","./visualization-BclDaf9g.js","./periods-v9zjKZ5S.js","./about-DGX85CKs.js","./epilogue-CCIwar6Z.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const Gs=`<nav class="navbar">
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
`,Xs={"componets/header.html":Gs,"componets/header-interior.html":Qs};async function Wi(n,t){const e=document.querySelector(n);if(!e)return;const i=Xs[t];i?e.innerHTML=i:console.error(`Component not found: ${t}`)}const Js="modulepreload",Zs=function(n,t){return new URL(n,t).href},jn={},wt=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){let r=function(c){return Promise.all(c.map(m=>Promise.resolve(m).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),d=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=r(e.map(c=>{if(c=Zs(c,i),c in jn)return;jn[c]=!0;const m=c.endsWith(".css"),f=m?'[rel="stylesheet"]':"";if(!!i)for(let y=a.length-1;y>=0;y--){const w=a[y];if(w.href===c&&(!m||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const T=document.createElement("link");if(T.rel=m?"stylesheet":Js,m||(T.as="script"),T.crossOrigin="",T.href=c,d&&T.setAttribute("nonce",d),document.head.appendChild(T),m)return new Promise((y,w)=>{T.addEventListener("load",y),T.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return s.then(r=>{for(const a of r||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})},to=`<section class="intro">
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
<a href="./visualization" data-link class="link-decorated">NEXT: THE VISUALIZATION</a>
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

`,so=`<section class="hero">
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
`,ro={"pages/home.html":to,"pages/physicalizing.html":eo,"pages/visualization.html":no,"pages/periods.html":io,"pages/about.html":so,"pages/epilogue.html":oo};async function ao(n){const t=document.querySelector("[data-router-view]");if(!t)return;const e=ro[n];e?t.innerHTML=e:console.error(`Page not found: ${n}`)}function lo(n){document.body.classList.forEach(t=>{t.startsWith("page-")&&document.body.classList.remove(t)}),document.body.classList.add(n)}function Bn(){const n=document.querySelector(".hero"),t=document.querySelector(".visualization");n.classList.add("hide"),t.classList.add("show")}var V="top",z="bottom",j="right",H="left",ke="auto",Rt=[V,z,j,H],vt="start",Lt="end",zi="clippingParents",pn="viewport",Ot="popper",ji="reference",an=Rt.reduce(function(n,t){return n.concat([t+"-"+vt,t+"-"+Lt])},[]),mn=[].concat(Rt,[ke]).reduce(function(n,t){return n.concat([t,t+"-"+vt,t+"-"+Lt])},[]),Bi="beforeRead",Fi="read",Ki="afterRead",Yi="beforeMain",Ui="main",qi="afterMain",Gi="beforeWrite",Qi="write",Xi="afterWrite",Ji=[Bi,Fi,Ki,Yi,Ui,qi,Gi,Qi,Xi];function J(n){return n?(n.nodeName||"").toLowerCase():null}function B(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function Et(n){var t=B(n).Element;return n instanceof t||n instanceof Element}function F(n){var t=B(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function gn(n){if(typeof ShadowRoot>"u")return!1;var t=B(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function co(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var i=t.styles[e]||{},s=t.attributes[e]||{},o=t.elements[e];!F(o)||!J(o)||(Object.assign(o.style,i),Object.keys(s).forEach(function(r){var a=s[r];a===!1?o.removeAttribute(r):o.setAttribute(r,a===!0?"":a)}))})}function uo(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(i){var s=t.elements[i],o=t.attributes[i]||{},r=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:e[i]),a=r.reduce(function(l,d){return l[d]="",l},{});!F(s)||!J(s)||(Object.assign(s.style,a),Object.keys(o).forEach(function(l){s.removeAttribute(l)}))})}}const _n={name:"applyStyles",enabled:!0,phase:"write",fn:co,effect:uo,requires:["computeStyles"]};function Q(n){return n.split("-")[0]}var _t=Math.max,Se=Math.min,It=Math.round;function ln(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Zi(){return!/^((?!chrome|android).)*safari/i.test(ln())}function $t(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var i=n.getBoundingClientRect(),s=1,o=1;t&&F(n)&&(s=n.offsetWidth>0&&It(i.width)/n.offsetWidth||1,o=n.offsetHeight>0&&It(i.height)/n.offsetHeight||1);var r=Et(n)?B(n):window,a=r.visualViewport,l=!Zi()&&e,d=(i.left+(l&&a?a.offsetLeft:0))/s,c=(i.top+(l&&a?a.offsetTop:0))/o,m=i.width/s,f=i.height/o;return{width:m,height:f,top:c,right:d+m,bottom:c+f,left:d,x:d,y:c}}function vn(n){var t=$t(n),e=n.offsetWidth,i=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:i}}function ts(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&gn(e)){var i=t;do{if(i&&n.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function nt(n){return B(n).getComputedStyle(n)}function ho(n){return["table","td","th"].indexOf(J(n))>=0}function ut(n){return((Et(n)?n.ownerDocument:n.document)||window.document).documentElement}function xe(n){return J(n)==="html"?n:n.assignedSlot||n.parentNode||(gn(n)?n.host:null)||ut(n)}function Fn(n){return!F(n)||nt(n).position==="fixed"?null:n.offsetParent}function fo(n){var t=/firefox/i.test(ln()),e=/Trident/i.test(ln());if(e&&F(n)){var i=nt(n);if(i.position==="fixed")return null}var s=xe(n);for(gn(s)&&(s=s.host);F(s)&&["html","body"].indexOf(J(s))<0;){var o=nt(s);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return s;s=s.parentNode}return null}function Jt(n){for(var t=B(n),e=Fn(n);e&&ho(e)&&nt(e).position==="static";)e=Fn(e);return e&&(J(e)==="html"||J(e)==="body"&&nt(e).position==="static")?t:e||fo(n)||t}function En(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function qt(n,t,e){return _t(n,Se(t,e))}function po(n,t,e){var i=qt(n,t,e);return i>e?e:i}function es(){return{top:0,right:0,bottom:0,left:0}}function ns(n){return Object.assign({},es(),n)}function is(n,t){return t.reduce(function(e,i){return e[i]=n,e},{})}var mo=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,ns(typeof t!="number"?t:is(t,Rt))};function go(n){var t,e=n.state,i=n.name,s=n.options,o=e.elements.arrow,r=e.modifiersData.popperOffsets,a=Q(e.placement),l=En(a),d=[H,j].indexOf(a)>=0,c=d?"height":"width";if(!(!o||!r)){var m=mo(s.padding,e),f=vn(o),p=l==="y"?V:H,T=l==="y"?z:j,y=e.rects.reference[c]+e.rects.reference[l]-r[l]-e.rects.popper[c],w=r[l]-e.rects.reference[l],O=Jt(o),M=O?l==="y"?O.clientHeight||0:O.clientWidth||0:0,x=y/2-w/2,S=m[p],k=M-f[c]-m[T],g=M/2-f[c]/2+x,_=qt(S,g,k),A=l;e.modifiersData[i]=(t={},t[A]=_,t.centerOffset=_-g,t)}}function _o(n){var t=n.state,e=n.options,i=e.element,s=i===void 0?"[data-popper-arrow]":i;s!=null&&(typeof s=="string"&&(s=t.elements.popper.querySelector(s),!s)||ts(t.elements.popper,s)&&(t.elements.arrow=s))}const ss={name:"arrow",enabled:!0,phase:"main",fn:go,effect:_o,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function kt(n){return n.split("-")[1]}var vo={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Eo(n,t){var e=n.x,i=n.y,s=t.devicePixelRatio||1;return{x:It(e*s)/s||0,y:It(i*s)/s||0}}function Kn(n){var t,e=n.popper,i=n.popperRect,s=n.placement,o=n.variation,r=n.offsets,a=n.position,l=n.gpuAcceleration,d=n.adaptive,c=n.roundOffsets,m=n.isFixed,f=r.x,p=f===void 0?0:f,T=r.y,y=T===void 0?0:T,w=typeof c=="function"?c({x:p,y}):{x:p,y};p=w.x,y=w.y;var O=r.hasOwnProperty("x"),M=r.hasOwnProperty("y"),x=H,S=V,k=window;if(d){var g=Jt(e),_="clientHeight",A="clientWidth";if(g===B(e)&&(g=ut(e),nt(g).position!=="static"&&a==="absolute"&&(_="scrollHeight",A="scrollWidth")),g=g,s===V||(s===H||s===j)&&o===Lt){S=z;var C=m&&g===k&&k.visualViewport?k.visualViewport.height:g[_];y-=C-i.height,y*=l?1:-1}if(s===H||(s===V||s===z)&&o===Lt){x=j;var u=m&&g===k&&k.visualViewport?k.visualViewport.width:g[A];p-=u-i.width,p*=l?1:-1}}var v=Object.assign({position:a},d&&vo),E=c===!0?Eo({x:p,y},B(e)):{x:p,y};if(p=E.x,y=E.y,l){var b;return Object.assign({},v,(b={},b[S]=M?"0":"",b[x]=O?"0":"",b.transform=(k.devicePixelRatio||1)<=1?"translate("+p+"px, "+y+"px)":"translate3d("+p+"px, "+y+"px, 0)",b))}return Object.assign({},v,(t={},t[S]=M?y+"px":"",t[x]=O?p+"px":"",t.transform="",t))}function bo(n){var t=n.state,e=n.options,i=e.gpuAcceleration,s=i===void 0?!0:i,o=e.adaptive,r=o===void 0?!0:o,a=e.roundOffsets,l=a===void 0?!0:a,d={placement:Q(t.placement),variation:kt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:s,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Kn(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:r,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Kn(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const bn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:bo,data:{}};var ae={passive:!0};function yo(n){var t=n.state,e=n.instance,i=n.options,s=i.scroll,o=s===void 0?!0:s,r=i.resize,a=r===void 0?!0:r,l=B(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&d.forEach(function(c){c.addEventListener("scroll",e.update,ae)}),a&&l.addEventListener("resize",e.update,ae),function(){o&&d.forEach(function(c){c.removeEventListener("scroll",e.update,ae)}),a&&l.removeEventListener("resize",e.update,ae)}}const yn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:yo,data:{}};var Ao={left:"right",right:"left",bottom:"top",top:"bottom"};function pe(n){return n.replace(/left|right|bottom|top/g,function(t){return Ao[t]})}var wo={start:"end",end:"start"};function Yn(n){return n.replace(/start|end/g,function(t){return wo[t]})}function An(n){var t=B(n),e=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:e,scrollTop:i}}function wn(n){return $t(ut(n)).left+An(n).scrollLeft}function To(n,t){var e=B(n),i=ut(n),s=e.visualViewport,o=i.clientWidth,r=i.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;var d=Zi();(d||!d&&t==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a+wn(n),y:l}}function Co(n){var t,e=ut(n),i=An(n),s=(t=n.ownerDocument)==null?void 0:t.body,o=_t(e.scrollWidth,e.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=_t(e.scrollHeight,e.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-i.scrollLeft+wn(n),l=-i.scrollTop;return nt(s||e).direction==="rtl"&&(a+=_t(e.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}function Tn(n){var t=nt(n),e=t.overflow,i=t.overflowX,s=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+s+i)}function os(n){return["html","body","#document"].indexOf(J(n))>=0?n.ownerDocument.body:F(n)&&Tn(n)?n:os(xe(n))}function Gt(n,t){var e;t===void 0&&(t=[]);var i=os(n),s=i===((e=n.ownerDocument)==null?void 0:e.body),o=B(i),r=s?[o].concat(o.visualViewport||[],Tn(i)?i:[]):i,a=t.concat(r);return s?a:a.concat(Gt(xe(r)))}function cn(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function Oo(n,t){var e=$t(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function Un(n,t,e){return t===pn?cn(To(n,e)):Et(t)?Oo(t,e):cn(Co(ut(n)))}function No(n){var t=Gt(xe(n)),e=["absolute","fixed"].indexOf(nt(n).position)>=0,i=e&&F(n)?Jt(n):n;return Et(i)?t.filter(function(s){return Et(s)&&ts(s,i)&&J(s)!=="body"}):[]}function So(n,t,e,i){var s=t==="clippingParents"?No(n):[].concat(t),o=[].concat(s,[e]),r=o[0],a=o.reduce(function(l,d){var c=Un(n,d,i);return l.top=_t(c.top,l.top),l.right=Se(c.right,l.right),l.bottom=Se(c.bottom,l.bottom),l.left=_t(c.left,l.left),l},Un(n,r,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function rs(n){var t=n.reference,e=n.element,i=n.placement,s=i?Q(i):null,o=i?kt(i):null,r=t.x+t.width/2-e.width/2,a=t.y+t.height/2-e.height/2,l;switch(s){case V:l={x:r,y:t.y-e.height};break;case z:l={x:r,y:t.y+t.height};break;case j:l={x:t.x+t.width,y:a};break;case H:l={x:t.x-e.width,y:a};break;default:l={x:t.x,y:t.y}}var d=s?En(s):null;if(d!=null){var c=d==="y"?"height":"width";switch(o){case vt:l[d]=l[d]-(t[c]/2-e[c]/2);break;case Lt:l[d]=l[d]+(t[c]/2-e[c]/2);break}}return l}function xt(n,t){t===void 0&&(t={});var e=t,i=e.placement,s=i===void 0?n.placement:i,o=e.strategy,r=o===void 0?n.strategy:o,a=e.boundary,l=a===void 0?zi:a,d=e.rootBoundary,c=d===void 0?pn:d,m=e.elementContext,f=m===void 0?Ot:m,p=e.altBoundary,T=p===void 0?!1:p,y=e.padding,w=y===void 0?0:y,O=ns(typeof w!="number"?w:is(w,Rt)),M=f===Ot?ji:Ot,x=n.rects.popper,S=n.elements[T?M:f],k=So(Et(S)?S:S.contextElement||ut(n.elements.popper),l,c,r),g=$t(n.elements.reference),_=rs({reference:g,element:x,placement:s}),A=cn(Object.assign({},x,_)),C=f===Ot?A:g,u={top:k.top-C.top+O.top,bottom:C.bottom-k.bottom+O.bottom,left:k.left-C.left+O.left,right:C.right-k.right+O.right},v=n.modifiersData.offset;if(f===Ot&&v){var E=v[s];Object.keys(u).forEach(function(b){var D=[j,z].indexOf(b)>=0?1:-1,L=[V,z].indexOf(b)>=0?"y":"x";u[b]+=E[L]*D})}return u}function Do(n,t){t===void 0&&(t={});var e=t,i=e.placement,s=e.boundary,o=e.rootBoundary,r=e.padding,a=e.flipVariations,l=e.allowedAutoPlacements,d=l===void 0?mn:l,c=kt(i),m=c?a?an:an.filter(function(T){return kt(T)===c}):Rt,f=m.filter(function(T){return d.indexOf(T)>=0});f.length===0&&(f=m);var p=f.reduce(function(T,y){return T[y]=xt(n,{placement:y,boundary:s,rootBoundary:o,padding:r})[Q(y)],T},{});return Object.keys(p).sort(function(T,y){return p[T]-p[y]})}function Lo(n){if(Q(n)===ke)return[];var t=pe(n);return[Yn(n),t,Yn(t)]}function Io(n){var t=n.state,e=n.options,i=n.name;if(!t.modifiersData[i]._skip){for(var s=e.mainAxis,o=s===void 0?!0:s,r=e.altAxis,a=r===void 0?!0:r,l=e.fallbackPlacements,d=e.padding,c=e.boundary,m=e.rootBoundary,f=e.altBoundary,p=e.flipVariations,T=p===void 0?!0:p,y=e.allowedAutoPlacements,w=t.options.placement,O=Q(w),M=O===w,x=l||(M||!T?[pe(w)]:Lo(w)),S=[w].concat(x).reduce(function(At,rt){return At.concat(Q(rt)===ke?Do(t,{placement:rt,boundary:c,rootBoundary:m,padding:d,flipVariations:T,allowedAutoPlacements:y}):rt)},[]),k=t.rects.reference,g=t.rects.popper,_=new Map,A=!0,C=S[0],u=0;u<S.length;u++){var v=S[u],E=Q(v),b=kt(v)===vt,D=[V,z].indexOf(E)>=0,L=D?"width":"height",I=xt(t,{placement:v,boundary:c,rootBoundary:m,altBoundary:f,padding:d}),P=D?b?j:H:b?z:V;k[L]>g[L]&&(P=pe(P));var $=pe(P),R=[];if(o&&R.push(I[E]<=0),a&&R.push(I[P]<=0,I[$]<=0),R.every(function(At){return At})){C=v,A=!1;break}_.set(v,R)}if(A)for(var Z=T?3:1,G=function(rt){var Bt=S.find(function(oe){var ft=_.get(oe);if(ft)return ft.slice(0,rt).every(function(ze){return ze})});if(Bt)return C=Bt,"break"},jt=Z;jt>0;jt--){var se=G(jt);if(se==="break")break}t.placement!==C&&(t.modifiersData[i]._skip=!0,t.placement=C,t.reset=!0)}}const as={name:"flip",enabled:!0,phase:"main",fn:Io,requiresIfExists:["offset"],data:{_skip:!1}};function qn(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function Gn(n){return[V,j,z,H].some(function(t){return n[t]>=0})}function $o(n){var t=n.state,e=n.name,i=t.rects.reference,s=t.rects.popper,o=t.modifiersData.preventOverflow,r=xt(t,{elementContext:"reference"}),a=xt(t,{altBoundary:!0}),l=qn(r,i),d=qn(a,s,o),c=Gn(l),m=Gn(d);t.modifiersData[e]={referenceClippingOffsets:l,popperEscapeOffsets:d,isReferenceHidden:c,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":m})}const ls={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:$o};function ko(n,t,e){var i=Q(n),s=[H,V].indexOf(i)>=0?-1:1,o=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[H,j].indexOf(i)>=0?{x:a,y:r}:{x:r,y:a}}function xo(n){var t=n.state,e=n.options,i=n.name,s=e.offset,o=s===void 0?[0,0]:s,r=mn.reduce(function(c,m){return c[m]=ko(m,t.rects,o),c},{}),a=r[t.placement],l=a.x,d=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=d),t.modifiersData[i]=r}const cs={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:xo};function Mo(n){var t=n.state,e=n.name;t.modifiersData[e]=rs({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const Cn={name:"popperOffsets",enabled:!0,phase:"read",fn:Mo,data:{}};function Po(n){return n==="x"?"y":"x"}function Ro(n){var t=n.state,e=n.options,i=n.name,s=e.mainAxis,o=s===void 0?!0:s,r=e.altAxis,a=r===void 0?!1:r,l=e.boundary,d=e.rootBoundary,c=e.altBoundary,m=e.padding,f=e.tether,p=f===void 0?!0:f,T=e.tetherOffset,y=T===void 0?0:T,w=xt(t,{boundary:l,rootBoundary:d,padding:m,altBoundary:c}),O=Q(t.placement),M=kt(t.placement),x=!M,S=En(O),k=Po(S),g=t.modifiersData.popperOffsets,_=t.rects.reference,A=t.rects.popper,C=typeof y=="function"?y(Object.assign({},t.rects,{placement:t.placement})):y,u=typeof C=="number"?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),v=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,E={x:0,y:0};if(g){if(o){var b,D=S==="y"?V:H,L=S==="y"?z:j,I=S==="y"?"height":"width",P=g[S],$=P+w[D],R=P-w[L],Z=p?-A[I]/2:0,G=M===vt?_[I]:A[I],jt=M===vt?-A[I]:-_[I],se=t.elements.arrow,At=p&&se?vn(se):{width:0,height:0},rt=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:es(),Bt=rt[D],oe=rt[L],ft=qt(0,_[I],At[I]),ze=x?_[I]/2-Z-ft-Bt-u.mainAxis:G-ft-Bt-u.mainAxis,Bs=x?-_[I]/2+Z+ft+oe+u.mainAxis:jt+ft+oe+u.mainAxis,je=t.elements.arrow&&Jt(t.elements.arrow),Fs=je?S==="y"?je.clientTop||0:je.clientLeft||0:0,kn=(b=v==null?void 0:v[S])!=null?b:0,Ks=P+ze-kn-Fs,Ys=P+Bs-kn,xn=qt(p?Se($,Ks):$,P,p?_t(R,Ys):R);g[S]=xn,E[S]=xn-P}if(a){var Mn,Us=S==="x"?V:H,qs=S==="x"?z:j,pt=g[k],re=k==="y"?"height":"width",Pn=pt+w[Us],Rn=pt-w[qs],Be=[V,H].indexOf(O)!==-1,Vn=(Mn=v==null?void 0:v[k])!=null?Mn:0,Hn=Be?Pn:pt-_[re]-A[re]-Vn+u.altAxis,Wn=Be?pt+_[re]+A[re]-Vn-u.altAxis:Rn,zn=p&&Be?po(Hn,pt,Wn):qt(p?Hn:Pn,pt,p?Wn:Rn);g[k]=zn,E[k]=zn-pt}t.modifiersData[i]=E}}const us={name:"preventOverflow",enabled:!0,phase:"main",fn:Ro,requiresIfExists:["offset"]};function Vo(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function Ho(n){return n===B(n)||!F(n)?An(n):Vo(n)}function Wo(n){var t=n.getBoundingClientRect(),e=It(t.width)/n.offsetWidth||1,i=It(t.height)/n.offsetHeight||1;return e!==1||i!==1}function zo(n,t,e){e===void 0&&(e=!1);var i=F(t),s=F(t)&&Wo(t),o=ut(t),r=$t(n,s,e),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!e)&&((J(t)!=="body"||Tn(o))&&(a=Ho(t)),F(t)?(l=$t(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):o&&(l.x=wn(o))),{x:r.left+a.scrollLeft-l.x,y:r.top+a.scrollTop-l.y,width:r.width,height:r.height}}function jo(n){var t=new Map,e=new Set,i=[];n.forEach(function(o){t.set(o.name,o)});function s(o){e.add(o.name);var r=[].concat(o.requires||[],o.requiresIfExists||[]);r.forEach(function(a){if(!e.has(a)){var l=t.get(a);l&&s(l)}}),i.push(o)}return n.forEach(function(o){e.has(o.name)||s(o)}),i}function Bo(n){var t=jo(n);return Ji.reduce(function(e,i){return e.concat(t.filter(function(s){return s.phase===i}))},[])}function Fo(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function Ko(n){var t=n.reduce(function(e,i){var s=e[i.name];return e[i.name]=s?Object.assign({},s,i,{options:Object.assign({},s.options,i.options),data:Object.assign({},s.data,i.data)}):i,e},{});return Object.keys(t).map(function(e){return t[e]})}var Qn={placement:"bottom",modifiers:[],strategy:"absolute"};function Xn(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function Me(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,i=e===void 0?[]:e,s=t.defaultOptions,o=s===void 0?Qn:s;return function(a,l,d){d===void 0&&(d=o);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Qn,o),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},m=[],f=!1,p={state:c,setOptions:function(O){var M=typeof O=="function"?O(c.options):O;y(),c.options=Object.assign({},o,c.options,M),c.scrollParents={reference:Et(a)?Gt(a):a.contextElement?Gt(a.contextElement):[],popper:Gt(l)};var x=Bo(Ko([].concat(i,c.options.modifiers)));return c.orderedModifiers=x.filter(function(S){return S.enabled}),T(),p.update()},forceUpdate:function(){if(!f){var O=c.elements,M=O.reference,x=O.popper;if(Xn(M,x)){c.rects={reference:zo(M,Jt(x),c.options.strategy==="fixed"),popper:vn(x)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(u){return c.modifiersData[u.name]=Object.assign({},u.data)});for(var S=0;S<c.orderedModifiers.length;S++){if(c.reset===!0){c.reset=!1,S=-1;continue}var k=c.orderedModifiers[S],g=k.fn,_=k.options,A=_===void 0?{}:_,C=k.name;typeof g=="function"&&(c=g({state:c,options:A,name:C,instance:p})||c)}}}},update:Fo(function(){return new Promise(function(w){p.forceUpdate(),w(c)})}),destroy:function(){y(),f=!0}};if(!Xn(a,l))return p;p.setOptions(d).then(function(w){!f&&d.onFirstUpdate&&d.onFirstUpdate(w)});function T(){c.orderedModifiers.forEach(function(w){var O=w.name,M=w.options,x=M===void 0?{}:M,S=w.effect;if(typeof S=="function"){var k=S({state:c,name:O,instance:p,options:x}),g=function(){};m.push(k||g)}})}function y(){m.forEach(function(w){return w()}),m=[]}return p}}var Yo=Me(),Uo=[yn,Cn,bn,_n],qo=Me({defaultModifiers:Uo}),Go=[yn,Cn,bn,_n,cs,as,us,ss,ls],On=Me({defaultModifiers:Go});const ds=Object.freeze(Object.defineProperty({__proto__:null,afterMain:qi,afterRead:Ki,afterWrite:Xi,applyStyles:_n,arrow:ss,auto:ke,basePlacements:Rt,beforeMain:Yi,beforeRead:Bi,beforeWrite:Gi,bottom:z,clippingParents:zi,computeStyles:bn,createPopper:On,createPopperBase:Yo,createPopperLite:qo,detectOverflow:xt,end:Lt,eventListeners:yn,flip:as,hide:ls,left:H,main:Ui,modifierPhases:Ji,offset:cs,placements:mn,popper:Ot,popperGenerator:Me,popperOffsets:Cn,preventOverflow:us,read:Fi,reference:ji,right:j,start:vt,top:V,variationPlacements:an,viewport:pn,write:Qi},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const at=new Map,Fe={set(n,t,e){at.has(n)||at.set(n,new Map);const i=at.get(n);if(!i.has(t)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(t,e)},get(n,t){return at.has(n)&&at.get(n).get(t)||null},remove(n,t){if(!at.has(n))return;const e=at.get(n);e.delete(t),e.size===0&&at.delete(n)}},Qo=1e6,Xo=1e3,un="transitionend",hs=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),n),Jo=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),Zo=n=>{do n+=Math.floor(Math.random()*Qo);while(document.getElementById(n));return n},tr=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const i=Number.parseFloat(t),s=Number.parseFloat(e);return!i&&!s?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*Xo)},fs=n=>{n.dispatchEvent(new Event(un))},tt=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),lt=n=>tt(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(hs(n)):null,Vt=n=>{if(!tt(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const i=n.closest("summary");if(i&&i.parentNode!==e||i===null)return!1}return t},ct=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",ps=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?ps(n.parentNode):null},De=()=>{},Zt=n=>{n.offsetHeight},ms=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Ke=[],er=n=>{document.readyState==="loading"?(Ke.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Ke)t()}),Ke.push(n)):n()},K=()=>document.documentElement.dir==="rtl",U=n=>{er(()=>{const t=ms();if(t){const e=n.NAME,i=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=i,n.jQueryInterface)}})},W=(n,t=[],e=n)=>typeof n=="function"?n(...t):e,gs=(n,t,e=!0)=>{if(!e){W(n);return}const s=tr(t)+5;let o=!1;const r=({target:a})=>{a===t&&(o=!0,t.removeEventListener(un,r),W(n))};t.addEventListener(un,r),setTimeout(()=>{o||fs(t)},s)},Nn=(n,t,e,i)=>{const s=n.length;let o=n.indexOf(t);return o===-1?!e&&i?n[s-1]:n[0]:(o+=e?1:-1,i&&(o=(o+s)%s),n[Math.max(0,Math.min(o,s-1))])},nr=/[^.]*(?=\..*)\.|.*/,ir=/\..*/,sr=/::\d+$/,Ye={};let Jn=1;const _s={mouseenter:"mouseover",mouseleave:"mouseout"},or=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function vs(n,t){return t&&`${t}::${Jn++}`||n.uidEvent||Jn++}function Es(n){const t=vs(n);return n.uidEvent=t,Ye[t]=Ye[t]||{},Ye[t]}function rr(n,t){return function e(i){return Sn(i,{delegateTarget:n}),e.oneOff&&h.off(n,i.type,t),t.apply(n,[i])}}function ar(n,t,e){return function i(s){const o=n.querySelectorAll(t);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return Sn(s,{delegateTarget:r}),i.oneOff&&h.off(n,s.type,t,e),e.apply(r,[s])}}function bs(n,t,e=null){return Object.values(n).find(i=>i.callable===t&&i.delegationSelector===e)}function ys(n,t,e){const i=typeof t=="string",s=i?e:t||e;let o=As(n);return or.has(o)||(o=n),[i,s,o]}function Zn(n,t,e,i,s){if(typeof t!="string"||!n)return;let[o,r,a]=ys(t,e,i);t in _s&&(r=(T=>function(y){if(!y.relatedTarget||y.relatedTarget!==y.delegateTarget&&!y.delegateTarget.contains(y.relatedTarget))return T.call(this,y)})(r));const l=Es(n),d=l[a]||(l[a]={}),c=bs(d,r,o?e:null);if(c){c.oneOff=c.oneOff&&s;return}const m=vs(r,t.replace(nr,"")),f=o?ar(n,e,r):rr(n,r);f.delegationSelector=o?e:null,f.callable=r,f.oneOff=s,f.uidEvent=m,d[m]=f,n.addEventListener(a,f,o)}function dn(n,t,e,i,s){const o=bs(t[e],i,s);o&&(n.removeEventListener(e,o,!!s),delete t[e][o.uidEvent])}function lr(n,t,e,i){const s=t[e]||{};for(const[o,r]of Object.entries(s))o.includes(i)&&dn(n,t,e,r.callable,r.delegationSelector)}function As(n){return n=n.replace(ir,""),_s[n]||n}const h={on(n,t,e,i){Zn(n,t,e,i,!1)},one(n,t,e,i){Zn(n,t,e,i,!0)},off(n,t,e,i){if(typeof t!="string"||!n)return;const[s,o,r]=ys(t,e,i),a=r!==t,l=Es(n),d=l[r]||{},c=t.startsWith(".");if(typeof o<"u"){if(!Object.keys(d).length)return;dn(n,l,r,o,s?e:null);return}if(c)for(const m of Object.keys(l))lr(n,l,m,t.slice(1));for(const[m,f]of Object.entries(d)){const p=m.replace(sr,"");(!a||t.includes(p))&&dn(n,l,r,f.callable,f.delegationSelector)}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const i=ms(),s=As(t),o=t!==s;let r=null,a=!0,l=!0,d=!1;o&&i&&(r=i.Event(t,e),i(n).trigger(r),a=!r.isPropagationStopped(),l=!r.isImmediatePropagationStopped(),d=r.isDefaultPrevented());const c=Sn(new Event(t,{bubbles:a,cancelable:!0}),e);return d&&c.preventDefault(),l&&n.dispatchEvent(c),c.defaultPrevented&&r&&r.preventDefault(),c}};function Sn(n,t={}){for(const[e,i]of Object.entries(t))try{n[e]=i}catch{Object.defineProperty(n,e,{configurable:!0,get(){return i}})}return n}function ti(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function Ue(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const et={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${Ue(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${Ue(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(i=>i.startsWith("bs")&&!i.startsWith("bsConfig"));for(const i of e){let s=i.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),t[s]=ti(n.dataset[i])}return t},getDataAttribute(n,t){return ti(n.getAttribute(`data-bs-${Ue(t)}`))}};class te{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=tt(e)?et.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof i=="object"?i:{},...tt(e)?et.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[i,s]of Object.entries(e)){const o=t[i],r=tt(o)?"element":Jo(o);if(!new RegExp(s).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${s}".`)}}}const cr="5.3.2";class q extends te{constructor(t,e){super(),t=lt(t),t&&(this._element=t,this._config=this._getConfig(e),Fe.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Fe.remove(this._element,this.constructor.DATA_KEY),h.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){gs(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Fe.get(lt(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return cr}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const qe=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?hs(e.trim()):null}return t},N={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let i=n.parentNode.closest(t);for(;i;)e.push(i),i=i.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!ct(e)&&Vt(e))},getSelectorFromElement(n){const t=qe(n);return t&&N.findOne(t)?t:null},getElementFromSelector(n){const t=qe(n);return t?N.findOne(t):null},getMultipleElementsFromSelector(n){const t=qe(n);return t?N.find(t):[]}},Pe=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,i=n.NAME;h.on(document,e,`[data-bs-dismiss="${i}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),ct(this))return;const o=N.getElementFromSelector(this)||this.closest(`.${i}`);n.getOrCreateInstance(o)[t]()})},ur="alert",dr="bs.alert",ws=`.${dr}`,hr=`close${ws}`,fr=`closed${ws}`,pr="fade",mr="show";class Re extends q{static get NAME(){return ur}close(){if(h.trigger(this._element,hr).defaultPrevented)return;this._element.classList.remove(mr);const e=this._element.classList.contains(pr);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),h.trigger(this._element,fr),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=Re.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Pe(Re,"close");U(Re);const gr="button",_r="bs.button",vr=`.${_r}`,Er=".data-api",br="active",ei='[data-bs-toggle="button"]',yr=`click${vr}${Er}`;class Ve extends q{static get NAME(){return gr}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(br))}static jQueryInterface(t){return this.each(function(){const e=Ve.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}h.on(document,yr,ei,n=>{n.preventDefault();const t=n.target.closest(ei);Ve.getOrCreateInstance(t).toggle()});U(Ve);const Ar="swipe",Ht=".bs.swipe",wr=`touchstart${Ht}`,Tr=`touchmove${Ht}`,Cr=`touchend${Ht}`,Or=`pointerdown${Ht}`,Nr=`pointerup${Ht}`,Sr="touch",Dr="pen",Lr="pointer-event",Ir=40,$r={endCallback:null,leftCallback:null,rightCallback:null},kr={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Le extends te{constructor(t,e){super(),this._element=t,!(!t||!Le.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return $r}static get DefaultType(){return kr}static get NAME(){return Ar}dispose(){h.off(this._element,Ht)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),W(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=Ir)return;const e=t/this._deltaX;this._deltaX=0,e&&W(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(h.on(this._element,Or,t=>this._start(t)),h.on(this._element,Nr,t=>this._end(t)),this._element.classList.add(Lr)):(h.on(this._element,wr,t=>this._start(t)),h.on(this._element,Tr,t=>this._move(t)),h.on(this._element,Cr,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Dr||t.pointerType===Sr)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const xr="carousel",Mr="bs.carousel",dt=`.${Mr}`,Ts=".data-api",Pr="ArrowLeft",Rr="ArrowRight",Vr=500,Ft="next",Tt="prev",Nt="left",me="right",Hr=`slide${dt}`,Ge=`slid${dt}`,Wr=`keydown${dt}`,zr=`mouseenter${dt}`,jr=`mouseleave${dt}`,Br=`dragstart${dt}`,Fr=`load${dt}${Ts}`,Kr=`click${dt}${Ts}`,Cs="carousel",le="active",Yr="slide",Ur="carousel-item-end",qr="carousel-item-start",Gr="carousel-item-next",Qr="carousel-item-prev",Os=".active",Ns=".carousel-item",Xr=Os+Ns,Jr=".carousel-item img",Zr=".carousel-indicators",ta="[data-bs-slide], [data-bs-slide-to]",ea='[data-bs-ride="carousel"]',na={[Pr]:me,[Rr]:Nt},ia={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},sa={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ee extends q{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=N.findOne(Zr,this._element),this._addEventListeners(),this._config.ride===Cs&&this.cycle()}static get Default(){return ia}static get DefaultType(){return sa}static get NAME(){return xr}next(){this._slide(Ft)}nextWhenVisible(){!document.hidden&&Vt(this._element)&&this.next()}prev(){this._slide(Tt)}pause(){this._isSliding&&fs(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){h.one(this._element,Ge,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){h.one(this._element,Ge,()=>this.to(t));return}const i=this._getItemIndex(this._getActive());if(i===t)return;const s=t>i?Ft:Tt;this._slide(s,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&h.on(this._element,Wr,t=>this._keydown(t)),this._config.pause==="hover"&&(h.on(this._element,zr,()=>this.pause()),h.on(this._element,jr,()=>this._maybeEnableCycle())),this._config.touch&&Le.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const i of N.find(Jr,this._element))h.on(i,Br,s=>s.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(Nt)),rightCallback:()=>this._slide(this._directionToOrder(me)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Vr+this._config.interval))}};this._swipeHelper=new Le(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=na[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=N.findOne(Os,this._indicatorsElement);e.classList.remove(le),e.removeAttribute("aria-current");const i=N.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(le),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),s=t===Ft,o=e||Nn(this._getItems(),i,s,this._config.wrap);if(o===i)return;const r=this._getItemIndex(o),a=p=>h.trigger(this._element,p,{relatedTarget:o,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:r});if(a(Hr).defaultPrevented||!i||!o)return;const d=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(r),this._activeElement=o;const c=s?qr:Ur,m=s?Gr:Qr;o.classList.add(m),Zt(o),i.classList.add(c),o.classList.add(c);const f=()=>{o.classList.remove(c,m),o.classList.add(le),i.classList.remove(le,m,c),this._isSliding=!1,a(Ge)};this._queueCallback(f,i,this._isAnimated()),d&&this.cycle()}_isAnimated(){return this._element.classList.contains(Yr)}_getActive(){return N.findOne(Xr,this._element)}_getItems(){return N.find(Ns,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return K()?t===Nt?Tt:Ft:t===Nt?Ft:Tt}_orderToDirection(t){return K()?t===Tt?Nt:me:t===Tt?me:Nt}static jQueryInterface(t){return this.each(function(){const e=ee.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(document,Kr,ta,function(n){const t=N.getElementFromSelector(this);if(!t||!t.classList.contains(Cs))return;n.preventDefault();const e=ee.getOrCreateInstance(t),i=this.getAttribute("data-bs-slide-to");if(i){e.to(i),e._maybeEnableCycle();return}if(et.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});h.on(window,Fr,()=>{const n=N.find(ea);for(const t of n)ee.getOrCreateInstance(t)});U(ee);const oa="collapse",ra="bs.collapse",ne=`.${ra}`,aa=".data-api",la=`show${ne}`,ca=`shown${ne}`,ua=`hide${ne}`,da=`hidden${ne}`,ha=`click${ne}${aa}`,Qe="show",Dt="collapse",ce="collapsing",fa="collapsed",pa=`:scope .${Dt} .${Dt}`,ma="collapse-horizontal",ga="width",_a="height",va=".collapse.show, .collapse.collapsing",hn='[data-bs-toggle="collapse"]',Ea={parent:null,toggle:!0},ba={parent:"(null|element)",toggle:"boolean"};class Xt extends q{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=N.find(hn);for(const s of i){const o=N.getSelectorFromElement(s),r=N.find(o).filter(a=>a===this._element);o!==null&&r.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Ea}static get DefaultType(){return ba}static get NAME(){return oa}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(va).filter(a=>a!==this._element).map(a=>Xt.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||h.trigger(this._element,la).defaultPrevented)return;for(const a of t)a.hide();const i=this._getDimension();this._element.classList.remove(Dt),this._element.classList.add(ce),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(ce),this._element.classList.add(Dt,Qe),this._element.style[i]="",h.trigger(this._element,ca)},r=`scroll${i[0].toUpperCase()+i.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[i]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown()||h.trigger(this._element,ua).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Zt(this._element),this._element.classList.add(ce),this._element.classList.remove(Dt,Qe);for(const s of this._triggerArray){const o=N.getElementFromSelector(s);o&&!this._isShown(o)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(ce),this._element.classList.add(Dt),h.trigger(this._element,da)};this._element.style[e]="",this._queueCallback(i,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Qe)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=lt(t.parent),t}_getDimension(){return this._element.classList.contains(ma)?ga:_a}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(hn);for(const e of t){const i=N.getElementFromSelector(e);i&&this._addAriaAndCollapsedClass([e],this._isShown(i))}}_getFirstLevelChildren(t){const e=N.find(pa,this._config.parent);return N.find(t,this._config.parent).filter(i=>!e.includes(i))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle(fa,!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const i=Xt.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof i[t]>"u")throw new TypeError(`No method named "${t}"`);i[t]()}})}}h.on(document,ha,hn,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const t of N.getMultipleElementsFromSelector(this))Xt.getOrCreateInstance(t,{toggle:!1}).toggle()});U(Xt);const ni="dropdown",ya="bs.dropdown",bt=`.${ya}`,Dn=".data-api",Aa="Escape",ii="Tab",wa="ArrowUp",si="ArrowDown",Ta=2,Ca=`hide${bt}`,Oa=`hidden${bt}`,Na=`show${bt}`,Sa=`shown${bt}`,Ss=`click${bt}${Dn}`,Ds=`keydown${bt}${Dn}`,Da=`keyup${bt}${Dn}`,St="show",La="dropup",Ia="dropend",$a="dropstart",ka="dropup-center",xa="dropdown-center",mt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ma=`${mt}.${St}`,ge=".dropdown-menu",Pa=".navbar",Ra=".navbar-nav",Va=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ha=K()?"top-end":"top-start",Wa=K()?"top-start":"top-end",za=K()?"bottom-end":"bottom-start",ja=K()?"bottom-start":"bottom-end",Ba=K()?"left-start":"right-start",Fa=K()?"right-start":"left-start",Ka="top",Ya="bottom",Ua={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},qa={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class X extends q{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=N.next(this._element,ge)[0]||N.prev(this._element,ge)[0]||N.findOne(ge,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Ua}static get DefaultType(){return qa}static get NAME(){return ni}toggle(){return this._isShown()?this.hide():this.show()}show(){if(ct(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!h.trigger(this._element,Na,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Ra))for(const i of[].concat(...document.body.children))h.on(i,"mouseover",De);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(St),this._element.classList.add(St),h.trigger(this._element,Sa,t)}}hide(){if(ct(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!h.trigger(this._element,Ca,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))h.off(i,"mouseover",De);this._popper&&this._popper.destroy(),this._menu.classList.remove(St),this._element.classList.remove(St),this._element.setAttribute("aria-expanded","false"),et.removeDataAttribute(this._menu,"popper"),h.trigger(this._element,Oa,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!tt(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${ni.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof ds>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:tt(this._config.reference)?t=lt(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=On(t,this._menu,e)}_isShown(){return this._menu.classList.contains(St)}_getPlacement(){const t=this._parent;if(t.classList.contains(Ia))return Ba;if(t.classList.contains($a))return Fa;if(t.classList.contains(ka))return Ka;if(t.classList.contains(xa))return Ya;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(La)?e?Wa:Ha:e?ja:za}_detectNavbar(){return this._element.closest(Pa)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(et.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...W(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const i=N.find(Va,this._menu).filter(s=>Vt(s));i.length&&Nn(i,e,t===si,!i.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=X.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===Ta||t.type==="keyup"&&t.key!==ii)return;const e=N.find(Ma);for(const i of e){const s=X.getInstance(i);if(!s||s._config.autoClose===!1)continue;const o=t.composedPath(),r=o.includes(s._menu);if(o.includes(s._element)||s._config.autoClose==="inside"&&!r||s._config.autoClose==="outside"&&r||s._menu.contains(t.target)&&(t.type==="keyup"&&t.key===ii||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:s._element};t.type==="click"&&(a.clickEvent=t),s._completeHide(a)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i=t.key===Aa,s=[wa,si].includes(t.key);if(!s&&!i||e&&!i)return;t.preventDefault();const o=this.matches(mt)?this:N.prev(this,mt)[0]||N.next(this,mt)[0]||N.findOne(mt,t.delegateTarget.parentNode),r=X.getOrCreateInstance(o);if(s){t.stopPropagation(),r.show(),r._selectMenuItem(t);return}r._isShown()&&(t.stopPropagation(),r.hide(),o.focus())}}h.on(document,Ds,mt,X.dataApiKeydownHandler);h.on(document,Ds,ge,X.dataApiKeydownHandler);h.on(document,Ss,X.clearMenus);h.on(document,Da,X.clearMenus);h.on(document,Ss,mt,function(n){n.preventDefault(),X.getOrCreateInstance(this).toggle()});U(X);const Ls="backdrop",Ga="fade",oi="show",ri=`mousedown.bs.${Ls}`,Qa={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Xa={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Is extends te{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Qa}static get DefaultType(){return Xa}static get NAME(){return Ls}show(t){if(!this._config.isVisible){W(t);return}this._append();const e=this._getElement();this._config.isAnimated&&Zt(e),e.classList.add(oi),this._emulateAnimation(()=>{W(t)})}hide(t){if(!this._config.isVisible){W(t);return}this._getElement().classList.remove(oi),this._emulateAnimation(()=>{this.dispose(),W(t)})}dispose(){this._isAppended&&(h.off(this._element,ri),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Ga),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=lt(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),h.on(t,ri,()=>{W(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){gs(t,this._getElement(),this._config.isAnimated)}}const Ja="focustrap",Za="bs.focustrap",Ie=`.${Za}`,tl=`focusin${Ie}`,el=`keydown.tab${Ie}`,nl="Tab",il="forward",ai="backward",sl={autofocus:!0,trapElement:null},ol={autofocus:"boolean",trapElement:"element"};class $s extends te{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return sl}static get DefaultType(){return ol}static get NAME(){return Ja}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),h.off(document,Ie),h.on(document,tl,t=>this._handleFocusin(t)),h.on(document,el,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,h.off(document,Ie))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=N.focusableChildren(e);i.length===0?e.focus():this._lastTabNavDirection===ai?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){t.key===nl&&(this._lastTabNavDirection=t.shiftKey?ai:il)}}const li=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ci=".sticky-top",ue="padding-right",ui="margin-right";class fn{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ue,e=>e+t),this._setElementAttributes(li,ue,e=>e+t),this._setElementAttributes(ci,ui,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ue),this._resetElementAttributes(li,ue),this._resetElementAttributes(ci,ui)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth(),o=r=>{if(r!==this._element&&window.innerWidth>r.clientWidth+s)return;this._saveInitialAttribute(r,e);const a=window.getComputedStyle(r).getPropertyValue(e);r.style.setProperty(e,`${i(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,o)}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&et.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){const i=s=>{const o=et.getDataAttribute(s,e);if(o===null){s.style.removeProperty(e);return}et.removeDataAttribute(s,e),s.style.setProperty(e,o)};this._applyManipulationCallback(t,i)}_applyManipulationCallback(t,e){if(tt(t)){e(t);return}for(const i of N.find(t,this._element))e(i)}}const rl="modal",al="bs.modal",Y=`.${al}`,ll=".data-api",cl="Escape",ul=`hide${Y}`,dl=`hidePrevented${Y}`,ks=`hidden${Y}`,xs=`show${Y}`,hl=`shown${Y}`,fl=`resize${Y}`,pl=`click.dismiss${Y}`,ml=`mousedown.dismiss${Y}`,gl=`keydown.dismiss${Y}`,_l=`click${Y}${ll}`,di="modal-open",vl="fade",hi="show",Xe="modal-static",El=".modal.show",bl=".modal-dialog",yl=".modal-body",Al='[data-bs-toggle="modal"]',wl={backdrop:!0,focus:!0,keyboard:!0},Tl={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Mt extends q{constructor(t,e){super(t,e),this._dialog=N.findOne(bl,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new fn,this._addEventListeners()}static get Default(){return wl}static get DefaultType(){return Tl}static get NAME(){return rl}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||h.trigger(this._element,xs,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(di),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||h.trigger(this._element,ul).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(hi),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){h.off(window,Y),h.off(this._dialog,Y),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Is({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new $s({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=N.findOne(yl,this._dialog);e&&(e.scrollTop=0),Zt(this._element),this._element.classList.add(hi);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,h.trigger(this._element,hl,{relatedTarget:t})};this._queueCallback(i,this._dialog,this._isAnimated())}_addEventListeners(){h.on(this._element,gl,t=>{if(t.key===cl){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),h.on(window,fl,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),h.on(this._element,ml,t=>{h.one(this._element,pl,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(di),this._resetAdjustments(),this._scrollBar.reset(),h.trigger(this._element,ks)})}_isAnimated(){return this._element.classList.contains(vl)}_triggerBackdropTransition(){if(h.trigger(this._element,dl).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,i=this._element.style.overflowY;i==="hidden"||this._element.classList.contains(Xe)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(Xe),this._queueCallback(()=>{this._element.classList.remove(Xe),this._queueCallback(()=>{this._element.style.overflowY=i},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const s=K()?"paddingLeft":"paddingRight";this._element.style[s]=`${e}px`}if(!i&&t){const s=K()?"paddingRight":"paddingLeft";this._element.style[s]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const i=Mt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof i[t]>"u")throw new TypeError(`No method named "${t}"`);i[t](e)}})}}h.on(document,_l,Al,function(n){const t=N.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),h.one(t,xs,s=>{s.defaultPrevented||h.one(t,ks,()=>{Vt(this)&&this.focus()})});const e=N.findOne(El);e&&Mt.getInstance(e).hide(),Mt.getOrCreateInstance(t).toggle(this)});Pe(Mt);U(Mt);const Cl="offcanvas",Ol="bs.offcanvas",st=`.${Ol}`,Ms=".data-api",Nl=`load${st}${Ms}`,Sl="Escape",fi="show",pi="showing",mi="hiding",Dl="offcanvas-backdrop",Ps=".offcanvas.show",Ll=`show${st}`,Il=`shown${st}`,$l=`hide${st}`,gi=`hidePrevented${st}`,Rs=`hidden${st}`,kl=`resize${st}`,xl=`click${st}${Ms}`,Ml=`keydown.dismiss${st}`,Pl='[data-bs-toggle="offcanvas"]',Rl={backdrop:!0,keyboard:!0,scroll:!1},Vl={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class it extends q{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Rl}static get DefaultType(){return Vl}static get NAME(){return Cl}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||h.trigger(this._element,Ll,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new fn().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(pi);const i=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(fi),this._element.classList.remove(pi),h.trigger(this._element,Il,{relatedTarget:t})};this._queueCallback(i,this._element,!0)}hide(){if(!this._isShown||h.trigger(this._element,$l).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(mi),this._backdrop.hide();const e=()=>{this._element.classList.remove(fi,mi),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new fn().reset(),h.trigger(this._element,Rs)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){h.trigger(this._element,gi);return}this.hide()},e=!!this._config.backdrop;return new Is({className:Dl,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new $s({trapElement:this._element})}_addEventListeners(){h.on(this._element,Ml,t=>{if(t.key===Sl){if(this._config.keyboard){this.hide();return}h.trigger(this._element,gi)}})}static jQueryInterface(t){return this.each(function(){const e=it.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}h.on(document,xl,Pl,function(n){const t=N.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),ct(this))return;h.one(t,Rs,()=>{Vt(this)&&this.focus()});const e=N.findOne(Ps);e&&e!==t&&it.getInstance(e).hide(),it.getOrCreateInstance(t).toggle(this)});h.on(window,Nl,()=>{for(const n of N.find(Ps))it.getOrCreateInstance(n).show()});h.on(window,kl,()=>{for(const n of N.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&it.getOrCreateInstance(n).hide()});Pe(it);U(it);const Hl=/^aria-[\w-]*$/i,Vs={"*":["class","dir","id","lang","role",Hl],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Wl=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),zl=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,jl=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?Wl.has(e)?!!zl.test(n.nodeValue):!0:t.filter(i=>i instanceof RegExp).some(i=>i.test(e))};function Bl(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const s=new window.DOMParser().parseFromString(n,"text/html"),o=[].concat(...s.body.querySelectorAll("*"));for(const r of o){const a=r.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){r.remove();continue}const l=[].concat(...r.attributes),d=[].concat(t["*"]||[],t[a]||[]);for(const c of l)jl(c,d)||r.removeAttribute(c.nodeName)}return s.body.innerHTML}const Fl="TemplateFactory",Kl={allowList:Vs,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Yl={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Ul={entry:"(string|element|function|null)",selector:"(string|element)"};class ql extends te{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Kl}static get DefaultType(){return Yl}static get NAME(){return Fl}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[s,o]of Object.entries(this._config.content))this._setContent(t,o,s);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Ul)}_setContent(t,e,i){const s=N.findOne(i,t);if(s){if(e=this._resolvePossibleFunction(e),!e){s.remove();return}if(tt(e)){this._putElementInTemplate(lt(e),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(e);return}s.textContent=e}}_maybeSanitize(t){return this._config.sanitize?Bl(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return W(t,[this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const Gl="tooltip",Ql=new Set(["sanitize","allowList","sanitizeFn"]),Je="fade",Xl="modal",de="show",Jl=".tooltip-inner",_i=`.${Xl}`,vi="hide.bs.modal",Kt="hover",Ze="focus",Zl="click",tc="manual",ec="hide",nc="hidden",ic="show",sc="shown",oc="inserted",rc="click",ac="focusin",lc="focusout",cc="mouseenter",uc="mouseleave",dc={AUTO:"auto",TOP:"top",RIGHT:K()?"left":"right",BOTTOM:"bottom",LEFT:K()?"right":"left"},hc={allowList:Vs,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},fc={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Wt extends q{constructor(t,e){if(typeof ds>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return hc}static get DefaultType(){return fc}static get NAME(){return Gl}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),h.off(this._element.closest(_i),vi,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=h.trigger(this._element,this.constructor.eventName(ic)),i=(ps(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!i)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:o}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(o.append(s),h.trigger(this._element,this.constructor.eventName(oc))),this._popper=this._createPopper(s),s.classList.add(de),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))h.on(a,"mouseover",De);const r=()=>{h.trigger(this._element,this.constructor.eventName(sc)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(r,this.tip,this._isAnimated())}hide(){if(!this._isShown()||h.trigger(this._element,this.constructor.eventName(ec)).defaultPrevented)return;if(this._getTipElement().classList.remove(de),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))h.off(s,"mouseover",De);this._activeTrigger[Zl]=!1,this._activeTrigger[Ze]=!1,this._activeTrigger[Kt]=!1,this._isHovered=null;const i=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),h.trigger(this._element,this.constructor.eventName(nc)))};this._queueCallback(i,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Je,de),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=Zo(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Je),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new ql({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Jl]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Je)}_isShown(){return this.tip&&this.tip.classList.contains(de)}_createPopper(t){const e=W(this._config.placement,[this,t,this._element]),i=dc[e.toUpperCase()];return On(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return W(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:i=>{this._getTipElement().setAttribute("data-popper-placement",i.state.placement)}}]};return{...e,...W(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")h.on(this._element,this.constructor.eventName(rc),this._config.selector,i=>{this._initializeOnDelegatedTarget(i).toggle()});else if(e!==tc){const i=e===Kt?this.constructor.eventName(cc):this.constructor.eventName(ac),s=e===Kt?this.constructor.eventName(uc):this.constructor.eventName(lc);h.on(this._element,i,this._config.selector,o=>{const r=this._initializeOnDelegatedTarget(o);r._activeTrigger[o.type==="focusin"?Ze:Kt]=!0,r._enter()}),h.on(this._element,s,this._config.selector,o=>{const r=this._initializeOnDelegatedTarget(o);r._activeTrigger[o.type==="focusout"?Ze:Kt]=r._element.contains(o.relatedTarget),r._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},h.on(this._element.closest(_i),vi,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=et.getDataAttributes(this._element);for(const i of Object.keys(e))Ql.has(i)&&delete e[i];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:lt(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=Wt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}U(Wt);const pc="popover",mc=".popover-header",gc=".popover-body",_c={...Wt.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},vc={...Wt.DefaultType,content:"(null|string|element|function)"};class Ln extends Wt{static get Default(){return _c}static get DefaultType(){return vc}static get NAME(){return pc}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[mc]:this._getTitle(),[gc]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=Ln.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}U(Ln);const Ec="scrollspy",bc="bs.scrollspy",In=`.${bc}`,yc=".data-api",Ac=`activate${In}`,Ei=`click${In}`,wc=`load${In}${yc}`,Tc="dropdown-item",Ct="active",Cc='[data-bs-spy="scroll"]',tn="[href]",Oc=".nav, .list-group",bi=".nav-link",Nc=".nav-item",Sc=".list-group-item",Dc=`${bi}, ${Nc} > ${bi}, ${Sc}`,Lc=".dropdown",Ic=".dropdown-toggle",$c={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},kc={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class He extends q{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return $c}static get DefaultType(){return kc}static get NAME(){return Ec}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=lt(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(h.off(this._config.target,Ei),h.on(this._config.target,Ei,tn,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,s=e.offsetTop-this._element.offsetTop;if(i.scrollTo){i.scrollTo({top:s,behavior:"smooth"});return}i.scrollTop=s}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=r=>this._targetLinks.get(`#${r.target.id}`),i=r=>{this._previousScrollData.visibleEntryTop=r.target.offsetTop,this._process(e(r))},s=(this._rootElement||document.documentElement).scrollTop,o=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const r of t){if(!r.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(r));continue}const a=r.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(o&&a){if(i(r),!s)return;continue}!o&&!a&&i(r)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=N.find(tn,this._config.target);for(const e of t){if(!e.hash||ct(e))continue;const i=N.findOne(decodeURI(e.hash),this._element);Vt(i)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,i))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Ct),this._activateParents(t),h.trigger(this._element,Ac,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(Tc)){N.findOne(Ic,t.closest(Lc)).classList.add(Ct);return}for(const e of N.parents(t,Oc))for(const i of N.prev(e,Dc))i.classList.add(Ct)}_clearActiveClass(t){t.classList.remove(Ct);const e=N.find(`${tn}.${Ct}`,t);for(const i of e)i.classList.remove(Ct)}static jQueryInterface(t){return this.each(function(){const e=He.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(window,wc,()=>{for(const n of N.find(Cc))He.getOrCreateInstance(n)});U(He);const xc="tab",Mc="bs.tab",yt=`.${Mc}`,Pc=`hide${yt}`,Rc=`hidden${yt}`,Vc=`show${yt}`,Hc=`shown${yt}`,Wc=`click${yt}`,zc=`keydown${yt}`,jc=`load${yt}`,Bc="ArrowLeft",yi="ArrowRight",Fc="ArrowUp",Ai="ArrowDown",en="Home",wi="End",gt="active",Ti="fade",nn="show",Kc="dropdown",Hs=".dropdown-toggle",Yc=".dropdown-menu",sn=`:not(${Hs})`,Uc='.list-group, .nav, [role="tablist"]',qc=".nav-item, .list-group-item",Gc=`.nav-link${sn}, .list-group-item${sn}, [role="tab"]${sn}`,Ws='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',on=`${Gc}, ${Ws}`,Qc=`.${gt}[data-bs-toggle="tab"], .${gt}[data-bs-toggle="pill"], .${gt}[data-bs-toggle="list"]`;class Pt extends q{constructor(t){super(t),this._parent=this._element.closest(Uc),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),h.on(this._element,zc,e=>this._keydown(e)))}static get NAME(){return xc}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?h.trigger(e,Pc,{relatedTarget:t}):null;h.trigger(t,Vc,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(gt),this._activate(N.getElementFromSelector(t));const i=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(nn);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),h.trigger(t,Hc,{relatedTarget:e})};this._queueCallback(i,t,t.classList.contains(Ti))}_deactivate(t,e){if(!t)return;t.classList.remove(gt),t.blur(),this._deactivate(N.getElementFromSelector(t));const i=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(nn);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),h.trigger(t,Rc,{relatedTarget:e})};this._queueCallback(i,t,t.classList.contains(Ti))}_keydown(t){if(![Bc,yi,Fc,Ai,en,wi].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(s=>!ct(s));let i;if([en,wi].includes(t.key))i=e[t.key===en?0:e.length-1];else{const s=[yi,Ai].includes(t.key);i=Nn(e,t.target,s,!0)}i&&(i.focus({preventScroll:!0}),Pt.getOrCreateInstance(i).show())}_getChildren(){return N.find(on,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const i of e)this._setInitialAttributesOnChild(i)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=N.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains(Kc))return;const s=(o,r)=>{const a=N.findOne(o,i);a&&a.classList.toggle(r,e)};s(Hs,gt),s(Yc,nn),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(gt)}_getInnerElement(t){return t.matches(on)?t:N.findOne(on,t)}_getOuterElement(t){return t.closest(qc)||t}static jQueryInterface(t){return this.each(function(){const e=Pt.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(document,Wc,Ws,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!ct(this)&&Pt.getOrCreateInstance(this).show()});h.on(window,jc,()=>{for(const n of N.find(Qc))Pt.getOrCreateInstance(n)});U(Pt);const Xc="toast",Jc="bs.toast",ht=`.${Jc}`,Zc=`mouseover${ht}`,tu=`mouseout${ht}`,eu=`focusin${ht}`,nu=`focusout${ht}`,iu=`hide${ht}`,su=`hidden${ht}`,ou=`show${ht}`,ru=`shown${ht}`,au="fade",Ci="hide",he="show",fe="showing",lu={animation:"boolean",autohide:"boolean",delay:"number"},cu={animation:!0,autohide:!0,delay:5e3};class We extends q{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return cu}static get DefaultType(){return lu}static get NAME(){return Xc}show(){if(h.trigger(this._element,ou).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(au);const e=()=>{this._element.classList.remove(fe),h.trigger(this._element,ru),this._maybeScheduleHide()};this._element.classList.remove(Ci),Zt(this._element),this._element.classList.add(he,fe),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||h.trigger(this._element,iu).defaultPrevented)return;const e=()=>{this._element.classList.add(Ci),this._element.classList.remove(fe,he),h.trigger(this._element,su)};this._element.classList.add(fe),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(he),super.dispose()}isShown(){return this._element.classList.contains(he)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){h.on(this._element,Zc,t=>this._onInteraction(t,!0)),h.on(this._element,tu,t=>this._onInteraction(t,!1)),h.on(this._element,eu,t=>this._onInteraction(t,!0)),h.on(this._element,nu,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=We.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Pe(We);U(We);const Oi={"/":{page:"pages/home.html",title:"Home",bodyClass:"page-home",init:async()=>{const{init:n}=await wt(async()=>{const{init:t}=await import("./home-B9wF9J8b.js");return{init:t}},__vite__mapDeps([0,1,2]),import.meta.url);n()}},"/physicalizing-emotions":{page:"pages/physicalizing.html",title:"Physicalizing Emotions",bodyClass:"page-physicalizing",init:async()=>{const{init:n}=await wt(async()=>{const{init:t}=await import("./physicalizing-B2ncQIsy.js");return{init:t}},__vite__mapDeps([3,4,5,2,6]),import.meta.url);n()}},"/visualization":{page:"pages/visualization.html",title:"Visualization",bodyClass:"page-visualization",init:async()=>{const{init:n}=await wt(async()=>{const{init:t}=await import("./visualization-BclDaf9g.js");return{init:t}},__vite__mapDeps([7,2]),import.meta.url);n()}},"/visualization/periods":{page:"pages/periods.html",title:"Visualization - Periods",bodyClass:"page-periods",init:async()=>{const{init:n}=await wt(async()=>{const{init:t}=await import("./periods-v9zjKZ5S.js");return{init:t}},__vite__mapDeps([8,2]),import.meta.url);n()}},"/about":{page:"pages/about.html",title:"About",bodyClass:"page-about",init:async()=>{const{init:n}=await wt(async()=>{const{init:t}=await import("./about-DGX85CKs.js");return{init:t}},__vite__mapDeps([9,2]),import.meta.url);n()}},"/epilogue":{page:"pages/epilogue.html",title:"Epilogue",bodyClass:"page-epilogue",init:async()=>{const{init:n}=await wt(async()=>{const{init:t}=await import("./epilogue-CCIwar6Z.js");return{init:t}},__vite__mapDeps([10,4,5,2]),import.meta.url);n()}}};let $e=!1;const uu=()=>"./".endsWith("/")?"./".slice(0,-1):"./",Qt=uu(),rn=async()=>{let n=window.location.pathname;n.startsWith(Qt)&&(n=n.slice(Qt.length)||"/"),n.startsWith("/")||(n="/"+n);const t=Oi[n]||Oi["/"];document.title=t.title,lo(t.bodyClass),await ao(t.page),typeof t.init=="function"&&await t.init(),t.page&&t.page.includes("visualization")&&$e&&($e=!1,typeof Bn=="function"&&setTimeout(()=>Bn(),0)),await Wi("#header",n==="/visualization/periods"?"componets/header-interior.html":"componets/header.html");const i=document.getElementById("offcanvasDarkNavbar");if(i){const s=it.getInstance(i);s&&s.hide()}document.body.classList.remove("overflow-hidden"),document.body.removeAttribute("style"),window.scrollTo(0,0)};function du(){if(!document.querySelector("[data-router-view]")){console.error("Router view not found");return}document.addEventListener("click",t=>{const e=t.target.closest("[data-link]");if(!e)return;e.classList&&e.classList.contains("link-back")&&($e=!0);const i=new URL(e.href);if(i.origin!==window.location.origin)return;t.preventDefault();let s=i.pathname;!s.startsWith(Qt)&&Qt!=="/"&&(s=Qt+s),history.pushState(null,"",s),rn()}),document.addEventListener("click",t=>{t.target.closest(".link-back")&&($e=!0)}),window.addEventListener("popstate",rn),rn()}var _e={exports:{}},ve={exports:{}},Ee={exports:{}};/*!
  * Bootstrap data.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var hu=Ee.exports,Ni;function fu(){return Ni||(Ni=1,(function(n,t){(function(e,i){n.exports=i()})(hu,(function(){const e=new Map;return{set(s,o,r){e.has(s)||e.set(s,new Map);const a=e.get(s);if(!a.has(o)&&a.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(a.keys())[0]}.`);return}a.set(o,r)},get(s,o){return e.has(s)&&e.get(s).get(o)||null},remove(s,o){if(!e.has(s))return;const r=e.get(s);r.delete(o),r.size===0&&e.delete(s)}}}))})(Ee)),Ee.exports}var be={exports:{}},Yt={exports:{}};/*!
  * Bootstrap index.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var pu=Yt.exports,Si;function ot(){return Si||(Si=1,(function(n,t){(function(e,i){i(t)})(pu,(function(e){const o="transitionend",r=u=>(u&&window.CSS&&window.CSS.escape&&(u=u.replace(/#([^\s"#']+)/g,(v,E)=>`#${CSS.escape(E)}`)),u),a=u=>u==null?`${u}`:Object.prototype.toString.call(u).match(/\s([a-z]+)/i)[1].toLowerCase(),l=u=>{do u+=Math.floor(Math.random()*1e6);while(document.getElementById(u));return u},d=u=>{if(!u)return 0;let{transitionDuration:v,transitionDelay:E}=window.getComputedStyle(u);const b=Number.parseFloat(v),D=Number.parseFloat(E);return!b&&!D?0:(v=v.split(",")[0],E=E.split(",")[0],(Number.parseFloat(v)+Number.parseFloat(E))*1e3)},c=u=>{u.dispatchEvent(new Event(o))},m=u=>!u||typeof u!="object"?!1:(typeof u.jquery<"u"&&(u=u[0]),typeof u.nodeType<"u"),f=u=>m(u)?u.jquery?u[0]:u:typeof u=="string"&&u.length>0?document.querySelector(r(u)):null,p=u=>{if(!m(u)||u.getClientRects().length===0)return!1;const v=getComputedStyle(u).getPropertyValue("visibility")==="visible",E=u.closest("details:not([open])");if(!E)return v;if(E!==u){const b=u.closest("summary");if(b&&b.parentNode!==E||b===null)return!1}return v},T=u=>!u||u.nodeType!==Node.ELEMENT_NODE||u.classList.contains("disabled")?!0:typeof u.disabled<"u"?u.disabled:u.hasAttribute("disabled")&&u.getAttribute("disabled")!=="false",y=u=>{if(!document.documentElement.attachShadow)return null;if(typeof u.getRootNode=="function"){const v=u.getRootNode();return v instanceof ShadowRoot?v:null}return u instanceof ShadowRoot?u:u.parentNode?y(u.parentNode):null},w=()=>{},O=u=>{u.offsetHeight},M=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,x=[],S=u=>{document.readyState==="loading"?(x.length||document.addEventListener("DOMContentLoaded",()=>{for(const v of x)v()}),x.push(u)):u()},k=()=>document.documentElement.dir==="rtl",g=u=>{S(()=>{const v=M();if(v){const E=u.NAME,b=v.fn[E];v.fn[E]=u.jQueryInterface,v.fn[E].Constructor=u,v.fn[E].noConflict=()=>(v.fn[E]=b,u.jQueryInterface)}})},_=(u,v=[],E=u)=>typeof u=="function"?u(...v):E,A=(u,v,E=!0)=>{if(!E){_(u);return}const D=d(v)+5;let L=!1;const I=({target:P})=>{P===v&&(L=!0,v.removeEventListener(o,I),_(u))};v.addEventListener(o,I),setTimeout(()=>{L||c(v)},D)},C=(u,v,E,b)=>{const D=u.length;let L=u.indexOf(v);return L===-1?!E&&b?u[D-1]:u[0]:(L+=E?1:-1,b&&(L=(L+D)%D),u[Math.max(0,Math.min(L,D-1))])};e.defineJQueryPlugin=g,e.execute=_,e.executeAfterTransition=A,e.findShadowRoot=y,e.getElement=f,e.getNextActiveElement=C,e.getTransitionDurationFromElement=d,e.getUID=l,e.getjQuery=M,e.isDisabled=T,e.isElement=m,e.isRTL=k,e.isVisible=p,e.noop=w,e.onDOMContentLoaded=S,e.parseSelector=r,e.reflow=O,e.toType=a,e.triggerTransitionEnd=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}))})(Yt,Yt.exports)),Yt.exports}/*!
  * Bootstrap event-handler.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var mu=be.exports,Di;function zt(){return Di||(Di=1,(function(n,t){(function(e,i){n.exports=i(ot())})(mu,(function(e){const i=/[^.]*(?=\..*)\.|.*/,s=/\..*/,o=/::\d+$/,r={};let a=1;const l={mouseenter:"mouseover",mouseleave:"mouseout"},d=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function c(g,_){return _&&`${_}::${a++}`||g.uidEvent||a++}function m(g){const _=c(g);return g.uidEvent=_,r[_]=r[_]||{},r[_]}function f(g,_){return function A(C){return k(C,{delegateTarget:g}),A.oneOff&&S.off(g,C.type,_),_.apply(g,[C])}}function p(g,_,A){return function C(u){const v=g.querySelectorAll(_);for(let{target:E}=u;E&&E!==this;E=E.parentNode)for(const b of v)if(b===E)return k(u,{delegateTarget:E}),C.oneOff&&S.off(g,u.type,_,A),A.apply(E,[u])}}function T(g,_,A=null){return Object.values(g).find(C=>C.callable===_&&C.delegationSelector===A)}function y(g,_,A){const C=typeof _=="string",u=C?A:_||A;let v=x(g);return d.has(v)||(v=g),[C,u,v]}function w(g,_,A,C,u){if(typeof _!="string"||!g)return;let[v,E,b]=y(_,A,C);_ in l&&(E=(Z=>function(G){if(!G.relatedTarget||G.relatedTarget!==G.delegateTarget&&!G.delegateTarget.contains(G.relatedTarget))return Z.call(this,G)})(E));const D=m(g),L=D[b]||(D[b]={}),I=T(L,E,v?A:null);if(I){I.oneOff=I.oneOff&&u;return}const P=c(E,_.replace(i,"")),$=v?p(g,A,E):f(g,E);$.delegationSelector=v?A:null,$.callable=E,$.oneOff=u,$.uidEvent=P,L[P]=$,g.addEventListener(b,$,v)}function O(g,_,A,C,u){const v=T(_[A],C,u);v&&(g.removeEventListener(A,v,!!u),delete _[A][v.uidEvent])}function M(g,_,A,C){const u=_[A]||{};for(const[v,E]of Object.entries(u))v.includes(C)&&O(g,_,A,E.callable,E.delegationSelector)}function x(g){return g=g.replace(s,""),l[g]||g}const S={on(g,_,A,C){w(g,_,A,C,!1)},one(g,_,A,C){w(g,_,A,C,!0)},off(g,_,A,C){if(typeof _!="string"||!g)return;const[u,v,E]=y(_,A,C),b=E!==_,D=m(g),L=D[E]||{},I=_.startsWith(".");if(typeof v<"u"){if(!Object.keys(L).length)return;O(g,D,E,v,u?A:null);return}if(I)for(const P of Object.keys(D))M(g,D,P,_.slice(1));for(const[P,$]of Object.entries(L)){const R=P.replace(o,"");(!b||_.includes(R))&&O(g,D,E,$.callable,$.delegationSelector)}},trigger(g,_,A){if(typeof _!="string"||!g)return null;const C=e.getjQuery(),u=x(_),v=_!==u;let E=null,b=!0,D=!0,L=!1;v&&C&&(E=C.Event(_,A),C(g).trigger(E),b=!E.isPropagationStopped(),D=!E.isImmediatePropagationStopped(),L=E.isDefaultPrevented());const I=k(new Event(_,{bubbles:b,cancelable:!0}),A);return L&&I.preventDefault(),D&&g.dispatchEvent(I),I.defaultPrevented&&E&&E.preventDefault(),I}};function k(g,_={}){for(const[A,C]of Object.entries(_))try{g[A]=C}catch{Object.defineProperty(g,A,{configurable:!0,get(){return C}})}return g}return S}))})(be)),be.exports}var ye={exports:{}},Ae={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var gu=Ae.exports,Li;function zs(){return Li||(Li=1,(function(n,t){(function(e,i){n.exports=i()})(gu,(function(){function e(o){if(o==="true")return!0;if(o==="false")return!1;if(o===Number(o).toString())return Number(o);if(o===""||o==="null")return null;if(typeof o!="string")return o;try{return JSON.parse(decodeURIComponent(o))}catch{return o}}function i(o){return o.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}return{setDataAttribute(o,r,a){o.setAttribute(`data-bs-${i(r)}`,a)},removeDataAttribute(o,r){o.removeAttribute(`data-bs-${i(r)}`)},getDataAttributes(o){if(!o)return{};const r={},a=Object.keys(o.dataset).filter(l=>l.startsWith("bs")&&!l.startsWith("bsConfig"));for(const l of a){let d=l.replace(/^bs/,"");d=d.charAt(0).toLowerCase()+d.slice(1,d.length),r[d]=e(o.dataset[l])}return r},getDataAttribute(o,r){return e(o.getAttribute(`data-bs-${i(r)}`))}}}))})(Ae)),Ae.exports}/*!
  * Bootstrap config.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var _u=ye.exports,Ii;function $n(){return Ii||(Ii=1,(function(n,t){(function(e,i){n.exports=i(zs(),ot())})(_u,(function(e,i){class s{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(r){return r=this._mergeConfigObj(r),r=this._configAfterMerge(r),this._typeCheckConfig(r),r}_configAfterMerge(r){return r}_mergeConfigObj(r,a){const l=i.isElement(a)?e.getDataAttribute(a,"config"):{};return{...this.constructor.Default,...typeof l=="object"?l:{},...i.isElement(a)?e.getDataAttributes(a):{},...typeof r=="object"?r:{}}}_typeCheckConfig(r,a=this.constructor.DefaultType){for(const[l,d]of Object.entries(a)){const c=r[l],m=i.isElement(c)?"element":i.toType(c);if(!new RegExp(d).test(m))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${l}" provided type "${m}" but expected type "${d}".`)}}}return s}))})(ye)),ye.exports}/*!
  * Bootstrap base-component.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var vu=ve.exports,$i;function js(){return $i||($i=1,(function(n,t){(function(e,i){n.exports=i(fu(),zt(),$n(),ot())})(vu,(function(e,i,s,o){const r="5.3.2";class a extends s{constructor(d,c){super(),d=o.getElement(d),d&&(this._element=d,this._config=this._getConfig(c),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),i.off(this._element,this.constructor.EVENT_KEY);for(const d of Object.getOwnPropertyNames(this))this[d]=null}_queueCallback(d,c,m=!0){o.executeAfterTransition(d,c,m)}_getConfig(d){return d=this._mergeConfigObj(d,this._element),d=this._configAfterMerge(d),this._typeCheckConfig(d),d}static getInstance(d){return e.get(o.getElement(d),this.DATA_KEY)}static getOrCreateInstance(d,c={}){return this.getInstance(d)||new this(d,typeof c=="object"?c:null)}static get VERSION(){return r}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(d){return`${d}${this.EVENT_KEY}`}}return a}))})(ve)),ve.exports}var we={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Eu=we.exports,ki;function ie(){return ki||(ki=1,(function(n,t){(function(e,i){n.exports=i(ot())})(Eu,(function(e){const i=o=>{let r=o.getAttribute("data-bs-target");if(!r||r==="#"){let a=o.getAttribute("href");if(!a||!a.includes("#")&&!a.startsWith("."))return null;a.includes("#")&&!a.startsWith("#")&&(a=`#${a.split("#")[1]}`),r=a&&a!=="#"?e.parseSelector(a.trim()):null}return r},s={find(o,r=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(r,o))},findOne(o,r=document.documentElement){return Element.prototype.querySelector.call(r,o)},children(o,r){return[].concat(...o.children).filter(a=>a.matches(r))},parents(o,r){const a=[];let l=o.parentNode.closest(r);for(;l;)a.push(l),l=l.parentNode.closest(r);return a},prev(o,r){let a=o.previousElementSibling;for(;a;){if(a.matches(r))return[a];a=a.previousElementSibling}return[]},next(o,r){let a=o.nextElementSibling;for(;a;){if(a.matches(r))return[a];a=a.nextElementSibling}return[]},focusableChildren(o){const r=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(a=>`${a}:not([tabindex^="-"])`).join(",");return this.find(r,o).filter(a=>!e.isDisabled(a)&&e.isVisible(a))},getSelectorFromElement(o){const r=i(o);return r&&s.findOne(r)?r:null},getElementFromSelector(o){const r=i(o);return r?s.findOne(r):null},getMultipleElementsFromSelector(o){const r=i(o);return r?s.find(r):[]}};return s}))})(we)),we.exports}var Te={exports:{}};/*!
  * Bootstrap backdrop.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var bu=Te.exports,xi;function yu(){return xi||(xi=1,(function(n,t){(function(e,i){n.exports=i(zt(),$n(),ot())})(bu,(function(e,i,s){const o="backdrop",r="fade",a="show",l=`mousedown.bs.${o}`,d={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},c={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class m extends i{constructor(p){super(),this._config=this._getConfig(p),this._isAppended=!1,this._element=null}static get Default(){return d}static get DefaultType(){return c}static get NAME(){return o}show(p){if(!this._config.isVisible){s.execute(p);return}this._append();const T=this._getElement();this._config.isAnimated&&s.reflow(T),T.classList.add(a),this._emulateAnimation(()=>{s.execute(p)})}hide(p){if(!this._config.isVisible){s.execute(p);return}this._getElement().classList.remove(a),this._emulateAnimation(()=>{this.dispose(),s.execute(p)})}dispose(){this._isAppended&&(e.off(this._element,l),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const p=document.createElement("div");p.className=this._config.className,this._config.isAnimated&&p.classList.add(r),this._element=p}return this._element}_configAfterMerge(p){return p.rootElement=s.getElement(p.rootElement),p}_append(){if(this._isAppended)return;const p=this._getElement();this._config.rootElement.append(p),e.on(p,l,()=>{s.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(p){s.executeAfterTransition(p,this._getElement(),this._config.isAnimated)}}return m}))})(Te)),Te.exports}var Ut={exports:{}};/*!
  * Bootstrap component-functions.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Au=Ut.exports,Mi;function wu(){return Mi||(Mi=1,(function(n,t){(function(e,i){i(t,zt(),ie(),ot())})(Au,(function(e,i,s,o){const r=(a,l="hide")=>{const d=`click.dismiss${a.EVENT_KEY}`,c=a.NAME;i.on(document,d,`[data-bs-dismiss="${c}"]`,function(m){if(["A","AREA"].includes(this.tagName)&&m.preventDefault(),o.isDisabled(this))return;const f=s.getElementFromSelector(this)||this.closest(`.${c}`);a.getOrCreateInstance(f)[l]()})};e.enableDismissTrigger=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}))})(Ut,Ut.exports)),Ut.exports}var Ce={exports:{}};/*!
  * Bootstrap focustrap.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Tu=Ce.exports,Pi;function Cu(){return Pi||(Pi=1,(function(n,t){(function(e,i){n.exports=i(zt(),ie(),$n())})(Tu,(function(e,i,s){const o="focustrap",a=".bs.focustrap",l=`focusin${a}`,d=`keydown.tab${a}`,c="Tab",m="forward",f="backward",p={autofocus:!0,trapElement:null},T={autofocus:"boolean",trapElement:"element"};class y extends s{constructor(O){super(),this._config=this._getConfig(O),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return p}static get DefaultType(){return T}static get NAME(){return o}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),e.off(document,a),e.on(document,l,O=>this._handleFocusin(O)),e.on(document,d,O=>this._handleKeydown(O)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,e.off(document,a))}_handleFocusin(O){const{trapElement:M}=this._config;if(O.target===document||O.target===M||M.contains(O.target))return;const x=i.focusableChildren(M);x.length===0?M.focus():this._lastTabNavDirection===f?x[x.length-1].focus():x[0].focus()}_handleKeydown(O){O.key===c&&(this._lastTabNavDirection=O.shiftKey?f:m)}}return y}))})(Ce)),Ce.exports}var Oe={exports:{}};/*!
  * Bootstrap scrollbar.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ou=Oe.exports,Ri;function Nu(){return Ri||(Ri=1,(function(n,t){(function(e,i){n.exports=i(zs(),ie(),ot())})(Ou,(function(e,i,s){const o=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",r=".sticky-top",a="padding-right",l="margin-right";class d{constructor(){this._element=document.body}getWidth(){const m=document.documentElement.clientWidth;return Math.abs(window.innerWidth-m)}hide(){const m=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,a,f=>f+m),this._setElementAttributes(o,a,f=>f+m),this._setElementAttributes(r,l,f=>f-m)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,a),this._resetElementAttributes(o,a),this._resetElementAttributes(r,l)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(m,f,p){const T=this.getWidth(),y=w=>{if(w!==this._element&&window.innerWidth>w.clientWidth+T)return;this._saveInitialAttribute(w,f);const O=window.getComputedStyle(w).getPropertyValue(f);w.style.setProperty(f,`${p(Number.parseFloat(O))}px`)};this._applyManipulationCallback(m,y)}_saveInitialAttribute(m,f){const p=m.style.getPropertyValue(f);p&&e.setDataAttribute(m,f,p)}_resetElementAttributes(m,f){const p=T=>{const y=e.getDataAttribute(T,f);if(y===null){T.style.removeProperty(f);return}e.removeDataAttribute(T,f),T.style.setProperty(f,y)};this._applyManipulationCallback(m,p)}_applyManipulationCallback(m,f){if(s.isElement(m)){f(m);return}for(const p of i.find(m,this._element))f(p)}}return d}))})(Oe)),Oe.exports}/*!
  * Bootstrap offcanvas.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Su=_e.exports,Vi;function Du(){return Vi||(Vi=1,(function(n,t){(function(e,i){n.exports=i(js(),zt(),ie(),yu(),wu(),Cu(),ot(),Nu())})(Su,(function(e,i,s,o,r,a,l,d){const c="offcanvas",f=".bs.offcanvas",p=".data-api",T=`load${f}${p}`,y="Escape",w="show",O="showing",M="hiding",x="offcanvas-backdrop",S=".offcanvas.show",k=`show${f}`,g=`shown${f}`,_=`hide${f}`,A=`hidePrevented${f}`,C=`hidden${f}`,u=`resize${f}`,v=`click${f}${p}`,E=`keydown.dismiss${f}`,b='[data-bs-toggle="offcanvas"]',D={backdrop:!0,keyboard:!0,scroll:!1},L={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class I extends e{constructor($,R){super($,R),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return D}static get DefaultType(){return L}static get NAME(){return c}toggle($){return this._isShown?this.hide():this.show($)}show($){if(this._isShown||i.trigger(this._element,k,{relatedTarget:$}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new d().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(O);const Z=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(w),this._element.classList.remove(O),i.trigger(this._element,g,{relatedTarget:$})};this._queueCallback(Z,this._element,!0)}hide(){if(!this._isShown||i.trigger(this._element,_).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(M),this._backdrop.hide();const R=()=>{this._element.classList.remove(w,M),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new d().reset(),i.trigger(this._element,C)};this._queueCallback(R,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const $=()=>{if(this._config.backdrop==="static"){i.trigger(this._element,A);return}this.hide()},R=!!this._config.backdrop;return new o({className:x,isVisible:R,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:R?$:null})}_initializeFocusTrap(){return new a({trapElement:this._element})}_addEventListeners(){i.on(this._element,E,$=>{if($.key===y){if(this._config.keyboard){this.hide();return}i.trigger(this._element,A)}})}static jQueryInterface($){return this.each(function(){const R=I.getOrCreateInstance(this,$);if(typeof $=="string"){if(R[$]===void 0||$.startsWith("_")||$==="constructor")throw new TypeError(`No method named "${$}"`);R[$](this)}})}}return i.on(document,v,b,function(P){const $=s.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&P.preventDefault(),l.isDisabled(this))return;i.one($,C,()=>{l.isVisible(this)&&this.focus()});const R=s.findOne(S);R&&R!==$&&I.getInstance(R).hide(),I.getOrCreateInstance($).toggle(this)}),i.on(window,T,()=>{for(const P of s.find(S))I.getOrCreateInstance(P).show()}),i.on(window,u,()=>{for(const P of s.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(P).position!=="fixed"&&I.getOrCreateInstance(P).hide()}),r.enableDismissTrigger(I),l.defineJQueryPlugin(I),I}))})(_e)),_e.exports}Du();var Ne={exports:{}};/*!
  * Bootstrap collapse.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Lu=Ne.exports,Hi;function Iu(){return Hi||(Hi=1,(function(n,t){(function(e,i){n.exports=i(js(),zt(),ie(),ot())})(Lu,(function(e,i,s,o){const r="collapse",l=".bs.collapse",d=".data-api",c=`show${l}`,m=`shown${l}`,f=`hide${l}`,p=`hidden${l}`,T=`click${l}${d}`,y="show",w="collapse",O="collapsing",M="collapsed",x=`:scope .${w} .${w}`,S="collapse-horizontal",k="width",g="height",_=".collapse.show, .collapse.collapsing",A='[data-bs-toggle="collapse"]',C={parent:null,toggle:!0},u={parent:"(null|element)",toggle:"boolean"};class v extends e{constructor(b,D){super(b,D),this._isTransitioning=!1,this._triggerArray=[];const L=s.find(A);for(const I of L){const P=s.getSelectorFromElement(I),$=s.find(P).filter(R=>R===this._element);P!==null&&$.length&&this._triggerArray.push(I)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return C}static get DefaultType(){return u}static get NAME(){return r}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let b=[];if(this._config.parent&&(b=this._getFirstLevelChildren(_).filter(R=>R!==this._element).map(R=>v.getOrCreateInstance(R,{toggle:!1}))),b.length&&b[0]._isTransitioning||i.trigger(this._element,c).defaultPrevented)return;for(const R of b)R.hide();const L=this._getDimension();this._element.classList.remove(w),this._element.classList.add(O),this._element.style[L]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const I=()=>{this._isTransitioning=!1,this._element.classList.remove(O),this._element.classList.add(w,y),this._element.style[L]="",i.trigger(this._element,m)},$=`scroll${L[0].toUpperCase()+L.slice(1)}`;this._queueCallback(I,this._element,!0),this._element.style[L]=`${this._element[$]}px`}hide(){if(this._isTransitioning||!this._isShown()||i.trigger(this._element,f).defaultPrevented)return;const D=this._getDimension();this._element.style[D]=`${this._element.getBoundingClientRect()[D]}px`,o.reflow(this._element),this._element.classList.add(O),this._element.classList.remove(w,y);for(const I of this._triggerArray){const P=s.getElementFromSelector(I);P&&!this._isShown(P)&&this._addAriaAndCollapsedClass([I],!1)}this._isTransitioning=!0;const L=()=>{this._isTransitioning=!1,this._element.classList.remove(O),this._element.classList.add(w),i.trigger(this._element,p)};this._element.style[D]="",this._queueCallback(L,this._element,!0)}_isShown(b=this._element){return b.classList.contains(y)}_configAfterMerge(b){return b.toggle=!!b.toggle,b.parent=o.getElement(b.parent),b}_getDimension(){return this._element.classList.contains(S)?k:g}_initializeChildren(){if(!this._config.parent)return;const b=this._getFirstLevelChildren(A);for(const D of b){const L=s.getElementFromSelector(D);L&&this._addAriaAndCollapsedClass([D],this._isShown(L))}}_getFirstLevelChildren(b){const D=s.find(x,this._config.parent);return s.find(b,this._config.parent).filter(L=>!D.includes(L))}_addAriaAndCollapsedClass(b,D){if(b.length)for(const L of b)L.classList.toggle(M,!D),L.setAttribute("aria-expanded",D)}static jQueryInterface(b){const D={};return typeof b=="string"&&/show|hide/.test(b)&&(D.toggle=!1),this.each(function(){const L=v.getOrCreateInstance(this,D);if(typeof b=="string"){if(typeof L[b]>"u")throw new TypeError(`No method named "${b}"`);L[b]()}})}}return i.on(document,T,A,function(E){(E.target.tagName==="A"||E.delegateTarget&&E.delegateTarget.tagName==="A")&&E.preventDefault();for(const b of s.getMultipleElementsFromSelector(this))v.getOrCreateInstance(b,{toggle:!1}).toggle()}),o.defineJQueryPlugin(v),v}))})(Ne)),Ne.exports}Iu();(async()=>(await Wi("#header","componets/header.html"),du()))();export{Pt as T};

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const Ks=`<nav class="navbar">
    <div class=" container-fluid">
        <a href="#">
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
                    <a href="./physicalizing-emotions" data-link>
                        <li>Physicalizing emotions</li>
                    </a>
                    <a href="./visualization" data-link>
                        <li>the VISUALIZATION</li>
                    </a>
                    <a href="./about" data-link>
                        <li>ABOUT THE PROJECT</li>
                    </a>
                    <a href="./epilogue" data-link>
                        <li>EPILOGUE <span>On healing and mental health</span></li>
                    </a>
                </ul>
                <button class="button button-primary button-min" data-bs-dismiss="offcanvas"
                    aria-label="Close">CLOSE</button>
            </div>
        </div>
    </div>
</nav>
`,Ys=`<nav class="navbar">
    <div class=" container-fluid">
        <a href="/visualization" data-link class="link-back"> BACK </a>
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
                    <a href="./physicalizing-emotions" data-link>
                        <li>Physicalizing emotions</li>
                    </a>
                    <a href="./visualization" data-link>
                        <li>the VISUALIZATION</li>
                    </a>
                    <a href="./about" data-link>
                        <li>ABOUT THE PROJECT</li>
                    </a>
                    <a href="./epilogue" data-link>
                        <li>EPILOGUE <span>On healing and mental health</span></li>
                    </a>
                </ul>
                <button class="button button-primary button-min" data-bs-dismiss="offcanvas"
                    aria-label="Close">CLOSE</button>
            </div>
        </div>
    </div>
</nav>
`,Us={"componets/header.html":Ks,"componets/header-interior.html":Ys};async function Ri(n,t){const e=document.querySelector(n);if(!e)return;const i=Us[t];i?e.innerHTML=i:console.error(`Component not found: ${t}`)}const qs="modulepreload",Gs=function(n,t){return new URL(n,t).href},zn={},Ft=function(t,e,i){if(!e||e.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(e.map(o=>{if(o=Gs(o,i),o in zn)return;zn[o]=!0;const r=o.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(!!i)for(let u=s.length-1;u>=0;u--){const m=s[u];if(m.href===o&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const d=document.createElement("link");if(d.rel=r?"stylesheet":qs,r||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),r)return new Promise((u,m)=>{d.addEventListener("load",u),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})},Qs=`<section class="intro">
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
    <video src="./video/Intro_video_portrait.mp4" poster="./img/intro_video_portrait.jpg" autoplay muted loop></video>
    <button class="btn-play">PLAY</button>
</section>
<dialog id="modal-video">
    <div class="modal--content">
        <button class="close"></button>
        <video src="./video/intro_video_landscape.mp4" loop></video>
    </div>
</dialog>
`,Xs=`<section class="hero">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="title"><span>1</span>Physicalizing <br> Emotions</h1>
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
`,Js=`<section class="hero">
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
                <a data-link href="./visualization/periods">
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
                <a data-link href="./visualization/periods">
                    <button class="button button-tertiary">Explore Periods</button>
                </a>
            </div>
        </div>
    </div>
</section>
`,Zs=`<dialog id="modal-story">
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

`,to=`<section class="hero">
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
`,eo=`<section class="hero">
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
`,no={"pages/home.html":Qs,"pages/physicalizing.html":Xs,"pages/visualization.html":Js,"pages/periods.html":Zs,"pages/about.html":to,"pages/epilogue.html":eo};async function io(n){const t=document.querySelector("[data-router-view]");if(!t)return;const e=no[n];e?t.innerHTML=e:console.error(`Page not found: ${n}`)}function so(n){document.body.classList.forEach(t=>{t.startsWith("page-")&&document.body.classList.remove(t)}),document.body.classList.add(n)}function Wn(){const n=document.querySelector(".hero"),t=document.querySelector(".visualization");n.classList.add("hide"),t.classList.add("show")}var V="top",W="bottom",j="right",H="left",Ae="auto",Pt=[V,W,j,H],Et="start",Lt="end",Pi="clippingParents",hn="viewport",Ot="popper",Vi="reference",on=Pt.reduce(function(n,t){return n.concat([t+"-"+Et,t+"-"+Lt])},[]),fn=[].concat(Pt,[Ae]).reduce(function(n,t){return n.concat([t,t+"-"+Et,t+"-"+Lt])},[]),Hi="beforeRead",zi="read",Wi="afterRead",ji="beforeMain",Bi="main",Fi="afterMain",Ki="beforeWrite",Yi="write",Ui="afterWrite",qi=[Hi,zi,Wi,ji,Bi,Fi,Ki,Yi,Ui];function Z(n){return n?(n.nodeName||"").toLowerCase():null}function B(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function bt(n){var t=B(n).Element;return n instanceof t||n instanceof Element}function K(n){var t=B(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function pn(n){if(typeof ShadowRoot>"u")return!1;var t=B(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function oo(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var i=t.styles[e]||{},s=t.attributes[e]||{},o=t.elements[e];!K(o)||!Z(o)||(Object.assign(o.style,i),Object.keys(s).forEach(function(r){var a=s[r];a===!1?o.removeAttribute(r):o.setAttribute(r,a===!0?"":a)}))})}function ro(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(i){var s=t.elements[i],o=t.attributes[i]||{},r=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:e[i]),a=r.reduce(function(l,d){return l[d]="",l},{});!K(s)||!Z(s)||(Object.assign(s.style,a),Object.keys(o).forEach(function(l){s.removeAttribute(l)}))})}}const mn={name:"applyStyles",enabled:!0,phase:"write",fn:oo,effect:ro,requires:["computeStyles"]};function X(n){return n.split("-")[0]}var vt=Math.max,_e=Math.min,It=Math.round;function rn(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Gi(){return!/^((?!chrome|android).)*safari/i.test(rn())}function $t(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var i=n.getBoundingClientRect(),s=1,o=1;t&&K(n)&&(s=n.offsetWidth>0&&It(i.width)/n.offsetWidth||1,o=n.offsetHeight>0&&It(i.height)/n.offsetHeight||1);var r=bt(n)?B(n):window,a=r.visualViewport,l=!Gi()&&e,d=(i.left+(l&&a?a.offsetLeft:0))/s,u=(i.top+(l&&a?a.offsetTop:0))/o,m=i.width/s,g=i.height/o;return{width:m,height:g,top:u,right:d+m,bottom:u+g,left:d,x:d,y:u}}function gn(n){var t=$t(n),e=n.offsetWidth,i=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:i}}function Qi(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&pn(e)){var i=t;do{if(i&&n.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function it(n){return B(n).getComputedStyle(n)}function ao(n){return["table","td","th"].indexOf(Z(n))>=0}function dt(n){return((bt(n)?n.ownerDocument:n.document)||window.document).documentElement}function we(n){return Z(n)==="html"?n:n.assignedSlot||n.parentNode||(pn(n)?n.host:null)||dt(n)}function jn(n){return!K(n)||it(n).position==="fixed"?null:n.offsetParent}function lo(n){var t=/firefox/i.test(rn()),e=/Trident/i.test(rn());if(e&&K(n)){var i=it(n);if(i.position==="fixed")return null}var s=we(n);for(pn(s)&&(s=s.host);K(s)&&["html","body"].indexOf(Z(s))<0;){var o=it(s);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return s;s=s.parentNode}return null}function Qt(n){for(var t=B(n),e=jn(n);e&&ao(e)&&it(e).position==="static";)e=jn(e);return e&&(Z(e)==="html"||Z(e)==="body"&&it(e).position==="static")?t:e||lo(n)||t}function _n(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Ut(n,t,e){return vt(n,_e(t,e))}function co(n,t,e){var i=Ut(n,t,e);return i>e?e:i}function Xi(){return{top:0,right:0,bottom:0,left:0}}function Ji(n){return Object.assign({},Xi(),n)}function Zi(n,t){return t.reduce(function(e,i){return e[i]=n,e},{})}var uo=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,Ji(typeof t!="number"?t:Zi(t,Pt))};function ho(n){var t,e=n.state,i=n.name,s=n.options,o=e.elements.arrow,r=e.modifiersData.popperOffsets,a=X(e.placement),l=_n(a),d=[H,j].indexOf(a)>=0,u=d?"height":"width";if(!(!o||!r)){var m=uo(s.padding,e),g=gn(o),f=l==="y"?V:H,L=l==="y"?W:j,A=e.rects.reference[u]+e.rects.reference[l]-r[l]-e.rects.popper[u],T=r[l]-e.rects.reference[l],C=Qt(o),M=C?l==="y"?C.clientHeight||0:C.clientWidth||0:0,x=A/2-T/2,N=m[f],k=M-g[u]-m[L],p=M/2-g[u]/2+x,_=Ut(N,p,k),y=l;e.modifiersData[i]=(t={},t[y]=_,t.centerOffset=_-p,t)}}function fo(n){var t=n.state,e=n.options,i=e.element,s=i===void 0?"[data-popper-arrow]":i;s!=null&&(typeof s=="string"&&(s=t.elements.popper.querySelector(s),!s)||Qi(t.elements.popper,s)&&(t.elements.arrow=s))}const ts={name:"arrow",enabled:!0,phase:"main",fn:ho,effect:fo,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function kt(n){return n.split("-")[1]}var po={top:"auto",right:"auto",bottom:"auto",left:"auto"};function mo(n,t){var e=n.x,i=n.y,s=t.devicePixelRatio||1;return{x:It(e*s)/s||0,y:It(i*s)/s||0}}function Bn(n){var t,e=n.popper,i=n.popperRect,s=n.placement,o=n.variation,r=n.offsets,a=n.position,l=n.gpuAcceleration,d=n.adaptive,u=n.roundOffsets,m=n.isFixed,g=r.x,f=g===void 0?0:g,L=r.y,A=L===void 0?0:L,T=typeof u=="function"?u({x:f,y:A}):{x:f,y:A};f=T.x,A=T.y;var C=r.hasOwnProperty("x"),M=r.hasOwnProperty("y"),x=H,N=V,k=window;if(d){var p=Qt(e),_="clientHeight",y="clientWidth";if(p===B(e)&&(p=dt(e),it(p).position!=="static"&&a==="absolute"&&(_="scrollHeight",y="scrollWidth")),p=p,s===V||(s===H||s===j)&&o===Lt){N=W;var w=m&&p===k&&k.visualViewport?k.visualViewport.height:p[_];A-=w-i.height,A*=l?1:-1}if(s===H||(s===V||s===W)&&o===Lt){x=j;var c=m&&p===k&&k.visualViewport?k.visualViewport.width:p[y];f-=c-i.width,f*=l?1:-1}}var v=Object.assign({position:a},d&&po),E=u===!0?mo({x:f,y:A},B(e)):{x:f,y:A};if(f=E.x,A=E.y,l){var b;return Object.assign({},v,(b={},b[N]=M?"0":"",b[x]=C?"0":"",b.transform=(k.devicePixelRatio||1)<=1?"translate("+f+"px, "+A+"px)":"translate3d("+f+"px, "+A+"px, 0)",b))}return Object.assign({},v,(t={},t[N]=M?A+"px":"",t[x]=C?f+"px":"",t.transform="",t))}function go(n){var t=n.state,e=n.options,i=e.gpuAcceleration,s=i===void 0?!0:i,o=e.adaptive,r=o===void 0?!0:o,a=e.roundOffsets,l=a===void 0?!0:a,d={placement:X(t.placement),variation:kt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:s,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Bn(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:r,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Bn(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const vn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:go,data:{}};var oe={passive:!0};function _o(n){var t=n.state,e=n.instance,i=n.options,s=i.scroll,o=s===void 0?!0:s,r=i.resize,a=r===void 0?!0:r,l=B(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&d.forEach(function(u){u.addEventListener("scroll",e.update,oe)}),a&&l.addEventListener("resize",e.update,oe),function(){o&&d.forEach(function(u){u.removeEventListener("scroll",e.update,oe)}),a&&l.removeEventListener("resize",e.update,oe)}}const En={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:_o,data:{}};var vo={left:"right",right:"left",bottom:"top",top:"bottom"};function pe(n){return n.replace(/left|right|bottom|top/g,function(t){return vo[t]})}var Eo={start:"end",end:"start"};function Fn(n){return n.replace(/start|end/g,function(t){return Eo[t]})}function bn(n){var t=B(n),e=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:e,scrollTop:i}}function yn(n){return $t(dt(n)).left+bn(n).scrollLeft}function bo(n,t){var e=B(n),i=dt(n),s=e.visualViewport,o=i.clientWidth,r=i.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;var d=Gi();(d||!d&&t==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a+yn(n),y:l}}function yo(n){var t,e=dt(n),i=bn(n),s=(t=n.ownerDocument)==null?void 0:t.body,o=vt(e.scrollWidth,e.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=vt(e.scrollHeight,e.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-i.scrollLeft+yn(n),l=-i.scrollTop;return it(s||e).direction==="rtl"&&(a+=vt(e.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}function An(n){var t=it(n),e=t.overflow,i=t.overflowX,s=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+s+i)}function es(n){return["html","body","#document"].indexOf(Z(n))>=0?n.ownerDocument.body:K(n)&&An(n)?n:es(we(n))}function qt(n,t){var e;t===void 0&&(t=[]);var i=es(n),s=i===((e=n.ownerDocument)==null?void 0:e.body),o=B(i),r=s?[o].concat(o.visualViewport||[],An(i)?i:[]):i,a=t.concat(r);return s?a:a.concat(qt(we(r)))}function an(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function Ao(n,t){var e=$t(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function Kn(n,t,e){return t===hn?an(bo(n,e)):bt(t)?Ao(t,e):an(yo(dt(n)))}function wo(n){var t=qt(we(n)),e=["absolute","fixed"].indexOf(it(n).position)>=0,i=e&&K(n)?Qt(n):n;return bt(i)?t.filter(function(s){return bt(s)&&Qi(s,i)&&Z(s)!=="body"}):[]}function To(n,t,e,i){var s=t==="clippingParents"?wo(n):[].concat(t),o=[].concat(s,[e]),r=o[0],a=o.reduce(function(l,d){var u=Kn(n,d,i);return l.top=vt(u.top,l.top),l.right=_e(u.right,l.right),l.bottom=_e(u.bottom,l.bottom),l.left=vt(u.left,l.left),l},Kn(n,r,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ns(n){var t=n.reference,e=n.element,i=n.placement,s=i?X(i):null,o=i?kt(i):null,r=t.x+t.width/2-e.width/2,a=t.y+t.height/2-e.height/2,l;switch(s){case V:l={x:r,y:t.y-e.height};break;case W:l={x:r,y:t.y+t.height};break;case j:l={x:t.x+t.width,y:a};break;case H:l={x:t.x-e.width,y:a};break;default:l={x:t.x,y:t.y}}var d=s?_n(s):null;if(d!=null){var u=d==="y"?"height":"width";switch(o){case Et:l[d]=l[d]-(t[u]/2-e[u]/2);break;case Lt:l[d]=l[d]+(t[u]/2-e[u]/2);break}}return l}function xt(n,t){t===void 0&&(t={});var e=t,i=e.placement,s=i===void 0?n.placement:i,o=e.strategy,r=o===void 0?n.strategy:o,a=e.boundary,l=a===void 0?Pi:a,d=e.rootBoundary,u=d===void 0?hn:d,m=e.elementContext,g=m===void 0?Ot:m,f=e.altBoundary,L=f===void 0?!1:f,A=e.padding,T=A===void 0?0:A,C=Ji(typeof T!="number"?T:Zi(T,Pt)),M=g===Ot?Vi:Ot,x=n.rects.popper,N=n.elements[L?M:g],k=To(bt(N)?N:N.contextElement||dt(n.elements.popper),l,u,r),p=$t(n.elements.reference),_=ns({reference:p,element:x,strategy:"absolute",placement:s}),y=an(Object.assign({},x,_)),w=g===Ot?y:p,c={top:k.top-w.top+C.top,bottom:w.bottom-k.bottom+C.bottom,left:k.left-w.left+C.left,right:w.right-k.right+C.right},v=n.modifiersData.offset;if(g===Ot&&v){var E=v[s];Object.keys(c).forEach(function(b){var S=[j,W].indexOf(b)>=0?1:-1,D=[V,W].indexOf(b)>=0?"y":"x";c[b]+=E[D]*S})}return c}function Co(n,t){t===void 0&&(t={});var e=t,i=e.placement,s=e.boundary,o=e.rootBoundary,r=e.padding,a=e.flipVariations,l=e.allowedAutoPlacements,d=l===void 0?fn:l,u=kt(i),m=u?a?on:on.filter(function(L){return kt(L)===u}):Pt,g=m.filter(function(L){return d.indexOf(L)>=0});g.length===0&&(g=m);var f=g.reduce(function(L,A){return L[A]=xt(n,{placement:A,boundary:s,rootBoundary:o,padding:r})[X(A)],L},{});return Object.keys(f).sort(function(L,A){return f[L]-f[A]})}function Oo(n){if(X(n)===Ae)return[];var t=pe(n);return[Fn(n),t,Fn(t)]}function No(n){var t=n.state,e=n.options,i=n.name;if(!t.modifiersData[i]._skip){for(var s=e.mainAxis,o=s===void 0?!0:s,r=e.altAxis,a=r===void 0?!0:r,l=e.fallbackPlacements,d=e.padding,u=e.boundary,m=e.rootBoundary,g=e.altBoundary,f=e.flipVariations,L=f===void 0?!0:f,A=e.allowedAutoPlacements,T=t.options.placement,C=X(T),M=C===T,x=l||(M||!L?[pe(T)]:Oo(T)),N=[T].concat(x).reduce(function(wt,at){return wt.concat(X(at)===Ae?Co(t,{placement:at,boundary:u,rootBoundary:m,padding:d,flipVariations:L,allowedAutoPlacements:A}):at)},[]),k=t.rects.reference,p=t.rects.popper,_=new Map,y=!0,w=N[0],c=0;c<N.length;c++){var v=N[c],E=X(v),b=kt(v)===Et,S=[V,W].indexOf(E)>=0,D=S?"width":"height",I=xt(t,{placement:v,boundary:u,rootBoundary:m,altBoundary:g,padding:d}),R=S?b?j:H:b?W:V;k[D]>p[D]&&(R=pe(R));var $=pe(R),P=[];if(o&&P.push(I[E]<=0),a&&P.push(I[R]<=0,I[$]<=0),P.every(function(wt){return wt})){w=v,y=!1;break}_.set(v,P)}if(y)for(var tt=L?3:1,Q=function(at){var Bt=N.find(function(ie){var pt=_.get(ie);if(pt)return pt.slice(0,at).every(function(Le){return Le})});if(Bt)return w=Bt,"break"},jt=tt;jt>0;jt--){var ne=Q(jt);if(ne==="break")break}t.placement!==w&&(t.modifiersData[i]._skip=!0,t.placement=w,t.reset=!0)}}const is={name:"flip",enabled:!0,phase:"main",fn:No,requiresIfExists:["offset"],data:{_skip:!1}};function Yn(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function Un(n){return[V,j,W,H].some(function(t){return n[t]>=0})}function So(n){var t=n.state,e=n.name,i=t.rects.reference,s=t.rects.popper,o=t.modifiersData.preventOverflow,r=xt(t,{elementContext:"reference"}),a=xt(t,{altBoundary:!0}),l=Yn(r,i),d=Yn(a,s,o),u=Un(l),m=Un(d);t.modifiersData[e]={referenceClippingOffsets:l,popperEscapeOffsets:d,isReferenceHidden:u,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":m})}const ss={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:So};function Do(n,t,e){var i=X(n),s=[H,V].indexOf(i)>=0?-1:1,o=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[H,j].indexOf(i)>=0?{x:a,y:r}:{x:r,y:a}}function Lo(n){var t=n.state,e=n.options,i=n.name,s=e.offset,o=s===void 0?[0,0]:s,r=fn.reduce(function(u,m){return u[m]=Do(m,t.rects,o),u},{}),a=r[t.placement],l=a.x,d=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=d),t.modifiersData[i]=r}const os={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Lo};function Io(n){var t=n.state,e=n.name;t.modifiersData[e]=ns({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const wn={name:"popperOffsets",enabled:!0,phase:"read",fn:Io,data:{}};function $o(n){return n==="x"?"y":"x"}function ko(n){var t=n.state,e=n.options,i=n.name,s=e.mainAxis,o=s===void 0?!0:s,r=e.altAxis,a=r===void 0?!1:r,l=e.boundary,d=e.rootBoundary,u=e.altBoundary,m=e.padding,g=e.tether,f=g===void 0?!0:g,L=e.tetherOffset,A=L===void 0?0:L,T=xt(t,{boundary:l,rootBoundary:d,padding:m,altBoundary:u}),C=X(t.placement),M=kt(t.placement),x=!M,N=_n(C),k=$o(N),p=t.modifiersData.popperOffsets,_=t.rects.reference,y=t.rects.popper,w=typeof A=="function"?A(Object.assign({},t.rects,{placement:t.placement})):A,c=typeof w=="number"?{mainAxis:w,altAxis:w}:Object.assign({mainAxis:0,altAxis:0},w),v=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,E={x:0,y:0};if(p){if(o){var b,S=N==="y"?V:H,D=N==="y"?W:j,I=N==="y"?"height":"width",R=p[N],$=R+T[S],P=R-T[D],tt=f?-y[I]/2:0,Q=M===Et?_[I]:y[I],jt=M===Et?-y[I]:-_[I],ne=t.elements.arrow,wt=f&&ne?gn(ne):{width:0,height:0},at=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Xi(),Bt=at[S],ie=at[D],pt=Ut(0,_[I],wt[I]),Le=x?_[I]/2-tt-pt-Bt-c.mainAxis:Q-pt-Bt-c.mainAxis,Hs=x?-_[I]/2+tt+pt+ie+c.mainAxis:jt+pt+ie+c.mainAxis,Ie=t.elements.arrow&&Qt(t.elements.arrow),zs=Ie?N==="y"?Ie.clientTop||0:Ie.clientLeft||0:0,In=(b=v==null?void 0:v[N])!=null?b:0,Ws=R+Le-In-zs,js=R+Hs-In,$n=Ut(f?_e($,Ws):$,R,f?vt(P,js):P);p[N]=$n,E[N]=$n-R}if(a){var kn,Bs=N==="x"?V:H,Fs=N==="x"?W:j,mt=p[k],se=k==="y"?"height":"width",xn=mt+T[Bs],Mn=mt-T[Fs],$e=[V,H].indexOf(C)!==-1,Rn=(kn=v==null?void 0:v[k])!=null?kn:0,Pn=$e?xn:mt-_[se]-y[se]-Rn+c.altAxis,Vn=$e?mt+_[se]+y[se]-Rn-c.altAxis:Mn,Hn=f&&$e?co(Pn,mt,Vn):Ut(f?Pn:xn,mt,f?Vn:Mn);p[k]=Hn,E[k]=Hn-mt}t.modifiersData[i]=E}}const rs={name:"preventOverflow",enabled:!0,phase:"main",fn:ko,requiresIfExists:["offset"]};function xo(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function Mo(n){return n===B(n)||!K(n)?bn(n):xo(n)}function Ro(n){var t=n.getBoundingClientRect(),e=It(t.width)/n.offsetWidth||1,i=It(t.height)/n.offsetHeight||1;return e!==1||i!==1}function Po(n,t,e){e===void 0&&(e=!1);var i=K(t),s=K(t)&&Ro(t),o=dt(t),r=$t(n,s,e),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!e)&&((Z(t)!=="body"||An(o))&&(a=Mo(t)),K(t)?(l=$t(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):o&&(l.x=yn(o))),{x:r.left+a.scrollLeft-l.x,y:r.top+a.scrollTop-l.y,width:r.width,height:r.height}}function Vo(n){var t=new Map,e=new Set,i=[];n.forEach(function(o){t.set(o.name,o)});function s(o){e.add(o.name);var r=[].concat(o.requires||[],o.requiresIfExists||[]);r.forEach(function(a){if(!e.has(a)){var l=t.get(a);l&&s(l)}}),i.push(o)}return n.forEach(function(o){e.has(o.name)||s(o)}),i}function Ho(n){var t=Vo(n);return qi.reduce(function(e,i){return e.concat(t.filter(function(s){return s.phase===i}))},[])}function zo(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function Wo(n){var t=n.reduce(function(e,i){var s=e[i.name];return e[i.name]=s?Object.assign({},s,i,{options:Object.assign({},s.options,i.options),data:Object.assign({},s.data,i.data)}):i,e},{});return Object.keys(t).map(function(e){return t[e]})}var qn={placement:"bottom",modifiers:[],strategy:"absolute"};function Gn(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function Te(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,i=e===void 0?[]:e,s=t.defaultOptions,o=s===void 0?qn:s;return function(a,l,d){d===void 0&&(d=o);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},qn,o),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},m=[],g=!1,f={state:u,setOptions:function(C){var M=typeof C=="function"?C(u.options):C;A(),u.options=Object.assign({},o,u.options,M),u.scrollParents={reference:bt(a)?qt(a):a.contextElement?qt(a.contextElement):[],popper:qt(l)};var x=Ho(Wo([].concat(i,u.options.modifiers)));return u.orderedModifiers=x.filter(function(N){return N.enabled}),L(),f.update()},forceUpdate:function(){if(!g){var C=u.elements,M=C.reference,x=C.popper;if(Gn(M,x)){u.rects={reference:Po(M,Qt(x),u.options.strategy==="fixed"),popper:gn(x)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(c){return u.modifiersData[c.name]=Object.assign({},c.data)});for(var N=0;N<u.orderedModifiers.length;N++){if(u.reset===!0){u.reset=!1,N=-1;continue}var k=u.orderedModifiers[N],p=k.fn,_=k.options,y=_===void 0?{}:_,w=k.name;typeof p=="function"&&(u=p({state:u,options:y,name:w,instance:f})||u)}}}},update:zo(function(){return new Promise(function(T){f.forceUpdate(),T(u)})}),destroy:function(){A(),g=!0}};if(!Gn(a,l))return f;f.setOptions(d).then(function(T){!g&&d.onFirstUpdate&&d.onFirstUpdate(T)});function L(){u.orderedModifiers.forEach(function(T){var C=T.name,M=T.options,x=M===void 0?{}:M,N=T.effect;if(typeof N=="function"){var k=N({state:u,name:C,instance:f,options:x}),p=function(){};m.push(k||p)}})}function A(){m.forEach(function(T){return T()}),m=[]}return f}}var jo=Te(),Bo=[En,wn,vn,mn],Fo=Te({defaultModifiers:Bo}),Ko=[En,wn,vn,mn,os,is,rs,ts,ss],Tn=Te({defaultModifiers:Ko});const as=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Fi,afterRead:Wi,afterWrite:Ui,applyStyles:mn,arrow:ts,auto:Ae,basePlacements:Pt,beforeMain:ji,beforeRead:Hi,beforeWrite:Ki,bottom:W,clippingParents:Pi,computeStyles:vn,createPopper:Tn,createPopperBase:jo,createPopperLite:Fo,detectOverflow:xt,end:Lt,eventListeners:En,flip:is,hide:ss,left:H,main:Bi,modifierPhases:qi,offset:os,placements:fn,popper:Ot,popperGenerator:Te,popperOffsets:wn,preventOverflow:rs,read:zi,reference:Vi,right:j,start:Et,top:V,variationPlacements:on,viewport:hn,write:Yi},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const lt=new Map,ke={set(n,t,e){lt.has(n)||lt.set(n,new Map);const i=lt.get(n);if(!i.has(t)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(t,e)},get(n,t){return lt.has(n)&&lt.get(n).get(t)||null},remove(n,t){if(!lt.has(n))return;const e=lt.get(n);e.delete(t),e.size===0&&lt.delete(n)}},Yo=1e6,Uo=1e3,ln="transitionend",ls=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),n),qo=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),Go=n=>{do n+=Math.floor(Math.random()*Yo);while(document.getElementById(n));return n},Qo=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const i=Number.parseFloat(t),s=Number.parseFloat(e);return!i&&!s?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*Uo)},cs=n=>{n.dispatchEvent(new Event(ln))},et=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),ct=n=>et(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(ls(n)):null,Vt=n=>{if(!et(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const i=n.closest("summary");if(i&&i.parentNode!==e||i===null)return!1}return t},ut=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",us=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?us(n.parentNode):null},ve=()=>{},Xt=n=>{n.offsetHeight},ds=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,xe=[],Xo=n=>{document.readyState==="loading"?(xe.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of xe)t()}),xe.push(n)):n()},Y=()=>document.documentElement.dir==="rtl",q=n=>{Xo(()=>{const t=ds();if(t){const e=n.NAME,i=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=i,n.jQueryInterface)}})},z=(n,t=[],e=n)=>typeof n=="function"?n(...t):e,hs=(n,t,e=!0)=>{if(!e){z(n);return}const i=5,s=Qo(t)+i;let o=!1;const r=({target:a})=>{a===t&&(o=!0,t.removeEventListener(ln,r),z(n))};t.addEventListener(ln,r),setTimeout(()=>{o||cs(t)},s)},Cn=(n,t,e,i)=>{const s=n.length;let o=n.indexOf(t);return o===-1?!e&&i?n[s-1]:n[0]:(o+=e?1:-1,i&&(o=(o+s)%s),n[Math.max(0,Math.min(o,s-1))])},Jo=/[^.]*(?=\..*)\.|.*/,Zo=/\..*/,tr=/::\d+$/,Me={};let Qn=1;const fs={mouseenter:"mouseover",mouseleave:"mouseout"},er=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function ps(n,t){return t&&`${t}::${Qn++}`||n.uidEvent||Qn++}function ms(n){const t=ps(n);return n.uidEvent=t,Me[t]=Me[t]||{},Me[t]}function nr(n,t){return function e(i){return On(i,{delegateTarget:n}),e.oneOff&&h.off(n,i.type,t),t.apply(n,[i])}}function ir(n,t,e){return function i(s){const o=n.querySelectorAll(t);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return On(s,{delegateTarget:r}),i.oneOff&&h.off(n,s.type,t,e),e.apply(r,[s])}}function gs(n,t,e=null){return Object.values(n).find(i=>i.callable===t&&i.delegationSelector===e)}function _s(n,t,e){const i=typeof t=="string",s=i?e:t||e;let o=vs(n);return er.has(o)||(o=n),[i,s,o]}function Xn(n,t,e,i,s){if(typeof t!="string"||!n)return;let[o,r,a]=_s(t,e,i);t in fs&&(r=(L=>function(A){if(!A.relatedTarget||A.relatedTarget!==A.delegateTarget&&!A.delegateTarget.contains(A.relatedTarget))return L.call(this,A)})(r));const l=ms(n),d=l[a]||(l[a]={}),u=gs(d,r,o?e:null);if(u){u.oneOff=u.oneOff&&s;return}const m=ps(r,t.replace(Jo,"")),g=o?ir(n,e,r):nr(n,r);g.delegationSelector=o?e:null,g.callable=r,g.oneOff=s,g.uidEvent=m,d[m]=g,n.addEventListener(a,g,o)}function cn(n,t,e,i,s){const o=gs(t[e],i,s);o&&(n.removeEventListener(e,o,!!s),delete t[e][o.uidEvent])}function sr(n,t,e,i){const s=t[e]||{};for(const[o,r]of Object.entries(s))o.includes(i)&&cn(n,t,e,r.callable,r.delegationSelector)}function vs(n){return n=n.replace(Zo,""),fs[n]||n}const h={on(n,t,e,i){Xn(n,t,e,i,!1)},one(n,t,e,i){Xn(n,t,e,i,!0)},off(n,t,e,i){if(typeof t!="string"||!n)return;const[s,o,r]=_s(t,e,i),a=r!==t,l=ms(n),d=l[r]||{},u=t.startsWith(".");if(typeof o<"u"){if(!Object.keys(d).length)return;cn(n,l,r,o,s?e:null);return}if(u)for(const m of Object.keys(l))sr(n,l,m,t.slice(1));for(const[m,g]of Object.entries(d)){const f=m.replace(tr,"");(!a||t.includes(f))&&cn(n,l,r,g.callable,g.delegationSelector)}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const i=ds(),s=vs(t),o=t!==s;let r=null,a=!0,l=!0,d=!1;o&&i&&(r=i.Event(t,e),i(n).trigger(r),a=!r.isPropagationStopped(),l=!r.isImmediatePropagationStopped(),d=r.isDefaultPrevented());const u=On(new Event(t,{bubbles:a,cancelable:!0}),e);return d&&u.preventDefault(),l&&n.dispatchEvent(u),u.defaultPrevented&&r&&r.preventDefault(),u}};function On(n,t={}){for(const[e,i]of Object.entries(t))try{n[e]=i}catch{Object.defineProperty(n,e,{configurable:!0,get(){return i}})}return n}function Jn(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function Re(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const nt={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${Re(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${Re(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(i=>i.startsWith("bs")&&!i.startsWith("bsConfig"));for(const i of e){let s=i.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),t[s]=Jn(n.dataset[i])}return t},getDataAttribute(n,t){return Jn(n.getAttribute(`data-bs-${Re(t)}`))}};class Jt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=et(e)?nt.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof i=="object"?i:{},...et(e)?nt.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[i,s]of Object.entries(e)){const o=t[i],r=et(o)?"element":qo(o);if(!new RegExp(s).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${s}".`)}}}const or="5.3.2";class G extends Jt{constructor(t,e){super(),t=ct(t),t&&(this._element=t,this._config=this._getConfig(e),ke.set(this._element,this.constructor.DATA_KEY,this))}dispose(){ke.remove(this._element,this.constructor.DATA_KEY),h.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){hs(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return ke.get(ct(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return or}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Pe=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?ls(e.trim()):null}return t},O={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let i=n.parentNode.closest(t);for(;i;)e.push(i),i=i.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!ut(e)&&Vt(e))},getSelectorFromElement(n){const t=Pe(n);return t&&O.findOne(t)?t:null},getElementFromSelector(n){const t=Pe(n);return t?O.findOne(t):null},getMultipleElementsFromSelector(n){const t=Pe(n);return t?O.find(t):[]}},Ce=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,i=n.NAME;h.on(document,e,`[data-bs-dismiss="${i}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),ut(this))return;const o=O.getElementFromSelector(this)||this.closest(`.${i}`);n.getOrCreateInstance(o)[t]()})},rr="alert",ar="bs.alert",Es=`.${ar}`,lr=`close${Es}`,cr=`closed${Es}`,ur="fade",dr="show";class Oe extends G{static get NAME(){return rr}close(){if(h.trigger(this._element,lr).defaultPrevented)return;this._element.classList.remove(dr);const e=this._element.classList.contains(ur);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),h.trigger(this._element,cr),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=Oe.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Ce(Oe,"close");q(Oe);const hr="button",fr="bs.button",pr=`.${fr}`,mr=".data-api",gr="active",Zn='[data-bs-toggle="button"]',_r=`click${pr}${mr}`;class Ne extends G{static get NAME(){return hr}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(gr))}static jQueryInterface(t){return this.each(function(){const e=Ne.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}h.on(document,_r,Zn,n=>{n.preventDefault();const t=n.target.closest(Zn);Ne.getOrCreateInstance(t).toggle()});q(Ne);const vr="swipe",Ht=".bs.swipe",Er=`touchstart${Ht}`,br=`touchmove${Ht}`,yr=`touchend${Ht}`,Ar=`pointerdown${Ht}`,wr=`pointerup${Ht}`,Tr="touch",Cr="pen",Or="pointer-event",Nr=40,Sr={endCallback:null,leftCallback:null,rightCallback:null},Dr={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Ee extends Jt{constructor(t,e){super(),this._element=t,!(!t||!Ee.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Sr}static get DefaultType(){return Dr}static get NAME(){return vr}dispose(){h.off(this._element,Ht)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),z(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=Nr)return;const e=t/this._deltaX;this._deltaX=0,e&&z(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(h.on(this._element,Ar,t=>this._start(t)),h.on(this._element,wr,t=>this._end(t)),this._element.classList.add(Or)):(h.on(this._element,Er,t=>this._start(t)),h.on(this._element,br,t=>this._move(t)),h.on(this._element,yr,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Cr||t.pointerType===Tr)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Lr="carousel",Ir="bs.carousel",ht=`.${Ir}`,bs=".data-api",$r="ArrowLeft",kr="ArrowRight",xr=500,Kt="next",Tt="prev",Nt="left",me="right",Mr=`slide${ht}`,Ve=`slid${ht}`,Rr=`keydown${ht}`,Pr=`mouseenter${ht}`,Vr=`mouseleave${ht}`,Hr=`dragstart${ht}`,zr=`load${ht}${bs}`,Wr=`click${ht}${bs}`,ys="carousel",re="active",jr="slide",Br="carousel-item-end",Fr="carousel-item-start",Kr="carousel-item-next",Yr="carousel-item-prev",As=".active",ws=".carousel-item",Ur=As+ws,qr=".carousel-item img",Gr=".carousel-indicators",Qr="[data-bs-slide], [data-bs-slide-to]",Xr='[data-bs-ride="carousel"]',Jr={[$r]:me,[kr]:Nt},Zr={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},ta={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Zt extends G{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=O.findOne(Gr,this._element),this._addEventListeners(),this._config.ride===ys&&this.cycle()}static get Default(){return Zr}static get DefaultType(){return ta}static get NAME(){return Lr}next(){this._slide(Kt)}nextWhenVisible(){!document.hidden&&Vt(this._element)&&this.next()}prev(){this._slide(Tt)}pause(){this._isSliding&&cs(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){h.one(this._element,Ve,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){h.one(this._element,Ve,()=>this.to(t));return}const i=this._getItemIndex(this._getActive());if(i===t)return;const s=t>i?Kt:Tt;this._slide(s,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&h.on(this._element,Rr,t=>this._keydown(t)),this._config.pause==="hover"&&(h.on(this._element,Pr,()=>this.pause()),h.on(this._element,Vr,()=>this._maybeEnableCycle())),this._config.touch&&Ee.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const i of O.find(qr,this._element))h.on(i,Hr,s=>s.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(Nt)),rightCallback:()=>this._slide(this._directionToOrder(me)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),xr+this._config.interval))}};this._swipeHelper=new Ee(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Jr[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=O.findOne(As,this._indicatorsElement);e.classList.remove(re),e.removeAttribute("aria-current");const i=O.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(re),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),s=t===Kt,o=e||Cn(this._getItems(),i,s,this._config.wrap);if(o===i)return;const r=this._getItemIndex(o),a=f=>h.trigger(this._element,f,{relatedTarget:o,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:r});if(a(Mr).defaultPrevented||!i||!o)return;const d=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(r),this._activeElement=o;const u=s?Fr:Br,m=s?Kr:Yr;o.classList.add(m),Xt(o),i.classList.add(u),o.classList.add(u);const g=()=>{o.classList.remove(u,m),o.classList.add(re),i.classList.remove(re,m,u),this._isSliding=!1,a(Ve)};this._queueCallback(g,i,this._isAnimated()),d&&this.cycle()}_isAnimated(){return this._element.classList.contains(jr)}_getActive(){return O.findOne(Ur,this._element)}_getItems(){return O.find(ws,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return Y()?t===Nt?Tt:Kt:t===Nt?Kt:Tt}_orderToDirection(t){return Y()?t===Tt?Nt:me:t===Tt?me:Nt}static jQueryInterface(t){return this.each(function(){const e=Zt.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(document,Wr,Qr,function(n){const t=O.getElementFromSelector(this);if(!t||!t.classList.contains(ys))return;n.preventDefault();const e=Zt.getOrCreateInstance(t),i=this.getAttribute("data-bs-slide-to");if(i){e.to(i),e._maybeEnableCycle();return}if(nt.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});h.on(window,zr,()=>{const n=O.find(Xr);for(const t of n)Zt.getOrCreateInstance(t)});q(Zt);const ea="collapse",na="bs.collapse",te=`.${na}`,ia=".data-api",sa=`show${te}`,oa=`shown${te}`,ra=`hide${te}`,aa=`hidden${te}`,la=`click${te}${ia}`,He="show",Dt="collapse",ae="collapsing",ca="collapsed",ua=`:scope .${Dt} .${Dt}`,da="collapse-horizontal",ha="width",fa="height",pa=".collapse.show, .collapse.collapsing",un='[data-bs-toggle="collapse"]',ma={parent:null,toggle:!0},ga={parent:"(null|element)",toggle:"boolean"};class Gt extends G{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=O.find(un);for(const s of i){const o=O.getSelectorFromElement(s),r=O.find(o).filter(a=>a===this._element);o!==null&&r.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ma}static get DefaultType(){return ga}static get NAME(){return ea}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(pa).filter(a=>a!==this._element).map(a=>Gt.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||h.trigger(this._element,sa).defaultPrevented)return;for(const a of t)a.hide();const i=this._getDimension();this._element.classList.remove(Dt),this._element.classList.add(ae),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(ae),this._element.classList.add(Dt,He),this._element.style[i]="",h.trigger(this._element,oa)},r=`scroll${i[0].toUpperCase()+i.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[i]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown()||h.trigger(this._element,ra).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Xt(this._element),this._element.classList.add(ae),this._element.classList.remove(Dt,He);for(const s of this._triggerArray){const o=O.getElementFromSelector(s);o&&!this._isShown(o)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(ae),this._element.classList.add(Dt),h.trigger(this._element,aa)};this._element.style[e]="",this._queueCallback(i,this._element,!0)}_isShown(t=this._element){return t.classList.contains(He)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=ct(t.parent),t}_getDimension(){return this._element.classList.contains(da)?ha:fa}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(un);for(const e of t){const i=O.getElementFromSelector(e);i&&this._addAriaAndCollapsedClass([e],this._isShown(i))}}_getFirstLevelChildren(t){const e=O.find(ua,this._config.parent);return O.find(t,this._config.parent).filter(i=>!e.includes(i))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle(ca,!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const i=Gt.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof i[t]>"u")throw new TypeError(`No method named "${t}"`);i[t]()}})}}h.on(document,la,un,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const t of O.getMultipleElementsFromSelector(this))Gt.getOrCreateInstance(t,{toggle:!1}).toggle()});q(Gt);const ti="dropdown",_a="bs.dropdown",yt=`.${_a}`,Nn=".data-api",va="Escape",ei="Tab",Ea="ArrowUp",ni="ArrowDown",ba=2,ya=`hide${yt}`,Aa=`hidden${yt}`,wa=`show${yt}`,Ta=`shown${yt}`,Ts=`click${yt}${Nn}`,Cs=`keydown${yt}${Nn}`,Ca=`keyup${yt}${Nn}`,St="show",Oa="dropup",Na="dropend",Sa="dropstart",Da="dropup-center",La="dropdown-center",gt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ia=`${gt}.${St}`,ge=".dropdown-menu",$a=".navbar",ka=".navbar-nav",xa=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ma=Y()?"top-end":"top-start",Ra=Y()?"top-start":"top-end",Pa=Y()?"bottom-end":"bottom-start",Va=Y()?"bottom-start":"bottom-end",Ha=Y()?"left-start":"right-start",za=Y()?"right-start":"left-start",Wa="top",ja="bottom",Ba={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Fa={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class J extends G{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=O.next(this._element,ge)[0]||O.prev(this._element,ge)[0]||O.findOne(ge,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Ba}static get DefaultType(){return Fa}static get NAME(){return ti}toggle(){return this._isShown()?this.hide():this.show()}show(){if(ut(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!h.trigger(this._element,wa,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(ka))for(const i of[].concat(...document.body.children))h.on(i,"mouseover",ve);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(St),this._element.classList.add(St),h.trigger(this._element,Ta,t)}}hide(){if(ut(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!h.trigger(this._element,ya,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))h.off(i,"mouseover",ve);this._popper&&this._popper.destroy(),this._menu.classList.remove(St),this._element.classList.remove(St),this._element.setAttribute("aria-expanded","false"),nt.removeDataAttribute(this._menu,"popper"),h.trigger(this._element,Aa,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!et(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${ti.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof as>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:et(this._config.reference)?t=ct(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=Tn(t,this._menu,e)}_isShown(){return this._menu.classList.contains(St)}_getPlacement(){const t=this._parent;if(t.classList.contains(Na))return Ha;if(t.classList.contains(Sa))return za;if(t.classList.contains(Da))return Wa;if(t.classList.contains(La))return ja;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(Oa)?e?Ra:Ma:e?Va:Pa}_detectNavbar(){return this._element.closest($a)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(nt.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...z(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const i=O.find(xa,this._menu).filter(s=>Vt(s));i.length&&Cn(i,e,t===ni,!i.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=J.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===ba||t.type==="keyup"&&t.key!==ei)return;const e=O.find(Ia);for(const i of e){const s=J.getInstance(i);if(!s||s._config.autoClose===!1)continue;const o=t.composedPath(),r=o.includes(s._menu);if(o.includes(s._element)||s._config.autoClose==="inside"&&!r||s._config.autoClose==="outside"&&r||s._menu.contains(t.target)&&(t.type==="keyup"&&t.key===ei||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:s._element};t.type==="click"&&(a.clickEvent=t),s._completeHide(a)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i=t.key===va,s=[Ea,ni].includes(t.key);if(!s&&!i||e&&!i)return;t.preventDefault();const o=this.matches(gt)?this:O.prev(this,gt)[0]||O.next(this,gt)[0]||O.findOne(gt,t.delegateTarget.parentNode),r=J.getOrCreateInstance(o);if(s){t.stopPropagation(),r.show(),r._selectMenuItem(t);return}r._isShown()&&(t.stopPropagation(),r.hide(),o.focus())}}h.on(document,Cs,gt,J.dataApiKeydownHandler);h.on(document,Cs,ge,J.dataApiKeydownHandler);h.on(document,Ts,J.clearMenus);h.on(document,Ca,J.clearMenus);h.on(document,Ts,gt,function(n){n.preventDefault(),J.getOrCreateInstance(this).toggle()});q(J);const Os="backdrop",Ka="fade",ii="show",si=`mousedown.bs.${Os}`,Ya={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Ua={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ns extends Jt{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Ya}static get DefaultType(){return Ua}static get NAME(){return Os}show(t){if(!this._config.isVisible){z(t);return}this._append();const e=this._getElement();this._config.isAnimated&&Xt(e),e.classList.add(ii),this._emulateAnimation(()=>{z(t)})}hide(t){if(!this._config.isVisible){z(t);return}this._getElement().classList.remove(ii),this._emulateAnimation(()=>{this.dispose(),z(t)})}dispose(){this._isAppended&&(h.off(this._element,si),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Ka),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=ct(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),h.on(t,si,()=>{z(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){hs(t,this._getElement(),this._config.isAnimated)}}const qa="focustrap",Ga="bs.focustrap",be=`.${Ga}`,Qa=`focusin${be}`,Xa=`keydown.tab${be}`,Ja="Tab",Za="forward",oi="backward",tl={autofocus:!0,trapElement:null},el={autofocus:"boolean",trapElement:"element"};class Ss extends Jt{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return tl}static get DefaultType(){return el}static get NAME(){return qa}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),h.off(document,be),h.on(document,Qa,t=>this._handleFocusin(t)),h.on(document,Xa,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,h.off(document,be))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=O.focusableChildren(e);i.length===0?e.focus():this._lastTabNavDirection===oi?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){t.key===Ja&&(this._lastTabNavDirection=t.shiftKey?oi:Za)}}const ri=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ai=".sticky-top",le="padding-right",li="margin-right";class dn{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,le,e=>e+t),this._setElementAttributes(ri,le,e=>e+t),this._setElementAttributes(ai,li,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,le),this._resetElementAttributes(ri,le),this._resetElementAttributes(ai,li)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth(),o=r=>{if(r!==this._element&&window.innerWidth>r.clientWidth+s)return;this._saveInitialAttribute(r,e);const a=window.getComputedStyle(r).getPropertyValue(e);r.style.setProperty(e,`${i(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,o)}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&nt.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){const i=s=>{const o=nt.getDataAttribute(s,e);if(o===null){s.style.removeProperty(e);return}nt.removeDataAttribute(s,e),s.style.setProperty(e,o)};this._applyManipulationCallback(t,i)}_applyManipulationCallback(t,e){if(et(t)){e(t);return}for(const i of O.find(t,this._element))e(i)}}const nl="modal",il="bs.modal",U=`.${il}`,sl=".data-api",ol="Escape",rl=`hide${U}`,al=`hidePrevented${U}`,Ds=`hidden${U}`,Ls=`show${U}`,ll=`shown${U}`,cl=`resize${U}`,ul=`click.dismiss${U}`,dl=`mousedown.dismiss${U}`,hl=`keydown.dismiss${U}`,fl=`click${U}${sl}`,ci="modal-open",pl="fade",ui="show",ze="modal-static",ml=".modal.show",gl=".modal-dialog",_l=".modal-body",vl='[data-bs-toggle="modal"]',El={backdrop:!0,focus:!0,keyboard:!0},bl={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Mt extends G{constructor(t,e){super(t,e),this._dialog=O.findOne(gl,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new dn,this._addEventListeners()}static get Default(){return El}static get DefaultType(){return bl}static get NAME(){return nl}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||h.trigger(this._element,Ls,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ci),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||h.trigger(this._element,rl).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ui),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){h.off(window,U),h.off(this._dialog,U),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ns({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ss({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=O.findOne(_l,this._dialog);e&&(e.scrollTop=0),Xt(this._element),this._element.classList.add(ui);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,h.trigger(this._element,ll,{relatedTarget:t})};this._queueCallback(i,this._dialog,this._isAnimated())}_addEventListeners(){h.on(this._element,hl,t=>{if(t.key===ol){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),h.on(window,cl,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),h.on(this._element,dl,t=>{h.one(this._element,ul,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(ci),this._resetAdjustments(),this._scrollBar.reset(),h.trigger(this._element,Ds)})}_isAnimated(){return this._element.classList.contains(pl)}_triggerBackdropTransition(){if(h.trigger(this._element,al).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,i=this._element.style.overflowY;i==="hidden"||this._element.classList.contains(ze)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(ze),this._queueCallback(()=>{this._element.classList.remove(ze),this._queueCallback(()=>{this._element.style.overflowY=i},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const s=Y()?"paddingLeft":"paddingRight";this._element.style[s]=`${e}px`}if(!i&&t){const s=Y()?"paddingRight":"paddingLeft";this._element.style[s]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const i=Mt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof i[t]>"u")throw new TypeError(`No method named "${t}"`);i[t](e)}})}}h.on(document,fl,vl,function(n){const t=O.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),h.one(t,Ls,s=>{s.defaultPrevented||h.one(t,Ds,()=>{Vt(this)&&this.focus()})});const e=O.findOne(ml);e&&Mt.getInstance(e).hide(),Mt.getOrCreateInstance(t).toggle(this)});Ce(Mt);q(Mt);const yl="offcanvas",Al="bs.offcanvas",ot=`.${Al}`,Is=".data-api",wl=`load${ot}${Is}`,Tl="Escape",di="show",hi="showing",fi="hiding",Cl="offcanvas-backdrop",$s=".offcanvas.show",Ol=`show${ot}`,Nl=`shown${ot}`,Sl=`hide${ot}`,pi=`hidePrevented${ot}`,ks=`hidden${ot}`,Dl=`resize${ot}`,Ll=`click${ot}${Is}`,Il=`keydown.dismiss${ot}`,$l='[data-bs-toggle="offcanvas"]',kl={backdrop:!0,keyboard:!0,scroll:!1},xl={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class st extends G{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return kl}static get DefaultType(){return xl}static get NAME(){return yl}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||h.trigger(this._element,Ol,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new dn().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(hi);const i=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(di),this._element.classList.remove(hi),h.trigger(this._element,Nl,{relatedTarget:t})};this._queueCallback(i,this._element,!0)}hide(){if(!this._isShown||h.trigger(this._element,Sl).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(fi),this._backdrop.hide();const e=()=>{this._element.classList.remove(di,fi),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new dn().reset(),h.trigger(this._element,ks)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){h.trigger(this._element,pi);return}this.hide()},e=!!this._config.backdrop;return new Ns({className:Cl,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new Ss({trapElement:this._element})}_addEventListeners(){h.on(this._element,Il,t=>{if(t.key===Tl){if(this._config.keyboard){this.hide();return}h.trigger(this._element,pi)}})}static jQueryInterface(t){return this.each(function(){const e=st.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}h.on(document,Ll,$l,function(n){const t=O.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),ut(this))return;h.one(t,ks,()=>{Vt(this)&&this.focus()});const e=O.findOne($s);e&&e!==t&&st.getInstance(e).hide(),st.getOrCreateInstance(t).toggle(this)});h.on(window,wl,()=>{for(const n of O.find($s))st.getOrCreateInstance(n).show()});h.on(window,Dl,()=>{for(const n of O.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&st.getOrCreateInstance(n).hide()});Ce(st);q(st);const Ml=/^aria-[\w-]*$/i,xs={"*":["class","dir","id","lang","role",Ml],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Rl=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Pl=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Vl=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?Rl.has(e)?!!Pl.test(n.nodeValue):!0:t.filter(i=>i instanceof RegExp).some(i=>i.test(e))};function Hl(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const s=new window.DOMParser().parseFromString(n,"text/html"),o=[].concat(...s.body.querySelectorAll("*"));for(const r of o){const a=r.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){r.remove();continue}const l=[].concat(...r.attributes),d=[].concat(t["*"]||[],t[a]||[]);for(const u of l)Vl(u,d)||r.removeAttribute(u.nodeName)}return s.body.innerHTML}const zl="TemplateFactory",Wl={allowList:xs,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},jl={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Bl={entry:"(string|element|function|null)",selector:"(string|element)"};class Fl extends Jt{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Wl}static get DefaultType(){return jl}static get NAME(){return zl}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[s,o]of Object.entries(this._config.content))this._setContent(t,o,s);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Bl)}_setContent(t,e,i){const s=O.findOne(i,t);if(s){if(e=this._resolvePossibleFunction(e),!e){s.remove();return}if(et(e)){this._putElementInTemplate(ct(e),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(e);return}s.textContent=e}}_maybeSanitize(t){return this._config.sanitize?Hl(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return z(t,[this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const Kl="tooltip",Yl=new Set(["sanitize","allowList","sanitizeFn"]),We="fade",Ul="modal",ce="show",ql=".tooltip-inner",mi=`.${Ul}`,gi="hide.bs.modal",Yt="hover",je="focus",Gl="click",Ql="manual",Xl="hide",Jl="hidden",Zl="show",tc="shown",ec="inserted",nc="click",ic="focusin",sc="focusout",oc="mouseenter",rc="mouseleave",ac={AUTO:"auto",TOP:"top",RIGHT:Y()?"left":"right",BOTTOM:"bottom",LEFT:Y()?"right":"left"},lc={allowList:xs,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},cc={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class zt extends G{constructor(t,e){if(typeof as>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return lc}static get DefaultType(){return cc}static get NAME(){return Kl}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),h.off(this._element.closest(mi),gi,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=h.trigger(this._element,this.constructor.eventName(Zl)),i=(us(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!i)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:o}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(o.append(s),h.trigger(this._element,this.constructor.eventName(ec))),this._popper=this._createPopper(s),s.classList.add(ce),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))h.on(a,"mouseover",ve);const r=()=>{h.trigger(this._element,this.constructor.eventName(tc)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(r,this.tip,this._isAnimated())}hide(){if(!this._isShown()||h.trigger(this._element,this.constructor.eventName(Xl)).defaultPrevented)return;if(this._getTipElement().classList.remove(ce),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))h.off(s,"mouseover",ve);this._activeTrigger[Gl]=!1,this._activeTrigger[je]=!1,this._activeTrigger[Yt]=!1,this._isHovered=null;const i=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),h.trigger(this._element,this.constructor.eventName(Jl)))};this._queueCallback(i,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(We,ce),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=Go(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(We),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Fl({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[ql]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(We)}_isShown(){return this.tip&&this.tip.classList.contains(ce)}_createPopper(t){const e=z(this._config.placement,[this,t,this._element]),i=ac[e.toUpperCase()];return Tn(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return z(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:i=>{this._getTipElement().setAttribute("data-popper-placement",i.state.placement)}}]};return{...e,...z(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")h.on(this._element,this.constructor.eventName(nc),this._config.selector,i=>{this._initializeOnDelegatedTarget(i).toggle()});else if(e!==Ql){const i=e===Yt?this.constructor.eventName(oc):this.constructor.eventName(ic),s=e===Yt?this.constructor.eventName(rc):this.constructor.eventName(sc);h.on(this._element,i,this._config.selector,o=>{const r=this._initializeOnDelegatedTarget(o);r._activeTrigger[o.type==="focusin"?je:Yt]=!0,r._enter()}),h.on(this._element,s,this._config.selector,o=>{const r=this._initializeOnDelegatedTarget(o);r._activeTrigger[o.type==="focusout"?je:Yt]=r._element.contains(o.relatedTarget),r._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},h.on(this._element.closest(mi),gi,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=nt.getDataAttributes(this._element);for(const i of Object.keys(e))Yl.has(i)&&delete e[i];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:ct(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=zt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}q(zt);const uc="popover",dc=".popover-header",hc=".popover-body",fc={...zt.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},pc={...zt.DefaultType,content:"(null|string|element|function)"};class Sn extends zt{static get Default(){return fc}static get DefaultType(){return pc}static get NAME(){return uc}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[dc]:this._getTitle(),[hc]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=Sn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}q(Sn);const mc="scrollspy",gc="bs.scrollspy",Dn=`.${gc}`,_c=".data-api",vc=`activate${Dn}`,_i=`click${Dn}`,Ec=`load${Dn}${_c}`,bc="dropdown-item",Ct="active",yc='[data-bs-spy="scroll"]',Be="[href]",Ac=".nav, .list-group",vi=".nav-link",wc=".nav-item",Tc=".list-group-item",Cc=`${vi}, ${wc} > ${vi}, ${Tc}`,Oc=".dropdown",Nc=".dropdown-toggle",Sc={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Dc={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Se extends G{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Sc}static get DefaultType(){return Dc}static get NAME(){return mc}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=ct(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(h.off(this._config.target,_i),h.on(this._config.target,_i,Be,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,s=e.offsetTop-this._element.offsetTop;if(i.scrollTo){i.scrollTo({top:s,behavior:"smooth"});return}i.scrollTop=s}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=r=>this._targetLinks.get(`#${r.target.id}`),i=r=>{this._previousScrollData.visibleEntryTop=r.target.offsetTop,this._process(e(r))},s=(this._rootElement||document.documentElement).scrollTop,o=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const r of t){if(!r.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(r));continue}const a=r.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(o&&a){if(i(r),!s)return;continue}!o&&!a&&i(r)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=O.find(Be,this._config.target);for(const e of t){if(!e.hash||ut(e))continue;const i=O.findOne(decodeURI(e.hash),this._element);Vt(i)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,i))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Ct),this._activateParents(t),h.trigger(this._element,vc,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(bc)){O.findOne(Nc,t.closest(Oc)).classList.add(Ct);return}for(const e of O.parents(t,Ac))for(const i of O.prev(e,Cc))i.classList.add(Ct)}_clearActiveClass(t){t.classList.remove(Ct);const e=O.find(`${Be}.${Ct}`,t);for(const i of e)i.classList.remove(Ct)}static jQueryInterface(t){return this.each(function(){const e=Se.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(window,Ec,()=>{for(const n of O.find(yc))Se.getOrCreateInstance(n)});q(Se);const Lc="tab",Ic="bs.tab",At=`.${Ic}`,$c=`hide${At}`,kc=`hidden${At}`,xc=`show${At}`,Mc=`shown${At}`,Rc=`click${At}`,Pc=`keydown${At}`,Vc=`load${At}`,Hc="ArrowLeft",Ei="ArrowRight",zc="ArrowUp",bi="ArrowDown",Fe="Home",yi="End",_t="active",Ai="fade",Ke="show",Wc="dropdown",Ms=".dropdown-toggle",jc=".dropdown-menu",Ye=`:not(${Ms})`,Bc='.list-group, .nav, [role="tablist"]',Fc=".nav-item, .list-group-item",Kc=`.nav-link${Ye}, .list-group-item${Ye}, [role="tab"]${Ye}`,Rs='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ue=`${Kc}, ${Rs}`,Yc=`.${_t}[data-bs-toggle="tab"], .${_t}[data-bs-toggle="pill"], .${_t}[data-bs-toggle="list"]`;class Rt extends G{constructor(t){super(t),this._parent=this._element.closest(Bc),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),h.on(this._element,Pc,e=>this._keydown(e)))}static get NAME(){return Lc}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?h.trigger(e,$c,{relatedTarget:t}):null;h.trigger(t,xc,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(_t),this._activate(O.getElementFromSelector(t));const i=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(Ke);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),h.trigger(t,Mc,{relatedTarget:e})};this._queueCallback(i,t,t.classList.contains(Ai))}_deactivate(t,e){if(!t)return;t.classList.remove(_t),t.blur(),this._deactivate(O.getElementFromSelector(t));const i=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(Ke);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),h.trigger(t,kc,{relatedTarget:e})};this._queueCallback(i,t,t.classList.contains(Ai))}_keydown(t){if(![Hc,Ei,zc,bi,Fe,yi].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(s=>!ut(s));let i;if([Fe,yi].includes(t.key))i=e[t.key===Fe?0:e.length-1];else{const s=[Ei,bi].includes(t.key);i=Cn(e,t.target,s,!0)}i&&(i.focus({preventScroll:!0}),Rt.getOrCreateInstance(i).show())}_getChildren(){return O.find(Ue,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const i of e)this._setInitialAttributesOnChild(i)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=O.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains(Wc))return;const s=(o,r)=>{const a=O.findOne(o,i);a&&a.classList.toggle(r,e)};s(Ms,_t),s(jc,Ke),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(_t)}_getInnerElement(t){return t.matches(Ue)?t:O.findOne(Ue,t)}_getOuterElement(t){return t.closest(Fc)||t}static jQueryInterface(t){return this.each(function(){const e=Rt.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(document,Rc,Rs,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!ut(this)&&Rt.getOrCreateInstance(this).show()});h.on(window,Vc,()=>{for(const n of O.find(Yc))Rt.getOrCreateInstance(n)});q(Rt);const Uc="toast",qc="bs.toast",ft=`.${qc}`,Gc=`mouseover${ft}`,Qc=`mouseout${ft}`,Xc=`focusin${ft}`,Jc=`focusout${ft}`,Zc=`hide${ft}`,tu=`hidden${ft}`,eu=`show${ft}`,nu=`shown${ft}`,iu="fade",wi="hide",ue="show",de="showing",su={animation:"boolean",autohide:"boolean",delay:"number"},ou={animation:!0,autohide:!0,delay:5e3};class De extends G{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ou}static get DefaultType(){return su}static get NAME(){return Uc}show(){if(h.trigger(this._element,eu).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(iu);const e=()=>{this._element.classList.remove(de),h.trigger(this._element,nu),this._maybeScheduleHide()};this._element.classList.remove(wi),Xt(this._element),this._element.classList.add(ue,de),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||h.trigger(this._element,Zc).defaultPrevented)return;const e=()=>{this._element.classList.add(wi),this._element.classList.remove(de,ue),h.trigger(this._element,tu)};this._element.classList.add(de),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ue),super.dispose()}isShown(){return this._element.classList.contains(ue)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){h.on(this._element,Gc,t=>this._onInteraction(t,!0)),h.on(this._element,Qc,t=>this._onInteraction(t,!1)),h.on(this._element,Xc,t=>this._onInteraction(t,!0)),h.on(this._element,Jc,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=De.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Ce(De);q(De);const Ti={"/":{page:"pages/home.html",title:"Home",bodyClass:"page-home",init:async()=>{const{init:n}=await Ft(()=>import("./home-3e9fb586.js"),["./home-3e9fb586.js","./three-7e024fe7.js"],import.meta.url);n()}},"/physicalizing-emotions":{page:"pages/physicalizing.html",title:"Physicalizing Emotions",bodyClass:"page-physicalizing",init:async()=>{const{init:n}=await Ft(()=>import("./physicalizing-9a581050.js"),["./physicalizing-9a581050.js","./swiper-8a58e51f.js","../css/swiper-9523ba4e.css","../css/physicalizing-10297c69.css"],import.meta.url);n()}},"/visualization":{page:"pages/visualization.html",title:"Visualization",bodyClass:"page-visualization",init:async()=>{const{init:n}=await Ft(()=>import("./visualization-8655d2f8.js"),[],import.meta.url);n()}},"/visualization/periods":{page:"pages/periods.html",title:"Visualization - Periods",bodyClass:"page-periods",init:async()=>{const{init:n}=await Ft(()=>import("./periods-725708aa.js"),[],import.meta.url);n()}},"/about":{page:"pages/about.html",title:"About",bodyClass:"page-about"},"/epilogue":{page:"pages/epilogue.html",title:"Epilogue",bodyClass:"page-epilogue",init:async()=>{const{init:n}=await Ft(()=>import("./epilogue-9cd66cb2.js"),["./epilogue-9cd66cb2.js","./swiper-8a58e51f.js","../css/swiper-9523ba4e.css"],import.meta.url);n()}}};let ye=!1;const qe=async()=>{const n=window.location.pathname,t=Ti[n]||Ti["/"];document.title=t.title,so(t.bodyClass),await io(t.page),typeof t.init=="function"&&await t.init(),t.page&&t.page.includes("visualization")&&ye&&(ye=!1,typeof Wn=="function"&&setTimeout(()=>Wn(),0)),await Ri("#header",n==="/visualization/periods"?"componets/header-interior.html":"componets/header.html");const i=document.getElementById("offcanvasDarkNavbar");if(i){const s=st.getInstance(i);s&&s.hide()}document.body.classList.remove("overflow-hidden"),document.body.removeAttribute("style")};function ru(){if(!document.querySelector("[data-router-view]")){console.error("Router view not found");return}document.addEventListener("click",t=>{const e=t.target.closest("a[data-link]");if(!e)return;e.classList&&e.classList.contains("link-back")&&(ye=!0);const i=new URL(e.href);i.origin===window.location.origin&&(t.preventDefault(),history.pushState(null,"",i.pathname),qe())}),document.addEventListener("click",t=>{t.target.closest(".link-back")&&(ye=!0)}),window.addEventListener("popstate",qe),qe()}var F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},au={exports:{}},Ge={exports:{}},Qe={exports:{}};/*!
  * Bootstrap data.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ci;function lu(){return Ci||(Ci=1,function(n,t){(function(e,i){n.exports=i()})(F,function(){const e=new Map;return{set(s,o,r){e.has(s)||e.set(s,new Map);const a=e.get(s);if(!a.has(o)&&a.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(a.keys())[0]}.`);return}a.set(o,r)},get(s,o){return e.has(s)&&e.get(s).get(o)||null},remove(s,o){if(!e.has(s))return;const r=e.get(s);r.delete(o),r.size===0&&e.delete(s)}}})}(Qe)),Qe.exports}var Xe={exports:{}},he={exports:{}};/*!
  * Bootstrap index.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Oi;function rt(){return Oi||(Oi=1,function(n,t){(function(e,i){i(t)})(F,function(e){const o="transitionend",r=c=>(c&&window.CSS&&window.CSS.escape&&(c=c.replace(/#([^\s"#']+)/g,(v,E)=>`#${CSS.escape(E)}`)),c),a=c=>c==null?`${c}`:Object.prototype.toString.call(c).match(/\s([a-z]+)/i)[1].toLowerCase(),l=c=>{do c+=Math.floor(Math.random()*1e6);while(document.getElementById(c));return c},d=c=>{if(!c)return 0;let{transitionDuration:v,transitionDelay:E}=window.getComputedStyle(c);const b=Number.parseFloat(v),S=Number.parseFloat(E);return!b&&!S?0:(v=v.split(",")[0],E=E.split(",")[0],(Number.parseFloat(v)+Number.parseFloat(E))*1e3)},u=c=>{c.dispatchEvent(new Event(o))},m=c=>!c||typeof c!="object"?!1:(typeof c.jquery<"u"&&(c=c[0]),typeof c.nodeType<"u"),g=c=>m(c)?c.jquery?c[0]:c:typeof c=="string"&&c.length>0?document.querySelector(r(c)):null,f=c=>{if(!m(c)||c.getClientRects().length===0)return!1;const v=getComputedStyle(c).getPropertyValue("visibility")==="visible",E=c.closest("details:not([open])");if(!E)return v;if(E!==c){const b=c.closest("summary");if(b&&b.parentNode!==E||b===null)return!1}return v},L=c=>!c||c.nodeType!==Node.ELEMENT_NODE||c.classList.contains("disabled")?!0:typeof c.disabled<"u"?c.disabled:c.hasAttribute("disabled")&&c.getAttribute("disabled")!=="false",A=c=>{if(!document.documentElement.attachShadow)return null;if(typeof c.getRootNode=="function"){const v=c.getRootNode();return v instanceof ShadowRoot?v:null}return c instanceof ShadowRoot?c:c.parentNode?A(c.parentNode):null},T=()=>{},C=c=>{c.offsetHeight},M=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,x=[],N=c=>{document.readyState==="loading"?(x.length||document.addEventListener("DOMContentLoaded",()=>{for(const v of x)v()}),x.push(c)):c()},k=()=>document.documentElement.dir==="rtl",p=c=>{N(()=>{const v=M();if(v){const E=c.NAME,b=v.fn[E];v.fn[E]=c.jQueryInterface,v.fn[E].Constructor=c,v.fn[E].noConflict=()=>(v.fn[E]=b,c.jQueryInterface)}})},_=(c,v=[],E=c)=>typeof c=="function"?c(...v):E,y=(c,v,E=!0)=>{if(!E){_(c);return}const b=5,S=d(v)+b;let D=!1;const I=({target:R})=>{R===v&&(D=!0,v.removeEventListener(o,I),_(c))};v.addEventListener(o,I),setTimeout(()=>{D||u(v)},S)},w=(c,v,E,b)=>{const S=c.length;let D=c.indexOf(v);return D===-1?!E&&b?c[S-1]:c[0]:(D+=E?1:-1,b&&(D=(D+S)%S),c[Math.max(0,Math.min(D,S-1))])};e.defineJQueryPlugin=p,e.execute=_,e.executeAfterTransition=y,e.findShadowRoot=A,e.getElement=g,e.getNextActiveElement=w,e.getTransitionDurationFromElement=d,e.getUID=l,e.getjQuery=M,e.isDisabled=L,e.isElement=m,e.isRTL=k,e.isVisible=f,e.noop=T,e.onDOMContentLoaded=N,e.parseSelector=r,e.reflow=C,e.toType=a,e.triggerTransitionEnd=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})}(he,he.exports)),he.exports}/*!
  * Bootstrap event-handler.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ni;function Wt(){return Ni||(Ni=1,function(n,t){(function(e,i){n.exports=i(rt())})(F,function(e){const i=/[^.]*(?=\..*)\.|.*/,s=/\..*/,o=/::\d+$/,r={};let a=1;const l={mouseenter:"mouseover",mouseleave:"mouseout"},d=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function u(p,_){return _&&`${_}::${a++}`||p.uidEvent||a++}function m(p){const _=u(p);return p.uidEvent=_,r[_]=r[_]||{},r[_]}function g(p,_){return function y(w){return k(w,{delegateTarget:p}),y.oneOff&&N.off(p,w.type,_),_.apply(p,[w])}}function f(p,_,y){return function w(c){const v=p.querySelectorAll(_);for(let{target:E}=c;E&&E!==this;E=E.parentNode)for(const b of v)if(b===E)return k(c,{delegateTarget:E}),w.oneOff&&N.off(p,c.type,_,y),y.apply(E,[c])}}function L(p,_,y=null){return Object.values(p).find(w=>w.callable===_&&w.delegationSelector===y)}function A(p,_,y){const w=typeof _=="string",c=w?y:_||y;let v=x(p);return d.has(v)||(v=p),[w,c,v]}function T(p,_,y,w,c){if(typeof _!="string"||!p)return;let[v,E,b]=A(_,y,w);_ in l&&(E=(tt=>function(Q){if(!Q.relatedTarget||Q.relatedTarget!==Q.delegateTarget&&!Q.delegateTarget.contains(Q.relatedTarget))return tt.call(this,Q)})(E));const S=m(p),D=S[b]||(S[b]={}),I=L(D,E,v?y:null);if(I){I.oneOff=I.oneOff&&c;return}const R=u(E,_.replace(i,"")),$=v?f(p,y,E):g(p,E);$.delegationSelector=v?y:null,$.callable=E,$.oneOff=c,$.uidEvent=R,D[R]=$,p.addEventListener(b,$,v)}function C(p,_,y,w,c){const v=L(_[y],w,c);v&&(p.removeEventListener(y,v,!!c),delete _[y][v.uidEvent])}function M(p,_,y,w){const c=_[y]||{};for(const[v,E]of Object.entries(c))v.includes(w)&&C(p,_,y,E.callable,E.delegationSelector)}function x(p){return p=p.replace(s,""),l[p]||p}const N={on(p,_,y,w){T(p,_,y,w,!1)},one(p,_,y,w){T(p,_,y,w,!0)},off(p,_,y,w){if(typeof _!="string"||!p)return;const[c,v,E]=A(_,y,w),b=E!==_,S=m(p),D=S[E]||{},I=_.startsWith(".");if(typeof v<"u"){if(!Object.keys(D).length)return;C(p,S,E,v,c?y:null);return}if(I)for(const R of Object.keys(S))M(p,S,R,_.slice(1));for(const[R,$]of Object.entries(D)){const P=R.replace(o,"");(!b||_.includes(P))&&C(p,S,E,$.callable,$.delegationSelector)}},trigger(p,_,y){if(typeof _!="string"||!p)return null;const w=e.getjQuery(),c=x(_),v=_!==c;let E=null,b=!0,S=!0,D=!1;v&&w&&(E=w.Event(_,y),w(p).trigger(E),b=!E.isPropagationStopped(),S=!E.isImmediatePropagationStopped(),D=E.isDefaultPrevented());const I=k(new Event(_,{bubbles:b,cancelable:!0}),y);return D&&I.preventDefault(),S&&p.dispatchEvent(I),I.defaultPrevented&&E&&E.preventDefault(),I}};function k(p,_={}){for(const[y,w]of Object.entries(_))try{p[y]=w}catch{Object.defineProperty(p,y,{configurable:!0,get(){return w}})}return p}return N})}(Xe)),Xe.exports}var Je={exports:{}},Ze={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Si;function Ps(){return Si||(Si=1,function(n,t){(function(e,i){n.exports=i()})(F,function(){function e(o){if(o==="true")return!0;if(o==="false")return!1;if(o===Number(o).toString())return Number(o);if(o===""||o==="null")return null;if(typeof o!="string")return o;try{return JSON.parse(decodeURIComponent(o))}catch{return o}}function i(o){return o.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}return{setDataAttribute(o,r,a){o.setAttribute(`data-bs-${i(r)}`,a)},removeDataAttribute(o,r){o.removeAttribute(`data-bs-${i(r)}`)},getDataAttributes(o){if(!o)return{};const r={},a=Object.keys(o.dataset).filter(l=>l.startsWith("bs")&&!l.startsWith("bsConfig"));for(const l of a){let d=l.replace(/^bs/,"");d=d.charAt(0).toLowerCase()+d.slice(1,d.length),r[d]=e(o.dataset[l])}return r},getDataAttribute(o,r){return e(o.getAttribute(`data-bs-${i(r)}`))}}})}(Ze)),Ze.exports}/*!
  * Bootstrap config.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Di;function Ln(){return Di||(Di=1,function(n,t){(function(e,i){n.exports=i(Ps(),rt())})(F,function(e,i){class s{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(r){return r=this._mergeConfigObj(r),r=this._configAfterMerge(r),this._typeCheckConfig(r),r}_configAfterMerge(r){return r}_mergeConfigObj(r,a){const l=i.isElement(a)?e.getDataAttribute(a,"config"):{};return{...this.constructor.Default,...typeof l=="object"?l:{},...i.isElement(a)?e.getDataAttributes(a):{},...typeof r=="object"?r:{}}}_typeCheckConfig(r,a=this.constructor.DefaultType){for(const[l,d]of Object.entries(a)){const u=r[l],m=i.isElement(u)?"element":i.toType(u);if(!new RegExp(d).test(m))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${l}" provided type "${m}" but expected type "${d}".`)}}}return s})}(Je)),Je.exports}/*!
  * Bootstrap base-component.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Li;function Vs(){return Li||(Li=1,function(n,t){(function(e,i){n.exports=i(lu(),Wt(),Ln(),rt())})(F,function(e,i,s,o){const r="5.3.2";class a extends s{constructor(d,u){super(),d=o.getElement(d),d&&(this._element=d,this._config=this._getConfig(u),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),i.off(this._element,this.constructor.EVENT_KEY);for(const d of Object.getOwnPropertyNames(this))this[d]=null}_queueCallback(d,u,m=!0){o.executeAfterTransition(d,u,m)}_getConfig(d){return d=this._mergeConfigObj(d,this._element),d=this._configAfterMerge(d),this._typeCheckConfig(d),d}static getInstance(d){return e.get(o.getElement(d),this.DATA_KEY)}static getOrCreateInstance(d,u={}){return this.getInstance(d)||new this(d,typeof u=="object"?u:null)}static get VERSION(){return r}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(d){return`${d}${this.EVENT_KEY}`}}return a})}(Ge)),Ge.exports}var tn={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ii;function ee(){return Ii||(Ii=1,function(n,t){(function(e,i){n.exports=i(rt())})(F,function(e){const i=o=>{let r=o.getAttribute("data-bs-target");if(!r||r==="#"){let a=o.getAttribute("href");if(!a||!a.includes("#")&&!a.startsWith("."))return null;a.includes("#")&&!a.startsWith("#")&&(a=`#${a.split("#")[1]}`),r=a&&a!=="#"?e.parseSelector(a.trim()):null}return r},s={find(o,r=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(r,o))},findOne(o,r=document.documentElement){return Element.prototype.querySelector.call(r,o)},children(o,r){return[].concat(...o.children).filter(a=>a.matches(r))},parents(o,r){const a=[];let l=o.parentNode.closest(r);for(;l;)a.push(l),l=l.parentNode.closest(r);return a},prev(o,r){let a=o.previousElementSibling;for(;a;){if(a.matches(r))return[a];a=a.previousElementSibling}return[]},next(o,r){let a=o.nextElementSibling;for(;a;){if(a.matches(r))return[a];a=a.nextElementSibling}return[]},focusableChildren(o){const r=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(a=>`${a}:not([tabindex^="-"])`).join(",");return this.find(r,o).filter(a=>!e.isDisabled(a)&&e.isVisible(a))},getSelectorFromElement(o){const r=i(o);return r&&s.findOne(r)?r:null},getElementFromSelector(o){const r=i(o);return r?s.findOne(r):null},getMultipleElementsFromSelector(o){const r=i(o);return r?s.find(r):[]}};return s})}(tn)),tn.exports}var en={exports:{}};/*!
  * Bootstrap backdrop.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var $i;function cu(){return $i||($i=1,function(n,t){(function(e,i){n.exports=i(Wt(),Ln(),rt())})(F,function(e,i,s){const o="backdrop",r="fade",a="show",l=`mousedown.bs.${o}`,d={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},u={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class m extends i{constructor(f){super(),this._config=this._getConfig(f),this._isAppended=!1,this._element=null}static get Default(){return d}static get DefaultType(){return u}static get NAME(){return o}show(f){if(!this._config.isVisible){s.execute(f);return}this._append();const L=this._getElement();this._config.isAnimated&&s.reflow(L),L.classList.add(a),this._emulateAnimation(()=>{s.execute(f)})}hide(f){if(!this._config.isVisible){s.execute(f);return}this._getElement().classList.remove(a),this._emulateAnimation(()=>{this.dispose(),s.execute(f)})}dispose(){this._isAppended&&(e.off(this._element,l),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const f=document.createElement("div");f.className=this._config.className,this._config.isAnimated&&f.classList.add(r),this._element=f}return this._element}_configAfterMerge(f){return f.rootElement=s.getElement(f.rootElement),f}_append(){if(this._isAppended)return;const f=this._getElement();this._config.rootElement.append(f),e.on(f,l,()=>{s.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(f){s.executeAfterTransition(f,this._getElement(),this._config.isAnimated)}}return m})}(en)),en.exports}var fe={exports:{}};/*!
  * Bootstrap component-functions.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ki;function uu(){return ki||(ki=1,function(n,t){(function(e,i){i(t,Wt(),ee(),rt())})(F,function(e,i,s,o){const r=(a,l="hide")=>{const d=`click.dismiss${a.EVENT_KEY}`,u=a.NAME;i.on(document,d,`[data-bs-dismiss="${u}"]`,function(m){if(["A","AREA"].includes(this.tagName)&&m.preventDefault(),o.isDisabled(this))return;const g=s.getElementFromSelector(this)||this.closest(`.${u}`);a.getOrCreateInstance(g)[l]()})};e.enableDismissTrigger=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})}(fe,fe.exports)),fe.exports}var nn={exports:{}};/*!
  * Bootstrap focustrap.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var xi;function du(){return xi||(xi=1,function(n,t){(function(e,i){n.exports=i(Wt(),ee(),Ln())})(F,function(e,i,s){const o="focustrap",a=".bs.focustrap",l=`focusin${a}`,d=`keydown.tab${a}`,u="Tab",m="forward",g="backward",f={autofocus:!0,trapElement:null},L={autofocus:"boolean",trapElement:"element"};class A extends s{constructor(C){super(),this._config=this._getConfig(C),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return f}static get DefaultType(){return L}static get NAME(){return o}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),e.off(document,a),e.on(document,l,C=>this._handleFocusin(C)),e.on(document,d,C=>this._handleKeydown(C)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,e.off(document,a))}_handleFocusin(C){const{trapElement:M}=this._config;if(C.target===document||C.target===M||M.contains(C.target))return;const x=i.focusableChildren(M);x.length===0?M.focus():this._lastTabNavDirection===g?x[x.length-1].focus():x[0].focus()}_handleKeydown(C){C.key===u&&(this._lastTabNavDirection=C.shiftKey?g:m)}}return A})}(nn)),nn.exports}var sn={exports:{}};/*!
  * Bootstrap scrollbar.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Mi;function hu(){return Mi||(Mi=1,function(n,t){(function(e,i){n.exports=i(Ps(),ee(),rt())})(F,function(e,i,s){const o=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",r=".sticky-top",a="padding-right",l="margin-right";class d{constructor(){this._element=document.body}getWidth(){const m=document.documentElement.clientWidth;return Math.abs(window.innerWidth-m)}hide(){const m=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,a,g=>g+m),this._setElementAttributes(o,a,g=>g+m),this._setElementAttributes(r,l,g=>g-m)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,a),this._resetElementAttributes(o,a),this._resetElementAttributes(r,l)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(m,g,f){const L=this.getWidth(),A=T=>{if(T!==this._element&&window.innerWidth>T.clientWidth+L)return;this._saveInitialAttribute(T,g);const C=window.getComputedStyle(T).getPropertyValue(g);T.style.setProperty(g,`${f(Number.parseFloat(C))}px`)};this._applyManipulationCallback(m,A)}_saveInitialAttribute(m,g){const f=m.style.getPropertyValue(g);f&&e.setDataAttribute(m,g,f)}_resetElementAttributes(m,g){const f=L=>{const A=e.getDataAttribute(L,g);if(A===null){L.style.removeProperty(g);return}e.removeDataAttribute(L,g),L.style.setProperty(g,A)};this._applyManipulationCallback(m,f)}_applyManipulationCallback(m,g){if(s.isElement(m)){g(m);return}for(const f of i.find(m,this._element))g(f)}}return d})}(sn)),sn.exports}/*!
  * Bootstrap offcanvas.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(n,t){(function(e,i){n.exports=i(Vs(),Wt(),ee(),cu(),uu(),du(),rt(),hu())})(F,function(e,i,s,o,r,a,l,d){const u="offcanvas",g=".bs.offcanvas",f=".data-api",L=`load${g}${f}`,A="Escape",T="show",C="showing",M="hiding",x="offcanvas-backdrop",N=".offcanvas.show",k=`show${g}`,p=`shown${g}`,_=`hide${g}`,y=`hidePrevented${g}`,w=`hidden${g}`,c=`resize${g}`,v=`click${g}${f}`,E=`keydown.dismiss${g}`,b='[data-bs-toggle="offcanvas"]',S={backdrop:!0,keyboard:!0,scroll:!1},D={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class I extends e{constructor($,P){super($,P),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return S}static get DefaultType(){return D}static get NAME(){return u}toggle($){return this._isShown?this.hide():this.show($)}show($){if(this._isShown||i.trigger(this._element,k,{relatedTarget:$}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new d().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(C);const tt=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(T),this._element.classList.remove(C),i.trigger(this._element,p,{relatedTarget:$})};this._queueCallback(tt,this._element,!0)}hide(){if(!this._isShown||i.trigger(this._element,_).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(M),this._backdrop.hide();const P=()=>{this._element.classList.remove(T,M),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new d().reset(),i.trigger(this._element,w)};this._queueCallback(P,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const $=()=>{if(this._config.backdrop==="static"){i.trigger(this._element,y);return}this.hide()},P=!!this._config.backdrop;return new o({className:x,isVisible:P,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:P?$:null})}_initializeFocusTrap(){return new a({trapElement:this._element})}_addEventListeners(){i.on(this._element,E,$=>{if($.key===A){if(this._config.keyboard){this.hide();return}i.trigger(this._element,y)}})}static jQueryInterface($){return this.each(function(){const P=I.getOrCreateInstance(this,$);if(typeof $=="string"){if(P[$]===void 0||$.startsWith("_")||$==="constructor")throw new TypeError(`No method named "${$}"`);P[$](this)}})}}return i.on(document,v,b,function(R){const $=s.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&R.preventDefault(),l.isDisabled(this))return;i.one($,w,()=>{l.isVisible(this)&&this.focus()});const P=s.findOne(N);P&&P!==$&&I.getInstance(P).hide(),I.getOrCreateInstance($).toggle(this)}),i.on(window,L,()=>{for(const R of s.find(N))I.getOrCreateInstance(R).show()}),i.on(window,c,()=>{for(const R of s.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(R).position!=="fixed"&&I.getOrCreateInstance(R).hide()}),r.enableDismissTrigger(I),l.defineJQueryPlugin(I),I})})(au);var fu={exports:{}};/*!
  * Bootstrap collapse.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(n,t){(function(e,i){n.exports=i(Vs(),Wt(),ee(),rt())})(F,function(e,i,s,o){const r="collapse",l=".bs.collapse",d=".data-api",u=`show${l}`,m=`shown${l}`,g=`hide${l}`,f=`hidden${l}`,L=`click${l}${d}`,A="show",T="collapse",C="collapsing",M="collapsed",x=`:scope .${T} .${T}`,N="collapse-horizontal",k="width",p="height",_=".collapse.show, .collapse.collapsing",y='[data-bs-toggle="collapse"]',w={parent:null,toggle:!0},c={parent:"(null|element)",toggle:"boolean"};class v extends e{constructor(b,S){super(b,S),this._isTransitioning=!1,this._triggerArray=[];const D=s.find(y);for(const I of D){const R=s.getSelectorFromElement(I),$=s.find(R).filter(P=>P===this._element);R!==null&&$.length&&this._triggerArray.push(I)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return w}static get DefaultType(){return c}static get NAME(){return r}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let b=[];if(this._config.parent&&(b=this._getFirstLevelChildren(_).filter(P=>P!==this._element).map(P=>v.getOrCreateInstance(P,{toggle:!1}))),b.length&&b[0]._isTransitioning||i.trigger(this._element,u).defaultPrevented)return;for(const P of b)P.hide();const D=this._getDimension();this._element.classList.remove(T),this._element.classList.add(C),this._element.style[D]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const I=()=>{this._isTransitioning=!1,this._element.classList.remove(C),this._element.classList.add(T,A),this._element.style[D]="",i.trigger(this._element,m)},$=`scroll${D[0].toUpperCase()+D.slice(1)}`;this._queueCallback(I,this._element,!0),this._element.style[D]=`${this._element[$]}px`}hide(){if(this._isTransitioning||!this._isShown()||i.trigger(this._element,g).defaultPrevented)return;const S=this._getDimension();this._element.style[S]=`${this._element.getBoundingClientRect()[S]}px`,o.reflow(this._element),this._element.classList.add(C),this._element.classList.remove(T,A);for(const I of this._triggerArray){const R=s.getElementFromSelector(I);R&&!this._isShown(R)&&this._addAriaAndCollapsedClass([I],!1)}this._isTransitioning=!0;const D=()=>{this._isTransitioning=!1,this._element.classList.remove(C),this._element.classList.add(T),i.trigger(this._element,f)};this._element.style[S]="",this._queueCallback(D,this._element,!0)}_isShown(b=this._element){return b.classList.contains(A)}_configAfterMerge(b){return b.toggle=!!b.toggle,b.parent=o.getElement(b.parent),b}_getDimension(){return this._element.classList.contains(N)?k:p}_initializeChildren(){if(!this._config.parent)return;const b=this._getFirstLevelChildren(y);for(const S of b){const D=s.getElementFromSelector(S);D&&this._addAriaAndCollapsedClass([S],this._isShown(D))}}_getFirstLevelChildren(b){const S=s.find(x,this._config.parent);return s.find(b,this._config.parent).filter(D=>!S.includes(D))}_addAriaAndCollapsedClass(b,S){if(b.length)for(const D of b)D.classList.toggle(M,!S),D.setAttribute("aria-expanded",S)}static jQueryInterface(b){const S={};return typeof b=="string"&&/show|hide/.test(b)&&(S.toggle=!1),this.each(function(){const D=v.getOrCreateInstance(this,S);if(typeof b=="string"){if(typeof D[b]>"u")throw new TypeError(`No method named "${b}"`);D[b]()}})}}return i.on(document,L,y,function(E){(E.target.tagName==="A"||E.delegateTarget&&E.delegateTarget.tagName==="A")&&E.preventDefault();for(const b of s.getMultipleElementsFromSelector(this))v.getOrCreateInstance(b,{toggle:!1}).toggle()}),o.defineJQueryPlugin(v),v})})(fu);(async()=>(await Ri("#header","componets/header.html"),ru()))();export{Rt as T};

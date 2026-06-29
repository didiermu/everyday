import{g as D,S as I,d as T,s as k,a as P,l as H}from"./main-Vv-HoOlv.js";import{g as z,e as de,c as ue,a as me,S as B,P as U}from"./swiper-BF1HoP9e.js";import"./three-CsQg7oh7.js";function Q(e){const{effect:o,swiper:t,on:a,setTranslate:s,setTransition:c,overwriteParams:i,perspective:r,recreateShadows:n,getEffectParams:h}=e;a("beforeInit",()=>{if(t.params.effect!==o)return;t.classNames.push(`${t.params.containerModifierClass}${o}`),r&&r()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const p=i?i():{};Object.assign(t.params,p),Object.assign(t.originalParams,p)}),a("setTranslate _virtualUpdated",()=>{t.params.effect===o&&s()}),a("setTransition",(p,m)=>{t.params.effect===o&&c(m)}),a("transitionEnd",()=>{if(t.params.effect===o&&n){if(!h||!h().slideShadows)return;t.slides.forEach(p=>{p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(m=>m.remove())}),n()}});let u;a("virtualUpdate",()=>{t.params.effect===o&&(t.slides.length||(u=!0),requestAnimationFrame(()=>{u&&t.slides&&t.slides.length&&(s(),u=!1)}))})}function K(e,o){const t=z(o);return t!==o&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function X({swiper:e,duration:o,transformElements:t,allSlides:a}){const{activeIndex:s}=e;if(e.params.virtualTranslate&&o!==0){let c=!1,i;i=t,i.forEach(r=>{de(r,()=>{if(c||!e||e.destroyed)return;c=!0,e.animating=!1;const n=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(n)})})}}function Z({swiper:e,extendParams:o,on:t}){o({fadeEffect:{crossFade:!1}}),Q({effect:"fade",swiper:e,on:t,setTranslate:()=>{const{slides:c}=e,i=e.params.fadeEffect;for(let r=0;r<c.length;r+=1){const n=e.slides[r];let u=-n.swiperSlideOffset;e.params.virtualTranslate||(u-=e.translate);let p=0;e.isHorizontal()||(p=u,u=0);const m=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(n.progress),0):1+Math.min(Math.max(n.progress,-1),0),d=K(i,n);d.style.opacity=m,d.style.transform=`translate3d(${u}px, ${p}px, 0px)`}},setTransition:c=>{const i=e.slides.map(r=>z(r));i.forEach(r=>{r.style.transitionDuration=`${c}ms`}),X({swiper:e,duration:c,transformElements:i,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function he(e,o,t){const a=`swiper-slide-shadow${` swiper-slide-shadow-${e}`}`,s=z(o);let c=s.querySelector(`.${a.split(" ").join(".")}`);return c||(c=ue("div",a.split(" ")),s.append(c)),c}function pe({swiper:e,extendParams:o,on:t}){o({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const a=i=>typeof i=="string"?i:`${i}px`;Q({effect:"creative",swiper:e,on:t,setTranslate:()=>{const{slides:i,wrapperEl:r,slidesSizesGrid:n}=e,h=e.params.creativeEffect,{progressMultiplier:u}=h,p=e.params.centeredSlides,m=me(e);if(p){const d=n[0]/2-e.params.slidesOffsetBefore||0;r.style.transform=`translateX(calc(50% - ${d}px))`}for(let d=0;d<i.length;d+=1){const f=i[d],l=f.progress,g=Math.min(Math.max(f.progress,-h.limitProgress),h.limitProgress);let v=g;p||(v=Math.min(Math.max(f.originalProgress,-h.limitProgress),h.limitProgress));const A=f.swiperSlideOffset,b=[e.params.cssMode?-A-e.translate:-A,0,0],M=[0,0,0];let $=!1;e.isHorizontal()||(b[1]=b[0],b[0]=0);let y={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};g<0?(y=h.next,$=!0):g>0&&(y=h.prev,$=!0),b.forEach((q,E)=>{b[E]=`calc(${q}px + (${a(y.translate[E])} * ${Math.abs(g*u)}))`}),M.forEach((q,E)=>{let le=y.rotate[E]*Math.abs(g*u);M[E]=le}),f.style.zIndex=-Math.abs(Math.round(l))+i.length;const se=b.join(", "),re=`rotateX(${m(M[0])}deg) rotateY(${m(M[1])}deg) rotateZ(${m(M[2])}deg)`,ne=v<0?`scale(${1+(1-y.scale)*v*u})`:`scale(${1-(1-y.scale)*v*u})`,ie=v<0?1+(1-y.opacity)*v*u:1-(1-y.opacity)*v*u,ce=`translate3d(${se}) ${re} ${ne}`;if($&&y.shadow||!$){let q=f.querySelector(".swiper-slide-shadow");if(!q&&y.shadow&&(q=he("creative",f)),q){const E=h.shadowPerProgress?g*(1/h.limitProgress):g;q.style.opacity=Math.min(Math.max(Math.abs(E),0),1)}}const j=K(h,f);j.style.transform=ce,j.style.opacity=ie,y.origin&&(j.style.transformOrigin=y.origin)}},setTransition:i=>{const r=e.slides.map(n=>z(n));r.forEach(n=>{n.style.transitionDuration=`${i}ms`,n.querySelectorAll(".swiper-slide-shadow").forEach(h=>{h.style.transitionDuration=`${i}ms`})}),X({swiper:e,duration:i,transformElements:r,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}D.registerPlugin(I);const R=e=>e.slides[e.activeIndex],F=e=>{if(!e)return;const o=e.querySelector("video");o&&(o.muted=!0,o.play().catch(t=>console.log("Autoplay bloqueado:",t)))},fe=e=>{e.slides.forEach(o=>{const t=o.querySelector("video");t&&(t.pause(),t.currentTime=0)})},ye=()=>{const e=document.querySelector(".swiper-galeria");e&&new B(e,{modules:[pe],direction:"horizontal",slidesPerView:1.8,centeredSlides:!0,loop:!0,effect:"creative",creativeEffect:{prev:{translate:["-130%",40,-200],rotate:[0,0,-10],scale:.8},next:{translate:["130%",40,-200],rotate:[0,0,10],scale:.8}},breakpoints:{1280:{slidesPerView:3}},on:{init(o){const t=R(o);F(t)},slideChangeTransitionStart(o){fe(o)},slideChangeTransitionEnd(o){const t=R(o);F(t)}}})},ge=(e,o=2)=>{const t=document.querySelector(e);if(!t)return;const a=Array.from(t.querySelectorAll("h4"));for(let s=0;s<o;s++)a.forEach(c=>{const i=c.cloneNode(!0);i.classList.add("cloned"),t.appendChild(i)})};function ve({container:e,speed:o=10,direction:t="left",gap:a=40}){const s=document.querySelector(e);if(!s)return;const c=s.querySelector(".marquee");if(!c)return;const i=c.scrollWidth/2;return D.to(c,{x:t==="left"?-i:i,duration:o,ease:"none",repeat:-1})}function we({container:e,speed:o=10,direction:t="left"}){const a=document.querySelector(e);if(!a)return;const s=a.querySelector(".carousel-all--marquee");if(!s)return;Array.from(s.querySelectorAll("picture")).forEach(r=>{const n=r.cloneNode(!0);s.appendChild(n)});const i=s.querySelectorAll("img");Promise.all(Array.from(i).map(r=>r.complete?Promise.resolve():new Promise(n=>{r.onload=n,r.onerror=n}))).then(()=>{const r=s.scrollWidth/2;return D.to(s,{x:t==="left"?-r:r,duration:o,ease:"none",repeat:-1})})}const Se=()=>{D.utils.toArray(".video-section").forEach(e=>{const o=e.querySelector("video");I.create({trigger:e,start:"top 60%",end:"bottom 40%",onEnter:()=>o.play(),onEnterBack:()=>o.play(),onLeave:()=>{o.pause(),o.currentTime=0},onLeaveBack:()=>{o.pause(),o.currentTime=0}})})},be=()=>{Se(),ye(),ge(".marquee",20),ve({container:".expand__image",speed:50}),we({container:".carousel-all",speed:60})};be();let S=null,x=null,L;const C=window.matchMedia("(min-width:1280px)");async function Me(e){try{const o=await fetch(e);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return await o.json()}catch(o){return console.error("Error al cargar el JSON:",o),null}}function ee(e){return{"Extremely confused":"ext-confused",Grateful:"gratefull","Just fine":"just-fine","Happy/Satisfied":"happy-satisfied",Peaceful:"peaceful",Sad:"sad","Extremely Sad":"ext-sad","Excited / Motivated":"exited-motiv",Confused:"confused",Inspired:"inspired","Anxious / Stressed":"anxious-stress","Extremely Happy":"ext-happy","Angry / Resentful":"angry-resent"}[e]||""}function qe(e,o){return`
        <section class="head-period">
            <div class="container head-period--map">
                <div class="row">
                    <span class="head-day">Day <strong>${e.day}</strong></span>
                    <span class="head-date">Date <strong>${e.date}</strong></span>
                    <span class="head-emotion">Emotion/Mood <strong>${e.emotion}</strong></span>
                    <span class="head-location">Location <strong>${e.location}</strong></span>
                </div>
            </div>
            
            <div class="container head-period--content">
                <div class="row">
                    <div class="col-12">
                        <h1 class="title">${e.title}</h1>
                    </div>
                    <div class="col-12 head-period--info">
                        <h4>0${o}</h4>
                        <div class="head-period__data">
                            <span class="head-period__data--fecha"><strong>${e.fecha}</strong></span>
                        </div>
                        <div class="head-period__data">
                            <span class="head-period__data--rango">Range <strong>${e.rango}</strong></span>
                            <span class="head-period__data--duracion">Duration<strong>${e.duracion}</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `}function te(e){const o=[];return e.forEach(t=>{Object.keys(t).forEach(a=>{o.push(t[a])})}),o}function Ee(e){return!e||e.length===0?"":`
        <dialog class="modal-high">
            <div class="modal--content">
                <button class="close"></button>
                <div class="swiper swiper-high">
                    <div class="swiper-pagination"></div>
                    <div class="swiper-wrapper">
                        ${te(e).map((a,s)=>`
                <div class="swiper-slide">
                    <section>
                        <div class="container">
                            <div class="row">
                                <div class="col-12 modal-high--meta">
                                    <p>
                                        <span>Day<strong>${a.day}</strong></span>
                                        <span>Emotion/Mood<strong>${a.emotion}</strong></span>
                                        <span>Location<strong>${a.location}</strong></span>
                                    </p>
                                </div>
                                <div class="col-12 modal-high--image">
                                    <figure data-botones="${a.botones}">
                                        <button class="button button-primary" id="btn-viz">
                                            my first time
                                        </button>
                                        <button class="button button-primary" id="btn-miles">
                                            milestone
                                        </button>
                                        <picture class="img-cover">
                                            <img src="./img/${a.image}" alt="">
                                        </picture>
                                        
                                    </figure>
                                </div>
                                <div class="col-12 modal-high--content">
                                    <h5>
                                        <span>${a.date}</span>
                                        <span>${a.title}</span>
                                    </h5>
                                    <p>${a.resume}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            `).join("")}
                    </div>
                </div>
            </div>
        </dialog>
    `}function $e(e,o){const t=e.emotions.map(i=>`
        <div class="visualization--data__row ${ee(i.emotion)}">
            <span>${i.emotion}</span>
            <span>${i.count}</span>
            <span>${i.percentage}</span>
        </div>
    `).join(""),a=e.total?`
        <div class="visualization--data__row">
            <span><strong>Total</strong></span>
            <span>${e.total.count}</span>
            <span>${e.total.percentage}</span>
        </div>
    `:"",s=e.map.map((i,r)=>`
            <image href="./img/${i.image}" class="map-hover map-hover${r+1}" width="980" height="1000" x="0" y="0"></image>`).join(""),c=e.map.map((i,r)=>{let n=i.image.replace(".webp","").replace("map-","");return`
            <circle class="yellow-dot" data-map="map-${r+1}" data-flecha="${n}" cx="${i.x}" cy="${i.y}" r="10"></circle>
        `}).join("");return`
        <section class="periods viz-mapa" id="period-${o}">
            <div class="container">
                <div class="row">
                    <p class="periods--parrafo"></p>
                    <div class="col-12 periods-image visualization--fondo">
                        ${e.hover?'<span class="periods-hover"></span>':""}
                        <svg viewBox="0 0 1980 1250"  xmlns="http://www.w3.org/2000/svg">
                            <g id="svg-ring" transform="translate(500, 110)">
                                <image href="./img/${e.imagenDesk&&C.matches?e.imagenDesk:e.imagen}" width="980" height="1000" x="0" y="0"></image>
                                ${s}
                            </g>
                             
                                ${o==="3"?'<g class="svg-flechas-period" id="svg-flechas-period-03" transform="translate(500, 110)"><image href="/img/flecha-period-03.webp" class="flecha-period" width="980" height="1000" x="0" y="0"></image></g>':""}

                                ${o==="4"?'<g class="svg-flechas-period" id="svg-flechas-period-04" transform="translate(500, 110)"><image href="/img/flecha-period-04.webp" class="flecha-period" width="980" height="1000" x="0" y="0"></image></g>':""}
                             
                             <g class="svg-flechas" transform="translate(500, 110)">
                                
                                <image href="/img/flecha-00.webp" class="flechas" width="980" height="1000" x="0" y="0"></image>
                            </g>
                            <g id="svg-dots" transform="translate(500, 110)">
                                ${c}
                            </g>
                        </svg>
                        
                    </div>
                   
                    <div class="col-12 periods--data visualization--data">
                        
                        <div class="visualization--data--table">
                            ${t}
                            ${a}
                        </div>
                    </div>
                    <div class="col-12 periods--summary visualization--instructions">
                        
                        <p>${e.resumen}</p>
                    </div>
                    <div class="col-12 periods--botonera">
                        <button class="button button-icon star">View Highlights</button>
                         ${e.fullStory?'<button class="button button-icon read">Read full story</button>':""}
                        <button class="button button-icon data">View Data</button>
                    </div>
                </div>
            </div>
        </section>
        ${e.story?`
                    <dialog id="modal-resume">
                        <div class="modal--content">
                            <section class="resume">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12">
                                            ${e.story}
                                            <button class="button button-primary button-min">CLOSE</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </dialog>
                    `:""}
    `}function xe(e,o,t){if(!e||!Array.isArray(e)||e.length===0)return"";const a=e.map(d=>d.day),s=Math.min(...a),c=Math.max(...a),i=e.length,r=e[0].date,n=e[e.length-1].date;function h(d,f){const l=new Date(d),g=new Date(f),v=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],A=v[l.getMonth()],b=v[g.getMonth()],M=l.getDate(),$=g.getDate(),y=l.getFullYear();return`${M} ${A} - ${$} ${b}, ${y}`}function u(d){if(!d||d===0||d==="")return"";const f=parseInt(d);return Array(f).fill("<i></i>").join(`
`)}function p(d){const f=new Date(d),l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${f.getDate()} ${l[f.getMonth()]}`}const m=e.map(d=>{const f=u(d.timesCried);return`
                <div class="modal-data--row ${ee(d.mood)}">
                    <span>${d.day}</span>
                    <span>${p(d.date)}</span>
                    <span>${d.mood}${f?`
                                    ${f}`:""}
                    </span>
                </div>`}).join("");return`
        <dialog id="modal-data">
            <div class="modal--content">
                <button class="close"></button>
                <section class="hero">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h1 class="title">${o}</h1>
                            </div>
                            <div class="col-12 hero--meta">
                                <div class="hero__data">
                                    <span><strong>${h(r,n)}</strong></span>
                                </div>
                                <div class="hero__data">
                                    <span>Range <strong>Days ${s} to ${c}</strong></span>
                                    <span>Duration<strong>${i} days</strong></span>
                                </div>
                            </div>
                            <div class="col-12 hero--disclaimer">
                                <p>${t?` <span><i></i><i></i><i></i><i></i></span>${t}`:""}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 modal-data--content">
                                <div class="modal-data--table">
                                    <div class="modal-data--row--header">
                                        <span>Day</span>
                                        <span>Date</span>
                                        <span>Mood / Emotion</span>
                                    </div>${m}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </dialog>
    `}function Le(e,o){const t=qe(e,o),a=$e(e,o),s=Ee(e.highlights),c=xe(e.data,e.title,e.disclaimer);return`
        ${t}
        ${a}
        ${s}
        ${c}
        
    `}async function Te(){const o=document.querySelector(".swiper-periods").querySelector(".swiper-wrapper");if(!o){console.error("No se encontró .swiper-wrapper");return}return o.innerHTML="",Object.keys(S).forEach(t=>{const a=S[t],s=document.createElement("div");s.className="swiper-slide",s.setAttribute("data-period",t),s.innerHTML=Le(a,t),o.appendChild(s)}),J(),C.addEventListener("change",J),x=new B(".swiper-periods",{modules:[U,Z],effect:"fade",fadeEffect:{crossFade:!0},direction:"horizontal",loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(t,a){return'<span class="'+a+'">'+(t+1)+"</span>"}},breakpoints:{1280:{allowTouchMove:!1,autoHeight:!1}},on:{init:function(){const t=this.slides[this.activeIndex];O(t),L=this.activeIndex+1},slideChange:function(){const t=this.slides[this.activeIndex];O(t),L=this.activeIndex+1}}}),x}async function O(e){const o=e.querySelector("#modal-data"),t=e.querySelector(".modal-high"),a=e.querySelector("#modal-resume"),s=document.querySelector("#modal-story"),c=P(),i=e.querySelector(".button.data");if(o&&i){const p=o.querySelector(".close");i.onclick=()=>{o.showModal(),T()},p&&(p.onclick=()=>{o.close()})}const r=e.querySelector(".button.star");if(t&&r){const p=t.querySelector(".close"),m=e.getAttribute("data-period"),d=S[m];p&&(p.onclick=()=>{t.close(),x&&(x.allowTouchMove=!0)});let f=null;r.onclick=()=>{t.showModal(),x&&(x.allowTouchMove=!1),f||(f=new B(t.querySelector(".swiper-high"),{modules:[U,Z],effect:"fade",autoHeight:!0,fadeEffect:{crossFade:!0},direction:"horizontal",spaceBetween:0,loop:!1,pagination:{el:t.querySelector(".swiper-pagination"),clickable:!0}})),T()},te(d.highlights),t.querySelectorAll(".img-ring img")}const n=e.querySelector(".button.read"),h=s.querySelector(".close");if(s&&n&&(n.onclick=()=>{ke(L),s.showModal(),T()},h&&(h.onclick=()=>{s.close(),c&&k()})),a){const p=a.querySelector(".button");p&&(p.onclick=()=>{a.close(),c&&k()});const m=a.querySelector("p"),d=a.querySelector("a");d&&m&&(d.onclick=()=>{const f=m.classList.toggle("is-open");d.textContent=f?"Read less":"Read more",d.setAttribute("aria-expanded",f)})}const u=e.querySelector(".periods-hover");u&&(u.onclick=()=>{a&&a.showModal()}),C.matches&&Ae()}const Ie=async()=>{if(S=await Me("./json/periods.json"),!S){console.error("No se pudieron cargar los datos");return}},J=()=>{document.querySelectorAll(".swiper-periods .periods").forEach(o=>{const t=o.querySelector(".periods--botonera"),a=o.querySelector(".periods--data"),s=o.querySelector(".periods--summary"),c=o.querySelector(".button.read");C.matches?(a.insertAdjacentElement("beforeend",t),c&&s.insertAdjacentElement("beforeend",c)):(o.querySelector(".row").insertAdjacentElement("beforeend",t),c&&t.insertAdjacentElement("beforeend",c))})},Ae=()=>{const e=document.querySelectorAll(".periods .yellow-dot");document.querySelector(".visualization"),document.querySelector(".periods-image image");const o=document.querySelectorAll(".head-period--content"),t=document.querySelectorAll(".head-period--map"),a=document.querySelectorAll(".periods--summary"),s=document.querySelectorAll(".swiper-pagination"),c=document.querySelectorAll(".periods--data"),i=document.querySelectorAll(".periods--parrafo"),r=document.querySelectorAll(".svg-flechas"),n=document.querySelectorAll(".svg-flechas-period"),h=document.querySelectorAll(".flechas"),u=m=>{const d=S[L].highlights[m-1][m];t.forEach(f=>{f.querySelector(".head-day").innerHTML=`Day <strong>${d.day}</strong>`,f.querySelector(".head-date").innerHTML=`Date <strong>${d.date}</strong>`,f.querySelector(".head-emotion").innerHTML=`Emotion/Mood <strong>${d.emotion}</strong>`,f.querySelector(".head-location").innerHTML=`Location <strong>${d.location}</strong>`})},p=m=>{S[L].highlights[m-1][m];const d=S[L].map[m-1];i.forEach(f=>{f.innerHTML=`${d.resume?d.resume:""}`,f.classList.add("show",`parrafo-${m}`)})};e.forEach(m=>{let d=m.dataset.map.replace("map-",""),f=m.dataset.flecha;m.addEventListener("mouseenter",()=>{document.querySelectorAll(`.map-hover${d}`).forEach(l=>{l.classList.add("show")}),header.style.visibility="hidden",o.forEach(l=>l.classList.add("hide")),t.forEach(l=>l.classList.add("show")),a.forEach(l=>l.classList.add("hide")),c.forEach(l=>l.classList.add("hide")),s.forEach(l=>l.classList.add("hide")),n.forEach(l=>l.style.display="none"),r.forEach(l=>l.style.display="block"),h.forEach(l=>l.setAttribute("href",`/img/flecha-${f}.webp`)),r.forEach(l=>l.id=`flecha-${f}`),u(parseInt(d)),p(parseInt(d))}),m.addEventListener("mouseleave",()=>{header.style.visibility="visible",document.querySelectorAll(`.map-hover${d}`).forEach(l=>{l.classList.remove("show")}),document.querySelectorAll(".periods--parrafo").forEach(l=>{l.className="periods--parrafo"}),o.forEach(l=>l.classList.remove("hide")),t.forEach(l=>l.classList.remove("show")),a.forEach(l=>l.classList.remove("hide")),c.forEach(l=>l.classList.remove("hide")),s.forEach(l=>l.classList.remove("hide")),h.forEach(l=>l.setAttribute("href","/img/flecha-00.webp")),n.forEach(l=>l.style.display="block"),r.forEach(l=>l.style.display="none")})})},ke=e=>{const o=document.querySelector("#modal-story"),t=document.querySelector(".modal--story--meta"),a=document.querySelector(".modal--story--content"),s=S[e];o.querySelector(".title").innerHTML=s.title,t.innerHTML=`<div class="hero__data"><span><strong>${s.fecha}</strong></span></div>
                            <div class="hero__data">
                                <span>Range <strong>${s.rango}</strong></span>
                                <span>Duration<strong>${s.duracion}</strong></span>
                            </div>`,a.innerHTML=s.modalStory};async function oe(){return await Ie(),Te()}let N=null,V;const ae=window.matchMedia("(min-width:1280px)"),W=window.matchMedia("(min-width:1440px)"),G=window.matchMedia("(min-width:1920px)");let w=null;const _=P(),He=()=>{const e=document.querySelector(".hero-viz"),o=document.querySelector(".visualization"),t=document.querySelector("#btn-viz");o&&t&&(N=()=>{e.classList.add("hide"),o.classList.add("show"),document.querySelector("body").className="panel-3";const a=P();if(!a)return;const s=a.lenisInstance;if(!s)return;const c=document.querySelector("#visualization"),i=c.closest(".pin-spacer")??c;let r=0,n=i;for(;n;)r+=n.offsetTop,n=n.offsetParent;I.refresh(!0),s.scrollTo(r,{immediate:!0})},t.addEventListener("click",N))},Y=()=>{const e=document.querySelector(".link-back");ae.matches?e.innerHTML="Back to Visualization":e.innerHTML="Back"},De=()=>{document.querySelector(".swiper-periods");const e=document.querySelector(".visualization");document.querySelector(".hero-viz");const o=document.querySelector(".main-periods"),t=document.querySelector("#btn-explore"),a=document.querySelector(".visualization--button");if(o&&t){const s=async()=>{e.classList.remove("show"),e.classList.add("hide"),o.classList.add("show"),w=await oe(),await H("#header","componets/header-interior.html"),setTimeout(()=>{document.querySelector(".link-back").addEventListener("click",c),document.querySelector("body").className="panel-3";const r=P();if(!r)return;const n=r.lenisInstance;if(!n)return;const h=document.querySelector(".main-periods"),u=h.closest(".pin-spacer")??h;let p=0,m=u;for(;m;)p+=m.offsetTop,m=m.offsetParent;I.refresh(!0),n.scrollTo(p,{immediate:!0}),T()},500)},c=()=>{e.classList.add("show"),o.classList.remove("show"),w&&(w.destroy(!0,!0),w=null),H("#header","componets/header.html"),I.refresh(!0),_&&k()};t.addEventListener("click",s),a.addEventListener("click",s)}},Pe={1:{number:"01",title:"A Promising Year Ahead",fecha:"1 Jan - 11 Feb, 2024",range:"Days 01 to 42",days:"42 days"},2:{number:"02",title:"The trip: 33 days of emotions",fecha:"12 Feb - 15 Mar, 2024",range:"Days 43 to 74",days:"33 days"},3:{number:"03",title:"Back home. Crisis gestation",fecha:"16 Mar - 3 May, 2024",range:"Days 76 to 124",days:"49 days"},4:{number:"04",title:"The Crisis. Where is My Mind?",fecha:"∼ 4 May - 18 Jun, 2024",range:"Days 125 to 170",days:"46 days"},5:{number:"05",title:"The hard work of healing",fecha:"∼ 19 Jun - 30 Aug, 2024",range:"Days 171 to 243",days:"∼73 days"},6:{number:"06",title:"The recovery",fecha:"∼ 31 Aug - 16 Oct, 2024",range:"Days 244 to 290",days:"47 days"},7:{number:"07",title:"New Beginnings",fecha:"∼ 17 Oct - 31 Dec, 2024",range:"Days 291 to 366",days:"76 days"}},ze=e=>{const o=document.querySelector(".visualization--period--head"),t=document.querySelector(".head-period"),a=Pe[e];a&&o&&(o.querySelector("h3").textContent=a.number,o.querySelector("#p-hover-head-1").innerHTML=`<strong>${a.fecha}</strong>`,o.querySelector("#p-hover-head-2").innerHTML=`<span>Range </span><strong>${a.range}</strong>`,o.querySelector("#p-hover-head-3").innerHTML=`<span>Duration </span><strong>${a.days}</strong>`,o.querySelector("h2").textContent=a.title),a&&t&&(t.querySelector("h4").textContent=a.number,t.querySelector(".head-period__data--fecha").innerHTML=`<strong>${a.fecha}</strong>`,t.querySelector(".head-period__data--rango").innerHTML=`Range <strong>${a.range}</strong>`,t.querySelector(".head-period__data--duracion").innerHTML=`Duration <strong>${a.days}</strong>`,t.querySelector(".title").textContent=a.title)},Ce=async e=>{document.querySelector(".swiper-periods");const o=document.querySelector(".visualization");document.querySelector(".hero-viz");const t=document.querySelector(".main-periods");if(document.querySelector(".visualization--period--head"),w=await oe(),ae.matches){if(t.classList.add("show"),!_)return;const a=_.lenisInstance;if(!a)return;const s=document.querySelector(".viz-mapa"),c=s.closest(".pin-spacer")??s;let i=0,r=c;for(;r;)i+=r.offsetTop,r=r.offsetParent;a.scrollTo(i,{immediate:!0}),setTimeout(()=>{T()},500)}else o.classList.remove("show"),o.classList.add("hide"),t.classList.add("show");await H("#header","componets/header-interior.html"),V=document.querySelector(".link-back"),V.addEventListener("click",je),Y(),window.addEventListener("change",Y),w.slideTo(parseInt(e)-1),setTimeout(()=>{document.querySelector("body").className="panel-3"},500)},je=async()=>{const e=document.querySelector(".visualization"),o=document.querySelector(".main-periods");e.classList.add("show"),e.classList.remove("hide"),o.classList.remove("show"),document.querySelector("body").classList.remove("panel-3"),await H("#header","componets/header.html"),w&&(w.destroy(!0,!0),w=null),k()},_e=()=>{const e=document.querySelectorAll(".yellow-dot"),o=document.querySelectorAll(".gold-dot"),t=document.querySelector(".visualization"),a=document.querySelector(".visualization--ring--head"),s=document.querySelector(".visualization--resume");document.querySelector(".header");const c={27:{day:"57",date:"26 Feb, 2024",emotion:"Excited/Motivated",location:"Austria/United Kingdom"},26:{day:"49",date:"18 Feb, 2024",emotion:"Confused",location:"Austria",resume:`<ul><li>At the Iceland Airport</li>
            <li>At the Munich Airport</li>
            <li>Having someone pick me up at the airport in Europe</li>
            <li>Watching the beautiful Alps up close in Tyrol</li>
            <li>Living as a ‘family’ with my boyfriend and his daughter.</li></ul>`},25:{day:"44",date:"13 Feb, 2024",emotion:"Peaceful",location:"United States"},24:{day:"43",date:"12 Feb, 2024",emotion:"Excited/Motivated",location:"El Salvador",resume:"Yes, you can pay with crypto."},23:{day:"25",date:"25 Jan, 2024",emotion:"Just Fine",location:"México",resume:"I don’t recommend it; it was awful. There’s a high risk of thrombosis, and I experienced the worst headaches of my life. Never again."},19:{day:"75",date:"15 Mar, 2024",emotion:"Anxious/Stressed",location:"Austria/Germany/Iceland",resume:"Other first-time experiences from this trip that weren't documented include trying Korean BBQ, enjoying traditional Austrian food, going bouldering, jumping into the Nordkette for dinner in a Hütte, going to the Tate and the impressive Natural History Museum in London, seeing Fever Ray live, experiencing a real winter."},20:{day:"125",date:"5 Apr, 2024",emotion:"Confused",location:"México",resume:"My Buddhist teacher used to say: <br> “The one who feels badly, acts badly.” <br><br> I’m not justifying what I did, but it was a clear sign that I was no longer in control of my thoughts or actions. I was overwhelmed with anxiety and gripped by a fear of losing what, at the time, I believed was the relationship I had always dreamed of. I quite literally lost my mind and began acting erratically—undermining trust and pushing my partner away."},21:{day:"168",date:"16 Jun, 2024",emotion:"Sad",location:"México"},22:{day:"173",date:"21 Jun, 2024",emotion:"Excited/Motivated",location:"México",resume:"Achieving the 4 day Work Week happened almost by accident due to my mental health crisis but it was a game changer. I was finally able to work on my personal projects (like this one) in a week day, devoting 8 hours each week."},1:{day:"185",date:"03 Jul, 2024",emotion:"Happy/Satisfied",location:"México"},2:{day:"195",date:"13 Jul, 2024",emotion:"Extremely Sad",location:"México"},3:{day:"203",date:"21 Jul, 2024",emotion:"Extremely Confused",location:"México",resume:"That day, I felt overwhelmed and confused. I wanted to cry and felt the urge to call my ex for explanations. Instead, I decided to set a timer for two hours to create something nice using Midjourney. My mood changed completely; I felt joy and was grateful to see how happy I am when I’m creating. It doesn’t matter if it’s something simple."},4:{day:"217",date:"4 Aug, 2024",emotion:"Extremely Happy",location:"México",resume:"When it comes to doing something risky or extreme, I’m usually the one who watches others go first, feeling super anxious as my turn approaches. But this time, I was surprisingly relaxed and prepared—so much so that I volunteered to be the first! The guide approved and mentioned that the first 30 seconds would be unbearable, but after that, it would get easier. I thought to myself: I’ve been enduring unbearable emotional pain, sadness, confusion, and anxiety for at least three months; this is nothing for me! And boy, I did pretty well. I was proud of myself!"},5:{day:"241",date:"28 Aug, 2024",emotion:"Exited/Motivated",location:"México",resume:"Poverty Radar is one of my favorite projects—a physicalization that involves Arduino and hardware. This time, I invited a friend to collaborate, and he understood the idea perfectly and was willing to help. I couldn’t be more grateful and excited!"},6:{day:"248",date:"04 Sep, 2024",emotion:"Angry/Resentful",location:"México",resume:"This is another data humanist project: a dashboard tracking what I ate over the course of 10 months. It was originally intended to cover a full year, but I struggled to consistently record my meals during my trip to the US and Europe."},7:{day:"251",date:"07 Sep, 2024",emotion:"Happy/Satisfied",location:"México",resume:"As I learned how to overcome my breakup, I felt compelled to share my small victories with others in similar situations, showing them that there was a way out of the pain. This was the first of many pieces I planned to write, but I struggled to find time between my 9-to-6 job and side projects, which prevented me from completing the others."},8:{day:"252",date:"08 Sep, 2024",emotion:"Extremely Happy",location:"México"},9:{day:"271",date:"27 Sep, 2024",emotion:"Excited/Motivated",location:"México",resume:"A visual record of my most delicious meals, both at home and dining out, as well as my daily cup of coffee."},10:{day:"274",date:"30 Sep, 2024",emotion:"Excited/Motivated",location:"México",resume:"I see this as my very first step toward becoming a creative technologist. I’m not sure yet if I’ll be able to make it, but it’s worth trying."},11:{day:"291",date:"17 Oct, 2024",emotion:"Happy/Peaceful",location:"México"},12:{day:"295",date:"21 Oct, 2024",emotion:"Extremely Happy/Grateful",location:"Portugal/France/Italy/Austria",resume:"Growing up in a working-class family, my mom never had the chance to travel overseas. As a child, I vowed to change that for her. Seeing her explore new places for the first time was one of the most fulfilling experiences of my life, and those cherished memories will remain with me always. 💜"},13:{day:"306",date:"1 Nov, 2024",emotion:"Excited/Grateful",location:"Austria"},14:{day:"308",date:"3 Nov, 2024",emotion:"Excited",location:"Austria"},15:{day:"335",date:"30 Nov, 2024",emotion:"Extremely Happy",location:"México"},16:{day:"336",date:"01 Dec, 2024",emotion:"Excited/Motivated",location:"México",resume:"It wasn’t really about getting the job; I knew I had no chance. But for the first time in my life, it felt like I had the perfect experience and profile for the position. So, I put together my resume and latest projects and sent it off. It was a huge step for me since I’ve been dealing with impostor syndrome my whole life. "},17:{day:"359",date:"24 Dec, 2024",emotion:"Inspired",location:"México"},18:{day:"360",date:"25 Dec, 2024",emotion:"Inspired",location:"México",resume:"As the year came to a close, I realized I wasn’t achieving the results I hoped for from the Max course. This made me quite anxious, so I decided to dedicate my Christmas holidays to learning the basics of Arduino on my own. I was so invested in it that I chose to skip the Christmas celebration with my family, something I had never done before."}},i=r=>{const n=c[r],h=Object.values(n).every(u=>u==="");if(n&&a&&(h?a.querySelectorAll("span").forEach(u=>{u.innerHTML=""}):(a.querySelector("#ring-day").innerHTML=`Day <strong>${n.day}</strong>`,a.querySelector("#ring-date").innerHTML=`Date <strong>${n.date}</strong>`,a.querySelector("#ring-emotion").innerHTML=`Emotion/Mood <strong>${n.emotion}</strong>`,a.querySelector("#ring-location").innerHTML=`Location <strong>${n.location}</strong>`),n.resume)){s.querySelector("p").innerHTML=n.resume;const u=[...s.classList].filter(p=>p.startsWith("resume-"));s.classList.remove(...u),s.classList.add("show",`resume-${r}`)}};o.forEach(r=>{let n=r.id.replace("nodo-",""),h=document.querySelector(`#ring${n}`),u=document.querySelector(".svg-flechas"),p=document.querySelector(".svg-indicador"),m=document.querySelector(".flechas");r.addEventListener("mouseenter",()=>{h&&(t.classList.add("hover"),h.classList.add("show"),i(parseInt(n)),header.style.visibility="hidden",p.style.display="none",u.style.display="block",m.setAttribute("href",`/img/flecha-${n}.webp`),u.id=`flecha-${n}`)}),r.addEventListener("mouseleave",()=>{h&&(t.classList.remove("hover"),h.classList.remove("show"),s.classList.remove("show"),header.style.visibility="visible",m.setAttribute("href","/img/flecha-00.webp"),p.style.display="block",u.style.display="none")})}),e.forEach(r=>{let n=r.id.replace("period-",""),h=document.querySelector(`#yellow-${n}`),u=document.querySelector(".deeper"),p=document.querySelector(".svg-indicador");r.addEventListener("mouseenter",()=>{h&&(t.classList.add("hoverYellow"),h.classList.add("show"),ze(parseInt(n)),header.style.visibility="hidden",p.style.display="none",u.style.display="block",u.id=`deeper-${n}`)}),r.addEventListener("mouseleave",()=>{h&&(t.classList.remove("hoverYellow"),h.classList.remove("show"),header.style.visibility="visible",p.style.display="block",u.style.display="none")}),r.addEventListener("click",()=>{Ce(n)});function m(){u.querySelector("rect").setAttribute("width",G.matches?"280":W.matches?"270":"240"),u.querySelector("text").setAttribute("x",G.matches?"140":W.matches?"135":"120")}m(),window.addEventListener("resize",m)})},Be=()=>{He(),De(),_e()};Be();

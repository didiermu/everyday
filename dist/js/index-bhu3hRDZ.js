import{g as H,S as k,d as I,s as _,a as D,l as P,b as de,c as ue}from"./main-WjZQJTlH.js";import{g as z,e as me,c as he,a as pe,S as R,P as U}from"./swiper-BF1HoP9e.js";import"./three-CsQg7oh7.js";function Q(e){const{effect:t,swiper:o,on:a,setTranslate:s,setTransition:c,overwriteParams:n,perspective:r,recreateShadows:i,getEffectParams:m}=e;a("beforeInit",()=>{if(o.params.effect!==t)return;o.classNames.push(`${o.params.containerModifierClass}${t}`),r&&r()&&o.classNames.push(`${o.params.containerModifierClass}3d`);const f=n?n():{};Object.assign(o.params,f),Object.assign(o.originalParams,f)}),a("setTranslate _virtualUpdated",()=>{o.params.effect===t&&s()}),a("setTransition",(f,h)=>{o.params.effect===t&&c(h)}),a("transitionEnd",()=>{if(o.params.effect===t&&i){if(!m||!m().slideShadows)return;o.slides.forEach(f=>{f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h=>h.remove())}),i()}});let u;a("virtualUpdate",()=>{o.params.effect===t&&(o.slides.length||(u=!0),requestAnimationFrame(()=>{u&&o.slides&&o.slides.length&&(s(),u=!1)}))})}function K(e,t){const o=z(t);return o!==t&&(o.style.backfaceVisibility="hidden",o.style["-webkit-backface-visibility"]="hidden"),o}function X({swiper:e,duration:t,transformElements:o,allSlides:a}){const{activeIndex:s}=e;if(e.params.virtualTranslate&&t!==0){let c=!1,n;n=o,n.forEach(r=>{me(r,()=>{if(c||!e||e.destroyed)return;c=!0,e.animating=!1;const i=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(i)})})}}function Z({swiper:e,extendParams:t,on:o}){t({fadeEffect:{crossFade:!1}}),Q({effect:"fade",swiper:e,on:o,setTranslate:()=>{const{slides:c}=e,n=e.params.fadeEffect;for(let r=0;r<c.length;r+=1){const i=e.slides[r];let u=-i.swiperSlideOffset;e.params.virtualTranslate||(u-=e.translate);let f=0;e.isHorizontal()||(f=u,u=0);const h=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i.progress),0):1+Math.min(Math.max(i.progress,-1),0),d=K(n,i);d.style.opacity=h,d.style.transform=`translate3d(${u}px, ${f}px, 0px)`}},setTransition:c=>{const n=e.slides.map(r=>z(r));n.forEach(r=>{r.style.transitionDuration=`${c}ms`}),X({swiper:e,duration:c,transformElements:n,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function fe(e,t,o){const a=`swiper-slide-shadow${` swiper-slide-shadow-${e}`}`,s=z(t);let c=s.querySelector(`.${a.split(" ").join(".")}`);return c||(c=he("div",a.split(" ")),s.append(c)),c}function ye({swiper:e,extendParams:t,on:o}){t({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const a=n=>typeof n=="string"?n:`${n}px`;Q({effect:"creative",swiper:e,on:o,setTranslate:()=>{const{slides:n,wrapperEl:r,slidesSizesGrid:i}=e,m=e.params.creativeEffect,{progressMultiplier:u}=m,f=e.params.centeredSlides,h=pe(e);if(f){const d=i[0]/2-e.params.slidesOffsetBefore||0;r.style.transform=`translateX(calc(50% - ${d}px))`}for(let d=0;d<n.length;d+=1){const p=n[d],l=p.progress,g=Math.min(Math.max(p.progress,-m.limitProgress),m.limitProgress);let v=g;f||(v=Math.min(Math.max(p.originalProgress,-m.limitProgress),m.limitProgress));const T=p.swiperSlideOffset,b=[e.params.cssMode?-T-e.translate:-T,0,0],M=[0,0,0];let $=!1;e.isHorizontal()||(b[1]=b[0],b[0]=0);let y={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};g<0?(y=m.next,$=!0):g>0&&(y=m.prev,$=!0),b.forEach((q,E)=>{b[E]=`calc(${q}px + (${a(y.translate[E])} * ${Math.abs(g*u)}))`}),M.forEach((q,E)=>{let le=y.rotate[E]*Math.abs(g*u);M[E]=le}),p.style.zIndex=-Math.abs(Math.round(l))+n.length;const se=b.join(", "),re=`rotateX(${h(M[0])}deg) rotateY(${h(M[1])}deg) rotateZ(${h(M[2])}deg)`,ne=v<0?`scale(${1+(1-y.scale)*v*u})`:`scale(${1-(1-y.scale)*v*u})`,ie=v<0?1+(1-y.opacity)*v*u:1-(1-y.opacity)*v*u,ce=`translate3d(${se}) ${re} ${ne}`;if($&&y.shadow||!$){let q=p.querySelector(".swiper-slide-shadow");if(!q&&y.shadow&&(q=fe("creative",p)),q){const E=m.shadowPerProgress?g*(1/m.limitProgress):g;q.style.opacity=Math.min(Math.max(Math.abs(E),0),1)}}const j=K(m,p);j.style.transform=ce,j.style.opacity=ie,y.origin&&(j.style.transformOrigin=y.origin)}},setTransition:n=>{const r=e.slides.map(i=>z(i));r.forEach(i=>{i.style.transitionDuration=`${n}ms`,i.querySelectorAll(".swiper-slide-shadow").forEach(m=>{m.style.transitionDuration=`${n}ms`})}),X({swiper:e,duration:n,transformElements:r,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}H.registerPlugin(k);const F=e=>e.slides[e.activeIndex],B=e=>{if(!e)return;const t=e.querySelector("video");t&&(t.muted=!0,t.play().catch(o=>console.log("Autoplay bloqueado:",o)))},ge=e=>{e.slides.forEach(t=>{const o=t.querySelector("video");o&&(o.pause(),o.currentTime=0)})},ve=()=>{const e=document.querySelector(".swiper-galeria");e&&new R(e,{modules:[ye],direction:"horizontal",slidesPerView:1.8,centeredSlides:!0,loop:!0,effect:"creative",creativeEffect:{prev:{translate:["-130%",40,-200],rotate:[0,0,-10],scale:.8},next:{translate:["130%",40,-200],rotate:[0,0,10],scale:.8}},breakpoints:{1280:{slidesPerView:3}},on:{init(t){const o=F(t);B(o)},slideChangeTransitionStart(t){ge(t)},slideChangeTransitionEnd(t){const o=F(t);B(o)}}})},we=(e,t=2)=>{const o=document.querySelector(e);if(!o)return;const a=Array.from(o.querySelectorAll("h4"));for(let s=0;s<t;s++)a.forEach(c=>{const n=c.cloneNode(!0);n.classList.add("cloned"),o.appendChild(n)})};function Se({container:e,speed:t=10,direction:o="left",gap:a=40}){const s=document.querySelector(e);if(!s)return;const c=s.querySelector(".marquee");if(!c)return;const n=c.scrollWidth/2;return H.to(c,{x:o==="left"?-n:n,duration:t,ease:"none",repeat:-1})}function be({container:e,speed:t=10,direction:o="left"}){const a=document.querySelector(e);if(!a)return;const s=a.querySelector(".carousel-all--marquee");if(!s)return;Array.from(s.querySelectorAll("picture")).forEach(r=>{const i=r.cloneNode(!0);s.appendChild(i)});const n=s.querySelectorAll("img");Promise.all(Array.from(n).map(r=>r.complete?Promise.resolve():new Promise(i=>{r.onload=i,r.onerror=i}))).then(()=>{const r=s.scrollWidth/2;return H.to(s,{x:o==="left"?-r:r,duration:t,ease:"none",repeat:-1})})}const Me=()=>{H.utils.toArray(".video-section").forEach(e=>{const t=e.querySelector("video");k.create({trigger:e,start:"top 60%",end:"bottom 40%",onEnter:()=>t.play(),onEnterBack:()=>t.play(),onLeave:()=>{t.pause(),t.currentTime=0},onLeaveBack:()=>{t.pause(),t.currentTime=0}})})},qe=()=>{Me(),ve(),we(".marquee",20),Se({container:".expand__image",speed:50}),be({container:".carousel-all",speed:60})};qe();let w=null,x=null,L;const C=window.matchMedia("(min-width:1280px)");async function Ee(e){try{const t=await fetch(e);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return await t.json()}catch(t){return console.error("Error al cargar el JSON:",t),null}}function ee(e){return{"Extremely confused":"ext-confused",Grateful:"gratefull","Just fine":"just-fine","Happy/Satisfied":"happy-satisfied",Peaceful:"peaceful",Sad:"sad","Extremely Sad":"ext-sad","Excited / Motivated":"exited-motiv",Confused:"confused",Inspired:"inspired","Anxious / Stressed":"anxious-stress","Extremely Happy":"ext-happy","Angry / Resentful":"angry-resent"}[e]||""}function $e(e,t){return`
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
                        <h4>0${t}</h4>
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
    `}function te(e){const t=[];return e.forEach(o=>{Object.keys(o).forEach(a=>{t.push(o[a])})}),t}function xe(e){return!e||e.length===0?"":`
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
    `}function Le(e,t){const o=e.emotions.map(n=>`
        <div class="visualization--data__row ${ee(n.emotion)}">
            <span>${n.emotion}</span>
            <span>${n.count}</span>
            <span>${n.percentage}</span>
        </div>
    `).join(""),a=e.total?`
        <div class="visualization--data__row">
            <span><strong>Total</strong></span>
            <span>${e.total.count}</span>
            <span>${e.total.percentage}</span>
        </div>
    `:"",s=e.map.map((n,r)=>`
            <image href="./img/${n.image}" class="map-hover map-hover${r+1}" width="980" height="1000" x="0" y="0"></image>`).join(""),c=e.map.map((n,r)=>{let i=n.image.replace(".webp","").replace("map-","");return`
            <circle class="yellow-dot" data-map="map-${r+1}" data-flecha="${i}" cx="${n.x}" cy="${n.y}" r="10"></circle>
        `}).join("");return`
        <section class="periods viz-mapa" id="period-${t}">
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
                             
                                ${t==="3"?'<g class="svg-flechas-period" id="svg-flechas-period-03" transform="translate(500, 110)"><image href="/img/flecha-period-03.webp" class="flecha-period" width="980" height="1000" x="0" y="0"></image></g>':""}

                                ${t==="4"?'<g class="svg-flechas-period" id="svg-flechas-period-04" transform="translate(500, 110)"><image href="/img/flecha-period-04.webp" class="flecha-period" width="980" height="1000" x="0" y="0"></image></g>':""}
                             
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
                            ${o}
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
    `}function Te(e,t,o){if(!e||!Array.isArray(e)||e.length===0)return"";const a=e.map(d=>d.day),s=Math.min(...a),c=Math.max(...a),n=e.length,r=e[0].date,i=e[e.length-1].date;function m(d,p){const l=new Date(d),g=new Date(p),v=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],T=v[l.getMonth()],b=v[g.getMonth()],M=l.getDate(),$=g.getDate(),y=l.getFullYear();return`${M} ${T} - ${$} ${b}, ${y}`}function u(d){if(!d||d===0||d==="")return"";const p=parseInt(d);return Array(p).fill("<i></i>").join(`
`)}function f(d){const p=new Date(d),l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${p.getDate()} ${l[p.getMonth()]}`}const h=e.map(d=>{const p=u(d.timesCried);return`
                <div class="modal-data--row ${ee(d.mood)}">
                    <span>${d.day}</span>
                    <span>${f(d.date)}</span>
                    <span>${d.mood}${p?`
                                    ${p}`:""}
                    </span>
                </div>`}).join("");return`
        <dialog id="modal-data">
            <div class="modal--content">
                <button class="close"></button>
                <section class="hero">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h1 class="title">${t}</h1>
                            </div>
                            <div class="col-12 hero--meta">
                                <div class="hero__data">
                                    <span><strong>${m(r,i)}</strong></span>
                                </div>
                                <div class="hero__data">
                                    <span>Range <strong>Days ${s} to ${c}</strong></span>
                                    <span>Duration<strong>${n} days</strong></span>
                                </div>
                            </div>
                            <div class="col-12 hero--disclaimer">
                                <p>${o?` <span><i></i><i></i><i></i><i></i></span>${o}`:""}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 modal-data--content">
                                <div class="modal-data--table">
                                    <div class="modal-data--row--header">
                                        <span>Day</span>
                                        <span>Date</span>
                                        <span>Mood / Emotion</span>
                                    </div>${h}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </dialog>
    `}function Ie(e,t){const o=$e(e,t),a=Le(e,t),s=xe(e.highlights),c=Te(e.data,e.title,e.disclaimer);return`
        ${o}
        ${a}
        ${s}
        ${c}
        
    `}async function Ae(){const t=document.querySelector(".swiper-periods").querySelector(".swiper-wrapper");if(!t){console.error("No se encontró .swiper-wrapper");return}return t.innerHTML="",Object.keys(w).forEach(o=>{const a=w[o],s=document.createElement("div");s.className="swiper-slide",s.setAttribute("data-period",o),s.innerHTML=Ie(a,o),t.appendChild(s)}),J(),C.addEventListener("change",J),x=new R(".swiper-periods",{modules:[U,Z],effect:"fade",fadeEffect:{crossFade:!0},direction:"horizontal",loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(o,a){return'<span class="'+a+'">'+(o+1)+"</span>"}},breakpoints:{1280:{allowTouchMove:!1,autoHeight:!1}},on:{init:function(){const o=this.slides[this.activeIndex];O(o),L=this.activeIndex+1},slideChange:function(){const o=this.slides[this.activeIndex];O(o),L=this.activeIndex+1}}}),x}async function O(e){const t=e.querySelector("#modal-data"),o=e.querySelector(".modal-high"),a=e.querySelector("#modal-resume"),s=document.querySelector("#modal-story"),c=D(),n=e.querySelector(".button.data");if(t&&n){const f=t.querySelector(".close");n.onclick=()=>{t.showModal(),I()},f&&(f.onclick=()=>{t.close()})}const r=e.querySelector(".button.star");if(o&&r){const f=o.querySelector(".close"),h=e.getAttribute("data-period"),d=w[h];f&&(f.onclick=()=>{o.close(),x&&(x.allowTouchMove=!0)});let p=null;r.onclick=()=>{o.showModal(),x&&(x.allowTouchMove=!1),p||(p=new R(o.querySelector(".swiper-high"),{modules:[U,Z],effect:"fade",autoHeight:!0,fadeEffect:{crossFade:!0},direction:"horizontal",spaceBetween:0,loop:!1,pagination:{el:o.querySelector(".swiper-pagination"),clickable:!0}})),I()},te(d.highlights),o.querySelectorAll(".img-ring img")}const i=e.querySelector(".button.read"),m=s.querySelector(".close");if(s&&i&&(i.onclick=()=>{De(L),s.showModal(),I()},m&&(m.onclick=()=>{s.close(),c&&_()})),a){const f=a.querySelector(".button");f&&(f.onclick=()=>{a.close(),c&&_()});const h=a.querySelector("p"),d=a.querySelector("a");d&&h&&(d.onclick=()=>{const p=h.classList.toggle("is-open");d.textContent=p?"Read less":"Read more",d.setAttribute("aria-expanded",p)})}const u=e.querySelector(".periods-hover");u&&(u.onclick=()=>{a&&a.showModal()}),C.matches&&ke()}const He=async()=>{if(w=await Ee("./json/periods.json"),!w){console.error("No se pudieron cargar los datos");return}},J=()=>{document.querySelectorAll(".swiper-periods .periods").forEach(t=>{const o=t.querySelector(".periods--botonera"),a=t.querySelector(".periods--data"),s=t.querySelector(".periods--summary"),c=t.querySelector(".button.read");C.matches?(a.insertAdjacentElement("beforeend",o),c&&s.insertAdjacentElement("beforeend",c)):(t.querySelector(".row").insertAdjacentElement("beforeend",o),c&&o.insertAdjacentElement("beforeend",c))})},ke=()=>{const e=document.querySelectorAll(".periods .yellow-dot");document.querySelector(".visualization"),document.querySelector(".periods-image image");const t=document.querySelectorAll(".head-period--content"),o=document.querySelectorAll(".head-period--map"),a=document.querySelectorAll(".periods--summary"),s=document.querySelectorAll(".swiper-pagination"),c=document.querySelectorAll(".periods--data"),n=document.querySelectorAll(".periods--parrafo"),r=document.querySelectorAll(".svg-flechas"),i=document.querySelectorAll(".svg-flechas-period"),m=document.querySelectorAll(".flechas"),u=h=>{const d=w[L].highlights[h-1][h];o.forEach(p=>{p.querySelector(".head-day").innerHTML=`Day <strong>${d.day}</strong>`,p.querySelector(".head-date").innerHTML=`Date <strong>${d.date}</strong>`,p.querySelector(".head-emotion").innerHTML=`Emotion/Mood <strong>${d.emotion}</strong>`,p.querySelector(".head-location").innerHTML=`Location <strong>${d.location}</strong>`})},f=h=>{w[L].highlights[h-1][h];const d=w[L].map[h-1];n.forEach(p=>{p.innerHTML=`${d.resume?d.resume:""}`,p.classList.add("show",`parrafo-${h}`)})};e.forEach(h=>{let d=h.dataset.map.replace("map-",""),p=h.dataset.flecha;h.addEventListener("mouseenter",()=>{document.querySelectorAll(`.map-hover${d}`).forEach(l=>{l.classList.add("show")}),header.style.visibility="hidden",t.forEach(l=>l.classList.add("hide")),o.forEach(l=>l.classList.add("show")),a.forEach(l=>l.classList.add("hide")),c.forEach(l=>l.classList.add("hide")),s.forEach(l=>l.classList.add("hide")),i.forEach(l=>l.style.display="none"),r.forEach(l=>l.style.display="block"),m.forEach(l=>l.setAttribute("href",`/img/flecha-${p}.webp`)),r.forEach(l=>l.id=`flecha-${p}`),u(parseInt(d)),f(parseInt(d))}),h.addEventListener("mouseleave",()=>{header.style.visibility="visible",document.querySelectorAll(`.map-hover${d}`).forEach(l=>{l.classList.remove("show")}),document.querySelectorAll(".periods--parrafo").forEach(l=>{l.className="periods--parrafo"}),t.forEach(l=>l.classList.remove("hide")),o.forEach(l=>l.classList.remove("show")),a.forEach(l=>l.classList.remove("hide")),c.forEach(l=>l.classList.remove("hide")),s.forEach(l=>l.classList.remove("hide")),m.forEach(l=>l.setAttribute("href","/img/flecha-00.webp")),i.forEach(l=>l.style.display="block"),r.forEach(l=>l.style.display="none")})})},De=e=>{const t=document.querySelector("#modal-story"),o=document.querySelector(".modal--story--meta"),a=document.querySelector(".modal--story--content"),s=w[e];t.querySelector(".title").innerHTML=s.title,o.innerHTML=`<div class="hero__data"><span><strong>${s.fecha}</strong></span></div>
                            <div class="hero__data">
                                <span>Range <strong>${s.rango}</strong></span>
                                <span>Duration<strong>${s.duracion}</strong></span>
                            </div>`,a.innerHTML=s.modalStory};async function oe(){return await He(),Ae()}let N=null,A;const ae=window.matchMedia("(min-width:1280px)"),V=window.matchMedia("(min-width:1440px)"),W=window.matchMedia("(min-width:1920px)");let S=null;const G=D(),Pe=()=>{const e=document.querySelector(".hero-viz"),t=document.querySelector(".visualization"),o=document.querySelector("#btn-viz");t&&o&&(N=()=>{e.classList.add("hide"),t.classList.add("show"),document.querySelector("body").className="panel-3";const a=D();if(!a)return;const s=a.lenisInstance;if(!s)return;const c=document.querySelector("#visualization"),n=c.closest(".pin-spacer")??c;let r=0,i=n;for(;i;)r+=i.offsetTop,i=i.offsetParent;k.refresh(!0),s.scrollTo(r,{immediate:!0})},o.addEventListener("click",N))},Y=()=>{const e=document.querySelector(".link-back");ae.matches?e.innerHTML="Back to Visualization":e.innerHTML="Back"},ze=()=>{document.querySelector(".swiper-periods");const e=document.querySelector(".visualization");document.querySelector(".hero-viz");const t=document.querySelector(".main-periods"),o=document.querySelector("#btn-explore"),a=document.querySelector(".visualization--button");if(t&&o){const s=async()=>{e.classList.remove("show"),e.classList.add("hide"),t.classList.add("show"),S=await oe(),await P("#header","componets/header-interior.html"),setTimeout(()=>{A=document.querySelector(".link-back"),A.addEventListener("click",Ce),document.querySelector("body").className="panel-3";const c=D();if(!c)return;const n=c.lenisInstance;if(!n)return;const r=document.querySelector(".main-periods"),i=r.closest(".pin-spacer")??r;let m=0,u=i;for(;u;)m+=u.offsetTop,u=u.offsetParent;k.refresh(!0),n.scrollTo(m,{immediate:!0}),de()},500)};o.addEventListener("click",s),a.addEventListener("click",s)}},Ce=async()=>{const e=document.querySelector(".visualization"),t=document.querySelector(".main-periods");e.classList.add("show"),t.classList.remove("show"),S&&(S.destroy(!0,!0),S=null),await P("#header","componets/header.html"),ue()},je={1:{number:"01",title:"A Promising Year Ahead",fecha:"1 Jan - 11 Feb, 2024",range:"Days 01 to 42",days:"42 days"},2:{number:"02",title:"The trip: 33 days of emotions",fecha:"12 Feb - 15 Mar, 2024",range:"Days 43 to 74",days:"33 days"},3:{number:"03",title:"Back home. Crisis gestation",fecha:"16 Mar - 3 May, 2024",range:"Days 76 to 124",days:"49 days"},4:{number:"04",title:"The Crisis. Where is My Mind?",fecha:"∼ 4 May - 18 Jun, 2024",range:"Days 125 to 170",days:"46 days"},5:{number:"05",title:"The hard work of healing",fecha:"∼ 19 Jun - 30 Aug, 2024",range:"Days 171 to 243",days:"∼73 days"},6:{number:"06",title:"The recovery",fecha:"∼ 31 Aug - 16 Oct, 2024",range:"Days 244 to 290",days:"47 days"},7:{number:"07",title:"New Beginnings",fecha:"∼ 17 Oct - 31 Dec, 2024",range:"Days 291 to 366",days:"76 days"}},_e=e=>{const t=document.querySelector(".visualization--period--head"),o=document.querySelector(".head-period"),a=je[e];a&&t&&(t.querySelector("h3").textContent=a.number,t.querySelector("#p-hover-head-1").innerHTML=`<strong>${a.fecha}</strong>`,t.querySelector("#p-hover-head-2").innerHTML=`<span>Range </span><strong>${a.range}</strong>`,t.querySelector("#p-hover-head-3").innerHTML=`<span>Duration </span><strong>${a.days}</strong>`,t.querySelector("h2").textContent=a.title),a&&o&&(o.querySelector("h4").textContent=a.number,o.querySelector(".head-period__data--fecha").innerHTML=`<strong>${a.fecha}</strong>`,o.querySelector(".head-period__data--rango").innerHTML=`Range <strong>${a.range}</strong>`,o.querySelector(".head-period__data--duracion").innerHTML=`Duration <strong>${a.days}</strong>`,o.querySelector(".title").textContent=a.title)},Re=async e=>{document.querySelector(".swiper-periods");const t=document.querySelector(".visualization");document.querySelector(".hero-viz");const o=document.querySelector(".main-periods");if(document.querySelector(".visualization--period--head"),S=await oe(),ae.matches){if(o.classList.add("show"),!G)return;const a=G.lenisInstance;if(!a)return;const s=document.querySelector(".viz-mapa"),c=s.closest(".pin-spacer")??s;let n=0,r=c;for(;r;)n+=r.offsetTop,r=r.offsetParent;a.scrollTo(n,{immediate:!0}),setTimeout(()=>{I()},500)}else t.classList.remove("show"),t.classList.add("hide"),o.classList.add("show");await P("#header","componets/header-interior.html"),A=document.querySelector(".link-back"),A.addEventListener("click",Fe),Y(),window.addEventListener("change",Y),S.slideTo(parseInt(e)-1),setTimeout(()=>{document.querySelector("body").className="panel-3"},500)},Fe=async()=>{const e=document.querySelector(".visualization"),t=document.querySelector(".main-periods");e.classList.add("show"),e.classList.remove("hide"),t.classList.remove("show"),document.querySelector("body").classList.remove("panel-3"),await P("#header","componets/header.html"),S&&(S.destroy(!0,!0),S=null),_()},Be=()=>{const e=document.querySelectorAll(".yellow-dot"),t=document.querySelectorAll(".gold-dot"),o=document.querySelector(".visualization"),a=document.querySelector(".visualization--ring--head"),s=document.querySelector(".visualization--resume");document.querySelector(".header");const c={27:{day:"57",date:"26 Feb, 2024",emotion:"Excited/Motivated",location:"Austria/United Kingdom"},26:{day:"49",date:"18 Feb, 2024",emotion:"Confused",location:"Austria",resume:`<ul><li>At the Iceland Airport</li>
            <li>At the Munich Airport</li>
            <li>Having someone pick me up at the airport in Europe</li>
            <li>Watching the beautiful Alps up close in Tyrol</li>
            <li>Living as a ‘family’ with my boyfriend and his daughter.</li></ul>`},25:{day:"44",date:"13 Feb, 2024",emotion:"Peaceful",location:"United States"},24:{day:"43",date:"12 Feb, 2024",emotion:"Excited/Motivated",location:"El Salvador",resume:"Yes, you can pay with crypto."},23:{day:"25",date:"25 Jan, 2024",emotion:"Just Fine",location:"México",resume:"I don’t recommend it; it was awful. There’s a high risk of thrombosis, and I experienced the worst headaches of my life. Never again."},19:{day:"75",date:"15 Mar, 2024",emotion:"Anxious/Stressed",location:"Austria/Germany/Iceland",resume:"Other first-time experiences from this trip that weren't documented include trying Korean BBQ, enjoying traditional Austrian food, going bouldering, jumping into the Nordkette for dinner in a Hütte, going to the Tate and the impressive Natural History Museum in London, seeing Fever Ray live, experiencing a real winter."},20:{day:"125",date:"5 Apr, 2024",emotion:"Confused",location:"México",resume:"My Buddhist teacher used to say: <br> “The one who feels badly, acts badly.” <br><br> I’m not justifying what I did, but it was a clear sign that I was no longer in control of my thoughts or actions. I was overwhelmed with anxiety and gripped by a fear of losing what, at the time, I believed was the relationship I had always dreamed of. I quite literally lost my mind and began acting erratically—undermining trust and pushing my partner away."},21:{day:"168",date:"16 Jun, 2024",emotion:"Sad",location:"México"},22:{day:"173",date:"21 Jun, 2024",emotion:"Excited/Motivated",location:"México",resume:"Achieving the 4 day Work Week happened almost by accident due to my mental health crisis but it was a game changer. I was finally able to work on my personal projects (like this one) in a week day, devoting 8 hours each week."},1:{day:"185",date:"03 Jul, 2024",emotion:"Happy/Satisfied",location:"México"},2:{day:"195",date:"13 Jul, 2024",emotion:"Extremely Sad",location:"México"},3:{day:"203",date:"21 Jul, 2024",emotion:"Extremely Confused",location:"México",resume:"That day, I felt overwhelmed and confused. I wanted to cry and felt the urge to call my ex for explanations. Instead, I decided to set a timer for two hours to create something nice using Midjourney. My mood changed completely; I felt joy and was grateful to see how happy I am when I’m creating. It doesn’t matter if it’s something simple."},4:{day:"217",date:"4 Aug, 2024",emotion:"Extremely Happy",location:"México",resume:"When it comes to doing something risky or extreme, I’m usually the one who watches others go first, feeling super anxious as my turn approaches. But this time, I was surprisingly relaxed and prepared—so much so that I volunteered to be the first! The guide approved and mentioned that the first 30 seconds would be unbearable, but after that, it would get easier. I thought to myself: I’ve been enduring unbearable emotional pain, sadness, confusion, and anxiety for at least three months; this is nothing for me! And boy, I did pretty well. I was proud of myself!"},5:{day:"241",date:"28 Aug, 2024",emotion:"Exited/Motivated",location:"México",resume:"Poverty Radar is one of my favorite projects—a physicalization that involves Arduino and hardware. This time, I invited a friend to collaborate, and he understood the idea perfectly and was willing to help. I couldn’t be more grateful and excited!"},6:{day:"248",date:"04 Sep, 2024",emotion:"Angry/Resentful",location:"México",resume:"This is another data humanist project: a dashboard tracking what I ate over the course of 10 months. It was originally intended to cover a full year, but I struggled to consistently record my meals during my trip to the US and Europe."},7:{day:"251",date:"07 Sep, 2024",emotion:"Happy/Satisfied",location:"México",resume:"As I learned how to overcome my breakup, I felt compelled to share my small victories with others in similar situations, showing them that there was a way out of the pain. This was the first of many pieces I planned to write, but I struggled to find time between my 9-to-6 job and side projects, which prevented me from completing the others."},8:{day:"252",date:"08 Sep, 2024",emotion:"Extremely Happy",location:"México"},9:{day:"271",date:"27 Sep, 2024",emotion:"Excited/Motivated",location:"México",resume:"A visual record of my most delicious meals, both at home and dining out, as well as my daily cup of coffee."},10:{day:"274",date:"30 Sep, 2024",emotion:"Excited/Motivated",location:"México",resume:"I see this as my very first step toward becoming a creative technologist. I’m not sure yet if I’ll be able to make it, but it’s worth trying."},11:{day:"291",date:"17 Oct, 2024",emotion:"Happy/Peaceful",location:"México"},12:{day:"295",date:"21 Oct, 2024",emotion:"Extremely Happy/Grateful",location:"Portugal/France/Italy/Austria",resume:"Growing up in a working-class family, my mom never had the chance to travel overseas. As a child, I vowed to change that for her. Seeing her explore new places for the first time was one of the most fulfilling experiences of my life, and those cherished memories will remain with me always. 💜"},13:{day:"306",date:"1 Nov, 2024",emotion:"Excited/Grateful",location:"Austria"},14:{day:"308",date:"3 Nov, 2024",emotion:"Excited",location:"Austria"},15:{day:"335",date:"30 Nov, 2024",emotion:"Extremely Happy",location:"México"},16:{day:"336",date:"01 Dec, 2024",emotion:"Excited/Motivated",location:"México",resume:"It wasn’t really about getting the job; I knew I had no chance. But for the first time in my life, it felt like I had the perfect experience and profile for the position. So, I put together my resume and latest projects and sent it off. It was a huge step for me since I’ve been dealing with impostor syndrome my whole life. "},17:{day:"359",date:"24 Dec, 2024",emotion:"Inspired",location:"México"},18:{day:"360",date:"25 Dec, 2024",emotion:"Inspired",location:"México",resume:"As the year came to a close, I realized I wasn’t achieving the results I hoped for from the Max course. This made me quite anxious, so I decided to dedicate my Christmas holidays to learning the basics of Arduino on my own. I was so invested in it that I chose to skip the Christmas celebration with my family, something I had never done before."}},n=r=>{const i=c[r],m=Object.values(i).every(u=>u==="");if(i&&a&&(m?a.querySelectorAll("span").forEach(u=>{u.innerHTML=""}):(a.querySelector("#ring-day").innerHTML=`Day <strong>${i.day}</strong>`,a.querySelector("#ring-date").innerHTML=`Date <strong>${i.date}</strong>`,a.querySelector("#ring-emotion").innerHTML=`Emotion/Mood <strong>${i.emotion}</strong>`,a.querySelector("#ring-location").innerHTML=`Location <strong>${i.location}</strong>`),i.resume)){s.querySelector("p").innerHTML=i.resume;const u=[...s.classList].filter(f=>f.startsWith("resume-"));s.classList.remove(...u),s.classList.add("show",`resume-${r}`)}};t.forEach(r=>{let i=r.id.replace("nodo-",""),m=document.querySelector(`#ring${i}`),u=document.querySelector(".svg-flechas"),f=document.querySelector(".svg-indicador"),h=document.querySelector(".flechas");r.addEventListener("mouseenter",()=>{m&&(o.classList.add("hover"),m.classList.add("show"),n(parseInt(i)),header.style.visibility="hidden",f.style.display="none",u.style.display="block",h.setAttribute("href",`/img/flecha-${i}.webp`),u.id=`flecha-${i}`)}),r.addEventListener("mouseleave",()=>{m&&(o.classList.remove("hover"),m.classList.remove("show"),s.classList.remove("show"),header.style.visibility="visible",h.setAttribute("href","/img/flecha-00.webp"),f.style.display="block",u.style.display="none")})}),e.forEach(r=>{let i=r.id.replace("period-",""),m=document.querySelector(`#yellow-${i}`),u=document.querySelector(".deeper"),f=document.querySelector(".svg-indicador");r.addEventListener("mouseenter",()=>{m&&(o.classList.add("hoverYellow"),m.classList.add("show"),_e(parseInt(i)),header.style.visibility="hidden",f.style.display="none",u.style.display="block",u.id=`deeper-${i}`)}),r.addEventListener("mouseleave",()=>{m&&(o.classList.remove("hoverYellow"),m.classList.remove("show"),header.style.visibility="visible",f.style.display="block",u.style.display="none")}),r.addEventListener("click",()=>{Re(i)});function h(){u.querySelector("rect").setAttribute("width",W.matches?"280":V.matches?"270":"240"),u.querySelector("text").setAttribute("x",W.matches?"140":V.matches?"135":"120")}h(),window.addEventListener("resize",h)})},Oe=()=>{Pe(),ze(),Be()};Oe();

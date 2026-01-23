import{s as C}from"./loadLocomotive-CvnLs4nJ.js";let p=null,w=null,y=null,v=null,f=[],d={story:[],data:[],high:[],resume:[],read:[]};async function R(t){try{const e=await fetch(t);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(e){return console.error("Error al cargar el JSON:",e),null}}function E(t){return new URLSearchParams(window.location.search).get(t)}function _(t){return{"Extremely confused":"ext-confused",Grateful:"gratefull","Just fine":"just-fine","Happy/Satisfied":"happy-satisfied",Peaceful:"peaceful",Sad:"sad","Extremely Sad":"ext-sad","Excited / Motivated":"exited-motiv",Confused:"confused",Inspired:"inspired","Anxious / Stressed":"anxious-stress","Extremely Happy":"ext-happy","Angry / Resentful":"angry-resent"}[t]||""}function B(t,e){return`
        <section class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="title">${t.title}</h1>
                    </div>
                    <div class="col-12 hero--info">
                        <h4>0${e}</h4>
                        <div class="hero__data">
                            <span><strong>${t.fecha}</strong></span>
                        </div>
                        <div class="hero__data">
                            <span>Range <strong>${t.rango}</strong></span>
                            <span>Duration<strong>${t.duracion}</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `}function L(t){const e=[];return t.forEach(n=>{Object.keys(n).forEach(o=>{e.push(n[o])})}),e}function H(t,e){t.querySelector('[data-field="day"]').textContent=e.day,t.querySelector('[data-field="emotion"]').textContent=e.emotion,t.querySelector('[data-field="location"]').textContent=e.location,t.querySelector('[data-field="date"]').textContent=e.date,t.querySelector('[data-field="title"]').innerHTML=e.title,t.querySelector('[data-field="resume"]').textContent=e.resume,t.querySelector('[data-field="image"]').src=`./../img/${e.image}`;const n=t.querySelector("figure");e.botones==="3"?n.dataset.botones="3":e.botones==="2"?n.dataset.botones="2":e.botones==="1"&&(n.dataset.botones="1")}function P(t,e){return Array.from({length:t}).map((n,o)=>`
            <img src="./../img/ring.png" alt="" class='${o===0?"active":""}' 
            data-ring-index="${o}">
        `).join("")}function O(t){if(!t||t.length===0)return"";const e=L(t),n=e[0];return`
        <dialog id="modal-high">
            <div class="modal--content">
                <button class="close"></button>

                <section>
                    <div class="container">
                        <div class="row">

                            <div class="col-12 modal-high--meta">
                                <p>
                                    <span>Day<strong data-field="day">${n.day}</strong></span>
                                    <span>Emotion/Mood<strong data-field="emotion">${n.emotion}</strong></span>
                                    <span>Location<strong data-field="location">${n.location}</strong></span>
                                </p>
                            </div>

                            <div class="col-12 modal-high--image">
                                <figure>
                                    <button class="button button-primary" id="btn-viz">
                                        my first time
                                    </button>
                                    
                                    <button class="button button-primary" id="btn-miles">milestone</button>
                                    
                                    <picture class="img-cover">
                                        <img data-field="image" src="./../img/${n.image}" alt="">
                                    </picture>

                                    <picture class="img-ring">
                                        ${P(e.length)}
                                    </picture>
                                </figure>
                            </div>

                            <div class="col-12 modal-high--content">
                                <h5>
                                    <span data-field="date">${n.date}</span>
                                    <span data-field="title">${n.title}</span>
                                </h5>
                                <p data-field="resume">${n.resume}</p>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </dialog>
    `}function I(t,e){const n=t.emotions.map(i=>`
        <div class="visualization--data__row ${_(i.emotion)}">
            <span>${i.emotion}</span>
            <span>${i.count}</span>
            <span>${i.percentage}</span>
        </div>
    `).join(""),o=t.total?`
        <div class="visualization--data__row">
            <span><strong>Total</strong></span>
            <span>${t.total.count}</span>
            <span>${t.total.percentage}</span>
        </div>
    `:"",s=Object.keys(p).map(i=>`<a data-period="${i}" ${i===e?'class="active"':""}>${i}</a>`).join("");return`
        <section class="periods" id="period-${e}" >
            <div class="container">
                <div class="row">
                    <div class="col-12 periods-image">
                        ${t.hover?'<span class="periods-hover"></span>':""}
                        <picture class="img-cover">
                            <img src="./../img/${t.imagen}" alt="${t.title}">
                        </picture>
                    </div>
                    <div class="col-12 periods--pagination">
                        ${s}
                    </div>
                    <div class="col-12 periods--data">
                        <div class="visualization--data--table">
                            ${n}
                            ${o}
                        </div>
                    </div>
                    <div class="col-12 periods--summary">
                        <h4>SUMMARY</h4>
                        <p>${t.resumen}</p>
                    </div>
                    <div class="col-12 periods--botonera">
                        <button class="button button-icon star">View Highlights</button>
                         ${t.fullStory?'<button class="button button-icon read">Read full story</button>':""}
                        <button class="button button-icon data">View Data</button>
                    </div>
                </div>
            </div>
        </section>
        ${t.fullStory?`
                    <dialog id="modal-resume">
                        <div class="modal--content">
                            <section class="resume">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12">
                                                ${t.story}
                                            <button class="button button-primary button-min">CLOSE</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </dialog>
                    `:""}
    `}function J(t,e){if(!t||!Array.isArray(t)||t.length===0)return"";const n=t.map(a=>a.day),o=Math.min(...n),s=Math.max(...n),i=t.length,u=t[0].date,r=t[t.length-1].date;function l(a,c){const g=new Date(a),M=new Date(c),x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],A=x[g.getMonth()],q=x[M.getMonth()],T=g.getDate(),j=M.getDate(),k=g.getFullYear();return`${T} ${A} - ${j} ${q}, ${k}`}function m(a){if(!a||a===0||a==="")return"";const c=parseInt(a);return Array(c).fill("<i></i>").join(`
                                    `)}function b(a){const c=new Date(a),g=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${c.getDate()} ${g[c.getMonth()]}`}function h(a){return{"Extremely confused":"ext-confused",Grateful:"gratefull","Just fine":"just-fine","Happy/Satisfied":"happy-satisfied","Happy / Satisfied":"happy-satisfied",Peaceful:"peaceful",Sad:"sad","Extremely Sad":"ext-sad","Excited / Motivated":"exited-motiv","Excited /Motivated":"exited-motiv",Confused:"confused",Inspired:"inspired","Anxious / Stressed":"anxious-stress","Anxious - Stressed":"anxious-stress","Extremely Happy":"ext-happy","Angry / Resentful":"angry-resent"}[a]||""}const $=t.map(a=>{const c=m(a.timesCried);return`
                            <div class="modal-data--row ${h(a.mood)}">
                                <span>${a.day}</span>
                                <span>${b(a.date)}</span>
                                <span>${a.mood}${c?`
                                    ${c}`:""}
                                </span>
                            </div>`}).join("");return`
        <dialog id="modal-data">
            <div class="modal--content">
                <button class="close"></button>
                <section class="hero">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h1 class="title">${e}</h1>
                            </div>
                            <div class="col-12">
                                <div class="hero__data">
                                    <span><strong>${l(u,r)}</strong></span>
                                </div>
                                <div class="hero__data">
                                    <span>Range <strong>Days ${o} to ${s}</strong></span>
                                    <span>Duration<strong>${i} days</strong></span>
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
                                    </div>${$}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </dialog>
    `}function S(t){const e=p[t];if(!e){console.error(`No se encontraron datos para el periodo: ${t}`);return}D();const n=document.getElementById("modal-story"),o=J(e.data,e.title),s=new DOMParser().parseFromString(o,"text/html").body.firstChild,i=n?n.cloneNode(!0):null,u=O(e.highlights);w=e.highlights;const r=document.querySelector("main")||document.body,l=B(e,t),m=I(e,t);r.innerHTML="",r.insertAdjacentElement("afterbegin",s),r.insertAdjacentElement("afterbegin",i),r.insertAdjacentHTML("afterbegin",u),r.insertAdjacentHTML("afterbegin",m),r.insertAdjacentHTML("afterbegin",l),N(),Q()}function N(){f.forEach(({element:e,handler:n})=>{e.removeEventListener("click",n)}),f=[],document.querySelectorAll(".periods--pagination a[data-period]").forEach(e=>{const n=o=>{o.preventDefault();const s=o.target.getAttribute("data-period");F(s)};e.addEventListener("click",n),f.push({element:e,handler:n})})}function F(t){const e=new URL(window.location);e.searchParams.set("period",t),window.history.pushState({},"",e),S(t)}function z(){const t=document.querySelector("#modal-resume p"),e=document.querySelector("#modal-resume a");if(e){const n=()=>{const o=t.classList.toggle("is-open");e.textContent=o?"Read less":"Read more",e.setAttribute("aria-expanded",o)};e.addEventListener("click",n),d.read.push({element:e,handler:n})}}const U=async()=>{if(p=await R("./../json/periods.json"),!p){console.error("No se pudieron cargar los datos");return}const t=E("period")||Object.keys(p)[0];if(!E("period")){const e=new URL(window.location);e.searchParams.set("period",t),window.history.replaceState({},"",e)}S(t),v=()=>{const e=E("period")||Object.keys(p)[0];S(e)},window.addEventListener("popstate",v)},G=()=>{const t=document.getElementById("modal-story"),e=document.querySelector(".button.read"),n=t?t.querySelector(".close"):null;if(t&&e&&n){const o=()=>t.showModal(),s=()=>t.close();e.addEventListener("click",o),n.addEventListener("click",s),d.story.push({element:e,handler:o},{element:n,handler:s})}},V=()=>{const t=document.getElementById("modal-data"),e=document.querySelector(".button.data"),n=t?t.querySelector(".close"):null;if(t&&e&&n){const o=()=>t.showModal(),s=()=>t.close();e.addEventListener("click",o),n.addEventListener("click",s),d.data.push({element:e,handler:o},{element:n,handler:s})}},Y=()=>{const t=document.getElementById("modal-high"),e=document.querySelector(".button.star"),n=t?t.querySelector(".close"):null,o=document.querySelector(".periods").getAttribute("id");if(t.classList.add(o),t&&e&&n){const s=()=>t.showModal(),i=()=>t.close();e.addEventListener("click",s),n.addEventListener("click",i),d.high.push({element:e,handler:s},{element:n,handler:i});const u=L(w),r=t.querySelectorAll(".img-ring img");H(t,u[0]),r.forEach(l=>{const m=()=>{const b=Number(l.dataset.ringIndex),h=u[b];h&&(r.forEach($=>$.classList.remove("active")),l.classList.add("active"),H(t,h))};l.addEventListener("click",m),d.high.push({element:l,handler:m})})}},K=()=>{const t=document.getElementById("modal-resume"),e=document.querySelector(".periods-hover"),n=t?t.querySelector(".button"):null;if(t&&e&&n){const o=()=>t.showModal(),s=()=>t.close();e.addEventListener("click",o),n.addEventListener("click",s),d.resume.push({element:e,handler:o},{element:n,handler:s})}};function D(){Object.values(d).forEach(t=>{t.forEach(({element:e,handler:n})=>{e&&e.removeEventListener("click",n)})}),d={story:[],data:[],high:[],resume:[],read:[]}}function Q(){G(),V(),Y(),K(),z()}function X(){U(),y=C()}function Z(){y&&(y.destroy(),y=null),v&&(window.removeEventListener("popstate",v),v=null),f.forEach(({element:t,handler:e})=>{t&&t.removeEventListener("click",e)}),f=[],D(),p=null,w=null}export{Z as destroy,X as init};

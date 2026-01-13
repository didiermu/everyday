import{s as w}from"./loadLocomotive-DUo0yfuB.js";let c=null,f=null,g=null,u=null,m=[],r={story:[],data:[],high:[],resume:[],read:[]};async function H(e){try{const t=await fetch(e);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return await t.json()}catch(t){return console.error("Error al cargar el JSON:",t),null}}function v(e){return new URLSearchParams(window.location.search).get(e)}function M(e){return{"Extremely confused":"ext-confused",Grateful:"gratefull","Just fine":"just-fine","Happy/Satisfied":"happy-satisfied",Peaceful:"peaceful",Sad:"sad","Extremely Sad":"ext-sad","Excited / Motivated":"exited-motiv",Confused:"confused",Inspired:"inspired","Anxious / Stressed":"anxious-stress","Extremely Happy":"ext-happy","Angry / Resentful":"angry-resent"}[e]||""}function x(e){return`
        <section class="hero" >
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="title">${e.title}</h1>
                    </div>
                    <div class="col-12">
                        <div class="hero__data">
                            <span><strong>${e.fecha}</strong></span>
                        </div>
                        <div class="hero__data">
                            <span>Range <strong>${e.rango}</strong></span>
                            <span>Duration<strong>${e.duracion}</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `}function E(e){const t=[];return e.forEach(n=>{Object.keys(n).forEach(o=>{t.push(n[o])})}),t}function b(e,t){e.querySelector('[data-field="day"]').textContent=t.day,e.querySelector('[data-field="emotion"]').textContent=t.emotion,e.querySelector('[data-field="location"]').textContent=t.location,e.querySelector('[data-field="date"]').textContent=t.date,e.querySelector('[data-field="title"]').innerHTML=t.title,e.querySelector('[data-field="resume"]').textContent=t.resume,e.querySelector('[data-field="image"]').src=`./../img/${t.image}`;const n=e.querySelector("figure");t.botones==="3"?n.dataset.botones="3":t.botones==="2"?n.dataset.botones="2":t.botones==="1"&&(n.dataset.botones="1")}function q(e,t){return Array.from({length:e}).map((n,o)=>`
            <img src="./../img/ring.png" alt="" class='${o===0?"active":""}' 
            data-ring-index="${o}">
        `).join("")}function k(e){if(!e||e.length===0)return"";const t=E(e),n=t[0];return`
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
                                        ${q(t.length)}
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
    `}function T(e,t){const n=e.emotions.map(a=>`
        <div class="visualization--data__row ${M(a.emotion)}">
            <span>${a.emotion}</span>
            <span>${a.count}</span>
            <span>${a.percentage}</span>
        </div>
    `).join(""),o=e.total?`
        <div class="visualization--data__row">
            <span><strong>Total</strong></span>
            <span>${e.total.count}</span>
            <span>${e.total.percentage}</span>
        </div>
    `:"",s=Object.keys(c).map(a=>`<a data-period="${a}" ${a===t?'class="active"':""}>${a}</a>`).join("");return`
        <section class="periods" id="period-${t}" >
            <div class="container">
                <div class="row">
                    <div class="col-12 periods-image">
                        ${e.hover?'<span class="periods-hover"></span>':""}
                        <picture class="img-cover">
                            <img src="./../img/${e.imagen}" alt="${e.title}">
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
                        <p>${e.resumen}</p>
                        <button class="button button-icon star">View Highlights</button>
                         ${e.hover?'<button class="button button-icon read">Read full story</button>':""}
                        <button class="button button-icon data">View Data</button>
                    </div>
                </div>
            </div>
        </section>
        ${e.hover?`
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
    `}function h(e){const t=c[e];if(!t){console.error(`No se encontraron datos para el periodo: ${e}`);return}L();const n=document.getElementById("modal-story"),o=document.getElementById("modal-data"),s=n?n.cloneNode(!0):null,a=o?o.cloneNode(!0):null,d=k(t.highlights);f=t.highlights;const i=document.querySelector("main")||document.body,l=x(t),p=T(t,e);i.innerHTML="",i.insertAdjacentElement("afterbegin",a),i.insertAdjacentElement("afterbegin",s),i.insertAdjacentHTML("afterbegin",d),i.insertAdjacentHTML("afterbegin",p),i.insertAdjacentHTML("afterbegin",l),j(),I()}function j(){m.forEach(({element:t,handler:n})=>{t.removeEventListener("click",n)}),m=[],document.querySelectorAll(".periods--pagination a[data-period]").forEach(t=>{const n=o=>{o.preventDefault();const s=o.target.getAttribute("data-period");A(s)};t.addEventListener("click",n),m.push({element:t,handler:n})})}function A(e){const t=new URL(window.location);t.searchParams.set("period",e),window.history.pushState({},"",t),h(e)}function B(){const e=document.querySelector("#modal-resume p"),t=document.querySelector("#modal-resume a");if(t){const n=()=>{const o=e.classList.toggle("is-open");t.textContent=o?"Read less":"Read more",t.setAttribute("aria-expanded",o)};t.addEventListener("click",n),r.read.push({element:t,handler:n})}}const R=async()=>{if(c=await H("./../json/periods.json"),!c){console.error("No se pudieron cargar los datos");return}const e=v("period")||Object.keys(c)[0];if(!v("period")){const t=new URL(window.location);t.searchParams.set("period",e),window.history.replaceState({},"",t)}h(e),u=()=>{const t=v("period")||Object.keys(c)[0];h(t)},window.addEventListener("popstate",u)},C=()=>{const e=document.getElementById("modal-story"),t=document.querySelector(".button.read"),n=e?e.querySelector(".close"):null;if(e&&t&&n){const o=()=>e.showModal(),s=()=>e.close();t.addEventListener("click",o),n.addEventListener("click",s),r.story.push({element:t,handler:o},{element:n,handler:s})}},P=()=>{const e=document.getElementById("modal-data"),t=document.querySelector(".button.data"),n=e?e.querySelector(".close"):null;if(e&&t&&n){const o=()=>e.showModal(),s=()=>e.close();t.addEventListener("click",o),n.addEventListener("click",s),r.data.push({element:t,handler:o},{element:n,handler:s})}},_=()=>{const e=document.getElementById("modal-high"),t=document.querySelector(".button.star"),n=e?e.querySelector(".close"):null,o=document.querySelector(".periods").getAttribute("id");if(e.classList.add(o),e&&t&&n){const s=()=>e.showModal(),a=()=>e.close();t.addEventListener("click",s),n.addEventListener("click",a),r.high.push({element:t,handler:s},{element:n,handler:a});const d=E(f),i=e.querySelectorAll(".img-ring img");b(e,d[0]),i.forEach(l=>{const p=()=>{const S=Number(l.dataset.ringIndex),y=d[S];y&&(i.forEach($=>$.classList.remove("active")),l.classList.add("active"),b(e,y))};l.addEventListener("click",p),r.high.push({element:l,handler:p})})}},D=()=>{const e=document.getElementById("modal-resume"),t=document.querySelector(".periods-hover"),n=e?e.querySelector(".button"):null;if(e&&t&&n){const o=()=>e.showModal(),s=()=>e.close();t.addEventListener("click",o),n.addEventListener("click",s),r.resume.push({element:t,handler:o},{element:n,handler:s})}};function L(){Object.values(r).forEach(e=>{e.forEach(({element:t,handler:n})=>{t&&t.removeEventListener("click",n)})}),r={story:[],data:[],high:[],resume:[],read:[]}}function I(){C(),P(),_(),D(),B()}function N(){R(),g=w()}function z(){g&&(g.destroy(),g=null),u&&(window.removeEventListener("popstate",u),u=null),m.forEach(({element:e,handler:t})=>{e&&e.removeEventListener("click",t)}),m=[],L(),c=null,f=null}export{z as destroy,N as init};

let r=null,g=null;async function y(t){try{const e=await fetch(t);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(e){return console.error("Error al cargar el JSON:",e),null}}function u(t){return new URLSearchParams(window.location.search).get(t)}function h(t){return{"Extremely confused":"ext-confused",Grateful:"gratefull","Just fine":"just-fine","Happy/Satisfied":"happy-satisfied",Peaceful:"peaceful",Sad:"sad","Extremely Sad":"ext-sad","Excited / Motivated":"exited-motiv",Confused:"confused",Inspired:"inspired","Anxious / Stressed":"anxious-stress","Extremely Happy":"ext-happy","Angry / Resentful":"angry-resent"}[t]||""}function b(t){return`
        <section class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="title">${t.title}</h1>
                    </div>
                    <div class="col-12">
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
    `}function v(t){const e=[];return t.forEach(o=>{Object.keys(o).forEach(n=>{e.push(o[n])})}),e}function p(t,e){t.querySelector('[data-field="day"]').textContent=e.day,t.querySelector('[data-field="emotion"]').textContent=e.emotion,t.querySelector('[data-field="location"]').textContent=e.location,t.querySelector('[data-field="date"]').textContent=e.date,t.querySelector('[data-field="title"]').innerHTML=e.title,t.querySelector('[data-field="resume"]').textContent=e.resume,t.querySelector('[data-field="image"]').src=`./../img/${e.image}`;const o=t.querySelector("figure");e.botones==="3"?o.dataset.botones="3":e.botones==="2"?o.dataset.botones="2":e.botones==="1"&&(o.dataset.botones="1")}function S(t,e){return Array.from({length:t}).map((o,n)=>`
            
                <img src="./../img/ring.png" alt="" class='${n===0?"active":""}' 
                data-ring-index="${n}">
            
        `).join("")}function $(t){if(!t||t.length===0)return"";const e=v(t),o=e[0];return`
        <dialog id="modal-high">
            <div class="modal--content">
                <button class="close"></button>

                <section>
                    <div class="container">
                        <div class="row">

                            <div class="col-12 modal-high--meta">
                                <p>
                                    <span>Day<strong data-field="day">${o.day}</strong></span>
                                    <span>Emotion/Mood<strong data-field="emotion">${o.emotion}</strong></span>
                                    <span>Location<strong data-field="location">${o.location}</strong></span>
                                </p>
                            </div>

                            <div class="col-12 modal-high--image">
                                <figure>
                                    <button class="button button-primary" id="btn-viz">
                                        my first time
                                    </button>
                                    
                                    <button class="button button-primary" id="btn-miles">milestone</button>
                                    
                                    <picture class="img-cover">
                                        <img data-field="image" src="./../img/${o.image}" alt="">
                                    </picture>

                                    <picture class="img-ring">
                                        ${S(e.length)}
                                    </picture>
                                </figure>
                            </div>

                            <div class="col-12 modal-high--content">
                                <h5>
                                    <span data-field="date">${o.date}</span>
                                    <span data-field="title">${o.title}</span>
                                </h5>
                                <p data-field="resume">${o.resume}</p>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </dialog>
    `}function E(t,e){const o=t.emotions.map(s=>`
        <div class="visualization--data__row ${h(s.emotion)}">
            <span>${s.emotion}</span>
            <span>${s.count}</span>
            <span>${s.percentage}</span>
        </div>
    `).join(""),n=t.total?`
        <div class="visualization--data__row">
            <span><strong>Total</strong></span>
            <span>${t.total.count}</span>
            <span>${t.total.percentage}</span>
        </div>
    `:"",i=Object.keys(r).map(s=>`<a data-period="${s}" ${s===e?'class="active"':""}>${s}</a>`).join("");return`
        <section class="periods" id="period-${e}">
            <div class="container">
                <div class="row">
                    <div class="col-12 periods-image">
                        ${t.hover?'<span class="periods-hover"></span>':""}
                        <picture class="img-cover">
                            <img src="./../img/${t.imagen}" alt="${t.title}">
                        </picture>
                    </div>
                    <div class="col-12 periods--pagination">
                        ${i}
                    </div>
                    <div class="col-12 periods--data">
                        <div class="visualization--data--table">
                            ${o}
                            ${n}
                        </div>
                    </div>
                    <div class="col-12 periods--summary">
                        <h4>SUMMARY</h4>
                        <p>${t.resumen}</p>
                        <button class="button button-icon star">View Highlights</button>
                         ${t.hover?'<button class="button button-icon read">Read full story</button>':""}
                        <button class="button button-icon data">View Data</button>
                    </div>
                </div>
            </div>
        </section>
        ${t.hover?`
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

    `}function m(t){const e=r[t];if(!e){console.error(`No se encontraron datos para el periodo: ${t}`);return}const o=document.getElementById("modal-story"),n=document.getElementById("modal-data"),i=o?o.cloneNode(!0):null,s=n?n.cloneNode(!0):null,l=$(e.highlights);g=e.highlights;const a=document.querySelector("main")||document.body,d=b(e),c=E(e,t);a.innerHTML="",a.insertAdjacentElement("afterbegin",s),a.insertAdjacentElement("afterbegin",i),a.insertAdjacentHTML("afterbegin",l),a.insertAdjacentHTML("afterbegin",c),a.insertAdjacentHTML("afterbegin",d),w(),A()}function w(){document.querySelectorAll(".periods--pagination a[data-period]").forEach(e=>{e.addEventListener("click",o=>{o.preventDefault();const n=o.target.getAttribute("data-period");L(n)})})}function L(t){const e=new URL(window.location);e.searchParams.set("period",t),window.history.pushState({},"",e),m(t)}function x(){const t=document.querySelector("#modal-resume p"),e=document.querySelector("#modal-resume a");e&&e.addEventListener("click",()=>{const o=t.classList.toggle("is-open");e.textContent=o?"Read less":"Read more",e.setAttribute("aria-expanded",o)})}const q=async()=>{if(r=await y("./../json/periods.json"),!r){console.error("No se pudieron cargar los datos");return}const t=u("period")||Object.keys(r)[0];if(!u("period")){const e=new URL(window.location);e.searchParams.set("period",t),window.history.replaceState({},"",e)}m(t),window.addEventListener("popstate",()=>{const e=u("period")||Object.keys(r)[0];m(e)})},M=()=>{const t=document.getElementById("modal-story"),e=document.querySelector(".button.read"),o=t?t.querySelector(".close"):null;t&&e&&o&&(e.addEventListener("click",()=>{t.showModal()}),o.addEventListener("click",()=>{t.close()}))},H=()=>{const t=document.getElementById("modal-data"),e=document.querySelector(".button.data"),o=t?t.querySelector(".close"):null;t&&e&&o&&(e.addEventListener("click",()=>{t.showModal()}),o.addEventListener("click",()=>{t.close()}))},T=()=>{const t=document.getElementById("modal-high"),e=document.querySelector(".button.star"),o=t?t.querySelector(".close"):null;t.querySelector("figure");const n=document.querySelector(".periods").getAttribute("id");if(t.classList.add(n),t&&e&&o){e.addEventListener("click",()=>{t.showModal()}),o.addEventListener("click",()=>{t.close()});const i=v(g),s=t.querySelectorAll(".img-ring img");p(t,i[0]),s.forEach(a=>{a.addEventListener("click",()=>{const d=Number(a.dataset.ringIndex),c=i[d];c&&(s.forEach(f=>f.classList.remove("active")),a.classList.add("active"),p(t,c))})})}},k=()=>{const t=document.getElementById("modal-resume"),e=document.querySelector(".periods-hover"),o=t?t.querySelector(".button"):null;t&&e&&o&&(e.addEventListener("click",()=>{t.showModal()}),o.addEventListener("click",()=>{t.close()}))};function A(){M(),H(),T(),k(),x()}function j(){q()}export{j as init};

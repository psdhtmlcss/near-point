(()=>{"use strict";const e=document.querySelector(".js-search-form"),t=e.querySelector(".js-from"),s=e.querySelector(".js-to"),a=e.querySelector(".js-loader"),n=e.querySelector(".js-search-icon"),o=document.querySelector(".js-search-results"),r=document.querySelector(".js-search-image"),i=document.querySelector(".js-suggestions");i.addEventListener("click",(a=>{if(a.target.classList.contains("suggestions__item"))return"from"===e.dataset.direction?(t.value=a.target.textContent,e.dataset.from=a.target.textContent,void(i.innerHTML="")):"to"===e.dataset.direction?(s.value=a.target.textContent,e.dataset.to=a.target.textContent,void(i.innerHTML="")):void 0}));const d=()=>{o.style.display="none",r.style.display="block"},l=e=>{const t={method:"post",mode:"cors",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Token 00b2faf5951eeec32658d0710687c19e2df10e4b"},body:JSON.stringify({query:e})};fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",t).then((e=>e.text())).then((e=>{return t=JSON.parse(e),i.innerHTML="",void t.suggestions.forEach((e=>{i.insertAdjacentHTML("beforeend",`<li class="suggestions__item">${e.value}</li>`)}));var t})).catch((e=>console.log("error",e)))};t.addEventListener("input",(t=>{e.dataset.direction="from",l(t.target.value)})),s.addEventListener("input",(e=>{l(e.target.value)})),t.addEventListener("click",(()=>{e.dataset.direction="from",d()})),s.addEventListener("click",(()=>{e.dataset.direction="to",d()})),e.addEventListener("submit",(i=>{i.preventDefault(),e.dataset.from!==t.value||""===e.dataset.from||e.dataset.to!==s.value||""===e.dataset.to?alert("Выберите город из списка"):(t.disabled=!0,s.disabled=!0,n.style.display="none",a.style.display="inline-block",setTimeout((()=>{o.style.display="flex",r.style.display="none",t.disabled=!1,s.disabled=!1,n.style.display="inline",a.style.display="none"}),1e3))}))})();
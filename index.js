import{a as b,i as g,S as L}from"./assets/vendor-DtOuICiv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();async function m(t,r,i){const n="https://pixabay.com/api/",e={key:"49126238-069e1a94ee3ccc35c34a34de0",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:i};return(await b.get(n,{params:e})).data}function v(t){const{webformatURL:r,largeImageURL:i,tags:n,likes:e,views:a,comments:c,downloads:y}=t;return`<li class="photo-card">
  <a class="gallery-link" href="${i}">
  <img class="gallery-image" src="${r}" alt="${n}"/></a><div class="info"><div class="block">
  <h2 class="tittle">Likes</h2>
  <p class="amount">${e}</p>
</div>
<div class="block">
  <h2 class="tittle">Views</h2>
  <p class="amount">${a}</p>
</div>
<div class="block">
  <h2 class="tittle">Comments</h2>
  <p class="amount">${c}</p>
</div>
<div class="block">
  <h2 class="tittle">Downloads</h2>
  <p class="amount">${y}</p>
</div></div></li>`}function u(t){return t.map(v).join("")}const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),btnNext:document.querySelector(".gallery-btn"),loader:document.querySelector(".loader")};let p;const s={message:"",page:null,total:1,perPage:40};l();o.form.addEventListener("submit",x);async function x(t){t.preventDefault(),o.gallery.innerHTML="",h();const r=t.target.elements.search.value.trim();s.message=r,s.page=1,l();try{const i=await m(s.message,s.page,s.perPage);if(l(),i.hits.length===0)l(),d(),g.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"});else{const n=u(i.hits);o.gallery.innerHTML=n,s.total=i.totalHits,f(),p=new L(".gallery a"),o.loader.classList.add("hidden"),t.target.reset()}}catch(i){o.gallery.innerHTML="",o.loader.classList.add("hidden"),g.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),console.log(i)}}o.btnNext.addEventListener("click",async()=>{l(),h(),s.page+=1;try{const t=await m(s.message,s.page,s.perPage),r=u(t.hits);o.gallery.insertAdjacentHTML("beforeend",r),p.refresh(),d(),f(),P()}catch{g.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"}),d()}});function h(){o.loader.classList.remove("hidden")}function d(){o.loader.classList.add("hidden")}function w(){o.btnNext.style.display=""}function l(){o.btnNext.style.display="none"}function f(){const t=Math.ceil(s.total/s.perPage);s.page>=t||s.total<s.perPage?(l(),g.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):w()}function P(){const r=o.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({behavior:"smooth",top:r*2})}
//# sourceMappingURL=index.js.map

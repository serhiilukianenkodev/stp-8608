import"./assets/footer-a528a3b4.js";(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),o=document.querySelector(".mobile-menu-container"),c=e.querySelectorAll('a[href*="#"]'),r=()=>{const n=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open");const i=n?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[i](o)};t.addEventListener("click",r),s.addEventListener("click",r),c.forEach(n=>{n.addEventListener("click",()=>{r()})}),window.matchMedia("(min-width: 1200px)").addEventListener("change",n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(o))})})();const l=document.querySelectorAll(".section"),d=document.querySelectorAll(".header-nav-link"),a={root:null,rootMargin:"0px",threshold:.7},u=new IntersectionObserver(e=>{e.forEach(t=>{const s=t.target.getAttribute("id"),o=document.querySelector(`.header-nav-link[href="#${s}"]`);o&&t.isIntersecting&&(d.forEach(c=>{c.classList.remove("active")}),o.classList.add("active"))})},a);l.forEach(e=>{u.observe(e)});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".cookie-popup"),t=document.querySelector(".cookie-accept"),s=document.querySelector(".cookie-decline");localStorage.getItem("cookieClicked")||e.classList.add("show");const c=r=>{localStorage.setItem("cookieClicked",r),e.classList.remove("show")};t.addEventListener("click",()=>c("accepted")),s.addEventListener("click",()=>c("declined"))});
//# sourceMappingURL=commonHelpers2.js.map

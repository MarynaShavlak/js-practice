const e=document.querySelector(".js-contact-form"),t={};(()=>{try{const t=JSON.parse(localStorage.getItem("userData"));if(null===t)return;for(const a in t)e.elements[a].value=t[a]}catch(e){console.log(e)}})();e.addEventListener("change",(e=>{const{target:a}=e,r=a.name,n=a.value;t[r]=n,localStorage.setItem("userData",JSON.stringify(t))})),e.addEventListener("submit",(t=>{t.preventDefault(),e.reset(),localStorage.removeItem("userData")}));
//# sourceMappingURL=contact-form.7ae1ce43.js.map

const e=document.querySelector(".js-palette"),r=[{hex:"#f44336",rgb:"244,67,54"},{hex:"#e91e63",rgb:"233,30,99"},{hex:"#9c27b0",rgb:"156,39,176"},{hex:"#673ab7",rgb:"103,58,183"},{hex:"#3f51b5",rgb:"63,81,181"},{hex:"#2196f3",rgb:"33,150,243"},{hex:"#00bcd4",rgb:"0,188,212"},{hex:"#009688",rgb:"0,150,136"},{hex:"#4caf50",rgb:"76,175,80"},{hex:"#ffeb3b",rgb:"255,235,59"},{hex:"#ff9800",rgb:"255,152,0"},{hex:"#795548",rgb:"121,85,72"},{hex:"#607d8b",rgb:"96,125,139"}].map((({hex:e,rgb:r})=>`\n    <div class="color-card">\n     <div><div><div> <div\n     class="color-swatch"\n     data-hex="${e}"\n     data-rgb="${r}"\n     style="background-color: ${e}"\n   ></div></div></div></div>\n      <div class="color-meta">\n        <p>HEX: ${e}</p>\n        <p>RGB: ${r}</p>\n      </div>\n    </div>\n    `)).join("");e.insertAdjacentHTML("beforeend",r),e.addEventListener("click",(function(e){if(!e.target.classList.contains("color-swatch"))return;const r=e.target,c=r.closest(".color-card");(function(){const e=document.querySelector(".color-card.is-active");e&&e.classList.remove("is-active")})(),a=c,a.classList.add("is-active"),t=r.dataset.hex,document.body.style.backgroundColor=t;var t;var a}));
//# sourceMappingURL=color-picker.f11ef735.js.map

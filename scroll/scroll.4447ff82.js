function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i,l=r("hp3zx"),a=r("jDBle");i=function(e,n,o){var t=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return a(o)&&(t="leading"in o?!!o.leading:t,r="trailing"in o?!!o.trailing:r),l(e,n,{leading:t,maxWait:n,trailing:r})};document.querySelectorAll(".scroll-section").forEach((e=>{e.style.backgroundColor="#"+(Math.random().toString(16)+"000000").substring(2,8).toUpperCase()}));const d=document.querySelector(".js-animated-section"),c=e(i)((e=>{console.log(window.pageYOffset),window.pageYOffset>=800&&(d.classList.add("active"),document.removeEventListener("scroll",c))}),300);document.addEventListener("scroll",c);
//# sourceMappingURL=scroll.4447ff82.js.map

!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n),n.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),n.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),n.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),n.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return o.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o.default(e,t)};var r,o=(r=n("8NIkP"))&&r.__esModule?r:{default:r}})),n.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){return a.default(e)||l.default(e,t)||s.default(e,t)||i.default()};var a=f(n("8slrw")),l=f(n("7AJDX")),i=f(n("ifqQW")),s=f(n("auk6i"));function f(e){return e&&e.__esModule?e:{default:e}}var c={save:function(e,t){try{var r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}}},d="userInfo",p=document.querySelector(".js-contact-form");!function(){var t=c.load(d);if(!t)return;Object.entries(t).forEach((function(t){var r=e(u)(t,2),o=r[0],n=r[1];p.elements[o].value=n}))}();p.addEventListener("input",(function(e){var t,r=e.target,o=r.name,n=r.value,u=null!==(t=c.load(d))&&void 0!==t?t:{};u[o]=n,c.save(d,u)})),p.addEventListener("submit",(function(e){e.preventDefault();var t={};new FormData(e.currentTarget).forEach((function(e,r){t[r]=e})),console.log(t),c.remove(d),e.currentTarget.reset()}))}();
//# sourceMappingURL=form.4b9393e9.js.map
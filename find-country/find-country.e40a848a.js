!function(){function n(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(n){if(n in t)return t[n].exports;if(n in a){var e=a[n];delete a[n];var r={id:n,exports:{}};return t[n]=r,e.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(n,e){a[n]=e},e.parcelRequired7c6=r);var o=r("bcKj3"),i=[{name:"Ukraine",capital:"Kyiv",population:"41 342 465",area:"603.628"},{name:"Spain",capital:"Madrid",population:"47 450 795",area:"505.990"},{name:"Philippines",capital:"Manila",population:"109 035 343",area:"300.000"},{name:"Angola",capital:"Luanda",population:"31 127 674",area:"1.246.700"},{name:"Gibraltar",capital:"Gibraltar",population:"34 003",area:"6.8"}],l=document.querySelector(".js-search-input"),c=document.querySelector(".js-output-error"),u=document.querySelector(".js-country-card");l.addEventListener("input",n(o)((function(n){var e=n.target.value.trim();if(""===e)return c.textContent="",void(u.innerHTML="");var t=i.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}));if(void 0===t)return c.textContent="Такої країни не знайдено!",void(u.innerHTML="");c.textContent="",u.innerHTML=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.name,t=n.capital,a=n.population,r=n.area;return'<li class="country-card__item"><strong>Страна:</strong> '.concat(e,'</li>\n     <li class="country-card__item"><strong>Столица:</strong> ').concat(t,'</li>\n     <li class="country-card__item"><strong>Население:</strong> ').concat(a,'</li>\n     <li class="country-card__item"><strong>Площадь:</strong> ').concat(r,"км<sup>2</sup></li>")}(t)}),300))}();
//# sourceMappingURL=find-country.e40a848a.js.map

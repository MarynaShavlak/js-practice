function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),o.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}}));const i={form:document.querySelector(".js-search-form"),list:document.querySelector(".js-gallery"),spinner:document.querySelector(".spinner"),backdrop:document.querySelector(".backdrop"),loadMoreBtn:document.querySelector(".load-more")};var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t){var r=a.default(e,t,"get");return l.default(e,r)};var a=d(o("fExtF")),l=d(o("iaRLo"));function d(e){return e&&e.__esModule?e:{default:e}}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t,r){f.default(e,t),t.set(e,r)};var c,f=(c=o("7K24o"))&&c.__esModule?c:{default:c};var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,r){var n=h.default(e,t,"set");return v.default(e,n,r),r};var h=m(o("fExtF")),v=m(o("3LGG3"));function m(e){return e&&e.__esModule?e:{default:e}}var g=new WeakMap,y=new WeakMap,w=new WeakMap,b=new WeakMap,x=new WeakMap;var M=o("iQIUW");function _(e){return e.map((({urls:e,alt_description:t})=>`<li class="gallery__item">\n    <img src="${e.small}" alt="${t}" class="gallery-img" loading="lazy">\n</li>`)).join("")}var P,j,L,q,O={};P=O,j="Spinner",L=function(){return T},q=function(e){return T=e},Object.defineProperty(P,j,{get:L,set:q,enumerable:!0,configurable:!0});var k=function(){return k=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},k.apply(this,arguments)},E={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},T=function(){function e(e){void 0===e&&(e={}),this.opts=k(k({},E),e)}return e.prototype.spin=function(e){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),N(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),e&&e.insertBefore(this.el,e.firstChild||null),function(e,t){var r=Math.round(t.corners*t.width*500)/1e3+"px",n="none";!0===t.shadow?n="0 2px 4px #000":"string"==typeof t.shadow&&(n=t.shadow);for(var o=function(e){for(var t=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,r=[],n=0,o=e.split(",");n<o.length;n++){var i=o[n].match(t);if(null!==i){var s=+i[2],a=+i[5],l=i[4],d=i[7];0!==s||l||(l=d),0!==a||d||(d=l),l===d&&r.push({prefix:i[1]||"",x:s,y:a,xUnits:l,yUnits:d,end:i[8]})}}return r}(n),i=0;i<t.lines;i++){var s=~~(360/t.lines*i+t.rotate),a=N(document.createElement("div"),{position:"absolute",top:-t.width/2+"px",width:t.length+t.width+"px",height:t.width+"px",background:C(t.fadeColor,i),borderRadius:r,transformOrigin:"left",transform:"rotate("+s+"deg) translateX("+t.radius+"px)"}),l=i*t.direction/t.lines/t.speed;l-=1/t.speed;var d=N(document.createElement("div"),{width:"100%",height:"100%",background:C(t.color,i),borderRadius:r,boxShadow:I(o,s),animation:1/t.speed+"s linear "+l+"s infinite "+t.animation});a.appendChild(d),e.appendChild(a)}}(this.el,this.opts),this},e.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},e}();function N(e,t){for(var r in t)e.style[r]=t[r];return e}function C(e,t){return"string"==typeof e?e:e[t%e.length]}function I(e,t){for(var r=[],n=0,o=e;n<o.length;n++){var i=o[n],s=z(i.x,i.y,t);r.push(i.prefix+s[0]+i.xUnits+" "+s[1]+i.yUnits+i.end)}return r.join(", ")}function z(e,t,r){var n=r*Math.PI/180,o=Math.sin(n),i=Math.cos(n);return[Math.round(1e3*(e*i+t*o))/1e3,Math.round(1e3*(-e*o+t*i))/1e3]}const S=new(0,O.Spinner)({lines:10,length:0,width:22,radius:45,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#ffffff",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"}),W=()=>{console.log(S),S.spin(i.spinner),i.backdrop.classList.remove("is-hidden")},A=()=>{S.stop(),i.backdrop.classList.add("is-hidden")},B=new class{getPhotos(){const t=`${e(s)(this,g)}?page=${e(s)(this,b)}&query=${e(s)(this,w)}&client_id=${e(s)(this,y)}&per_page=15&color=black`;return fetch(t).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}get query(){return e(s)(this,w)}set query(t){e(p)(this,w,t)}setTotal(t){e(p)(this,x,t)}hasMorePhotos(){return e(s)(this,b)<Math.ceil(e(s)(this,x)/15)}incrementPage(){e(p)(this,b,e(s)(this,b)+1)}resetPage(){e(p)(this,b,1)}constructor(){e(u)(this,g,{writable:!0,value:"https://api.unsplash.com/search/photos"}),e(u)(this,y,{writable:!0,value:"LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc"}),e(u)(this,w,{writable:!0,value:""}),e(u)(this,b,{writable:!0,value:1}),e(u)(this,x,{writable:!0,value:0})}};i.loadMoreBtn.addEventListener("click",(function(){B.incrementPage(),W(),B.getPhotos().then((({results:e})=>{const t=_(e);i.list.insertAdjacentHTML("beforeend",t);B.hasMorePhotos()||i.loadMoreBtn.classList.add("is-hidden")})).catch((e=>{M.Notify.failure(e.message),i.loadMoreBtn.classList.add("is-hidden")})).finally(setTimeout((()=>{A()}),1e3))})),i.form.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements.query.value;t?(B.query=t,B.resetPage(),e.currentTarget.reset(),W(),i.loadMoreBtn.classList.add("is-hidden"),B.getPhotos().then((({results:e,total:t})=>{const r=_(e);i.list.innerHTML=r,B.setTotal(t);B.hasMorePhotos()&&i.loadMoreBtn.classList.remove("is-hidden")})).catch((e=>{M.Notify.failure(e.message)})).finally(setTimeout((()=>{A()}),1e3))):M.Notify.failure("Nothing")}));
//# sourceMappingURL=photo-btn-loadmore.bd418e5f.js.map
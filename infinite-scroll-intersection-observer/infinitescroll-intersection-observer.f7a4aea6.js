function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},l=n.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequired7c6=l);const o=new IntersectionObserver(((e,n)=>{e.forEach((e=>{e.isIntersecting&&(console.log("Привет из колбека в forEach"),console.log(e.target))}))}),{}),a=document.querySelector("#sentinel");o.observe(a);var i=e(l("amrNH")).template({1:function(e,n,t,r,l){var o,a=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,c="function",s=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li>\n  <a href="'+s(typeof(o=null!=(o=u(t,"url")||(null!=n?u(n,"url"):n))?o:i)===c?o.call(a,{name:"url",hash:{},data:l,loc:{start:{line:3,column:11},end:{line:3,column:18}}}):o)+'" target="_blank" rel="noopener noreferrer">\n    <article>\n      <img src="'+s(typeof(o=null!=(o=u(t,"urlToImage")||(null!=n?u(n,"urlToImage"):n))?o:i)===c?o.call(a,{name:"urlToImage",hash:{},data:l,loc:{start:{line:5,column:16},end:{line:5,column:30}}}):o)+'" alt="" width="480">\n      <h2>'+s(typeof(o=null!=(o=u(t,"title")||(null!=n?u(n,"title"):n))?o:i)===c?o.call(a,{name:"title",hash:{},data:l,loc:{start:{line:6,column:10},end:{line:6,column:19}}}):o)+"</h2>\n      <p>Posted by: "+s(typeof(o=null!=(o=u(t,"author")||(null!=n?u(n,"author"):n))?o:i)===c?o.call(a,{name:"author",hash:{},data:l,loc:{start:{line:7,column:20},end:{line:7,column:30}}}):o)+"</p>\n      <p>"+s(typeof(o=null!=(o=u(t,"description")||(null!=n?u(n,"description"):n))?o:i)===c?o.call(a,{name:"description",hash:{},data:l,loc:{start:{line:8,column:9},end:{line:8,column:24}}}):o)+"</p>\n    </article>\n  </a>\n</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,r,l){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:12,column:9}}}))?o:""},useData:!0});const c={headers:{Authorization:"bb47a995514a49758140b073ef1103f5"}};const s={searchForm:document.querySelector(".js-search-form"),articlesContainer:document.querySelector(".js-articles-container"),sentinel:document.querySelector("#sentinel")},u=new class{fetchArticles(){const e=new URLSearchParams({q:this.searchQuery,language:"en",pageSize:10,page:this.page});return fetch(`https://newsapi.org/v2/everything?${e}`,c).then((e=>e.json())).then((({articles:e})=>e))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.page=1}};function h(e){s.articlesContainer.insertAdjacentHTML("beforeend",i(e))}s.searchForm.addEventListener("submit",(function(e){if(e.preventDefault(),u.query=e.currentTarget.elements.query.value,""===u.query)return alert("Введи что-то нормальное");u.resetPage(),s.articlesContainer.innerHTML="",u.fetchArticles().then((e=>{h(e),u.incrementPage()}))}));new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&""!==u.query&&u.fetchArticles().then((e=>{h(e),u.incrementPage()}))}))}),{rootMargin:"150px"}).observe(s.sentinel);
//# sourceMappingURL=infinitescroll-intersection-observer.f7a4aea6.js.map
!function(){var t=["width: 100px; height: 100px; border-width: 1px; border-color: #000000","width: 100px; height: 100px; border-radius: 50%; border-width: 1px; border-color: #000000","width: 150px; height: 100px; border-width: 1px; border-color: #000000","width: 200px; height: 100px; border-radius: 100px / 50px;","width: 150px; height: 100px; transform: skew(20deg);"],e=document.querySelector(".random-container"),o=document.createElement("div");function r(t){return Math.floor(Math.random()*t)}function n(){o.style.cssText=t[r(t.length)],o.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16));var e=100-100*o.clientHeight/document.documentElement.clientHeight,n=100-100*o.clientWidth/document.documentElement.clientWidth;o.style.position="absolute",o.style.top="".concat(r(e),"%"),o.style.left="".concat(r(n),"%")}n(),e.append(o),o.addEventListener("click",n)}();
//# sourceMappingURL=random-figure.6f872420.js.map
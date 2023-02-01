let i=null;const t={notification:document.querySelector(".js-alert")};function e(){t.notification.classList.remove("is-visible")}t.notification.addEventListener("click",(function(){e(),clearTimeout(i)})),t.notification.classList.add("is-visible"),i=setTimeout((()=>{console.log("Закрываем алерт автоматически чтобы не висел"),e()}),5e3);
//# sourceMappingURL=notification.4a299266.js.map

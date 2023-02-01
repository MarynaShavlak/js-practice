var inputList=document.querySelectorAll(".controls input"),updateValue=function(t){var e=t.currentTarget.dataset.sizing||"",n=t.currentTarget,u=n.name,a=n.value;document.documentElement.style.setProperty("--".concat(u),a+e)};inputList.forEach((function(t){t.addEventListener("input",updateValue)}));
//# sourceMappingURL=update-css-variables.9d9a5f23.js.map

(()=>{"use strict";const e=document.getElementById("about"),i=document.getElementById("reviews"),t=document.getElementById("menu");function n(){const e=document.querySelector("main"),i=document.querySelector(".tabby");null!==i&&e.removeChild(i)}e.addEventListener("click",(function(){n(),function(){const e=document.createElement("div");e.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",e.classList.add("tabby"),e.setAttribute("id","aboutdiv"),document.querySelector("main").prepend(e)}()})),i.addEventListener("click",(function(){n(),function(){const e=document.createElement("div");e.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",e.classList.add("tabby"),e.setAttribute("id","reviewdiv"),document.querySelector("main").prepend(e)}()})),t.addEventListener("click",(function(){n(),function(){const e=document.createElement("div");e.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",e.classList.add("tabby"),e.setAttribute("id","menudiv"),document.querySelector("main").prepend(e)}()}))})();
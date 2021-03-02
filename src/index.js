
import {reviewDiv} from "/modules/reviewTab.js";
import {menuDiv} from "/modules/menuTab.js";
import {aboutDiv} from "/modules/aboutTab.js";
 
const aboutTab = document.getElementById("about");
const reviewTab = document.getElementById("reviews");
const menuTab = document.getElementById("menu");


//removes all the classes witht the div style
function clearAll(){
    const main = document.querySelector("main");
    const div = document.querySelector('.tabby');
    if(div !== null){ 
        main.removeChild(div);
    }
}

    aboutTab.addEventListener('click', function(){
        clearAll();
        aboutDiv();
    });

    reviewTab.addEventListener('click', function(){
        clearAll();
        reviewDiv();
    });

    menuTab.addEventListener('click', function(){
        clearAll();
        menuDiv();
    });




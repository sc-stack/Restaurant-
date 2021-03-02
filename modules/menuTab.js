function menuDiv(){
    //creates the div that appears when the about tab is clicked
    const div = document.createElement("div");
    div.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
   // div.setAttribute('style', "display: none;");
    div.classList.add('tabby');
    div.setAttribute('id', 'menudiv');
    const container = document.querySelector('main');
    container.prepend(div);
}

export {menuDiv};
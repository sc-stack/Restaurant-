function pageLoad(){
    const div = document.querySelector("div");
    const image = document.createElement("img");
    image.setAttribute('src', '/images/res.jpg');
    image.classList.add('res-img');
    const headline = document.createElement('h2');
    headline.innerHTML = "Example Headline";
    const p = document.createElement("p");
    p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    div.appendChild(image);
    div.appendChild(headline);
    div.appendChild(p);
}

export {pageLoad};
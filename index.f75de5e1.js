"use strict";
const image1 = document.querySelector('a > img[src^="/landscape-first-thumb"]')?.parentElement;
const image2 = document.querySelector('a > img[src^="/landscape-second-thumb"]')?.parentElement;
const image3 = document.querySelector('a > img[src^="/landscape-third-thumb"]')?.parentElement;
const image4 = document.querySelector('a > img[src^="/landscape-fourth-thumb"]')?.parentElement;
const image5 = document.querySelector('a > img[src^="/landscape-fifth-thumb"]')?.parentElement;
image1.addEventListener("click", ()=>{
    document.querySelector("#largeImg").src = "../images/landscape-first.png";
});
image2.addEventListener("click", ()=>{
    document.querySelector("#largeImg").src = "../images/landscape-second.png";
});
image3.addEventListener("click", ()=>{
    document.querySelector("#largeImg").src = "../images/landscape-third.png";
});
image4.addEventListener("click", ()=>{
    document.querySelector("#largeImg").src = "../images/landscape-fourth.png";
});
image5.addEventListener("click", ()=>{
    document.querySelector("#largeImg").src = "../images/landscape-fifth.png";
});
image1.setAttribute("href", "#");
image2.setAttribute("href", "#");
image3.setAttribute("href", "#");
image4.setAttribute("href", "#");
image5.setAttribute("href", "#");

//# sourceMappingURL=index.f75de5e1.js.map

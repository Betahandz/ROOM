// ALWAYS USE STRICT MODE
"use strict";
// IMPORTATION FROM THE LIBRARY
import * as myLib from './ammo/library.js';

// ELEMENTS OR TAGS SELECTED TO CARRY OUT THE FUNCTIONALITY
const pic_and_title = myLib.pic_title;// pic and title change
const btns = document.querySelectorAll(".btn");
const picDisplay = document.querySelector(".prod_display");
const open_menu = document.querySelector(".menu_bar");
const nav = document.querySelector(".navigation");
const links = document.querySelector(".links");
const link_anchor = links.querySelectorAll(".link");
const close_menu = links.querySelector(".close_menu");

// CONDITIONS AND OPTIONS AND CHOICES
let styleClass = ["active", "null", "null"];
let wrap;
let forward = true;
let menu = true;
let pausepage = false;
let current_pos;

// ARROW FUNCTIONS 
// MOST FUNCTIONS WILL BE CALLED FROM MY LIBRAY 
// SINCE THIS IS A MODULE TO KEEP THIS SPACE CLEAN AND NEAT
// TRYING TO WRITE CLEAN AND REUSEABLE CODE
const changeProd = (e) => {
    let data = e.currentTarget.dataset.id;
    data === "next" ? forward = true : forward = false;
    myLib.moveForward( wrap, styleClass, forward) ;
}

const openMyMenu = () => {
    current_pos = window.scrollY;
    myLib.order(1000, menu, () => {
        nav.classList.add("shownav");
    })
    .then(() => {
        return myLib.order(500, menu, () => {
            links.classList.add("showlink");
        })
    })
    .then(() => {
        return myLib.order(0, menu, () => {
            let num;
            link_anchor.forEach((links, index, arr) => {
                num = Math.random();
                links.style.transitionDelay = num + .5 + "s";
                links.classList.add("showlinkchild");
            })
        })
    })
    .finally (() => pausepage = true);
}

const closeMyMenu = () => {
    myLib.order(0, menu, () => {
        let num;
        link_anchor.forEach((links, index, arr) => {
            num = Math.random();
            links.style.transitionDelay = num + .5 + "s";
            links.classList.remove("showlinkchild");
        })
    })
    .then(() => {
        return myLib.order(1500, menu, () => {
            links.classList.remove("showlink");
        })
    })
    .then(() => {
        return myLib.order( 1000, menu, () => {
            nav.classList.remove("shownav");
        })
    })
    .finally(() => pausepage = false)
}



// EVENT LISTENERS
window.addEventListener("DOMContentLoaded", () => {
    let num = 0; // iterating number class
    myLib.createGallery(pic_and_title, picDisplay);

    wrap = [...document.querySelectorAll(".prod_pic")];

    wrap.forEach(item => {
        item.classList.add(styleClass[num]);
        num++;
    })
    
    btns.forEach((btn, index, arr) => {
        btn.addEventListener("click", changeProd)
    })
});

open_menu.addEventListener("click", openMyMenu);

close_menu.addEventListener("click", closeMyMenu);

window.addEventListener("scroll", () => {
    
    if(pausepage) {
        window.scrollTo(0, current_pos);
    }
})
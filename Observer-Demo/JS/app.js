"use strict";
/**
 * I felt like making a live demo for the observer pattern for individuals who may find this pattern hard to understand. But also because I haven't writen JS in a hot minute and would like to!
 */
(() => {
  window.addEventListener("load", (event) => {
    
    //Disable forms default behaviour
    let forms = document.querySelectorAll("form");
    forms.forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
      });
    });
  });
})();

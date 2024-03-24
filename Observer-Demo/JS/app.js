import {Subject, Observer} from "./classes/ObserverPattern.js";
"use strict";
/**
 * I felt like making a live demo for the observer pattern for individuals who may find this pattern hard to understand. But also because I haven't writen JS in a hot minute and would like to!
*/
const subject = new Subject();
const observer = new Observer();

const tag = document.getElementById('subjectData');
observer.log(tag);
console.log(subject)
console.log(observer)
subject.subscribe(observer);
subject.setData();
subject.notify();
(() =>{
  window.addEventListener("load", (event) =>{

    // set global names
    window.TIMEFORM = document.getElementById('timeController');
    window.TIMEDELAY = TIMEFORM.querySelector('[name="timeInput"]');
    window.NEWSUBJECT;
    window.NEWOBSERVER;
    // eventHandler for timeControl submission. Time controller is used to set delay of the example, to improve the understanding of how the Subject and Observer interact with one another.
    TIMEFORM.addEventListener("submit", timeControl);
  });
})();
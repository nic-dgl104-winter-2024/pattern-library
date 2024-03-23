/**
 * Event Handler
 */

function timeControl() {
  event.preventDefault();
  console.log(setTimeDelay());
}
function setTimeDelay() {
  const DELAY = window.TIMEDELAY.value;
  if(isNaN(DELAY)){
    return (error = "Please enter a number");
  }
  if(DELAY >= 0 && DELAY <=10000) {
    return (success = `Delay set to ${convertToSeconds(DELAY)}s`);
  } else {
    return (error = `${DELAY} is out of range. Please enter a number between 0 and 10,000`);
  }
}
function getTimeDelay() {
  return window.TIMEDELAY.value;
}
function convertToSeconds(time) {
  return Number(time / 1000).toFixed(2);
}
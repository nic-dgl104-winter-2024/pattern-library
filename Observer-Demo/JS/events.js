/**
 * Event Handler
 */

function timeControl() {
  event.preventDefault();
  setTimeDelay();
}
function setTimeDelay() {
  const DELAY = window.TIMEDELAY.value;
  if(DELAY >= 0 && DELAY <=10000) {
    return (success = "");
  } else {
    return (error = "");
  }
}
function getTimeDelay() {
  return window.TIMEDELAY.value;
}
/**
 * @title set Date
 * @overview Sets the date for all elements with class date-current
 */
const n =  new Date();
const y = n.getFullYear();
const m = n.getMonth() + 1;
const d = n.getDate();
const dateString = y + "-" + m.toString().padStart(2, "0") + "-" + d.toString().padStart(2, "0");

const elems = document.getElementsByClassName("date-current");
for (let i = 0; i < elems.length; i++) {
  elems[i].setAttribute("value", dateString);
  elems[i].innerHTML = dateString;
}

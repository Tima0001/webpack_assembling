
import "./styles.css";
import "./index.html";
import Counter from "./plugins/counter";
import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";
console.log(basicLightbox);
const instance = basicLightbox.create(document.querySelector("#div"));
// instance.show();
console.log(document.getElementById("showModal"));
document.getElementById("showModal").addEventListener("click", instance.show);

new Counter({
    item: document.querySelector("#counter-1"),
});

new Counter({
    item: document.querySelector("#counter-2"),
    initialValue: 0,
    step: 50,
})

const date = new Date();
console.log(date);
const date1 = new Date("July 11, 2010");
console.log(date1);
const curenttime = Date.now();
console.log(curenttime);
console.log(date.getDate()); //получим текущий день месяца
console.log(date.getDay()); //get index of week day(sunday = 0, suturday = 6)
console.log(date.getMonth()); //get index of month(0-11)
console.log(date.getFullYear());

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime());

date.setFullYear(2050, 9, 25);
date.setHours(24, 12, 50, 433);
console.log(date)



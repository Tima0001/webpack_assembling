import message from "./message";
import arrow from "./arrow";
import "./styles.css";
import "./index.html";
import Counter from "./plugins/counter";
import "./b.css";
import listItemsTemplate from "./list-items.hbs";

new Counter ({
    item: document.querySelector("#counter-1"),
});

new Counter ({
    item: document.querySelector("#counter-2"),
    initialValue: 0,
    step: 50,
})

console.log(listItemsTemplate);
console.log(message);
console.log(arrow(5, 10));

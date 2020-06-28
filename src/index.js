import "./css/styles.css";
// import "./js/feedback";

// // Импорт массива обьектов значения которых подставляются в шаблоны
// import posts from "./data/posts.json";
// console.log(posts);

// // Импорт шаблона отрисовки каждого елемента
// import item from "./templates/item.hbs";
// console.log(item);
// // Импорт шаблона отрисовки списка елементов
// import itemsList from "./templates/itemsList.hbs";
// console.log(itemsList);

// // Получаем доступ к тегу <ul>, внутри которого будем вставлять елемент из шаблона
// const refs = {
//     postFeed: document.querySelector(".post-feed"),
// };

// // Создаём елемент путём передачи массива обьектов из json в шаблон елемента
// const postItem = item(posts);
// refs.postFeed.insertAdjacentHTML("afterbegin", postItem);

// // Отрисовка всего списка
// function displayPosts(posts) {
//     const onePost = posts.map((post) => {
//         itemsList(post);
//     })
//     refs.postFeed.insertAdjacentHTML("beforeend", onePost);
// }
// // displayPosts(posts);

///// TIMER /////
// получаем доступ к дом-элементам таймера

const timerRefs = {
  clockFace: document.querySelector(".clockface"),
  startBtn: document.querySelector(`button[data-action = "start"]`),
  stopBtn: document.querySelector(`button[data-action = "stop"]`),
};
console.log(timerRefs);

const Timer = {
  start() {
    //сохраняем момент времени нажатия на кнопки старт в переменную
    const startTime = Date.now();
    console.log(startTime);
    this.timerId = setInterval(()=>{
        const curentTime = Date.now();
        this.deltaTime = curentTime-startTime;
    })
  },
  stop() {},
};
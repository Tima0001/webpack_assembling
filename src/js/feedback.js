import debounce from "lodash.debounce";
const refs = { form: document.getElementById("feedback-form") };
console.log(refs);
const persistedFeedBack = localStorage.getItem("feedback");
if (persistedFeedBack) {
  const textarea = refs.form.elements.message;
  textarea.value = persistedFeedBack;
}
localStorage.setItem("name", "Tima");
console.log(localStorage.getItem("name"));
refs.form.addEventListener(
  "input",
  debounce((e) => {
    const textarea = e.target;
    localStorage.setItem("feedback", textarea.value);
  }, 300),
);

refs.form.addEventListener("submit", (e) => {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem("feedback");
});

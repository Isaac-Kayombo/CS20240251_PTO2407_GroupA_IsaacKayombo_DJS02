const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  // PERFORMS CALCULATION AND ROUNDS RESULT TO THE NEAREST WHOLE NUMBER
  const finalValue = Math.floor(dividend / divider);
  result.innerText = finalValue;
});
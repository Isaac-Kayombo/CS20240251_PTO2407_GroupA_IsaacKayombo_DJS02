const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // CHECKS IF EITHER OF THE INPUTS ARE EMPTY
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  // PERFORMS CALCULATION AND ROUNDS RESULT TO THE NEAREST WHOLE NUMBER
  const finalValue = Math.floor(dividend / divider);
  result.innerText = finalValue;
});
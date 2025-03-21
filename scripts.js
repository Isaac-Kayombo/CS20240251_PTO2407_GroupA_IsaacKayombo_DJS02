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

  // CHECKS FOR CALCULATION BY ZERO
  if (divider === "0") {
    result.innerText = "Division not performed. Invaild number provided. Try again";

    // LOGS ERROR WITH CALL STACK IN THE CONSOLE
    console.error("Error: Attempted division by zero", new Error().stack);
    return;
  }

  // CHECKS FOR NON-NUMERIC INPUTS
  if (isNaN(dividend) || isNaN(divider)) {
    // REPLACES ENTIRE SCREEN WITH ERROR MESSAGE
    document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page</h1>";

    // LOGS ERROR WITH CALL STACK IN THE CONSOLE
    console.error("Error: Invaild input. Non-numeric value provided", new Error().stack);
    return;
  }

  // PERFORMS CALCULATION AND ROUNDS RESULT TO THE NEAREST WHOLE NUMBER
  const finalValue = Math.floor(dividend / divider);
  result.innerText = finalValue;
});
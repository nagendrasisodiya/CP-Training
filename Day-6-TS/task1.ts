const display = document.getElementById("display") as HTMLInputElement;
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = (btn as HTMLButtonElement).textContent;

    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      try {
        display.value = eval(display.value).toString();
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});

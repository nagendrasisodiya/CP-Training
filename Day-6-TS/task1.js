var display = document.getElementById("display");
var buttons = document.querySelectorAll("button");
buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        var value = btn.textContent;
        if (value === "C") {
            display.value = "";
        }
        else if (value === "=") {
            try {
                display.value = eval(display.value).toString();
            }
            catch (_a) {
                display.value = "Error";
            }
        }
        else {
            display.value += value;
        }
    });
});

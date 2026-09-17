const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        const buttonValue = buttonsEl[i].textContent;

        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else if (buttonValue === "DEL") {
            delNum();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResult() {
    inputFieldEl.value = "";
}

function calculateResult() {
    if (inputFieldEl.value === "") {
        inputFieldEl.value = "";
    } else {
        inputFieldEl.value = eval(inputFieldEl.value);
    }
}

function appendValue(buttonValue) {
    const lastValue = inputFieldEl.value.slice(-1);

    if ("+-*/".includes(buttonValue) && "+-*/".includes(lastValue)) {
        inputFieldEl.value = inputFieldEl.value.slice(0, -1);
    }

    inputFieldEl.value += buttonValue;
}

function delNum() {
    inputFieldEl.value = inputFieldEl.value.slice(0, -1);
}
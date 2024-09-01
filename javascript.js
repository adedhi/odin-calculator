function changeDisplay(number) {
    let number_string = number.toString().slice(0, 30);

    if (number.toString().length > 30) {
        number_string += " Number Too Large to Fully Display"
    }

    const display = document.querySelector(".display");
    display.innerHTML = number_string;

    if (isNaN(number)) {
        display_num = null;
    } else {
        display_num = number;
    }
}

function updateDisplay() {
    let display_string = "";
    const display = document.querySelector(".display");

    if (number_1 === null) {
        return;
    } else {
        display_string += number_1.toString();
    }

    if (operator_val === null) {
        display.innerHTML = display_string;
        return;
    } else {
        display_string += " " + operator_val + " ";
    }

    if (number_2 === null) {
        display.innerHTML = display_string;
        return;
    } else {
        display_string += number_2.toString();
    }

    display.innerHTML = display_string;
}

function addNumbers() {
    let result = number_1 + number_2;
    changeDisplay(result);
}

function subtractNumbers() {
    let result = number_1 - number_2;
    changeDisplay(result);
}

function multiplyNumbers() {
    let result = number_1 * number_2;
    changeDisplay(result);
}

function divideNumbers() {
    let result;
    if (number_2 === 0) {
        result = "Undefined (divide by zero)";
    } else{
        result = number_1 / number_2;
    }
    changeDisplay(result);
}

function operate() {
    switch(operator_val) {
        case "+":
            addNumbers();
            break;
        case "-":
            subtractNumbers();
            break;
        case "×":
            multiplyNumbers();
            break;
        case "÷":
            divideNumbers();
            break;
    }
}

function updateNumber(number, number_index) {
    switch(number_index) {
        case 1:
            if (number_1 === null) {
                number_1 = number;
            } else{
                number_1 = Number("" + number_1 + number);
            }
            break;
        case 2:
            if (number_2 === null) {
                number_2 = number;
            } else{
                number_2 = Number("" + number_2 + number);
            }
            break;
    }
}

function chooseOperator(operator) {
    operator_val = operator;
}

function equal() {
    operate();
    number_1 = null;
    number_2 = null;
    operator_val = null;
}

function clear() {
    number_1 = null;
    number_2 = null;
    operator_val = null;
    display_num = null;

    changeDisplay("");
}

let number_1 = null;
let number_2 = null;
let operator_val = null;
let display_num = null;

// Flags

const number_buttons = document.getElementsByClassName("number_button");
for (let i = 0; i < number_buttons.length; i++) {
    number_buttons[i].addEventListener("click", () => {
        if (operator_val === null) {
            updateNumber(Number(number_buttons[i].innerHTML), 1);
        } else {
            updateNumber(Number(number_buttons[i].innerHTML), 2);
        }
        updateDisplay();
    })
}

const operator_buttons = document.getElementsByClassName("operator_button");
for (let i = 0; i < operator_buttons.length; i++) {
    operator_buttons[i].addEventListener("click", () => {
        if (operator_val === null) {
            if (number_1 !== null) {
                chooseOperator(operator_buttons[i].innerHTML);
                updateDisplay();
            } else if (display_num !== null){
                updateNumber(display_num, 1);
                chooseOperator(operator_buttons[i].innerHTML);
                updateDisplay();
            }
        } else if (number_2 !== null) {
            equal();
            updateNumber(display_num, 1);
            chooseOperator(operator_buttons[i].innerHTML);
            updateDisplay();
        }
    })
}

const equal_button = document.querySelector(".equal_button");
equal_button.addEventListener("click", () => {
    if ((number_1 !== null) && (operator_val !== null) && (number_2 !== null)) {
        equal();
    }
})

const clear_button = document.querySelector(".clear_button");
clear_button.addEventListener("click", function(){clear()})

changeDisplay("");

function updateDisplay(number) {
    let number_string = number.toString().slice(0, 30);

    if (number.toString().length > 30) {
        number_string += " Number Too Large to Fully Display"
    }

    const display = document.querySelector(".display");
    display.innerHTML = number_string;
}

updateDisplay("3457389458")
const display = document.getElementById("display");
const buttons = document.querySelectorAll("[data-value]");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const equalButton = document.getElementById("equal");

// Add click event to number and operator buttons
buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const value = button.getAttribute("data-value");

        if (display.value === "0") {
            display.value = value;
        } else {
            display.value += value;
        }
    });

});

// Clear button event
clearButton.addEventListener("click", function() {
    display.value = "0";
});

// Delete button event
deleteButton.addEventListener("click", function() {

    display.value = display.value.slice(0, -1);

    if (display.value === "") {
        display.value = "0";
    }
});

// Equal button event
equalButton.addEventListener("click", function() {

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }

});

// Keyboard event
document.addEventListener("keydown", function(event) {

    // Numbers and operators
    if (
        (event.key >= "0" && event.key <= "9") ||
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/" ||
        event.key === "."
    ) {
        if (display.value === "0") {
            display.value = event.key;
        } else {
            display.value += event.key;
        }
    }

    // Enter key
    else if (event.key === "Enter") {
        equalButton.click();
    }

    // Backspace key
    else if (event.key === "Backspace") {
        deleteButton.click();
    }

    // Escape key
    else if (event.key === "Escape") {
        clearButton.click();
    }

});

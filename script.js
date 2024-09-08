// Append the clicked button value to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Clear the entire display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Delete the last digit from the display
function deleteDigit() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}

// Calculate the result using eval() and show it in an alert
function calculateResult() {
    try {
        let displayValue = document.getElementById("display").value;
        if (displayValue !== "") {
            let result = eval(displayValue);
            alert("Result: " + result);
            document.getElementById("display").value = "";
        } else {
            alert("Please enter a valid expression!");
        }
    } catch (error) {
        alert("Error: Invalid calculation!");
    }
}

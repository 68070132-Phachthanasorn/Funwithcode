const left = document.getElementById("left");
const operator = document.getElementById("operator");
const right = document.getElementById("right");
const calculate = document.getElementById("calculate");

calculate.addEventListener("click", function() {

    const num1 = Number(left.value);
    const num2 = Number(right.value);
    const op = operator.value;

    if (
        left.value === "" ||
        right.value === "" ||
        !Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        num1 < 0 ||
        num2 < 0
    ) {
        alert("Error :(");
        return;
    }

    if ((op === "/" || op === "%") && num2 === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;

    if (op === "+") {
        result = num1 + num2;
    }
    else if (op === "-") {
        result = num1 - num2;
    }
    else if (op === "*") {
        result = num1 * num2;
    }
    else if (op === "/") {
        result = num1 / num2;
    }
    else if (op === "%") {
        result = num1 % num2;
    }

    alert(result);
    console.log(result);
});

setInterval(function() {
    alert("Please, use me...");
}, 30000);
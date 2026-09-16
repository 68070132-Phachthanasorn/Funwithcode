$(document).ready(function() {

    $("#calculate").click(function() {

        const num1 = Number($("#left").val());
        const num2 = Number($("#right").val());
        const op = $("#operator").val();

        if (
            $("#left").val() === "" ||
            $("#right").val() === "" ||
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

});
$(document).ready(function() {

    let size = 200;
    let color = 0;

    const colors = ["red", "green", "blue"];

    $("#balloon").click(function() {

        size += 10;
        color++;

        if (size > 420) {
            size = 200;
            color = 0;
        }

        if (color > 2) {
            color = 0;
        }

        $(this).css("width", size + "px");
        $(this).css("height", size + "px");
        $(this).css("background-color", colors[color]);

    });

    $("#balloon").mouseleave(function() {

        if (size > 200) {
            size -= 5;
        }

        color--;

        if (color < 0) {
            color = 2;
        }

        $(this).css("width", size + "px");
        $(this).css("height", size + "px");
        $(this).css("background-color", colors[color]);

    });

});
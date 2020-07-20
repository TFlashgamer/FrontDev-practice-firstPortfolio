$(document).ready(function () {
    $("body").css("display", "none");

    $("body").fadeIn(2000);

    $("#lang").click(function (event) {
        $("body").fadeOut(1000);
        $("body").fadeIn(2000);
    });
});
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "RTR.xml",
        dataType: "xml",
        success: xmlParser
    });
});

function xmlParser(xml) {

    $('#load').fadeOut();

    $(xml).find("display-name").each(function () {

        $(".main").append('<div class="book"><div class="title">' + $(this).find("display-name").text() + '</div></div>');
        $(".book").fadeIn(1000);

    });

}
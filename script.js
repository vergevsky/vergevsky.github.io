$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "RTR.xml",
        dataType: "xml",
        success: xmlParser
    });
});

function xmlParser(xml) {
    $(xml).find("channel").each(function () {
        var page_url = $(this).find('display-name').text();
        $( ".chanel_name" ).append(page_url);
    });

}
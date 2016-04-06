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
        var chanel_name = $(this).find('display-name').text();
        $( ".chanel_name" ).append(chanel_name);
        var chanel_logo = $(this).find('logo').text();
        $(document).ready(function(){
         $(".chanel_img").css('background: rgba(255,255,255,.8) url('+ chanel_logo + ') no-repeat;');
});
    });

}
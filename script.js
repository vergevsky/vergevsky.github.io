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
        /*$( ".chanel_img" ).append(chanel_logo);*/
        /*$(".chanel_logo").css("background: rgba(255,255,255,.8) url(" + chanel_logo + ") no-repeat;");*/
        $('.chanel_img').attr('style','background: rgba(255,255,255,.8) url(' + chanel_logo + ') no-repeat; background-size: 40px; background-position: center center;');
});
    var i = 3405;
    while (i<3586){
        i = i + 1;
        $(xml).find('programme id="124156"' + i).each(function () {
        var program_name = $(this).find('name').text();
        content = content + '<li>' + $( ".program" ).append(program_name) +'</li>';
        /*$( ".program" ).append(program_name);*/
    });
}
    };

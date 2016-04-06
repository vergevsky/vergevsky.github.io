var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'RTR.xml');
request.onreadystatechange = function() {
    if ((request.readyState===4) && (request.status===200)) {
        console.log(request.responseXML.getElementsByTagName('display-name')[1].nodeValue);
        
        var items = request.responseXML.getElementsByTagName('display-name');
        var output = '<ul>';
        for (var i = 0; i < items.length; i++) {
            output += '<li>' + items[i].nodeValue + '</li>';
        }
        output += '</ul>';
        document.getElementById('update').innerHTML = output;
    }
}
request.send();

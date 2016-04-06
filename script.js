var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHHTP");
}
request.open('GET', 'http://xmltv.s-tv.ru/xmlfull.php?prg=1459181329&sh=0');
request.onreadystatechange = function(){
	if ((request.readyState===4) && (request.Status===200)) {
		console.log(request.responseXML);
	}
}
request.send();
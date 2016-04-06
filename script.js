/*var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHHTP");
}
request.open('GET', 'RTR.xml');
request.onreadystatechange = function(){
	if ((request.readyState===4) && (request.Status===200)) {
		console.log(request.responseXML.getElementsByTagName('name')[0]);
	}
}
request.send();*/

function getXMLDocument('RTR.xml')  
{  
    var xml;  
    if(window.XMLHttpRequest)  
    {  
        xml=new window.XMLHttpRequest();  
        xml.open("GET", RTR.xml, false);  
        xml.send("");  
        return xml.responseXML;  
    }  
    else  
        if(window.ActiveXObject)  
        {  
            xml=new ActiveXObject("Microsoft.XMLDOM");  
            xml.async=false;  
            xml.load(RTR.xml);  
            return xml;  
        }  
        else  
        {  
            alert("Загрузка XML не поддерживается браузером");  
            return null;  
        }  
}  


/* 
var request = new XMLHttpRequest();
request.open("GET", "/path/demo.xml", false);
request.send();
var xml = request.responseXML;
var users = xml.getElementsByTagName("user");
for(var i = 0; i < users.length; i++) {
    var user = users[i];
    var names = user.getElementsByTagName("name");
    for(var j = 0; j < names.length; j++) {
        alert(names[j].childNodes[0].nodeValue);
    }
}
 */
document.getElementById("btnParent").onclick = function () {
    location.href = "parent.xhtml";
};

document.getElementById("btnStudent").onclick = function () {
    location.href = "student.xhtml";
};

document.getElementById("btnTeacher").onclick = function () {
    location.href = "teacher.xhtml";
};
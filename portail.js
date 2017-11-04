$(document).ready(function() {
  createChildren();
  //doesnt work
  for(i = 1; i <=10; i++) {
     $('<button/>', {
        text: "lkekelelkel", //set text 1 to 10
        id: 'btn_'+i,
        click: function () { alert('hi'); }
    });
  }
});
/*

// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Do Something";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("did something");
});
*/
function createButton(context, func){
    var button = document.createElement("input");
    button.type = "button";
    button.id = "btntest";
    button.value = "im a button";
    button.onclick = func;
    context.appendChild(button);
}
function createChildren()
	{
	   for(var i=0; i<20; i++)
	   {
	    var btn = document.createElement("button");
    	btn.setAttribute("id","btn"+i);
        btn.setAttribute("style","font-size:14px;background-color: #4CAF50;width:100px;height:100px;");
        var value = "images/jeunes/0" + i + ".png";
        btn.style.backgroundImage = "url("+value+")";
        btn.innerHTML="no" + i;
        var foo = document.getElementById("affichagEleve");
        foo.appendChild(btn);
    	}


    };





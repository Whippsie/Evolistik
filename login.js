$(document).ready(function(){
    $("#submit").click(function(){
        var username = $("#username").val();
        var password = $("#password").val();
        
        if( username =='1234' || password =='1234'){
            $('input[type="text"],input[type="password"]').css("border","2px solid red");
            $('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
            alert("Veuillez remplir toutes les cases");
        }else {
             document.location.href = "portail.xhtml";
        }
    });
});

$(document).ready(function() {
        
    $('.annuler').click(function() {
        $('#register').fadeOut(200);
        $('#forgot').fadeOut(200);
        $('#login').delay(200).fadeIn(200);
        $('#formscontainer').addClass('loginform');
        $('#formscontainer').removeClass('registerform');
        $('#formscontainer').removeClass('forgotform');
    });
    
    $('#registerlink').click(function() {
        $('#login').fadeOut(200);
        $('#register').delay(200).fadeIn(200);
        $('#formscontainer').removeClass('loginform');
        $('#formscontainer').addClass('registerform');
    });
    
});
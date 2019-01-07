$(function() {
    "use strict";

    $("#mc-form").submit(function(e) {

        var url = "/api/users"; // the script where you handle the form input.

        var data = JSON.stringify({"name":$('#name').val(),"email": $('#email').val()});

        var form = $("#mc-form");
        var email = form.find("input[type=email]");
        var label = form.find("label[for=" + email.attr("id") + "]");
        

        $.ajax({
            type: "POST",
            url: url,
            contentType:"application/json",
            dataType:"json",
            data:data,
        }).done(function(data) {

        }).fail(function(data) {
                $('#mc-form').html('<h2>Danke für die Anmeldung.<br>Wir versenden keine Bestätigung als E-Mail.</h2>');
        });


        e.preventDefault();
    });

    $("#frm_contact").submit(function(e) {

        e.preventDefault();
        var url = "/api/messages"; // the script where you handle the form input.

        var data = JSON.stringify(
            {
                "name":     $('#name').val(),
                "email":    $('#email').val(),
                "message":  $('#message').val(),
                "ip": window.location.host
            }
        );

        $.ajax({
            type: "POST",
            url: url,
            contentType:"application/json",
            dataType:"json",
            data:data,
        }).done(function(data) {
            $('#frm_contact').parent().html('<h2>Danke wir melden uns</h2>');
        }).fail(function(data) {
        });


    });
});

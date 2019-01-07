$(function() {
    "use strict";

    $("#nca-form").submit(function (e) {
        e.preventDefault();
        var url = "/api/messages"; // the script where you handle the form input.

        var message = $('#reason').val() + '|' + $('#phone').val() + '|' + $('#messagefield').val();

        var data = JSON.stringify(
            {
                "name": $("#namefield").val(),
                "email": $('#emailfield').val(),
                "message": message
            }
        );
        console.log('data', data);
        $.ajax({
            type: "POST",
            url: url,
            contentType: "application/json",
            dataType: "json",
            data: data,
        }).done(function (data) {
            $("#nca-form").html("<div class='successMessage'>Danke wir melden uns</div>");
        }).fail(function (data) {

        });

        return false;
    });

    $("#hide, #show, .nca-contact").click(function(e) {
        if ($("#show").is(":visible")) {

            $("#show").animate({
                "margin-right": "-400px"
            }, 500, function() {
                $(this).hide();
            });

            $("#switch").animate({
                "margin-right": "0px"
            }, 500).show();
        } else {
            $("#switch").animate({
                "margin-right": "-400px"
            }, 500, function() {
                $(this).hide();
            });
            $("#show").show().animate({
                "margin-right": "0"
            }, 500);
        }
    });
});

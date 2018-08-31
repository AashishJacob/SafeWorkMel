$(document).ready(function () {


    $.ajax({

        url: 'https://api.darksky.net/forecast/606a5e9b7758dfc86513a60e874c87c5/37.8267,-122.4233',
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
            var widget = show(data);

            $("#show").html(widget);

        }
    });
});

function show(data) {

    return "<h3><strong>Weather</strong>:" + data.currently.uvIndex + "</h3>";
}
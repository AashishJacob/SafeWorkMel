var lon;
var lat;

function getCoordinates() {
    $('#submitWeather').click(function () {

        var city = $("#city").val();
        if (city != '') {

            $.ajax({

                url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + city + ",au&units=metric" +
                    "&APPID=2122a4167828b10f63dc38e69a7cae9b",
                type: "GET",
                async: false,
                dataType: "jsonp",
                success: function (data) {
                    lon = data.coord.lon;
                    lat = data.coord.lat;

                    getUVdata(lon, lat);
                }
            });
        }
        else {
            $('#error').html('Field Cannot be empty');
        }


    });
	
}

function getUVdata(lon, lat) {

    $.ajax({

        url: 'https://api.darksky.net/forecast/606a5e9b7758dfc86513a60e874c87c5/' + lat + "," + lon,
        type: "GET",
        async: false,
        dataType: "jsonp",
        success: function (uvdata) {
            var widget2 = show(uvdata);

            $("#show").html(widget2);
        }

    });

}

$(document).ready(function () {
    getCoordinates()
});


function show(uvdata) {

    //return '<h3 style="color:black"><strong>Current UV Index</strong>:"' + uvdata.currently.uvIndex + '"</h3>';

    return "<h3><strong>Current UV Index</strong>:" + uvdata.currently.uvIndex + "</h3>" +
        "<h3><strong>Current UV Index</strong>:" + uvdata.latitude + "</h3>" +
        "<h3><strong>Current UV Index</strong>:" + uvdata.longitude + "</h3>" +
        "<h3><strong>Current Summary</strong>:" + uvdata.currently.summary + "</h3>" +
        "<h3><strong>Current Temperature</strong>:" + uvdata.currently.temperature + "</h3>";

}
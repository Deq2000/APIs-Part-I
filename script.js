$(document).ready(function() {
    $("#giphy").submit(function(event) {
        event.preventDefault();
        $("#query").html("");
        var query = $("#query").val();
        console.log(query);
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC"
        }).done(function(response) {
            console.log(response);
            for (i=0; i<response.data.length; i++) {
                var image = $('<img>');
                console.log(image);
                image[0].src = response.data[i].images.fixed_width_downsampled.url;
                $("#results").append(image);
            }
        });
    });
});

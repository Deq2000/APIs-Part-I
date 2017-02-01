$(document).ready(function() {
    $("#giphy").submit(function(event) {
        event.preventDefault();
        $("#query").html("");
        var query = $("#query").val();
        console.log(query);
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC&limit=100"
        }).done(function(response) {
            console.log(response);
           
            var insertImage = function (url) {
                var image = $('<img>');
                image.attr('src', url);
                $("#results").append(image);
            }; 
            
            insertImage(response.data[0].images.fixed_width_downsampled.url);
            var i=1;
            setInterval(function(){ 
                $('#results').empty();
                insertImage(response.data[i].images.fixed_width_downsampled.url);
                i++;
                if(i===response.data.length){
                    i=0;
                }
            }, 1000);
            
            /*for (i=0; i<response.data.length; i++) {
                var image = $('<img>');
                console.log(image);
                image[0].src = response.data[i].images.fixed_width_downsampled.url;
                $("#results").append(image);
            }
            */
        });
    });
});

function sendAPIcall() {
    var APIkey = "3GfICFcl1VDiA0O0Jz0Hjp45zKGZCzdp"
    var search = $(this).attr("data-name")
    var imageUrl = response.data.image_original_url;
    var gif = $()
    var hero = $(this).attr("button-list");
    var results = response.data;
    var gif = "images"



    console.log(search)

    $("#btn").on("click", function () {
        var queryURL = "http://api.giphy.com/v1/gifs/search/q=" + search + "api_key=" + APIkey


        $(document).on("click", ".btn", sendAPIcall)


        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                console.log(queryURL);
                console.log(response);

                for (var i = 0; i < results.length; i++) {

                    var HeroDiv = $("<div>");
                    var HeroImage = $("<img>");

                    var p = $("<p>").text("Rating: " + results[i].rating);

                 


                    HeroImage.attr("src", results[i].images.fixed_height.url);
                    HeroImage.attr("alt", "hero image");
                    $("#images-show").prepend(HeroDiv);


                    function addCategory (morehero) {
                        var newbtn = $('<div>').attr({
                            class: 'btn'
                        }).data({ text: morehero}).text(morehero);

                        $('button-list').append(newbtn)
                    
                    }

  $(".gif").on("click", function () {
                var state = $(this).attr("data-state");
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });
    





                };

            }
  
        )
  
    }
        
    )}

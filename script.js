
    //console.log(search)
    //$(document).on("click", ".btn", sendAPIcall)


    $(".btn").on("click", function () {
        var APIkey = "3GfICFcl1VDiA0O0Jz0Hjp45zKGZCzdp";
        var search = $(this).attr("data-name")
       
        //var gif = $()
        //var hero = $(this).attr("button-list");
        
       // var gif = "images"
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + APIkey

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
               
                var results = response.data;

                //console.log(queryURL);
                console.log(response);
                for (var i = 0; i < results.length; i++) {
                    var imageStillURL = results[i].images.fixed_height_still.url;
                    var imageURL = results[i].images.fixed_height.url;
                    var HeroDiv = $("<div>").addClass("heroimage");
                    var HeroImage = $("<img>");
                    HeroImage.attr("src", imageStillURL);
                    HeroImage.attr("data-still", imageStillURL);
                    HeroImage.attr("data-animate", imageURL);
                    HeroImage.attr("data-state", "still");
                    var p = $("<p>").text("Rating:PG " + results[i].rating);
                    HeroImage.attr("alt", "heroimage");
                    HeroDiv.append(HeroImage);
                    HeroDiv.append(p);
                    $("#images-show").prepend(HeroDiv);

                };
            });
        });

        $("#add-item").on("click", function (event) {

            event.preventDefault();
            var search = $("#search-input").val().trim();
            topics.push(search);

            createButton();
        });

        function addCategory(morehero) {
            var newbtn = $('<div>').attr({
                class: 'btn'
            }).data({ text: morehero }).text(morehero);

            $('button-list').append(newbtn)
        }    

    //var imgStillURL = response.data[i].images.fixed_height_still.url;

    //var imgAnimateURL = response.data[i].images.fixed_height.url;
    //HeroImage.attr("src", results[i].images.fixed_height.url);

    function createButton() {
        $("#button-hero").empty();

        var a = $("<button>");

        a.addClass("hero-btn");
        a.attr("data-name", hero[i]);
        a.text(hero[i]);
        $("#button-hero").append(a);

    };

    $(".gif").on("click", function () {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    })

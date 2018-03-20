$(document).on("click", ".btn", function () {
    var APIkey = "3GfICFcl1VDiA0O0Jz0Hjp45zKGZCzdp";
    var search = $(this).attr("data-name")

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + APIkey

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var results = response.data;

        console.log(response);
        for (var i = 0; i < results.length; i++) {
            var imageStillURL = results[i].images.fixed_height_still.url;
            var imageURL = results[i].images.fixed_height.url;
            var HeroDiv = $("<div>");
            var HeroImage = $("<img>").addClass("heroimage");
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

$("#moreButton").on("click", function (event) {

    event.preventDefault();
    var search = $("#more").val().trim();
    var newButton = $("<button>");
    newButton.addClass("btn");
    newButton.attr("data-name", search)
    newButton.text(search)
    $(".button-list").append(newButton);
});

$(document).on("click", ".heroimage", function () {

    var state = $(this).attr("data-state");
    console.log($(this).attr("data-animate"));
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
})


var spaceThings = ["Commet", "Jupiter", "Saturn", "Nebula"];

//listens to button with id cat-button
$("#add-space").on("click", function() {

	var spaceThing = $("#space-input").val();
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + spaceThing + "&api_key=dc6zaTOxFJmzC&limit=10";

	var b = $("<button>");
	b.addClass("thing");
	b.attr("data-name", spaceThing);
	b.text(spaceThing);
	$("#buttons").prepend(b);

	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(response) {
		var results = response.data;
		
		$("#gifs").empty();

		for (var i = 0; i < results.length; i++) {
			var gifDiv = $("<div>");

	 		var rating = results[i].rating;
			var p = $("<p>").text("Rating: " + rating);

			var spaceGif = $("<img>");
			spaceGif.attr("src", results[i].images.fixed_height.url);

	 		gifDiv.prepend(p);
			gifDiv.prepend(spaceGif);

	  		$("#gifs").prepend(gifDiv);
		}
	});
});

function oldButton() {
	var spaceThing = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + spaceThing + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(response) {
		var results = response.data;
		
		$("#gifs").empty();

		for (var i = 0; i < results.length; i++) {
			var gifDiv = $("<div>");

	 		var rating = results[i].rating;
			var p = $("<p>").text("Rating: " + rating);

			var spaceGif = $("<img>");
			spaceGif.attr("src", results[i].images.fixed_height.url);

	 		gifDiv.prepend(p);
			gifDiv.prepend(spaceGif);

	  		$("#gifs").prepend(gifDiv);
		}
	});
};

function renderButtons() {
	$("#buttons").empty();

	for (var i = 0; i < spaceThings.length; i++) {
		var a = $("<button>");

		a.addClass("thing");

		a.attr("data-name", spaceThings[i]);

		a.text(spaceThings[i]);

		$("#buttons").append(a);
	 }
};

renderButtons();

$(document).on("click", ".thing", oldButton);
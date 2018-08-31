// main.js
//$(document).ready(function() {
$(function() {
	$('#searchForm').on('submit', function(e) {
		var searchText = $('#searchText').val();
		getMovie(searchText);
		e.preventDefault();

		var request = gapi.client.youtube.search.list({
			part: "snippet",
			type: "video",
			q: searchText,
			maxResults: 5,
			publishedAfter: "2018-01-01T00:00:00Z"
		});
		//execute request
		request.execute(function(response){
			var output;
			$.each(response.items, function(i, item){
				console.log(item);
				var vdoTitle = item.snippet.title;

				//append to testLoad
				$('#testLoad').append(vdoTitle);

			})

		})

	});

});
 
 function getMovie(searchText) {
 	console.log(searchText);
 }

//youtube API
function init() {
	gapi.client.setApiKey('AIzaSyCehyfqNLjp1iCtrPgoSQm5QOa7WI7EKYY');
	gapi.client.load('youtube', 'v3', function() {
		//youtube api is ready
	})
}
/*$('#testLoad').load('test.html', function() {
	console.log("Test success. Load was performed.");
	});
*/




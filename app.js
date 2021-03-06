var apiKey = '1c700ade439d4f0c942f0f54cbed43f6'
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

$('#search-btn').on('click', function() {
    var q = $('#search').value();
    var recordnumber = $('#number-id').value();
    var begin_date = $('#start-year').value();
    var end_date= $('#end-year').value();
    url += '?' + $.param({
        'api-key': apiKey,
        'q': q,
        'begin_date': begin_date,
        'end_date': end_date
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
    	// for loop to cycle through number of records
    	// query automatically returns 10 records, so pick min(recordnumber, 10);
    	var max = Math.min(recordnumber, 10)
    	for (var i = 0; i < max - 1; i++) {
    		// result.data[i]
    		// add data from response to Page container
    	}
    		
        console.log(result);
    }).fail(function(err) {
        throw err;
    });
})

$('#reset-btn').on('click', function() {
	// reset
})
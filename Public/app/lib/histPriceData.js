/* 

This file grabs historical bitcoin price data from CoinDesk API 
  when the user chooses dates to get data for.

*/

window.histPriceData = {};
var url_stub = 'http://api.coindesk.com/v1/bpi/historical/close.json' 
//query CoinDesk API for data, render data in historical data component
//this is called when user clicks on component
var getHistoricalPriceData = function(date) {
  var range_start = '2013-09-01';
  var range_end = '2013-09-05';
  $.ajax({
  	  // example end point for date range ?start=2013-09-01&end=2013-09-05
      // url: url_stub + '?start=' + range_start + '&end=' + range_end,
      url: url_stub + '?start=2013-09-01&end=2013-09-05',
      method: 'GET',
      success: (data) => {
        // var histData = JSON.parse(data);
        // $('.histData').empty();
        // $('.histData').append('<h3 class="text-center">Historical Bitcoin Prices</h3><br>');
        // $('.histData').append('<div>' + histData + '</div>');
        console.log('data returned from CoinDesk: ', data);
      },
      error: (error) => console.log('An error occurred while trying to get historical data: ', error)
    });
}

// getHistoricalPriceData();
//Adds it to the window
window.getHistoricalPriceData = getHistoricalPriceData;

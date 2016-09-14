/* 

This file grabs historical bitcoin price data from CoinDesk API 
  when the user chooses dates to get data for.

*/

window.histPriceData = {};
var url_stub = 'http(s)://api.coindesk.com/v1/bpi/historical/close.json' 
//query CoinDesk API for data, render data in historical data component
//this is called when user clicks on component
var getHistoricalPriceData = function(date) {
  $.ajax({
  	  // example end point for date range ?start=2013-09-01&end=2013-09-05
      url: url_stub + '?start=' + range_start + '&end=' + range_end,
      method: 'GET',
      success: (data) => {
        var histData = JSON.parse(data);
        $('.histData').empty();
        $('.histData').append('<h3 class="text-center">Historical Bitcoin Prices</h3><br>');
        $('.histData').append('<div>' + histData + '</div>');
      },
      error: (error) => console.log('An error occurred while trying to get historical data: ', error);
    });
}

//Adds it to the window
window.getHistoricalPriceData = getHistoricalPriceData;

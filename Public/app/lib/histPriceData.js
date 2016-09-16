/* 

This file grabs historical bitcoin price data from CoinDesk API 
  when the user chooses dates to get data for.

*/

window.histPriceData = {};
var url_stub = 'http://api.coindesk.com/v1/bpi/historical/close.json' 
//query CoinDesk API for data, render data in historical data component
//this is called when user clicks on component
var getHistoricalPriceData = function(start_date, end_date, cb) {
  // console.log('req', url_stub + start_date);
  // end_date = '2014-01-02';
  //first available start date '2010-07-18'
  $.ajax({
  	  // example end point for date range ?start=2013-09-01&end=2013-09-05
      // url: url_stub + '?start=' + range_start + '&end=' + range_end,
      url: url_stub + '?start=' + start_date,
      method: 'GET',
      success: (data) => {
        // console.log('CoinDesk response: ', data);
        cb(JSON.parse(data));
      },
      error: (error) => console.log('An error occurred while trying to get historical data: ', error)
    });
}

// getHistoricalPriceData();
//Adds it to the window
window.getHistoricalPriceData = getHistoricalPriceData;


// var histData = JSON.parse(data);
// $('.histData').empty();
// $('.histData').append('<h3 class="text-center">Historical Bitcoin Prices</h3><br>');
// $('.histData').append('<div>' + histData + '</div>');
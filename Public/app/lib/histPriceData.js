/* 
This file grabs historical bitcoin price data from CoinDesk API 
  when the user chooses dates to get data for.
*/

window.histPriceData = {};
var url_stub = 'http://api.coindesk.com/v1/bpi/historical/close.json' 
//query CoinDesk API for data, render data in historical data component
//this is called when user clicks on component
var getHistoricalPriceData = function(start_date, end_date, cb) {
  // console.log('req', url_stub + '?start=' + start_date + '&end=' + end_date);
  // end_date = '2014-01-02';
  //first available start date '2010-07-18'

  var full_url;
  if (end_date) {
  	full_url = url_stub + '?start=' + start_date + '&end=' + end_date;
  } else {
  	full_url = url_stub + '?start=' + start_date + '&end=' + start_date;
  }
  // console.log('full_url: ',full_url);

  $.ajax({
      url: full_url,
      method: 'GET',
      success: (data) => {
        cb(JSON.parse(data));
      },
      error: (error) => console.log('An error occurred while trying to get historical data: ', error)
    });
}

//Adds it to the window
window.getHistoricalPriceData = getHistoricalPriceData;

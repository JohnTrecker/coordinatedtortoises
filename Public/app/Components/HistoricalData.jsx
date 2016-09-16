/*
React component for historical bitcoin data
*/ 

class HistoricalData extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
    
  //   };
  // }

  componentDidMount() {
  	//when the chooseDate button is clicked,
    $('.chooseDate').on('click', function(data) {
      //set selectedDate to the value the user entered
      var start_day = $('.dayForm').val();
      var start_month = $('.monthForm').val();
      var start_year = $('.yearForm').val();
      //call getHistoricalPriceData with selectedDate
      //2013-09-01
      var start_date = start_year + '-' + start_month + '-' + start_day;
      var end_date = '2014-01-02';
      // console.log('combined start_date: ', start_date);
      window.getHistoricalPriceData(start_date, end_date, function(data) {
      	console.log('start_date price: ', data.bpi[start_date]);
      	// console.log('end_date price: ', data.bpi[end_date]);

      	// console.log('data: ', data);
      });
      // $('.histData').append('<div>' + histData + '</div>');
    });
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Historical Prices</div>
        <div className="panel-body">
          <form className="form-group">
	          <div>
	          	<label>DD</label>
	            <input name='day' type='text' className="dayForm"/>
	          </div>
              <div>
	          	<label>MM</label>
	            <input name='month' type='text' className="monthForm"/>
	          </div>
	          <div>
	          	<label>YYYY</label>
	            <input name='year' type='text' className="yearForm"/>
	          </div>
          </form>
        
          <div>
      		<button type='submit' value='Submit' className="btn btn-primary chooseDate">Submit</button>
      	  </div>
        </div>
      </div>
    );
  }

};

window.HistoricalData = HistoricalData;

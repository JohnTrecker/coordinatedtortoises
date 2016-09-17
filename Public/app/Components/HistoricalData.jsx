/*
React component for historical bitcoin data
*/ 

class HistoricalData extends React.Component {

  componentDidMount() {
  	//when the chooseDate button is clicked,
    $(".chooseDate").on("click", function(data) {
      //set vars for date values the user entered
      var start_day = $("#dayForm").val();
      var start_month = $("#monthForm").val();
      var start_year = $("#yearForm").val();
      var start_date = start_year + "-" + start_month + "-" + start_day;
      var end_date;

      /*
		Need to do validation on dates!!
      */

      window.getHistoricalPriceData(start_date, end_date, function(data) {
      	$("#resultsText").text('$'+Math.round(data.bpi[start_date] * 100) / 100);
      });
     });
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Historical Prices</div>
        <div className="panel-body">
          <div className="histText"> 
            Enter a date for that day's bitcoin price. Note, earliest available data is 2010-07-18.
          </div>
          <form className="form-group">
          	<span style={{display:'inline-block'}}>
	          	<label className="dateLabel">YYYY</label>
	            <input name="year" maxLength="4" type="text" className="dateForm" id="yearForm"/>
	        </span>
	        <span style={{display:'inline-block'}}>
	          	<label className="dateLabel">MM</label>
	            <input name="month" maxLength="2" type="text" className="dateForm" id="monthForm"/>
	        </span>
	        <span style={{display:'inline-block'}}>
	          	<label className="dateLabel">DD</label>
	            <input name="day" maxLength="2" type="text" className="dateForm" id="dayForm"/>
	        </span>
      	    <span id="resultsBox" style={{display:'inline-block'}}>
      	  	  <text id="resultsText"></text>
      	    </span>

          </form>
          <span style={{display:'inline-block'}}>
  		    <button type="submit" value="Submit" className="btn btn-primary chooseDate">Submit</button>
  	      </span>
        </div>
      </div>
    );
  }

};

window.HistoricalData = HistoricalData;

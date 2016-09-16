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
    $(".chooseDate").on("click", function(data) {
      //set selectedDate to the value the user entered
      var start_day = $("#dayForm").val();
      var start_month = $("#monthForm").val();
      var start_year = $("#yearForm").val();
      //call getHistoricalPriceData with selectedDate
      //2013-09-01
      var start_date = start_year + "-" + start_month + "-" + start_day;
      var end_date = "2014-01-02";
      // console.log("combined start_date: ", start_date);
      window.getHistoricalPriceData(start_date, end_date, function(data) {
      	console.log("data calledback from req", data);
      	console.log("start_date price: ", data.bpi[start_date]);
      	// console.log("end_date price: ", data.bpi[end_date]);
      	$("#resultsText").text(data.bpi[start_date]);
      	alert(data.bpi[start_date]);
      	// console.log("data: ", data);
      });
      // $(".histData").append("<div>" + histData + "</div>");
    });
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Historical Prices</div>
        <div className="panel-body">
          <div className="histText"> 
            Enter a date for that day's bitcoin price. Note, first available price is 2010-07-18.
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
        
            <span style={{display:'inline-block'}}>
      		  <button type="submit" value="Submit" className="btn btn-primary chooseDate">Submit</button>
      	    </span>

      	    <span id="resultsBox" style={{display:'inline-block'}}>
      	  	  <text id="resultsText"></text>
      	    </span>

          </form>
        </div>
      </div>
    );
  }

};

window.HistoricalData = HistoricalData;

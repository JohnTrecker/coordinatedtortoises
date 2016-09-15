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
      var selectedDate = $(data.target).text();
      //call getHistoricalPriceData with selectedDate
      window.getHistoricalPriceData(selectedDate);

      // $('.histData').append('<div>' + histData + '</div>');
    });
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Historical Prices</div>
        <div className="panel-body">
        Look up historical bitcoin prices
          <div className="form-group">
            <textarea className="form-control address"></textarea>
            <button className="btn btn-primary chooseDate">Look Up</button>
          </div>
        </div>
      </div>
    );
  }

};

window.HistoricalData = HistoricalData;

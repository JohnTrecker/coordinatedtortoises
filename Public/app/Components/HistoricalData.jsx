/*

React component for historical bitcoin data 

*/ 

class HistoricalData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
    };
  }

  componentDidMount() {
  	//when the chooseDate button is clicked,
    $('.chooseDate').on('click', function(data) {
      //set selectedDate to the value the user entered
      var selectedDate = $(data.target).text();
      //call getHistoricalPriceData with selectedDate
      window.getHistoricalPriceData(selectedDate);
    });
  }

  render() {
    return (
      <div className='panel panel-primary'>
        <div className='panel-heading'>Historical Data</div>
        <div className='panel-body histData'>put data here</div>
      </div>
    );
  }

};

window.HistoricalData = HistoricalData;

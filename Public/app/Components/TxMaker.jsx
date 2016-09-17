class TxMaker extends React.Component {
  //Upon render, it adds click handlers to two buttons
  constructor(props) {
    super(props);
  }  

  componentDidMount() {
  // TODO: replace data.history with props.history 
    var data = {};
    data['history'] = [];

    $('.sendTx').on('click', function(){
      //Empties out previous results from the last transaction.
      $('#results').empty();
      
      //The data is what we're sending to the server

      //Should Send is only true if we end up with valid data to send
      var shouldSend = true;
      
      //If the transaction id is empty, we can't send it, so it adds an error class to that input
      if($('#inputTxId').val() !== ''){
        data['txId'] = $('#inputTxId').val();
        $('#itiDiv').removeClass('has-error');
      } else {
        shouldSend = false;
        $('#itiDiv').addClass('has-error');
      }
      //If the transaction output is empty, we can't send it, so it adds an error class to the output field
      if($('#output').val() !== ''){
        data['output'] = $('#output').val();
        $('#oDiv').removeClass('has-error');
      } else {
        shouldSend = false;
        $('#oDiv').addClass('has-error');
      }

      //Tells us whether or not the WIF key is already encrypted
      data['EncryptKey'] = $('#shouldEnc').is(':checked');

      //Does the same thing as above
      if($('#privKey').val() !== ''){
        data['privKey'] = $('#privKey').val();
        $('#pkDiv').removeClass('has-error');
      } else {
        shouldSend = false;
        $('#pkDiv').addClass('has-error');
      }


      //Sets default amount to 0
      data['amount'] = $('#amount').val() === '' ? 0 : $('#amount').val();

      if ($('#amount').val() === '') {
        data['amount'] = 0;
      } else {
        data['amount'] = $('#amount').val();
        data['history'].push(data['amount'] + ' BTC');
      }    

      //If it's ok to send the data, it sends it to the server and builds it and pushes it to the blockchain
      if(shouldSend){ 
        /*$.post('http://localhost:3000/txmake', data, function(tx){ 
          */$('#results').append('<span class="bg-success">' + /*tx*/data['amount'] + " BTC Sent" + '</span>');
        /*});*/
      } else {
        $('#results').append('<span class="bg-danger">Please Fill out All Fields</span>');
      }
    });

    // VERIFY CLASS NAME
    $('.pastTx').on('click', function(){
      //Empties out previous results from the last transaction.
      $('#results').empty();
      var shouldSend = data['history'].length === 0 ? false : true;
      
      if(shouldSend){ 
        data['history'].forEach(function(tx) {
          $('#results').append('<br/><span class="bg-success">' + tx + '</span>');
        });
      } else {
        $('#results').append('<span class="bg-danger">You Have No Transaction History</span>');
      }
    });
  }

  //Renders a bunch of forms and a button to send them
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Make Transactions</div>
          <div className="panel-body">
            <div className="form-group" id='itiDiv'>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputTxId" placeholder="Input Tx ID"></input>
              </div>
            </div>
            <div className="form-group" id='oDiv'>
              <div className="col-sm-10">
                <input type='text' className="form-control" id='output' placeholder='Output Address'></input>
              </div>
            </div>
            <div className="form-group" id='pkDiv'>
              <div className="col-sm col-sm-10">
                <input type='password' className="form-control has" id='privKey' placeholder='WIF Private Key'></input>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <div className="checkbox">
                  <input type="checkbox" id="shouldEnc"></input>Encrypt Key?
                </div>
              </div>
            </div>
            <div className="form-group">
                <input type="Number" id="amount" placeholder="Amount"></input>
            </div>
            <center>
              <div>
                <button className="btn btn-primary sendTx">Make Tx</button>
                <button className="btn btn-primary pastTx">Tx History</button>
              </div>
              <div id='results'></div>
            </center>
        </div>
      </div>
    );
  }

};

//Sets Transaction maker to the window as TxMaker
window.TxMaker = TxMaker;
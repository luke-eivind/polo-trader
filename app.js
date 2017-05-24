var autobahn = require('autobahn');

var connection = new autobahn.Connection({url: 'wss://api.poloniex.com', realm: 'realm1'});

var eth;
var dcr;
var aug;
var gnt;


connection.onopen = function (session) {

   // 1) subscribe to a topic
   function onevent(args) {
     if(args[0] == 'BTC_ETH')
      console.log(args[1]);
   }
   session.subscribe('ticker', onevent);

   /*
   // 2) publish an event
   session.publish('com.myapp.hello', ['Hello, world!']);

   // 3) register a procedure for remoting
   function add2(args) {
      return args[0] + args[1];
   }
   session.register('com.myapp.add2', add2);

   // 4) call a remote procedure
   session.call('com.myapp.add2', [2, 3]).then(
      function (res) {
         console.log("Result:", res);
      }
   );
   */
};



connection.open();

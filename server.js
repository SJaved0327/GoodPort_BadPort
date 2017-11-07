//=== ===//

const http = require('http');

//=== PORT GOOD ===//

const PORTgood = 7000;

const handleGood = (request, response) => {
  response.end("You're the best!");
};

const serverGood = http.createServer(handleGood);

serverGood.listen(PORTgood, function(){
	console.log(`Listening on ${PORTgood}`);
});

//=== PORT GOOD ===//

const PORTbad = 7500;

const handleBad = (request, response) => {
  response.end("You're the worst!");
};

const serverBad = http.createServer(handleBad);

serverBad.listen(PORTbad, function() {
	console.log(`Listening on ${PORTbad}`);
});
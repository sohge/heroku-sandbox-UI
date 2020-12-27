const express = require('express')
const sfcc = require('sfcc-ci')
const path = require('path')
const cool = require('cool-ascii-faces')
const PORT = process.env.PORT || 5000

express()
  .get('/', (req, res) => res.send(cool()))
  .get('/sb', (req,res) => res.send(login()) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

login = () => {
  var client_id = '63ceb7ba-7c7e-410c-9861-af827a55b8b0';
  var client_secret = 'hahThea7Aad3tier';

  //console.log('client %s', client_id);

  
  sfcc.auth.auth(client_id, client_secret, function(err, token){
    if(token) {
      console.log('Authentication succeeded. Token is %s', token);
    }
    if(err) {
      console.error('Authentication error: %s', err);
    }
    return 'sfcc-returned';
  });
  
  
}


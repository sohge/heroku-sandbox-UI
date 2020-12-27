const express = require('express')
const sfcc = require('sfcc-ci')
const path = require('path')
const cool = require('cool-ascii-faces')
const PORT = process.env.PORT || 5000

express()
  .get('/', (req, res) => res.send(cool()))
  .get('/sb', (req,res) => res.send(login()) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

login() = () => {
  var client_id = '';
  var client_secret = '';

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


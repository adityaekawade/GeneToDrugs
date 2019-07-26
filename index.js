const express = require("express");
const fetch = require("node-fetch");
const app = express()
const port = 4045

app.get('/genetodrugs', (req, res) => {
  var response = getResponse(req.query);
  response.then( data => {
    res.jsonp(data);
  })
})

app.listen(process.env.port || port, () => console.log(`App listening on port ${port}!`))

function getResponse(obj){
  const { name, fda_approved_drug } = obj;
  const url = `http://dgidb.org/api/v2/interactions.json?genes=${name}`;
  fda_approved_drug === true ? url = `${url}&fda_approved_drug=${fda_approved_drug}` : "";
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
}

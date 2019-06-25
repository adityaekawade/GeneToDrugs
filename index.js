const express = require("express");
const fetch = require("node-fetch");
const app = express()
const port = 4000

app.get('/', (req, res) => {
  var response = getResponse();
  response.then( r => {
    // console.log("response", response);
    res.send(r);
  })
  // console.log("listening")
  // fetch('http://dgidb.org/api/v2/interactions.json?genes=FLT1')
  //   .then(response => response.json())
  //   .then(data => {
  //     res.send(data)
  //   })
})

//URL Parameters
// app.get('/:gene', (req, res) => {
//   console.log("gene", req.params.gene)
//   console.log("gene", req.query)
//   var response = getResponse(req.params.gene);
//   response.then( r => {
//     // console.log("response", response);
//     res.send(r);
//     // For JSONP
//     // res.jsonp(r);
//   })
// })

//Query Strings
app.get('/gene', (req, res) => {
  console.log("gene", req.params.gene)
  console.log("gene", req.query)
  var response = getResponse(req.query);
  response.then( r => {
    // console.log("response", response);
    res.send(r);
    // For JSONP
    // res.jsonp(r);
  })
})

//Ref: https://coursework.vschool.io/express-params-and-query/

app.listen(process.env.port || port, () => console.log(`Example app listening on port ${port}!`))


function getResponse(obj){
  const { name, fda_approved_drug } = obj;
  const url = `http://dgidb.org/api/v2/interactions.json?genes=${name}`;
  fda_approved_drug === true ? url = `${url}&fda_approved_drug=${fda_approved_drug}` : "";
  // `http://dgidb.org/api/v2/interactions.json?genes=${name}&fda_approved_drug=${fda_approved_drug}`
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
}

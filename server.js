const koa = require('koa'); 
const json = require('koa-json'); 
const koaRouter = require('koa-router'); 
const fetch = require("node-fetch");

const app = new koa(); 
const router = new koaRouter(); 

app.use(json()); 

app.use(router.routes()).use(router.allowedMethods()); 

router.get('/geneToDrugs', async ctx => {
  const args = ctx.query.gene;
  let url = `http://dgidb.org/api/v2/interactions.json?genes=${args}`;
  await fetch(url)
  .then(response => response.json())
  .then(res => {
    ctx.body = res
  })
})

app.listen(3000, () => console.log('server started'));
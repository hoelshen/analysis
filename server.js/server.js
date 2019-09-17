var Koa = require('koa');
var Router = require('koa-router');
 
var app = new Koa();
var router = new Router();
 
router.get('/', (ctx, next) => {
  // ctx.router available
});




app.use(async(ctx, next)=>{
  if(ctx.path === './favicon.icon'){
    await send (ctx, './favicon.ico', {root:path.join(__dirname, '../')})
  } else {
    await next();
  }
})

app.use(pageRo)
/* eslint-disable no-global-assign */
require = require('esm')(module /*, options*/);
module.exports = require('./main.js');

// require('dotenv').config();
// const Koa = require('koa');
// const Router = require('koa-router');
// const bodyParser = require('koa-bodyparser');
// const mongoose = require('mongoose');

// const api = require('./api');

// const { PORT, MONGO_URI } = process.env;

// mongoose
//   .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((e) => {
//     console.error(e);
//   });

// const app = new Koa();
// const router = new Router();

// router.use('/api', api.routes());

// app.use(bodyParser());

// app.use(router.routes()).use(router.allowedMethods());

// const port = PORT || 4000;

// app.listen(port, () => {
//   console.log('Listening to port %d', port);
// });

// // router.get('/', (ctx) => {
// //   ctx.body = '홈';
// // });

// // router.get('/about/:name?', (ctx) => {
// //   const { name } = ctx.params;
// //   ctx.body = name ? `${name}의 소개` : '소개';
// // });

// // router.get('/posts', (ctx) => {
// //   const { id } = ctx.query;
// //   ctx.body = id ? `포스트 #${id}` : '포스트 아이디가 없습니다.';
// // });

// // router.get('/about', (ctx) => {
// //   ctx.body = '소개';
// // });

// // app.use(router.routes()).use(router.allowedMethods());

// // app.use(async (ctx, next) => {
// //   console.log(ctx.url);
// //   console.log(1);
// //   if (ctx.query.authorized !== '1') {
// //     ctx.status = 401; //Unauthorized
// //     return;
// //   }
// //   await next();
// //   // next().then(() => {
// //   console.log('END');
// //   // });
// // });

// // app.use((ctx, next) => {
// //   console.log(2);
// //   next();
// // });

// // app.use((ctx) => {
// //   ctx.body = 'hello world';
// // });

// // app.listen(4000, () => {
// //   console.log('Listening to port 4000');
// // });

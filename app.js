'use strict'

var Koa = require('koa');
var config = require('./config.json');
var wechat = require('./wechat/g');

var app = new Koa();

app.use(wechat(config));

app.listen(3001);
console.log('Listening 3001 port');

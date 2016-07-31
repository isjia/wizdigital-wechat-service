var Koa = require('koa');
var sha1 = require('sha1');
var config = require('./config.json');
var app = new Koa();

app.use(function *(next){
  console.log(this.query);

  var token = config.token;
  var signature = this.query.signature;
  var nonce = this.query.nonce;
  var timestamp = this.query.timestamp;
  var echostr = this.query.echostr;

  var str = [token, timestamp, nonce].sort().join('');
  var sha = sha1(str);

  if (sha === signature){
    console.log(sha);
    this.body = echostr + '';
  }
  else {
    this.body = 'this message is not from ' + config.name;
  }
})

app.listen(3001);
console.log('Listening 3001 port');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var internetradio = require('node-internet-radio');
var http = require('http').Server(app);
var io = require('socket.io')(http);


var radioLink = "http://uk1.internet-radio.com:8155/"
var radioInfo = undefined;

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/Script'));
app.use(express.static(__dirname + '/image'));
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

function checkRadioInfo(){

internetradio.getStationInfo(radioLink, function(error, station) {
  radioInfo = station;
});
io.sockets.emit('refresh title',radioInfo);
setTimeout(checkRadioInfo, 4000);

}

checkRadioInfo();

app.get('/',function(req,res){
    res.render('index.ejs',{radio:radioLink,title:radioInfo.title});

})

io.on('connection', function(socket){


});

http.listen(8080,function(){
  console.log('listening on *:8080');
})

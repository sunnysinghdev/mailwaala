var express = require('express');
var app = express();
const mailModule = require('./mail');
let EmailServer = mailModule.EmailServer;
var port = process.env.PORT || 3000;
var es = new EmailServer(null, process.env.EMAIL_PASSWORD);

app.use(express.json());
console.log(process.env.EMAIL_PASSWORD);

//app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    console.log("Index page called" + port);
    console.log(process.env.EMAIL_PASSWORD);
    es.send({});
    res.send("Index page");
});
app.get('/main', function (req, res) {
    res.send("hello");
});
app.post('/mail', function (req, res) {
    // First read existing users.
    //
    console.log(req.body);


    // send the message and get a callback with an error or details of the message that was sent
    es.send(req.body);
    res.send(req.body);
});
app.use("*", function (req, res) {
    console.log("/ others");
    console.log(req.body);
    res.send("Error 404");
});
var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
}).on('error', function (er) {
    console.log(er);
});
console.log("App started");
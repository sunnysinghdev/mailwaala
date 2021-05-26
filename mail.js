var libEmail = require('emailjs/email');


class EmailServer {
    
    constructor(userEmail, userPassword, host, port){
        this.user = userEmail;
        this.password = userPassword;
        this.host = host;
        this.port = port;
    }
    send(req){

        var email_server = libEmail.server.connect({
            user: this.user || "sunnysinghdevcom@gmail.com",
            password: this.password,
            host: this.host || "smtp.gmail.com",
            ssl: true,
            port: this.port || 465
        });
        email_server.send({
            text: req.text || "I hope this works",
            from: req.from || "Sunny Singh",
            to: req.to || "Sunny <sunnysingh.vpcoe@gmail.com>, SunnyEpicor <sunny.epicor@gmail.com>",
            cc: req.cc || "Sunny <sunny.iexceed@hotmail.com>",
            subject: req.subject || "testing"
        }, function(err, message) {
            console.log(err || message);
        });


    }
}
module.exports.EmailServer = EmailServer;
const router = require('express').Router();
const {db} = require('../lib/log');
const mongoose = require('mongoose');
const chalk = require('chalk');
const connectAddr = require('../lib/connect');
const nodemailer = require('nodemailer')
let smtpTransport = require('nodemailer-smtp-transport');
smtpTransport = nodemailer.createTransport(smtpTransport({
    secure: false, // true for 465, false for other ports
    service: '163',
    auth: {
        user: 'xxx',
        //注意，这里用网易邮箱的授权指令用于免密
        pass: 'xxx'
    }
}));
const sendMail = function (recipient, subject, html) {

    smtpTransport.sendMail({
        from: 'xxx',
        to: recipient,
        subject: subject,
        text: html

    }, function (error, response) {
        if (error) {
            console.log(error);
        }
        console.log('发送成功')
    });
}

/**
 * @time  2019/6/3 22:46
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc   mongoDB连接池驱动连接
 */
mongoose.connect(connectAddr, {useNewUrlParser: true});
const User = mongoose.model('UserInfo',
    {
        username: String,
        telephone: Number,
        wechat: String,
        avatar: String,
        qq: Number,
    });

/* GET home page. */
router.get('/', function (req, res, next) {
    res.redirect('index.html');
    next();
})
    .post('/sign', (req, res, next) => {
        const data = req.body.User;
        console.log(data);
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            // we're connected!
            console.log(chalk.green('connection successfully!!!'))
        });
        const user = new User(
            data
        );
        user.save().then((data) => {
            res.send({status: true});
            next();
        })
            .catch(err => Promise.reject(err));
    })
    .post('/getData', (req, res, next) => {
        User.find(function (err, docs) {
            console.log(docs)
            res.send(docs)
            res.end();
            next();
        });
    })
    .post('/getInfoByName', (req, res, next) => {
        const username = req.body.username;
        console.log(username);
        User.find({username}, (err, docs) => {
            console.log(docs)
            res.send(docs)
        })
    })
    .post('/sendEmail', (req, res, next) => {
        const msg = req.body.msg;
        console.log(req)
        sendMail('vuejs@vip.qq.com', 'Feed', msg)
        res.send('发送成功')
        next();
    });




module.exports = router;

var router = require('express').Router();
var onoff = require('onoff');

var Gpio = onoff.Gpio   //generate public i/o
var pin = 17;
var power = new Gpio(pin, 'out');

router.get('/hello', (req, res) => {
    var status = power.readSync();
    res.render('power', {data:status});
});


router.post('/hello', (req, res) => {
    var status = req.body.status;
    if(status == "on") {
        power.writeSync(1);
        res.redirect('/hello'); //get으로 돌려줌
        console.log("불 켜짐");
    } else if(status == "off") {
        power.writeSync(0);
        res.redirect('/hello');
        console.log('불 꺼짐');
    }
});

module.exports = router;
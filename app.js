var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('html', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./router/power'));

app.get('/', (req, res) => {
    res.send("Hello my port! http://192.168.0.145:8002");
});

var port = 8002; 
app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${port}`);
});
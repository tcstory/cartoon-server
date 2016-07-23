import express from 'express';
let app = express();
import crawler from './crawler';

app.use(function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/hot-comics', function (req, res) {
    crawler.getHotComics().then(function (data) {
        res.send(data);
    }, function (err) {
        res.end();
    });
});

app.listen(3000, '0.0.0.0' ,function () {
    console.log('Example app listening on port 3000!');
});

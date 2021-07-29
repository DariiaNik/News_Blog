const express = require('express');
const app = express();
const cors = require('cors');

const Datastore = require('nedb')
const data = new Datastore({filename: 'news.dat', autoload: true});


app.use(cors(), express.json());

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/news', function (req, res) {
    data.find({}, function (err, docs) {
        res.send({
            total: docs.size,
            articles: docs
        })
    });

})

app.post('/news', function (req, res) {
    data.insert(req.body)
    res.send("")
})

app.listen(3000)

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

/**
 * Building a REST api with express
 */

// mock database
var items = [
    { _id : 1, title : 'Product1' , price : 20 },
    { _id : 2, title : 'Product2' , price : 99 },
    { _id : 3, title : 'Product3' , price : 44.9 }
];

// in order to get the body from a POST a special middleware has to be used
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Get all items */
app.get('/', function (req, res) {
    res.json(items);
});
/* Get a random item */
app.get('/item', function (req, res) {
    var index = Math.floor(Math.random() * items.length);
    res.json(items[index]);
});
/* Get item by id */
app.get('/item/:id', function (req, res) {
    var id = req.params.id, parsedId;
    // check if item with given id exists
    for (var i = 0; i < items.length; i++) {
        if (items[i]._id == id) {
            return res.json(items[i]);
        }
    }
    res.statusCode = 404;
    res.send('Error: item not found');
});
/* Post a new item */
app.post('/item/add', function (req, res) {
    if (!req.body.hasOwnProperty('title') || !req.body.hasOwnProperty('price')) {
        res.statusCode = 404;
        return res.send('Error: empty item fields');
    }
    items.push({
        _id     : items.length + 1,
        title   : req.body.title,
        price   : req.body.price
    });
    res.statusCode = 500;
    res.send('Item added');
});
/* Delete an item */
app.delete('/item/delete/:title', function (req, res) {
    if (!req.params.hasOwnProperty('title')) {
        res.statusCode = 404;
        return res.send('Error: empty item fields');
    }
    var found = false;
    for (var i = 0; i < items.length; i++) {
        if (items[i].title === req.params.title) {
            items.splice(i, 1);
            res.statusCode = 500;
            return res.send('Item removed');
        }
    }
    res.statusCode = 404;
    res.send('Item not found');
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
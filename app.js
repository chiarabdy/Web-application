var express = require("express");
var app = express();



app.get("/", (request, response) => {
    response.sendFile(__dirname + '/index.html')
});

app.use(express.static('.'))

var list = [
    {
        "title": "old item1",
        "bought": false
    },
    {
        "title": "old item2",
        "bought": true
    },
    {
        "title": "old item3",
        "bought": true
    }
]
app.get("/index", function (request, response) {

    console.log(request);
    response.send(main);

});
app.get("/list", function(request, response){
    response.send(list);
    console.log(list);
})
/*
app.use(bodyParser.urlencoded({
    extended: true
}));
*/

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

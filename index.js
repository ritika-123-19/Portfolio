var express = require("express");

var app = express();
const port = process.env.PORT || 5000;
app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));

app.listen(port, () => {
    console.log(`Server is running at ${port} `);
})
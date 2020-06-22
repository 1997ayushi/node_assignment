var express = require('express');
var app = express();
app.use('/', require('./router'));

app.listen(8000,() => {
    console.log("Server is running at 8000")
});

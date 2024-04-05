const express = require('express');

const app = express();

app.listen(3000, function() {
    console.log("The port is listening on port 3000");
});


app.get('/', function(request, response){
    response("Hello Wrold")
})
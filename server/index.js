var express = require('express');
var nedb = require('nedb');
var rest = require('express-nedb-rest');
var cors = require('cors');

var app = express();

var datastore = new nedb({
    filename:"mytodo.db",
    autoload:true
});

var restAPI = rest();
restAPI.addDatastore('todos',datastore);

app.use(cors());
app.use('/',restAPI);

app.listen(3000,function(){
    console.log('Listening at port 3000');
});
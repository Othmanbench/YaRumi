var express = require('express');
var app = express();
var sqlite3 = require('sqlite3').verbose();  
var file = "hr";  
var fs = require('fs');
var myParser = require("body-parser");

app.use(myParser.urlencoded({extended : true}));
app.get('/', function(req, res) {
	/*var db = new sqlite3.Database(file); 
	db.serialize(function() {
  		db.run(`CREATE TABLE IF NOT EXISTS contacts(firstname VARCHAR(15), lastname VARCHAR(20))`,
   			function(err,row) {
   			if(err) {
   				console.error(err);
   				return;
   			}
		});
		db.run(`INSERT INTO contacts(firstname, lastname) VALUES ($firstname, $lastname)`,
		{
			$firstname : req.query.firstname,
			$lastname : req.query.lastname
		})	

	})
	db.close()*/
	displayForm(res);
})
	.post('/', function(req, res) {
		console.log(req.body);
	})
	.listen(8080)


function displayForm(res) {
    fs.readFile('index.html', function (err, data) {
    	if(err) {
    		console.error(err)
    	}
		else {
			res.writeHead(200, {
            	'Content-Type': 'text/html',
                'Content-Length': data.length
        	});
        	res.write(data);
        	res.end();
        }
    });
}
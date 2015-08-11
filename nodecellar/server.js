var express = require('express');

var app = express();

app.get('/policies', function(req, res) {
  	console.log("inside /policies");
  	//console.log(JSON.stringify([{"name":"Aviva"}, {"name":"Axa"}, {"name":"Allianz"}]));
 	 res.setHeader('Content-Type', 'application/json');
 	 //res.json(JSON.stringify({"name":"Aviva"}));
 	 res.json({"name":"Aviva"});
});
app.get('/policies/:id', function(req, res) {
	console.log("inside /policies/:id");
	if (req.params.id == 1){
	   res.json({id:req.params.id, name: "Aviva i-Life"});
   } else if (req.params.id == 2){
	   res.json({id:req.params.id, name: "Axa", description: "Axa e-Life"});
   } else if (req.params.id == 3){
	   res.json({id:req.params.id, name: "Allianz", description: "Allianz online-Life"});
   }
});

app.listen(3000);
console.log('Listening on port 3000...');
#!/usr/bin/node

let fs = require("fs");
let http = require("http");
let mongo_client = require("mongodb").MongoClient;
let url = "mongodb://localhost/";
let db;

console.log("Iniciando script mongo-http");

mongo_client.connect(url, function(error, conn){
    console.log("Dentro de MongoDB");
    console.log(error);
 
    if (error) {
		console.log("ERROR!");
        return;
	}

	db = conn.db("todolist");
});

http.createServer(function(req, res){
	res.writeHead(200, {
		'Content-Type': 'application/json',
    	'Access-Control-Allow-Origin': '*',
    	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'	
	});

	if(req.method == "POST"){
		let task = "";
		let obj_id = "";
		req.on('data', function(chunk){
			task += chunk;
		});

		req.on('end', function(){
			console.log(task);
			db.collection("tasks")
				.insertOne({'task': task})
				.then(res => {
					obj_id = res.insertedId;
					let stringId = obj_id.toString();
					res.write(stringId);
					res.end();
				});

		});

		return;
	}

	if(req.method == "GET") {
		let objId = "";
		req.on('data', function(chunk){
			objId += chunk;
		});

		req.on('end', function(){
			console.log(objId);
		});
		return;
	}

	let col_data = db.collection("tasks").find();
	col_data.toArray(function(error, data){
		let string = JSON.stringify(data);
		res.write(string);
		res.end();
	});
}).listen(3030);


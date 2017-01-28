var express = require('express');
var app = express();
var router = express.Router();
var path = (__dirname + '/views/');

// Provide all routes here, this is for Home page.

router.get("/", function(req, res) {
	res.sendFile(path + 'index.html');
});

router.get("/dashboard", function(req, res) {
	res.sendFile(path + 'dashboard.html');
});

router.post('/motion/fwd', function(req, res){
	console.log("Forward Motion");
	var spawn = require('child_process').spawn,
		py = spawn('python', [
			__dirname + '/control/fwd.py']),
		data = [1,2,3],
    	dataString = '';
    console.log(__dirname + '/control/fwd.py');	
	py.stdout.on('data', function(data){
	  dataString += data.toString();
	});

	py.stdout.on('end', function(){
	  console.log('Sum of numbers=',dataString);
	});

	py.stdin.write(JSON.stringify(data));
	py.stdin.end();
});

router.post('/motion/left', function(req, res){
	console.log("Left Motion");
	var spawn = require('child_process').spawn,
		py = spawn('python', [
			__dirname + '/control/left.py']),
		data = [1,2,4],
    	dataString = '';
    console.log(__dirname + '/control/left.py');	
	py.stdout.on('data', function(data){
	  dataString += data.toString();
	});

	py.stdout.on('end', function(){
	  console.log('Sum of numbers=',dataString);
	});

	py.stdin.write(JSON.stringify(data));
	py.stdin.end();
});

router.post('/motion/stop', function(req, res){
	console.log("Stop Motion");
	var spawn = require('child_process').spawn,
		py = spawn('python', [
			__dirname + '/control/stop.py']),
		data = [1,3,4],
    	dataString = '';
    console.log(__dirname + '/control/stop.py');	
	py.stdout.on('data', function(data){
	  dataString += data.toString();
	});

	py.stdout.on('end', function(){
	  console.log('Sum of numbers=',dataString);
	});

	py.stdin.write(JSON.stringify(data));
	py.stdin.end();
});

router.post('/motion/right', function(req, res){
	console.log("Right Motion");
	var spawn = require('child_process').spawn,
		py = spawn('python', [
			__dirname + '/control/right.py']),
		data = [1,4,5],
    	dataString = '';
    console.log(__dirname + '/control/right.py');	
	py.stdout.on('data', function(data){
	  dataString += data.toString();
	});

	py.stdout.on('end', function(){
	  console.log('Sum of numbers=',dataString);
	});

	py.stdin.write(JSON.stringify(data));
	py.stdin.end();
});

router.post('/motion/bwd', function(req, res){
	console.log("Backward Motion");
	var spawn = require('child_process').spawn,
		py = spawn('python', [
			__dirname + '/control/bwd.py']),
		data = [1,5,6],
    	dataString = '';
    console.log(__dirname + '/control/bwd.py');	
	py.stdout.on('data', function(data){
	  dataString += data.toString();
	});

	py.stdout.on('end', function(){
	  console.log('Sum of numbers=',dataString);
	});

	py.stdin.write(JSON.stringify(data));
	py.stdin.end();
});


router.get("/users", function(req, res) {
	res.json({
		"message" : "User Page"
	});
});

app.use("", router);
app.use('/css', express.static(__dirname + '/views/css'))
app.use('/js', express.static(__dirname + '/views/js'))
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.listen(3000,function(){
  console.log("Live at Port 3000");
});



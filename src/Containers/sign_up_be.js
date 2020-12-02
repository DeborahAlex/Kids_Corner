
var express=require("express"); 
var bodyParser=require("body-parser"); 
const bcrypt = require("bcryptjs");
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/KidsCorner'); 
console.log("Just after mongoose");
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
}) 

var app=express() 
const router=express.Router();

app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
	extended: false
})); 

app.post('/sign_up', function(req,res){ 
    var firstName = req.body.firstName; 
    var lastName = req.body.lastName; 
	var email =req.body.email; 
	var pass = req.body.password; 
	
	/*	let user = db.collection('Client_Reg').findOne({email})
	   Promise.resolve(user).then(()=>{
		if(user) {
			console.log(user)
			console.log("User exists")
			return res.status(400).json({
				msg: "User Already Exists"
			});
		}
		})*/
	var data = { 
        "fname": firstName, 
        "lname": lastName,
		"email":email, 
		"password":pass, 
		 
	} 
	const salt =  bcrypt.genSalt(10);
    data.password = bcrypt.hash(pass, salt);
db.collection('Client_Reg').insertOne(data,function(err, collection){ 
		if (err) throw err; 
		console.log("Record inserted Successfully"); 
		res.send("Sign Up Successful")
	}); 
		
	return res.redirect('http://localhost:3000/signupsuccess'); 
}) 


app.get('/',function(req,res){ 
	console.log("in the app.get function");
res.set({ 
	'Access-control-Allow-Origin': '*'
	}); 
return res.redirect('http://localhost:3000/signup'); 

}).listen(3000) 


console.log("server listening at port 3000"); 

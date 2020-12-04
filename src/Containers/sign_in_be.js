
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
app.use(bodyParser.json()); 
//app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
	extended: false
})); 
/*
app.post('/sign_up', function(req,res){ 
    var firstName = req.body.firstName; 
    var lastName = req.body.lastName; 
	var email =req.body.email; 
	var pass = req.body.password; 
	var check= req.body.check;
	/*	let user = db.collection('Client_Reg').findOne({email})
	   Promise.resolve(user).then(()=>{
		if(user) {
			console.log(user)
			console.log("User exists")
			return res.status(400).json({
				msg: "User Already Exists"
			});
		}
		})
	var data = { 
        "fname": firstName, 
        "lname": lastName,
		"email":email, 
		"password":pass, 
		"check":check,
		 
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
*/
app.post('/sign_in',function(req,res)
{ 
	console.log("Sign in called")
	var email =req.body.email; 
	var pass = req.body.password; 
	var data = { 
		"email":email, 
		"password":pass, 
	} 
	db.collection('Client_Reg').findOne({email:req.body.email},function(err,docs) { 
		console.log("Entered db area"+docs)
		if (err) throw err; 
        //res.writeHead(200,{'Content-Type':'application/json'});
		//res.send(JSON.stringify(docs));
		if(docs==null)
		{res.send("Account not found")}
		else{
		var hashed=JSON.stringify(docs.password)
		console.log(hashed)
		console.log("compareSync"+bcrypt.compareSync(pass,docs.password))
		var val=bcrypt.compareSync(pass,docs.password)
		console.log("val"+val)
		if (bcrypt.compareSync(pass,docs.password))
		{
			res.send("Sign in Successful");
			//return res.redirect("http://localhost:3000/")
		}
		else{
			res.send("Please try again! Email Id and password do not match")
			}
       
	  let success
	  console.log("pass:"+pass+"hashed:"+hashed)
    /*bcrypt.compare(pass,hashed, function(err, response) {
			// res === true
			if(err) throw err
			 success=1;
			console.log("it is true")
			console.log(success)
			res.send("Sign in Successful");
		});*/
		/*
		if(bcrypt.compare(data.password,collection.password))
		{
			console.log("Signed in Successfully"); 
            //res.send("Sign In Successful")
            return res.redirect('http://localhost:3000/signupsuccess'); 
		}*/
		//console.log(success)
		//console.log("success value"+(success===1))
		
		/*if(success==1)
		{
			res.send("Sign in Successful")
		}*/
		
	}
		//res.send("Please try again! Email Id and password do not match")
		//res.send("Sign Up Successful")
	}); 
})
app.get('/signin',function(req,res){ 
    console.log("in the app.get function");
    return res.redirect('http://localhost:3000/signin'); 
res.set({ 
	'Access-control-Allow-Origin': '*'
	}); 


}).listen(3001) 


console.log("server listening at port 3001"); 

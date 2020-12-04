//import React from "React"
 
//import Home from "C:/Users/itsde/Documents/College/Semester3/WebTech/Project/kids_corner/src/Components/HomePage/home_page.js"
//import Signup from '../Components/SignUp/signupside'
//import Signin from '../Components/SignIn/signin';

var express = require("express"), 
	mongoose = require("mongoose"), 
	passport = require("passport"), 
	bodyParser = require("body-parser"), 
	LocalStrategy = require("passport-local").Strategy, 
    passportLocalMongoose = require("passport-local-mongoose"),
	User =require("./user"); 
    const initializePassport = require('./passport-config')
    //const LocalStrategy = require('passport-local').Strategy 
var compression =require('compression')
var ReactDOMServer = require('react-dom/server');
 var hbs=require("handlebars")
 var React=require("react")
var Home = require('../Components/HomePage/home_page.jsx')
var Signup =require('../Components/SignUp/signupside')
var Signin =require ('../Components/SignIn/signin')
//var React=require("react")

mongoose.set('useNewUrlParser', true); 
mongoose.set('useFindAndModify', false); 
mongoose.set('useCreateIndex', true); 
mongoose.set('useUnifiedTopology', true); 
mongoose.connect('mongodb://localhost:27017/KidsCorner'); 

var app = express(); 
var router=express.Router()
app.set("view engine", "handlebars"); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(compression())
app.use(express.static("public"))
app.use(require("express-session")({ 
	secret: "Rusty is a dog", 
	resave: false, 
	saveUninitialized: false
})); 

app.use(passport.initialize()); 
app.use(passport.session()); 

passport.use(new LocalStrategy({
    usernameField: 'email', // this is where you do that
    passwordField: 'password'
}, User.authenticate())); 
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser()); 

//===================== 
// ROUTES 
//===================== 

// Showing home page 

/*app.get("/", function (req, res) { 
	res.render("home"); 
}); */
/*
// Showing secret page 
app.get("/", isLoggedIn, function (req, res) { 
	res.render("secret"); 
}); 

// Showing register form 
app.get("/signup", function (req, res) { 
	res.render("register"); 
}); 
*/

router.get("/",(req,res)=>{
  /*  console.log("Entered get /")
    const Html=`
     <html>
		<body>
		<h2>Testing</h2>
        <dev id="reactele">{{{reactele}}}</div>
        <script src="../Components/HomePage/home_page.js" charset="utf-8"></script>
		<script src="/vendor.js" charset="utf-8"></script>
        </body>
    </html>
    `;
    const hbsTemplate=hbs.compile(Html)
    const reactComp=ReactDOMServer.renderToString(<Home/>)
	const htmltosend=hbsTemplate({reactele:reactComp})
	console.log(htmltosend)
	res.send(htmltosend)*/
	return res.redirect('http://localhost:3000/signup'); 

})

app.get("/",async (req,res)=>{
    console.log("Entered signup /")
    const Html=`
     <html>
		<body>
		<h2>Testing</h2>
        <dev id="reactele">{{{reactele}}}</div>
        <script src="/signup" charset="utf-8"></script>
		<script src="/vendor.js" charset="utf-8"></script>
        </body>
    </html>
    `;
    const hbsTemplate=hbs.compile(Html)
    const reactComp=ReactDOMServer.renderToString(<Signup/>)
	const htmltosend=hbsTemplate({reactele:reactComp})
	console.log(htmltosend)
    res.send(htmltosend)
})

/*
var router = express.Router()
router.get('/', (req, res) => {
	res.json('hello world')
  })
  app.use('/', router);*/
// Handling user signup 
app.post("/sign_up",async function (req, res) { 
	//var username = req.body.username 
    //var password = req.body.password 
    var firstName = req.body.firstName; 
    var lastName = req.body.lastName; 
	var email =req.body.email; 
	var password = req.body.password; 
	var check= req.body.check;
	User.register(new User({ "fname": firstName, 
    "lname": lastName,
    "email":email, 
    "check":check, }), 
			password, function (err, user) { 
		if (err) { 
			console.log(err); 
			return res.render("register"); 
		} 

		passport.authenticate("local")( 
			req, res, function () { 
            //res.render("secret")
            return res.redirect('http://localhost:3000/signup') 
		}); 
	}); 
}); 
/*
//Showing login form 
app.get("/signin", function (req, res) { 
	res.render("login"); 
}); */

//Handling user login 
app.post("/signin", passport.authenticate("local", { 
	successRedirect: "/", 
	failureRedirect: "/signin"
}), function (req, res) { 
}); 

//Handling user logout 
app.get("/logout", function (req, res) { 
	req.logout(); 
	res.redirect("/"); 
}); 

function isLoggedIn(req, res, next) { 
	if (req.isAuthenticated()) return next(); 
	res.redirect("/signin"); 
} 

var port = process.env.PORT || 3000; 
app.listen(port, function () { 
	console.log("Server Has Started!"); 
}); 

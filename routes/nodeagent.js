
// npm modules requires
var express = require('express')
var router = express.Router()
var https = require('http');
var t = require("exectimer");
var uniqid = require('uniqid');


//variables
var startdatetime = new Date();




	//
		// countProperties(obj)
	//

	function countProperties(obj) {
		return Object.keys(obj).length;
	}

	//
		// countProperties(obj)
	//



	// define the home page route
	router.get('/', function (req, res) {
	  
	   res.render('home');
		
	  
	})



	// define the about page route
	router.get('/about', function (req, res,next) {
   
	  var numstringobjects;
	  numstringobjects = countProperties(req);
	  
	  var statusText;
	  statusText = "running and returning page request metrics memory used and time duration";	
	  var timeelapsed = new Date() - startdatetime;
	  
	  // use npm exectimer to monitor time
	  var tick = new t.Tick("TIMER");
		 tick.start();
		  res.on('header', function() {
			tick.stop();

		  });
	
	  var myTimer = t.timers.TIMER;

		
    // create a json to use in res.render with variables to send metrics 
	var response_obj = {
	            expresrequniqueid: uniqid('expressreqobjres-'),
	            expressreqnumstringobj: numstringobjects,
				starttofinishresponsetime: timeelapsed + ' milliseconds',
				durresponsetime: myTimer.duration() + ' milliseconds',
			    minresponsetime: myTimer.min() + ' milliseconds',
				maxresponsetime: myTimer.max() + ' milliseconds',
				meanresponsetime: myTimer.mean() + ' milliseconds',
				medianresponsetime: myTimer.median() + ' milliseconds',
				memoryrss: process.memoryUsage().rss + ' bytes',
				memoryheaptotal: process.memoryUsage().heapTotal + ' bytes',
				memoryheapused: process.memoryUsage().heapUsed + ' bytes',
				memoryexternal: process.memoryUsage().external + ' bytes',
			}
			
			
			//display results in console
			console.log(statusText);
			
			console.log('the number of string objects in the request object are.' + numstringobjects);
			
			console.log('the page request time metrics are.');
			console.log('the start to finish request time of the page request is.' + response_obj.starttofinishresponsetime);
			console.log('Total Duration Of All Page Requests.' + response_obj.durresponsetime);
			console.log('The Shortest Response Of All Pages Requests.' + response_obj.minresponsetime);
			console.log('The Max Response Of All Pages Requests.' + response_obj.maxresponsetime);
			console.log('The Mean Response Of All Pages Requests.' + response_obj.meanresponsetime);
			console.log('The Median Response Of All Pages Requests.' + response_obj.medianresponsetime);
			
			console.log('the page request memory metrics are.');
			console.log('memoryrss.' + response_obj.memoryrss);
			console.log('memoryheaptotal.' + response_obj.memoryheaptotal);
			console.log('memoryheapused.' + response_obj.memoryheapused);
			console.log('memoryexternal.' + response_obj.memoryexternal);
			
		
	
				console.log('the response object is ..' + response_obj);
				console.log(response_obj);
				console.log('the response object is ..' + response_obj);

	        // send server data to be displayed in a web page using ejs template
			res.render("about", {metrics: response_obj, status_code: res.statusCode, status_text:statusText});
  
    // clear out procedure
    res.end();
		
	myTimer=""
	timeelapsed="";
})




module.exports = router
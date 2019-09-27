# Nodeagent
Node.js Express EJS CSS  Nodeagent API

Uses Node.js Express EJS CSS 

Server.js 
Node server utilizes Express.js and Routes 

/Routes/Nodeagent
Routes to be utilized 

'/' to home.ejs  initial landing page with links to /about  

'/about' to about.ejs runs the node agent code to gather time and memory metrics  


Nodeagent API returns time and memory metrics as express router 
is directed to '/about'

server.js is the initial starting page for the node app
to start application type server.js in console
node sever.json

server.js
creates an instance of express middle ware
sets up the express router and routes to be used 
the express rout is nodeagent and nodeagent.js
a server instance is created 

nodeagent.js
nodeagent.js is the express rout that routes users 
by '/' inital home landing page 

by '/about' 
router.get('/about', function (req, res,next) {
'/about' contains the express rout where 
the logic to gather the time and memory metrics 
are executed 

the time and memory metrics are gathered 
the time and memory metrics are set to variables
in a json object to be utilized to send data
to be displayed via a template engine 
the template engine is ejs 
the data is sent by method res.render


Node.js renders data to EJS template pages styled with CSS and serves
them in the web browser 

/Views
holds ejs files
home.ejs
about.ejs


/Public
css/css/styles
images/agentmatrix.jpg


/node_modules 
express module
ejs module

package.json
includes project dependencies 


Setup:
Can download to local folder
NPM Install
Browse to http://localhost:3000 will take you to home page with 
links for About r
Click on About to gather time and memory metrics
Or can type into browser url http://localhost:3000/about if you 
do not want to use link

spec.js for unit test using mocha
to run  test type in console
mocha -R spec spec.js

Travis add add travis information
register for travis and asign git directory 
 scotty845 / contrastsecuritynodeagent
add file .travis.yml
add folder test and index.spec.js 
#   n o d e a g e n t  
 
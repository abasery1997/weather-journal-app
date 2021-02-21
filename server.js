// Setup empty JS object to act as endpoint for all routes
let projectData = {};



// Require Express to run server and routes
const express = require('express');
const app = express();

//port that project run on it
const port = 8070 ;




//Here we are configuring express to use body-parser as middle-ware.

/* Middleware*/
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));  
app.use(bodyparser.json());

// Start up an instance of app
const server = app.listen(port,listining);
function listining (){
    console.log("server started");
    console.log(`go to localhost:${port}` );  
    
   }

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
//get all data
app.get('/showdata',(req,res) =>{
    res.send(projectData);
    projectData = [];
})
//send data to user
app.get('/',(req,res)=>{
    res
})

//set data from user
app.post('/postdata',(req,res) =>{
    res.send(projectData);
  projectData = {
       date: req.body.date,
       feels: req.body.feels,
        temp: req.body.temp,
        District: req.body.District,
        country: req.body.country

    }
     console.log('data in projectData ->');
     console.log(projectData);
     

})


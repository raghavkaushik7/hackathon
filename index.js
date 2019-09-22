const path = require('path')
const express=require('express')




const publicDirectoryPath= path.join(__dirname,'./hackathon')
const app=express()

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mongodb= require('mongodb')

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(publicDirectoryPath))
app.post('/register', function(req, res) {
    //console.log("hi")
    const MongoClient= mongodb.MongoClient
    const connectionURL= 'mongodb://127.0.0.1:27017'
    const databaseName = 'login-manager'
    MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>
    {
    if(error)
    {
        return console.log("Unable to connect to database")
    }
    const db = client.db(databaseName)

db.collection('register').insertOne({
    email:req.body.email,
    password:req.body.password
})
// db.collection('loginusers').findOne({name:req.body.email},(error,user)=>{
//     // console.log("hi")
//     if(error) {
//         return console.log('Unable to fetch')
//     }
//     console.log(user)
//     })
//  })
     res.redirect('http://localhost:3000/index.html');
  })
});
app.post('/middle',(req,res)=>{
 var source=req.body.source;
 var destination=req.body.dest;
 console.log(source,destination);


 function solve(graph, s) {
    var solutions = {};
    solutions[s] = [];
    solutions[s].dist = 0;
    
    while(true) {
      var parent = null;
      var nearest = null;
      var dist = Infinity;
      
      //for each existing solution
      for(var n in solutions) {
        if(!solutions[n])
          continue
        var ndist = solutions[n].dist;
        var adj = graph[n];
        //for each of its adjacent nodes...
        for(var a in adj) {
          //without a solution already...
          if(solutions[a])
            continue;
          //choose nearest node with lowest *total* cost
          var d = adj[a] + ndist;
          if(d < dist) {
            //reference parent
            parent = solutions[n];
            nearest = a;
            dist = d;
          }
        }
      }
      
      //no more solutions
      if(dist === Infinity) {
          break;
      }
      
      //extend parent's solution path
      solutions[nearest] = parent.concat(nearest);
      //extend parent's cost
      solutions[nearest].dist = dist;
    }
    
    return solutions;
  }
 
  
  var graph = {};

graph={ '2': { '3': 1, '4': 1, R: 1 },
 '3': { '2': 1, '4': 1, '6': 1, '13': 1 },
 '4': { '2': 1, '3': 1, '5': 1, '8': 1 },
 '5': { '4': 1, '7': 1, '11': 1 },
 '6': { '3': 1, '13': 1, '15': 1 },
 '7': { '5': 1, '10': 1 },
 '8': { '4': 1, '11': 1, '13': 1 },
 '9': { '14': 1 },
 '10': { '7': 1 },
 '11': { '5': 1, '8': 1, '12': 1 },
 '12': { '11': 1 },
 '13': { '3': 1, '6': 1, '8': 1, '14': 1 },
 '14': { '9': 1, '13': 1 },
 '15': { '6': 1 },
 R: { '2': 1 } }
 
 
 //  console.log(graph)
  //choose start node
  var start = '10';
  //get all solutions
 
 

  
    var dict = {
       '1': "ambala",
         '2':"Sirsa",
         '3':"Hisar",
         '4':"Chandigarh",
         '5':"Jind",
         '6':"Delhi",
         '7':"Kurukshetra",
         '8':"Karnal",
         '9':"Panipat",
         '10':"Sonepat",
         '11':"Rohtak",
         '12':"Kaithal",
         '13':"Hansi",
         '14':"Faridabad",
         '15':"Gurugram"
     };
     
     var cities=[ "Ambala","Sirsa","Hisar","Chandigarh","Jind","Delhi","Thanesar","Karnal","Panipat","Sonepat","Rohtak","Kaithal","Hansi","Faridabad","Gurugram"]
    
     var reversedict = {
       "ambala":'1',
         "Sirsa":'2',
         "Hisar":'3',
         "Chandigarh":'4',
         "Jind":'5',
         "Delhi":'6',
         "Kurukshetra":'7',
         "Karnal":'8',
         "Panipat":'9',
         "Sonepat":'10',
         "Rohtak":'11',
        "Kaithal": '12',
        "Hansi":'13',
        "Faridabad": '14',
       "Gurugram":  '15'
     };
    // console.log(dict)
     //console.log(reversedict)
 
    // console.log("From '"+start+"' to");
     //display solutions
     //  console.log(" -> " + s + ": [" + solutions[s].join(", ") + "]   (dist:" + solutions[s].dist + ")")
           
          //coord.address=[latitude,longitude]
 


console.log(reversedict[source])
 var solutions = solve(graph,reversedict[source]);
var ans=solutions[reversedict[destination]];
var final=[];
for( var i=0;i<ans.length-1;i++)
{
   final.push(dict[ans[i]])
}
console.log(final);
res.redirect('http://localhost:3000/map.html');
//  setTimeout(function(){ console.log("data is " + solutions) }, 3000);


 

})
app.get('/map',(req,res)=>{
    console.log('qsd')
})
app.post('/myaction', function(req, res) {
    const MongoClient= mongodb.MongoClient
    const connectionURL= 'mongodb://127.0.0.1:27017'
    const databaseName = 'login-manager'
    MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>
    {
    if(error)
    {
        return console.log("Unable to connect to database")
    }
    const db = client.db(databaseName)

     
db.collection('register').findOne({
    email:req.body.email,
    password:req.body.password
},(error,user)=>{
     if(!user)
     {
         console.log("User Not Found")
     }
     else{
         res.redirect('http://localhost:3000/middle.html')
    console.log(user)
     }
    })

})   
});


app.get('',(req,res)=>{
    res.send('Hello Express!')
})
app.listen(3000, ()=>{
    console.log('Hello')
})



//dijkstra solve graph starting at s
const request = require('request')





   
   
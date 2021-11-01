const express = require("express")
const cors = require("cors")
const app = express()
const sql = require("./app/models/db.js")

app.use(cors())

app.use(express.urlencoded({extended: true}));
// To parse the incoming requests with JSON payloads
app.use(express.json()) 

// Insert Entry
app.get("/", cors(), async (req, res)=> {
  sql.query("SELECT * FROM customers", (err, result) =>{
    if(err) throw err
    res.json(result)
  })  
}) 

// Fetch Entry
app.post("/create", cors(), async (req, res) => {
  const data = {
    name : req.body.name,
    email : req.body.email,
    active : req.body.active
  }
  sql.query("INSERT INTO customers SET ?", data, (err, result) => {
    if(err) {
      console.log("error: ", err)
      return
    }
    else {
      res.send(result)
      //console.log("created customer: ", { id: result.id, ...data });
    }
  })
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>{
  console.log(`Listning to port ${PORT}.`)
})
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/kaviya',(req,res)=>{
    res.json("kaviyapage")
})
app.get('/Mathan',(req,res)=>{
    res.send('<h1> Hi this is MathanKumar<h1/>')
})


app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})

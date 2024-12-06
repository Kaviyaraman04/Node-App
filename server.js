const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/kaviya',(req,res)=>{
    res.json("kaviyapage")
})
app.get('/user/:id', (req, res) => {     // Access URL parameterconst
     userId = req.params.id;  
        console.log(userId); // Logs the user ID from the URL// Respond with a message   
         res.send(`<h1>hai user ${userId}</h1>`); 
        });
        app.get('/header', (req, res) => {
            res.send(`
        <html>
        <head>
        <style>
                            h2 {
                                color: blue;
                                font-family: Arial, sans-serif;
                            }
                            p {
                                font-size: 16px;
                                color: gray;
                            }
        </style>
        </head>
        <body>
        <h2>This is a Styled H2 Header</h2>
        <p>This is a paragraph with internal CSS styling.</p>
        </body>
        </html>
            `);
        });
        app.get('/search', (req, res) => {
            // Access the query parameters
            const term = req.query.name;
            const category = req.query.qualification;
         
            // Log and respond with the query parameters
            console.log(`Search term: ${term}`);
            console.log(`Category: ${category}`);
            res.send(`My Name is  ${term} My qualification is ${category}`);
        });

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})

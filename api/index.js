// Lets import the fs module to access the fileSystem
const fs = require('fs').promises;

const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors({credentials: true, origin: true}))
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const port = 3000

app.get('/', (req, res) => res.json({ Hello: 'World!',req:'JSON.stringify(req)' }));

// our new API endpoint to read a file from disk
// and send the results over http
app.post('/writeFile', async (req, res) => {
  console.log(req.body)
  fs.writeFile('api/data_test.json', JSON.stringify(req.body), err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
  const fileContent = await fs.readFile('api/data.json','utf8');
  res.status(201).send(fileContent)
});

app.get('/data', async (req, res) => {
  console.log('hier')
  const fileContent = await fs.readFile('api/data.json','utf8');
  res.json({ fileContent });
  return true
});


app.listen(
  port, 
  () => console.log(`app listening at http://localhost:${port}`)
);
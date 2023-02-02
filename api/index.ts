import { Request, Response } from 'express';
import { IAllData } from './all-data.interface';
import { IUserData } from './user-data.interface';

// Lets import the fs module to access the fileSystem
const fs = require('fs').promises;

const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors({ credentials: true, origin: true }));
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = 3000;

app.get('/', (req: Request, res: Response) =>
  res.json({ Hello: 'World!', req: 'JSON.stringify(req)' })
);

// app.post('/login', async (req, res) => {
//   let fileContent = await fs.readFile('api/data.json','utf8');

//   let foundeUser = JSON.parse(fileContent).data.filter((userId)=>userId==req.body.userId)

//   res.json({ fileContent });

//   console.log(req.body)
//   fs.writeFile('api/data_test.json', JSON.stringify(req.body), err => {
//     if (err) {
//       console.error(err);
//     }
//     // file written successfully
//   });
//   res.status(201).send(fileContent)
// });

// our new API endpoint to read a file from disk
// and send the results over http
app.post('/writeFile', async (req: Request, res: Response) => {
  console.log(req.body);
  fs.writeFile('api/data_test.json', JSON.stringify(req.body), (err: Error) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
  const fileContent = await fs.readFile('dist/data.json', 'utf8');
  res.status(201).send(fileContent);
});

app.get('/myTodos', async (req: Request, res: Response) => {
  const fileContent: string = await fs.readFile('dist/data.json', 'utf8');
  const parsedData: IAllData = JSON.parse(fileContent);
  const usersData: Array<IUserData> = parsedData.data;
  let userData: IUserData = {} as IUserData;

  // console.log('fileContent');
  // console.log(fileContent);
  // console.log('parsedData');
  // console.log(parsedData);
  // console.log('usersData');
  // console.log(usersData);
  const foundedUsers = usersData.filter((users) => users.userId === '1');
  if (foundedUsers.length === 1 && foundedUsers[0].userId === '1') {
    userData = foundedUsers[0];
    // console.log('userData');
    // console.log(userData);
  } else {
  }

  res.status(200).send(userData);
  return true;
});

app.listen(port, () =>
  console.log(`⚡️app listening at http://localhost:${port}`)
);

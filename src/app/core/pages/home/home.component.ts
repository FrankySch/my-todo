import { Component } from '@angular/core';
// import { exec } from 'child_process';
// import { ReadLine } from 'readline';
import { writeFile } from 'fs';
// import fs = require('fs');
// import * as ns from 'fs';
// var fs = require('browserify-fs');

@Component({
  // selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'my-todo';

  readJson() {
    const jsonData = JSON.parse(require('src/../db/data.json'));
    console.log(jsonData);
  }

  writeJson() {
    const jsonData = {
      data: [
        {
          userId: 2,
          groupedTodos: [
            {
              groupTitle: 'Ambilight',
              todos: [
                {
                  text: 'WS218x',
                  importance: 'high',
                  dueDate: '',
                  remeberDate: '',
                },
              ],
            },
          ],
          singleTodos: [
            {
              text: 'aufräumen',
              importance: 'high',
              dueDate: '',
              remeberDate: '',
            },
          ],
        },
      ],
    };

    writeFile('message.txt', JSON.stringify(jsonData), (err: any) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  }
}

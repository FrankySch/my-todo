import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  // selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'my-todo';

  constructor(private httpClient: HttpClient) {}

  readJson() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('GET', 'POST');

    fetch('http://localhost:3000/data', {
      // mode: 'no-cors',
      credentials: 'include',
      method: 'GET',
      headers: headers,
      // body: JSON.stringify(jsonData),
    })
      .then((res) => res.text())
      .then((txt) => console.log(JSON.parse(txt)))
      .catch((err) => console.error(err));
    return false;

    this.httpClient.get('http://localhost:3000/data');
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

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('GET', 'POST');

    // this.httpClient.post(
    //   'http://localhost:3000/writeFile',
    //   {
    //     username: 'scott',
    //     password: 'secret',
    //     website: 'stackabuse.com',
    //   },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json',
    //       'Access-Control-Allow-Origin': 'http://localhost:4200',
    //       'Access-Control-Allow-Credentials': 'true',
    //     },
    //     params: {
    //       username: 'scott',
    //       password: 'secret',
    //       website: 'stackabuse.com',
    //     },
    //     // responseType: 'arraybuffer',
    //     withCredentials: false,
    //   }
    // );

    fetch('http://localhost:3000/writeFile', {
      method: 'POST',
      headers: headers,
      // body: JSON.stringify({
      //   username: 'scott',
      //   password: 'secret',
      //   website: 'stackabuse.com',
      // }),
      body: JSON.stringify(jsonData),
    })
      .then((res) => res.text())
      .then((txt) => console.log(txt))
      .catch((err) => console.error(err));
    return false;
  }
}

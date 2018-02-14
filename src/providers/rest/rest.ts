import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  data: any;
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  load(user, password) {
    let postParams = {
      email: user,
      pass: password
    }
    const myObjStr = JSON.stringify(postParams);
    return new Promise(resolve => {
      this.http.post("https://dylantxa.fr/waar/info.php", myObjStr)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, error => {
        console.log(error);// Error getting the data
        return error;
      });
    });
  }
  UserList() {
    let postParams = {
      email: "a",
      pass: "b"
    }
    const myObjStr = JSON.stringify(postParams);
    return new Promise(resolve => {
      this.http.post("https://dylantxa.fr/waar/list.php", myObjStr)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, error => {
        console.log(error);// Error getting the data
        return error;
      });
    });
  }
  JournalDeBord(user, password) {
    let postParams = {
      email: user,
      pass: password
    }
    const myObjStr = JSON.stringify(postParams);
    return new Promise(resolve => {
      this.http.post("https://dylantxa.fr/waar/journaldebord.php", myObjStr)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, error => {
        console.log(error);// Error getting the data
        return error;
      });
    });
  }
}

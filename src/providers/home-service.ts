import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/*
 Generated class for the HomeService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class HomeService {
  constructor(public http: Http) {
    console.log('Hello HomeService Provider');
  }

  public get(url) {
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(error => this.handleError(error));
  }

  public post(url, data) {
      return this.http.post(url, data)
        .toPromise()
        .then(res => res.json())
        .catch(error => this.handleError(error));
  }

  private handleError(error: Response | any) {
    var msg=error.toString();
    alert("msg: "+msg+"\nerr: "+error+"\ndata: "+error.data);
  }
}

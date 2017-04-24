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

  public all() {
    var taskString=window.localStorage['tasks'];
    if(taskString) return JSON.parse(taskString);
    return [];
  }

  public save(task) {
    var tasks=[];
    var taskString=window.localStorage['tasks'];
    if(taskString) tasks=JSON.parse(taskString);
    tasks.push(task);
    window.localStorage['tasks']=JSON.stringify(tasks);
  }

  public reset(tasksNew) {
    window.localStorage['tasks']=JSON.stringify(tasksNew);
  }

  private handleError(error: Response | any) {
    var msg=error.toString();
    alert("msg: "+msg+"\nerr: "+error+"\ndata: "+error.data);
  }
}

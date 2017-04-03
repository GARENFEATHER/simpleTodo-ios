///<reference path="../../providers/home-service.ts"/>
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeService } from "../../providers/home-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks;
  private base1 = "http://10.0.0.102:3000";
  private base2 = "http://123.206.121.176:3000";
  private base;

  constructor(public navCtrl: NavController, public httpService: HomeService) {
    this.base=this.base2;
    this.httpService.get(this.base + "/task")
      .then(res => {
        if(res) this.tasks=res;
        else this.tasks=[];
      });
  }

  createTask(newTitle: string) {
    var task = {title: newTitle, status: false};
    this.tasks.push(task);
    this.httpService.post(this.base + "/task", {title: task.title, status: task.status})
      .then(res => {
        console.log(task);
      }).catch(function () {
        console.log("create error");
    });
  }

  changeStatus(title: string, status: boolean) {

  }
}




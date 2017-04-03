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
  private base = "http://10.0.0.102:3000";

  constructor(public navCtrl: NavController, public httpService: HomeService) {
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




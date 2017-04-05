///<reference path="../../providers/home-service.ts"/>
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
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
  private task={title: "", status: false};

  constructor(public navCtrl: NavController, public httpService: HomeService, public alertCtrl: AlertController) {
    this.base=this.base2;
    this.httpService.get(this.base + "/task")
      .then(res => {
        if(res) this.tasks=res;
        else this.tasks=[];
      }).catch(function (error) {
        console.log(error);
    });
  }

  createTask() {
    let alert=this.alertCtrl.create({
      title: "Empty Input",
      subTitle: "Empty task is not allowed to be created!",
      buttons: ["OK"]
    });
    alert.present();
    this.httpService.post(this.base + "/task", {title: this.task.title, status: this.task.status})
      .then(res => {
        this.tasks.push(res);
        console.log(res);
      }).catch(function () {
        console.log("create error");
    });
  }

  changeStatus(title: string, status: boolean) {

  }
}




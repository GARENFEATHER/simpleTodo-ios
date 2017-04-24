///<reference path="../../providers/home-service.ts"/>
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomeService } from "../../providers/home-service";
import { CreatePage } from '../create/create';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks;
  private base1 = "http://10.0.0.102:3000";//useless
  private base2 = "http://123.206.121.176:3000";
  private base;
  private task={title: "", status: false};
  private pushPage;

  constructor(public navCtrl: NavController, public httpService: HomeService, public alertCtrl: AlertController) {
    this.pushPage=CreatePage;
    this.base=this.base2;
    this.httpService.get(this.base + "/task")
      .then(res => {
        if(res) {
          this.tasks=res
          console.log(res);
        }
        else this.tasks=[];
      }).catch(function (error) {
        console.log(error);
    });
  }

  changeStatus(task) {
    this.httpService.post(this.base + "/task", {title: task.title, status: !task.status, create_at: task.create_at})
      .then(res => {
        task.status=res.status;
        console.log(this.tasks);
        console.log(res);
      }).catch(function () {
      console.log("change error");
    });
  }
}




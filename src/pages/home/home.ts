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
  private task={title: "", status: false};
  private pushPage;

  constructor(public navCtrl: NavController, public Tasks: HomeService, public alertCtrl: AlertController) {
    this.pushPage=CreatePage;
    this.tasks=this.Tasks.all();
  }

  changeStatus(task) {
    this.tasks.splice(this.tasks.splice(this.tasks.indexOf(task),1));
    task.status=!task.status;
    this.tasks.push(task);
    this.Tasks.reset(this.tasks);
  }

  deleteTask(task) {
    this.tasks.splice(this.tasks.splice(this.tasks.indexOf(task),1));
    this.Tasks.reset(this.tasks);
    console.log("delete "+task);
  }
}




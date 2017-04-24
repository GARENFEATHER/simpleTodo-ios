import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {HomeService} from "../../providers/home-service";

/*
  Generated class for the Create page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {
  private task={title: "", status: false};

  constructor(public navCtrl: NavController, public Tasks: HomeService, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  createTask() {
    if(this.task.title == "") {
      let alert=this.alertCtrl.create({
        title: "Empty Input",
        subTitle: "Empty task is not allowed to be created!",
        buttons: ["OK"]
      });
      alert.present();
      return;
    }
    this.Tasks.save(this.task);
    console.log(this.task);
    this.navCtrl.pop();
  }
 }

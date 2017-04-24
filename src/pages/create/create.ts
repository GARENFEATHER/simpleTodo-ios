import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

//   createTask() {
//     if(this.task.title == "") {
//       let alert=this.alertCtrl.create({
//         title: "Empty Input",
//         subTitle: "Empty task is not allowed to be created!",
//         buttons: ["OK"]
//       });
//       alert.present();
//       return;
//     }
//     this.httpService.post(this.base + "/task", {title: this.task.title, status: this.task.status})
//       .then(res => {
//         this.tasks.push(res);
//         this.task.title="";
//         console.log(res);
//       }).catch(function () {
//       console.log("create error");
//     });
//   }
 }

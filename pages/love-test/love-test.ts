import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { Calculations } from '../../providers/calculations';

/*
  Generated class for the LoveTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-love-test',
  templateUrl: 'love-test.html'
})
export class LoveTestPage {
love:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl:ViewController,public calculations:Calculations) {
    this.love={your_name:'name',your_dob:'DD/MM/YY'}
    this.love.your_name=navParams.get('your_name');
     this.love.your_dob="19/02/1993";
    console.log(navParams.get('your_name'));
console.log(this.love);
this.calculations.getDD(this.love.your_dob);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoveTestPage');
  }
closeModal(){
  this.viewCtrl.dismiss();
}
}

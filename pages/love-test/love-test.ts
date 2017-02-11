import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';

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


  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
    
    console.log(navParams.get('your_name'));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoveTestPage');
  }
closeModal(){
  this.viewCtrl.dismiss();
}
}

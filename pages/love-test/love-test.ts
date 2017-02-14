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
    this.love={your_name:'',your_dob:'',your_day:'',about_you:'',partner_name:'',partner_dob:'',partner_day:'',
              about_partner:'',love_percentage:''};
    
    this.love.your_name=navParams.get('your_name');
    this.love.partner_name=navParams.get('partner_name');
    this.love.your_dob=navParams.get('your_dob');
    this.love.your_day=navParams.get('your_dob').toString().replace(/-/g, '').substring(6,8);
    this.love.partner_day=navParams.get('partner_dob').toString().replace(/-/g, '').substring(6,8);
    console.log("partner day"+this.love.partner_day);
    this.love.partner_dob=navParams.get('partner_dob');
    console.log(navParams.get('your_name'));
    console.log(this.love);
    this.calculations.getDDMMYY(this.love.your_dob);
    this.calculations.nameToDigit("Soumyadeepa Kundu");


  }
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoveTestPage');
     //this.calculations.nameToDigit("Soumyadeepa Kundu");
     this.loveCalculationFinal();
    this.calculations.load();
     

  }
closeModal(){
  this.viewCtrl.dismiss();
}
loveCalculationFinal(){


    var using_name=this.calculations.nameToDigit(this.love.your_name)+""+this.calculations.nameToDigit(this.love.partner_name);
    var using_dob=""+this.calculations.getDDMMYY(this.love.your_dob)+""+this.calculations.getDDMMYY(this.love.partner_dob);
    var using_day=""+this.calculations.getDD(this.love.your_dob)+""+this.calculations.getDD(this.love.partner_dob);
    var dob_has6=(this.calculations.checkHas6(this.love.partner_dob+this.love.your_dob)*0.5);
    
    
    //console.log("your_name"+your_name);
   console.log("using_dob"+using_dob);
    console.log("using_name"+using_name);
    console.log("partner"+this.calculations.getDDMMYY(this.love.partner_dob));
     console.log("your"+this.calculations.getDDMMYY(this.love.your_dob));
     console.log("partner_has6"+dob_has6+"your_has6");
    console.log("using name"+this.calculations.calLove(using_name));
    console.log("using dob"+this.calculations.calLove(using_dob));
    console.log("using day"+this.calculations.calLove(using_day));
    var love=Math.floor((this.calculations.calLove(using_name)*0.5+this.calculations.calLove(using_day)*0.5+this.calculations.calLove(using_dob)+(dob_has6))/2.5);
    if(love!=NaN)
    this.love.love_percentage=love;
    console.log("Your Love :"+love)
}
}

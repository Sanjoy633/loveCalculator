import { Component } from '@angular/core';

import { NavController,ModalController } from 'ionic-angular';
import {LoveTestPage} from '../love-test/love-test'
import { Calculations } from '../../providers/calculations';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  data = {}

  constructor(public navCtrl: NavController,public modalctrl:ModalController,public calculations:Calculations) {
    this.calculations.nameToDigit("Soumyadeepa Kundu");
    this.calculations.nameToDigit("Sanjoy Kanrar");
  }

 
  testLoveCalculation(){
 console.log("Ready to begin the test");
 let modal=this.modalctrl.create(LoveTestPage,this.data);
 modal.onDidDismiss(data => {
   this.data={};
    // console.log(data);
   });
 modal.present();


  }

}

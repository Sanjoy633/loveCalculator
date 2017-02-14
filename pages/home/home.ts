import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController,ModalController } from 'ionic-angular';
import {LoveTestPage} from '../love-test/love-test'
import { Calculations } from '../../providers/calculations';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loveForm: FormGroup;
  data = {}
  submitAttempt: boolean = false;
  constructor(public navCtrl: NavController,public modalctrl:ModalController,
  public calculations:Calculations, public formBuilder: FormBuilder) {

    this.loveForm=formBuilder.group({
        your_name: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        your_dob: [''],
        partner_name: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        partner_dob: ['']
    });
 

    this.calculations.nameToDigit("Soumyadeepa Kundu");
    this.calculations.nameToDigit("Sanjoy Kanrar");
  }

 save(){
 
    this.submitAttempt = true;
 
    if(!this.loveForm.valid){
        return;
    } 
    
    else {
     this.testLoveCalculation();
     this.submitAttempt = false;
        console.log("success!")
        console.log(this.loveForm.value);
   
    }
 
}
  testLoveCalculation(){
   
 console.log("Ready to begin the test");
 let modal=this.modalctrl.create(LoveTestPage,this.loveForm.value);
 modal.onDidDismiss(data => {
   this.data={};
    // console.log(data);
   });
 modal.present();


  }

}

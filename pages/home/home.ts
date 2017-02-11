import { Component } from '@angular/core';

import { NavController,ModalController } from 'ionic-angular';
import {LoveTestPage} from '../love-test/love-test'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  data = {}

  constructor(public navCtrl: NavController,public modalctrl:ModalController) {
    this.nameToDigit("Sanjoy");
this.nameToDigit("Soumyadeepa");
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


turnIntoSingleDigit(digit){
let  n:number;
n=Number(digit);
console.log(n);
let sum1=0,rem=0;

while(n > 0)
      {
                 while(n != 0)
                 {
                      rem = n%10;
                      sum1 = sum1+rem;
                      n=Math.floor(n/10);
                 }
                 if(sum1 > 9)
                 {
                        n = sum1;
                        sum1 = 0;
                 }
                  
      }
	  return sum1;
}
nameToDigit(str1){
var sum=0;


var test=str1.replace(/ /g, '').toLowerCase();
console.log(test);
var size= test.length;
 var i=0;
 
      for (  i = size - 1 ; i >= 0 ; i-- ){
         sum = sum+this.letterToNumber(test.charAt(i));}
		console.log(this.turnIntoSingleDigit(sum)); 
}		 
		 
letterToNumber(str){
var the_1=["a","j","s"]; 
var the_2=["b","k","t"]; 
var the_3=["c","l","u"]; 
var the_4=["d","m","v"]; 
var the_5=["e","n","w"]; 
var the_6=["f","o","x"]; 
var the_7=["g","p","y"]; 
var the_8=["h","q","z"]; 
var the_9=["i","r"]; 

if(this.inTheArray(the_1,str))
return 1;
else if(this.inTheArray(the_2,str))
return 2;
else if(this.inTheArray(the_3,str))
return 3;
else if(this.inTheArray(the_4,str))
return 4;
else if(this.inTheArray(the_5,str))
return 5;
else if(this.inTheArray(the_6,str))
return 6;
else if(this.inTheArray(the_7,str))
return 7;
else if(this.inTheArray(the_8,str))
return 8;
else if(this.inTheArray(the_9,str))
return 9;

}


inTheArray(arr, b) {
    return arr.indexOf(b) != -1;
}





}
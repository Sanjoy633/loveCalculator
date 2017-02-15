import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Calculations provider.

  This a project of Unicode IT Solutions (http://unicodeitsolutions.com/ )
*/
@Injectable()
export class Calculations {
allDay:any;
  constructor(public http: Http) {
    console.log('Hello Calculations Provider');
    
  }

turnIntoSingleDigit(digit){
let  n:number;
n=Number(digit);
console.log("turnIntoSingleDigit"+n);
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
console.log("nameToDigit"+test);
var size= test.length;
 var i=0;
 
      for (  i = size - 1 ; i >= 0 ; i-- ){
         sum = sum+this.letterToNumber(test.charAt(i));}
		return this.turnIntoSingleDigit(sum); 
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
 getDD(dob){
var dob_day=dob.replace(/-/g, '').substring(6,8);
//var dob_month=dob.replace(/-/g, '').substring(4,6);
//var dob_year=dob.replace(/-/g, '').substring(0,4);

//console.log(this.turnIntoSingleDigit(dob_day+dob_month+dob_year));
return this.turnIntoSingleDigit(dob_day);

  }
 getDDMMYY(dob){
var dob_day=dob.replace(/-/g, '').substring(6,8);
var dob_month=dob.replace(/-/g, '').substring(4,6);
var dob_year=dob.replace(/-/g, '').substring(0,4);

//console.log(this.turnIntoSingleDigit(dob_day+dob_month+dob_year));
return this.turnIntoSingleDigit(dob_day+""+dob_month+""+dob_year);

  }
  checkHas6(arr){
    

    if(this.inTheArray(arr,"6") && this.inTheArray(arr,"5"))
return 100;
else if(this.inTheArray(arr,"6") && !this.inTheArray(arr,"5"))
return 95;
else if(this.inTheArray(arr,"5"))
return 90;
else
return 80;

  }

  calLove(str){

var best=["13","31","15","51","16","61","26","62","28","82","29","92","35","53","37","73","46","64","48","84","55","56","64","57","75","66","88"];
var possible=["14","41","17","71","19","91","22","23","32","33","36","63","44","67","76","77","74","47","68","86","69","96"];
var challeging=["11","12","21","24","42","25","52","39","93","49","94","58","85","59","95","79","97"];
var disaster=["18","81","27","72","34","43","38","83","45","54","78","87","89"];

if(this.inTheArray(best,str))
return 100;
else if(this.inTheArray(possible,str))
return 85;
else if(this.inTheArray(challeging,str))
return 70;
else if(this.inTheArray(disaster,str))
return 40;
  }







load(){
  
this.allDay=[{"id":"01","day":"01","desc":"You are a very friendly person. You love the good things in life. You are very ambitious. You seek stable, long-time relationships. You have good leadership skills - if you channel your efforts in the right direction. you can go very far in life."}, {"id":"02","day":"02","desc":"You are a very helpful person You make friends easily. You mind to be very loving and caring in your relationships. You are very optimistic and confident about the things you do. This is a quality which will help you to get ahead of others in life."}, {"id":"03","day":"03","desc":"You have a creative mind. You love to explore new places and learn about new things. You are easy-going in life. Your loved ones are very happy in your company. You have big dreams in life. Try your best and you shall achieve them soon."}, {"id":"04","day":"04","desc":"You are someone who loves life. Your smiles are infectious. Your motivational spirit is undeniable. You are romantic at heart and will have a very good love life. Most of the times, you are an understanding individual but can be dificult to deal sometimes. You are totally loyal and trustworthy. Your friends love you."}, {"id":"05","day":"05","desc":"You have a magnetic and pleasing personality. You have a good sense of  humor. People like you to be around them.  You tend to fall in love very fast You are emotional and may suffer in case of a break-up. You love to wear fashionable and stylish clothes."}, {"id":"06","day":"06","desc":"You are cheerful at heart. You are enthusiastic about trying new things You have an adventurous streak At the same time, you are a sensitive individual. You can maintain friendships very well. You are compassionate and caring for the people you love. You will accomplish a lot in life."}, {"id":"07","day":"07","desc":"You have a shy but likable personality.  You are a dependable person. You like stability and peace in your life. You are sinceie in your work When in love, you become very romantic and mushy You like In lead a luxurious life. You are faithful towards your family and friends."}, {"id":"08","day":"08","desc":"You have a talent for business, and a good sense of money. Your approach to business is original, creative and daring. You have sound judgment, Leadership is your gift. In the same way, you have a great talent for organization. You can manage large groups of people and guide them along the lines of your vision. You are a realist, self-confident, practical, ambitious and goal-oriented. Others respect you and your judgment. "}, {"id":"09","day":"09","desc":"You have a smart and stylish personality. The opposite sex gets easily attached towards you You love the finer things  of life. You believe in living in the present You take very good care of your family and friends. In a relationship, your partner  is the apple of your eye"}, {"id":"10","day":"10","desc":"You are a very charismatic person.  People love to be in touch with you  You are self sacrifcing in your relationships You are like a  coconut - tough outside but sensitive  at heart At times, you love to indulge in artistic and creative ventures.  Take care that people don't take advantage of your helpful nature."}, {"id":"11","day":"11","desc":"You have a warm and inviting personality. You are amiable and love to make new friends. You are quick to return favors from friends You love to crack jokes and spend long hours with friends.  In relationships, you seek to dominate your partner but in a non-threatening way. At the same time, you are very passionate in your relationships."}, {"id":"12","day":"12","desc":"You are a wise person known for your humility. You are dedicated and sincere in your studies\/work You are an emotional lover. You tend In get possessive in your relationships Otherwise, you are an easy-going and friendly person. You love to dress well. You are realistic in the game of life."}, {"id":"13","day":"13","desc":"You are wise beyond your years. Your friends tum to you whenever they need any advice. You care for the people close to your heart. You are a very good motivator You work very well in teams and are a beam-player You don't hold back your feelings and are very expressive in love and ronlance."}, {"id":"14","day":"14","desc":"You are born to be a leader: You are cool in dificult situations and inspire others in times of crisis. You love traveling You like to dress in sync with the latest fashion trends You love to be pampered by your loved one. You prefer to be in a serious relationship. You are faithful to your family."}, {"id":"15","day":"15","desc":"You have a very magnetic personality  You always stand out in a crowd.  You are usually smiling and spreading cheer around. You are serious about life. You have certain goals in life which you want to reach and you strive hard to achieve them. You pour your everything in a relationship. Sentiments are very important for you."}, {"id":"16","day":"16","desc":"You have a patient and introspective personality. You do things after thinking about the pros and cons You are kind and altruistic by nature. You like to help others Your enthusiasm is infectious. You express your love to your beloved every now and then You take great care of your sweetheart and shower all your attention on him\/her"}, {"id":"17","day":"17","desc":"You are a polite person. But at times you lose your temper very easily. You have a creative bent in you. You like  to indulge in artistic ventures You are mature beyond your years. You try to be friends with everyone. You are a  born flirter. You prefer independence and seek space in your love relationships."}, {"id":"18","day":"18","desc":"You are an outdoors person You like spending time in peaceful, natural surroundings. You are a dynamic person  You cannot sit at one place for a long time.  You like dressing up for occasions.  You prefer to express your views openly. You are an exciting person to fall in love with but you prefer to be in a strong, long-term relationship only."}, {"id":"19","day":"19","desc":"You are attractive with an impeccable sense of dressing, You have more friends of the opposite sex than of your own.  You are a jolly person with a great sense  of humor. This is why people want to spend time with you. Someone will fall in love with you because of your enthusiastic, understanding and free-spirited nature."}, {"id":"20","day":"20","desc":"You are a person who is liked by one and all. Few people will hate you. You are innocent and very friendly. Try not to be very gullible. You have a sensitive side which very few people close to you know about. Members of your own sex are jealous with you because of how easily you mix with the opposite sex "}, {"id":"21","day":"21","desc":"You live life In the fullest and don't worry about tomorrow. You like to be as independent as possible. You confront obstacles in life by giving your best .You are a beautiful person. You are fun to be with. Someone will fall in love with you for the intimacy and affection you tend to show"}, {"id":"22","day":"22","desc":"Even though, you are not very extrovert, you mix very well with people once you know them a bit You are a God-fearing person. You are someone known for your intelligence. At times, you crave for attention. You love the company of your friends and cherish the time you spend with them. You will find bliss with the person you love most in your life."}, {"id":"23","day":"23","desc":"You are a happy-go-lucky person.  You take life as it comes Family and friends are very important to you. You are known for your wit. You possess talent to master one of the arts. Try to find your artistic ability if you haven't yet. You are very thoughtful and care for your sweetheart when in a relationship."}, {"id":"24","day":"24","desc":"You are a stable and a responsible person. People know that they can depend on you .When in love, you are very charming and affectionate towards your sweetie pie.  You try to remain active as much as possible. You are sincere in your work/studies but if you try a little  harder, you can be very successful."}, {"id":"25","day":"25","desc":"You are a friendly and lovable person.  You try not to antagonize others by being diplomatic. You are very generous towards the under-privileged. You are ambitious and wish to achieve lots of things in life.  Be open-minded and try to do your best, you will reach your goals soon When in love, you become very romantic, mushy and caring."}, {"id":"26","day":"26","desc":"You are a frank and expressive person. You do what your heart tells you to.  You do not care much about what others say. You maintain a calm exterior. You don't lose your temper easily. You love to explore new places and learn about new things. You like to flirt and your flirting will get you the love of your life."}, {"id":"27","day":"27","desc":"You have an attractive and vibrant personality. You are a social animal and like to party. You make new friends very easily .You are known for your good sense  of humor. At times, you are very obstinate.  You can forgive but you not forget easily. In your love life, you tend to he choosy in your search for the perfect partner"}, {"id":"28","day":"28","desc":"You are a star Your joyful attitude towards life is unmatched. You are very talkative but at the same time, quite attentive.  You love luxury. You are in sync with the latest fashion trends and groom yourself well. At times, you get too emotional. Most likely, you will be in a long term relationship. You cherish loyalty."}, {"id":"29","day":"29","desc":"You are an optimistic person and like to motivate others. You do not take many risks and adopt a cautious approach before trying anything new. In your free time, you are lively and relaxed. You like In chill out with friends whenever you get the chance. You are very passionate in love and make your partner feel on top of the world."}, {"id":"30","day":"30","desc":"You have a sexy and mysterious personality. Because of this, the opposite sex love to be around you. You are very sociable and amiable. You show good leadership skills and this will help you in your workplace. You weigh pros and cons before taking any decision. You want your partner to be good looking, dynamic and humomus. "}, {"id":"31","day":"31","desc":"You are a simple and honest person.  You don't like too many frills. You have a creative mind. If you channel your talents in the right direction, you can go places. You have a warm and compassionate personality which others like very much. You are easily approachable. You need a lot of time to commit in a relationship. You do not get too possessive. "}];
//return this.allDay;

}

}

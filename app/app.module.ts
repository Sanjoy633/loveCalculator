import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoveTestPage} from '../pages/love-test/love-test';
import { Calculations } from '../providers/calculations';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoveTestPage,
  
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoveTestPage,
      
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Calculations]
})
export class AppModule {}

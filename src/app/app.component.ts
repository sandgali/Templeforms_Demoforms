import { Component } from '@angular/core';
import {Employee} from './models/employee.model'


@Component({
  selector: 'app-comp',
  templateUrl: `./app.component.html`
  
})

export class AppComponent{
 languages =["angular","java","HTML"]
 model= new Employee('sandya','gali',false,'female','Angular')

 firstToUpper(value:string):void{
   var v =value.trim()
     if(value.length>0)
   {
   this.model.firstName=v.charAt(0).toUpperCase()
     }
   else
   {
   this.model.firstName=value

 }
    }
  }
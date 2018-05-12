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
   if(value.length>0)
   this.model.firstName=value.charAt(0).toUpperCase()+value.slice(1)
   else
   this.model.firstName=value

 }
    }
  

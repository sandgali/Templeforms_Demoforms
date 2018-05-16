import { Component } from '@angular/core';
import {Employee} from './models/employee.model';
import {FormPoster} from './services/form.poster';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-comp',
  templateUrl: `./app.component.html`
  
})
export class AppComponent{
  
 languages =["angular","java","HTML"]
 model= new Employee('sandya','12345','san@e.com',5656565677,'gali',true,'male','Angular')
 hasCodeLangError=false
 submitDisable=false

 constructor(private formPoster:FormPoster){}
 
 firstToUpper(value:string):void{
  var v =value.trim()
     if(value.length>0)
   
   this.model.firstName=v.charAt(0).toUpperCase()
     
   else
   
   this.model.firstName=value
 
    }
    submitForm(form:NgForm){
     console.log(this.model)
        
         
     }
 

    validateCodeLang(event):void{
      if(this.model.codeLang==="default")
      {
        this.hasCodeLangError=true;
        this.submitDisable=true;
      }
      else
      {
        this.hasCodeLangError=false;
        this.submitDisable=false;
      }
    }
  }
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {Employee} from  '../models/employee.model';

@Injectable()

export class FormPoster{

   



    postEmployeeForm(employee:Employee){
        console.log("posting data in service",employee)
        
       
}}
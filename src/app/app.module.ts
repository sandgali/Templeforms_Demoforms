import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FormPoster } from './services/form.poster';
import { HttpModule} from '@angular/Http'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    FormPoster
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

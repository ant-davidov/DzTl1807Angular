import { Injectable, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorPageComponent } from './error-page/error-page.component';

@Injectable({
  providedIn: 'root'
})
export class OpenErrorPageService  {
  

  constructor( public snackBar: MatSnackBar) { }

  ErrorPage( errorMess:string) {
    console.log(errorMess);
    
    this.snackBar.openFromComponent(ErrorPageComponent, {
      data:errorMess,
      duration: 5000, 
    });
  }


}

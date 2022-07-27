import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-crete-model',
  templateUrl: './crete-model.component.html',
  styleUrls: ['./crete-model.component.css']
})
export class CreteModelComponent  {


  constructor(public dialogRef: DialogRef<object>, @Inject(DIALOG_DATA) public data: object) { }
  keys = Object.keys(this.data);
  values = Object.values(this.data);
 mp = new Map();
  
  
  public close():void
  { 
    const res = this.values.reduce((accumulator, value, index) => {
      return {...accumulator, [this.keys[index]]: value};
    }, {});
     
      this.dialogRef.close(res);
  }
 

}

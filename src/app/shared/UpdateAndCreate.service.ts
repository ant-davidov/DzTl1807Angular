import { Dialog } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { CreteModelComponent } from './crete-model/crete-model.component';

@Injectable({
  providedIn: 'root'
})
export class UpdateAndCreateService<T> {

  constructor() {  }
   widthSize:string='250px';
   public async  addData<T>(  Idata: T ,dialog: Dialog) : Promise<T> {
    const dialogRef = dialog.open<T>(CreteModelComponent, {
      width:  this.widthSize,
      data: Idata,
      });
      dialogRef.closed.subscribe(result => {
        if (result!= undefined)
        {
          Idata=result
        }   
      
      });
     return Idata
  }
   public UpdateData ( Idata: T,dialog: Dialog) 
  {
         
       const dialogRef = dialog.open<T>(CreteModelComponent, {
       width: this.widthSize,
       data: Idata ,
       });
       return dialogRef;
  }




}

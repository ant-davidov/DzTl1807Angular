import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigurationByIdComponent, SelectForShow } from '../configuration/configuration-by-id/configuration-by-id.component';
import { CreteModelComponent } from '../Shared/crete-model/crete-model.component';
import { OpenErrorPageService } from '../Shared/OpenErrorPageService';
import { ComponentService } from './ComponentService';
import { IComponent } from './IComponent';
@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  dataToDisplay : IComponent[]=[];
  public filter:string =""
  private routeSub: Subscription | undefined;
  id =0;
  constructor(private componentService:ComponentService,public dialog: Dialog,private route: ActivatedRoute,public snackBar: MatSnackBar) {
    this.filter="";}
 

    ngOnInit() {
      this.routeSub = this.route.params.subscribe(params => {
        this.id = params['id'] 
        this.reloadTodos()
      });
    } 
  private reloadTodos(): void {
    if (0==this.id || undefined == this.id)
    {
     this.componentService.getTodos().subscribe(todos => {
    this.dataToDisplay = (this.filter == '') ? todos : todos.filter(f=>(f.type?.toLowerCase().trim())==(this.filter.toLowerCase().trim()))  });
     }
     else
     {
      this. componentService.getWithId(this.id).subscribe(todos => {
        this.dataToDisplay = todos;
        this.dataToDisplay = (this.filter == '') ? todos : todos.filter(f=>(f.type?.toLowerCase().trim())==(this.filter.toLowerCase().trim())) }) 
     }


}

  displayedColumns: string[] = [ 'Price', 'Model', 'Type','idConfiguration', 'buttonDelete','buttonUpdate'];

  addData() {
    {    
      const dialogRef = this.dialog.open<IComponent>(CreteModelComponent, {
      width: '250px',
      data: {price: null, model:null, type:null,idConfiguration :null},
      });
      dialogRef.closed.subscribe(result => {
        if (result != undefined)
        {
          const component = result as unknown as IComponent;
          this. componentService.addTodo(component).subscribe(r=>  this.reloadTodos(), ( error: any)=> new OpenErrorPageService(this.snackBar).ErrorPage(  JSON.parse (error)) );
        }   
      });
    }
  }

  removeData(id :number) 
  {
    this. componentService.deleteTodo(id).subscribe(r=> this.reloadTodos());
   
  }
   UpdateData(id :number,price1:number, model1:string,type1:string,idConfiguration1:number) 
  {
    {  
       const dialogRef = this.dialog.open<IComponent>(CreteModelComponent, {
        width: '250px',
       data: {price:price1, model:model1, type:type1},
       });
       dialogRef.closed.subscribe(result => { 
         if (result!= undefined)
         {
           let component = result as unknown as IComponent;
           component.idConfiguration=idConfiguration1;
           component.id=id;
           this.componentService.Update(component).subscribe(r=> this.reloadTodos());
          
         }   
       });
     }
  }
  OpenDialogConfiguration(id: number)
   {
    let select=SelectForShow.Component;
    const dialogRef = this.dialog.open<number>(ConfigurationByIdComponent,  { data: {id:id , select:select} });
    dialogRef.closed.subscribe();
   }
  ChangeFilterTable(filter :string)
  {
    this.filter=filter;
    this.reloadTodos();
  }
  ngOnDestroy() {
    if(undefined !=this.routeSub)
      this.routeSub.unsubscribe();
  }

}

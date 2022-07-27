
import { AfterViewInit, Component, OnInit, resolveForwardRef, ViewChild } from '@angular/core';
import { ComputerService } from './ComputerService';
import {Dialog, DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';
import { ConfigurationByIdComponent, SelectForShow } from '../configuration/configuration-by-id/configuration-by-id.component';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatSort, Sort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import { IComputer } from './IComputer';
import { CreteModelComponent } from '../shared/crete-model/crete-model.component';
import { OpenErrorPageService } from '../shared/OpenErrorPageService';






@Component({
  selector: 'app-comuter-page',
  templateUrl: './computer-page.component.html',
  styleUrls: ['./computer-page.component.css'],
  providers: [ComputerService]
})
export class ComputerPageComponent implements OnInit {
  dataToDisplay= new MatTableDataSource<IComputer>;
  private routeSub: Subscription | undefined;
  displayedColumns: string[] = [ 'Owner', 'TotalPrice', 'idConfiguration', 'buttonDelete','buttonUpdate'];
  id=0;
  sortedData:any;

  constructor(private computerService:ComputerService,public dialog: Dialog,private route: ActivatedRoute,public snackBar: MatSnackBar,private _liveAnnouncer: LiveAnnouncer) {
    
    }
    @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this. dataToDisplay.sort = this.sort;
  }
    
  private reloadTodos(): void {
    if (0==this.id || undefined==this.id){
    this. computerService.getTodos().subscribe(todos => {
    this.dataToDisplay =new MatTableDataSource(todos);
    setTimeout(() => this.dataToDisplay.sort = this.sort);
      })       
    }
    else{
      this. computerService.getWithId(this.id).subscribe(todos => {
      this.dataToDisplay = new MatTableDataSource( todos); 
      setTimeout(() => this.dataToDisplay.sort = this.sort);}) ;     
    }
  }
  announceSortChange(sortState: Sort) { 
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

ngOnInit() {
  this.routeSub = this.route.params.subscribe(params => {
    this.id = params['id'] 
    this.reloadTodos()
  });
}
  
  
  addData() {
    {  
    const dialogRef = this.dialog.open<string[]>(CreteModelComponent, {
    width: '250px',
    data: {owner: null, totalPrice:null, idConfiguration :null},
    });
    dialogRef.closed.subscribe(result => {
    console.log('The dialog was closed');
    if (result!= undefined)
    {
    let computer = result as unknown as IComputer;
    this. computerService.addTodo(computer).subscribe(r=> this.reloadTodos() , ( error: any)=> new OpenErrorPageService(this.snackBar).ErrorPage( JSON.parse (error))); 
    }
    });
    }
    }

  removeData(id :number) {
    this. computerService.deleteTodo(id).subscribe(r=> this.reloadTodos());
  }
   UpdateData(id1 :number, ownerFromTable:string, totalFromTable:number,idConfiguration1 :number) {
       const dialogRef = this.dialog.open<string[]>(CreteModelComponent, {
       width: '250px',
       data: {owner:ownerFromTable, totalPrice:totalFromTable},
       });
       dialogRef.closed.subscribe(result => {
         console.log('The dialog was closed');
         if (result != undefined)
         {
           let computer = result as unknown as IComputer; 
           computer.idConfiguration=idConfiguration1;
           computer.id=id1;
           this. computerService.Update(computer).subscribe(r=> this.reloadTodos());
         }   
       });  
  }


  OpenDialogConfiguration(id: number)
   {
     let select = SelectForShow.Pc;  
    const dialogRef = this.dialog.open<number>(ConfigurationByIdComponent,  { data: {id:id , select:select} });
    dialogRef.closed.subscribe();
   }
  
}
  








  

import { Component, OnInit } from '@angular/core';
import { IConfiguration } from './IConfiguration';
import { ConfigurationService } from './ConfigurationService';
import { Dialog } from '@angular/cdk/dialog';
import { SelectComponent } from './select/select.component';
import { MatTableDataSource } from '@angular/material/table';
import { CreteModelComponent } from '../shared/crete-model/crete-model.component';




@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  
  dataToDisplay:IConfiguration[]=[];
  clickedRows = new Set<IConfiguration>();


  constructor(private configurationService:ConfigurationService,public dialog: Dialog) {
    this.reloadTodos()}



  ngOnInit(): void {}
  
  private reloadTodos(): void {
    
     this. configurationService.get().subscribe(todos => {
      this.dataToDisplay= todos;
     
  })
  
}

  
  displayedColumns: string[] = [ 'picker', 'description', 'type', 'buttonDelete','buttonUpdate'];


  
  addData() 
  { {
      const dialogRef = this.dialog.open<IConfiguration>(CreteModelComponent, {
        width: '250px',
        data: {picker: null, type:null, description:null},
      });
      dialogRef.closed.subscribe(result => {      
        if (result!=undefined)
        {
          let configuration = result as unknown as IConfiguration;
          this.configurationService.addConfiguration(configuration).subscribe(r=> this.reloadTodos()); 
        }   
      });
    }
  }
  removeData(id :number) 
  {
    this.configurationService.deleteConfiguration(id).subscribe(r=> this.reloadTodos());
   
  }
   Update(id :number, picker:string, type:string,description:string) 
  {
      const dialogRef = this.dialog.open<IConfiguration>(CreteModelComponent, {
        width: '250px',
        data: {picker:  picker, type:type, description:description},
        closeOnNavigation: true
      });
      
      dialogRef.closed.subscribe(result => {
       
        if (result != undefined)
        {
          let configuration = result as unknown as IConfiguration;
          configuration.id=id
          this. configurationService.UpdateConfiguration(configuration).subscribe(r=> this.reloadTodos());
        }   
      });
  }
 
  openSelect(id: number)
  {
   const dialogRef = this.dialog.open<number>( SelectComponent,  { data: id});
   dialogRef.closed.subscribe();
  }


  
}




import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { ConfigurationService } from '../ConfigurationService';
import { IConfiguration } from '../IConfiguration';
export enum SelectForShow {
  Pc,
  Component

}
@Component({
  selector: 'app-configuration-by-id',
  templateUrl: './configuration-by-id.component.html',
  styleUrls: ['./configuration-by-id.component.css']
})
export class ConfigurationByIdComponent  implements OnInit
{
  public _configuration!: IConfiguration;
  selectForShow=SelectForShow
  id:number=1;
  constructor(private configurationService:ConfigurationService ,@Inject(DIALOG_DATA) public data: {id:number, select:SelectForShow}) 
  {
    this.configurationService.GetById(data.id).subscribe(todos => {
      this._configuration = todos  
        } )
     
  }
  ngOnInit() {
    
  }

  

}


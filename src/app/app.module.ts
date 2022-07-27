import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ComputerPageComponent } from './computer/computer-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ComputerListModule } from './computer/computer-list.module';

import { MatListModule } from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {MatSidenavModule} from '@angular/material/sidenav';

import {MatGridListModule} from '@angular/material/grid-list';

import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ConfigurationComponent } from './configuration/configuration.component';
import { FormsModule } from '@angular/forms';
import {Dialog, DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';
import { NavbarComponent } from './navbar/navbar.component';

import { ConfigurationService } from './configuration/ConfigurationService';
import { ComponentComponent } from './component/component.component';

import { ComponentService } from './component/ComponentService';
import { ConfigurationByIdComponent } from './configuration/configuration-by-id/configuration-by-id.component';
import { CreteModelComponent } from './Shared/crete-model/crete-model.component';

import { UpdateAndCreateService } from './Shared/UpdateAndCreate.service';
import { SelectComponent } from './configuration/select/select.component';
import { ErrorPageComponent } from './Shared/error-page/error-page.component';





const routes = [ {path : '', component : ComputerPageComponent ,},
{path : 'configuration', component : ConfigurationComponent },
{path : 'component', component :ComponentComponent },
{path: 'configuration/:id', component:  ConfigurationByIdComponent},
{path: 'configuration/:id/computers', component:  ComputerPageComponent}  ,
{path: 'configuration/:id/components', component:  ComponentComponent} ,
         ]


@NgModule({
  declarations: [
    AppComponent,
    ComputerPageComponent,
    ConfigurationComponent,
    NavbarComponent,
    ComponentComponent,

    ConfigurationByIdComponent,
    CreteModelComponent,
    SelectComponent,
    ErrorPageComponent,

  ],
  imports: [
    
    BrowserAnimationsModule,
    BrowserModule,
    ComputerListModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    ComputerListModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
  
  ],
  providers: [ConfigurationService,ComponentService,UpdateAndCreateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

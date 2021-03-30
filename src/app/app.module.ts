import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { AppRoutingModule } from './app-routing.module';
import { AngolaComponent } from './angola/angola.component';
import { AfricaComponent } from './africa/africa.component';
import { HomeComponent } from './home/home.component';
import { AlgeriaComponent } from './algeria/algeria.component';
import { BeninComponent } from './benin/benin.component';
import { MobhomeComponent } from './mobhome/mobhome.component';
import {DeviceDetectorModule} from 'ngx-device-detector';
import { TabhomeComponent } from './tabhome/tabhome.component';
import { NgxNavDrawerModule } from 'ngx-nav-drawer';
import { BreadcrumbModule } from 'angular-crumbs';
import { AlgerisComponent } from './algeris/algeris.component';
import { AsiaComponent } from './asia/asia.component';
import { ProcesschildComponent } from './processchild/processchild.component';
import { GrandchildComponent } from './grandchild/grandchild.component';











@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    AngolaComponent,
    AfricaComponent,
    HomeComponent,
    AlgeriaComponent,
    BeninComponent,
    MobhomeComponent,
    TabhomeComponent,
    AlgerisComponent,
    AsiaComponent,
    ProcesschildComponent,
    GrandchildComponent,
    
   
    
   
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot(),
    NgxNavDrawerModule,
    BreadcrumbModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

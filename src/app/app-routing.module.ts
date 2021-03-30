import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfricaComponent } from './africa/africa.component';
import { AlgeriaComponent } from './algeria/algeria.component';
import { AlgerisComponent } from './algeris/algeris.component';
import { AngolaComponent } from './angola/angola.component';
import { AsiaComponent } from './asia/asia.component';
import { AuthguardserviceService } from './authguardservice.service';


import { BeninComponent } from './benin/benin.component';
import { GrandchildComponent } from './grandchild/grandchild.component';
import { HomeComponent } from './home/home.component';
import { MobhomeComponent } from './mobhome/mobhome.component';
import { ProcesschildComponent } from './processchild/processchild.component';
import { TabhomeComponent } from './tabhome/tabhome.component';

import { TreeComponent } from './tree/tree.component';

 







const routes: Routes = [
 {path:"", 
 redirectTo:"home",
//  canActivate:[AuthguardserviceService],
pathMatch:"full"

},

//   { 
//   path:'tree',
//   component:TreeComponent,
// children:[
//   {
//     path:"",
//     redirectTo:"home", 
//     pathMatch:"full"
//   },
{
path:"mobhome",
component:MobhomeComponent,
runGuardsAndResolvers:"always",
// canActivate:[AuthguardserviceService]
children:[

  {
    path:"angola",
    component:AngolaComponent
  },
  {
    path:"africa",
    component:AfricaComponent
  },
  {
    path:"algeria",
    component:AlgeriaComponent
  },
  {
    path:"benin",
    component:BeninComponent
  },
  {
    path:"algeris",
    component:AlgerisComponent,
    data:{breadcrumb:'Algeris'}
  }
]
},
{
  path:"tabhome",
  component:TabhomeComponent,
  // canActivate:[AuthguardserviceService]
  children:[

    {
      path:"angola",
      component:AngolaComponent
    },
    {
      path:"africa",
      component:AfricaComponent
    },
    {
      path:"algeria",
      component:AlgeriaComponent
    },
    {
      path:"benin",
      component:BeninComponent
    },
    {
      path:"algeris",
      component:AlgerisComponent,
      data:{breadcrumb:'Algeris'}
    }
  ]
  },
  {
path:"home",
component:HomeComponent,
canActivate:[AuthguardserviceService],
data:{
  breadcrumb:'Home'
},
children:[


  {
    path:"africa",
    component:ProcesschildComponent,
    data:{ breadcrumb:'Africa'},
    children:[
      {
        path:"",
        redirectTo:"processchild",
        pathMatch:"full"
      },
  {
    path:"processchild",
    component:AfricaComponent,
    
  },
      // {
      //   path:"processing",
      //   component:ProcessingComponent
      // },
      {
        path:"algeria",
        component:GrandchildComponent,
        data:{ breadcrumb:'Algeria'},
        children:[
          {
            path:"",
            redirectTo:"grandchild",
            pathMatch:"full"
            
          },
          {
            path:"grandchild",
            component:AlgeriaComponent
          },
          {
            path:"algeris",
            component:AlgerisComponent,
            data:{breadcrumb:'Algeris'}
          }
        ]
     
      },
      {
        path:"benin",
        component:BeninComponent,
        data:{ breadcrumb:'Benin'}
      },
      {
        path:"angola",
        component:AngolaComponent,
        data:{ breadcrumb:'Angola'}
      }
    ]
  },
  {
    path:"asia",
    component:AsiaComponent,
    data:{ breadcrumb:'asia'}
  }
  
 
 
]

  },
  
]
 

  // }

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

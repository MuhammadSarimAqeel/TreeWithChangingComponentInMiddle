import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { getPreviousOrParentTNode } from '@angular/core/src/render3/instructions';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NODES } from './mock-nodes';

import { TreeNode } from './tree-node';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  @Input() treeData: TreeNode[];
  constructor(private router:Router, private service:DeviceDetectorService){

  }

  ngOnInit() {
  }

  toggleChild(node) {
    node.showChildren = !node.showChildren;
    node.expanded = !node.expanded
   
  }

  
nodes =NODES;
 len = NODES.length;
 


 
  opencomponent(node) {
 
   
    if(node.name == NODES[0].name ){
      if(this.service.isDesktop()){
        this.router.navigate(['/home/africa/processchild'])
      }
      if(this.service.isTablet()){
        this.router.navigate(['/tabhome/africa/processchild'])
      }
    if(this.service.isMobile()){
      this.router.navigate(['/mobhome/africa/processchild']).then(() => {
        window.location.reload();
      });
}     
      
    }

    if(node.name == NODES[1].name ){
      if(this.service.isDesktop()){
        this.router.navigate(['/home/asia'])
      }
      if(this.service.isTablet()){
        this.router.navigate(['/tabhome/asia'])
      }
    if(this.service.isMobile()){
      this.router.navigate(['/mobhome/asia']).then(() => {
        window.location.reload();
      });
}     
      
    }

    if(node.name == NODES[0].children[0].children[0].name){
      if(this.service.isDesktop()){
      this.router.navigate(['/home/africa/algeria/algeris'])
      }
      if(this.service.isTablet()){
        this.router.navigate(['/tabhome/africa/algeria/algeris'])
      }
      if(this.service.isMobile()){
      this.router.navigate(['/mobhome/africa/algeria/algeris']).then(() => {
        window.location.reload();
      });
      }
    }
    if(node.name == NODES[0].children[0].name){
      if(this.service.isDesktop()){
      this.router.navigate(['/home/africa/algeria'])
      }
      if(this.service.isTablet()){
        this.router.navigate(['/tabhome/africa/algeria'])
      }
      if(this.service.isMobile()){
      this.router.navigate(['/mobhome/africa/algeria']).then(() => {
        window.location.reload();
      });
      }
    }
    if(node.name == NODES[0].children[1].name ){
      if(this.service.isDesktop()){
        this.router.navigate(['/home/africa/angola'])
      }
      if(this.service.isTablet()){
        this.router.navigate(['/tabhome/africa/angola'])
      }
     if(this.service.isMobile()){
      this.router.navigate(['/mobhome/africa/angola']).then(() => {
        window.location.reload();
      });
     }
      
    }
   
    if(node.name ==NODES[0].children[2].name ){
      if(this.service.isDesktop()){
        this.router.navigate(['/home/africa/benin'])
      }
      if(this.service.isTablet()){
        this.router.navigate(['/tabhome/africa/benin'])
      }
     if(this.service.isMobile()){
      this.router.navigate(['/mobhome/africa/benin']).then(() => {
        window.location.reload();
      });
     }
     
  

    }
  
  }

}

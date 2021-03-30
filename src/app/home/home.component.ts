import { Component, HostListener, OnInit } from '@angular/core';
import { NODES } from '../tree/mock-nodes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
scrHeight:number;
scrWidth:number;
Height: any;
Width: any;
title = 'Angular tree like structure';
  constructor() { }

  ngOnInit() {
  }
  nodes = NODES;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    this.Height = (window.screen.height);
    this.Width = (window.screen.width) ;
    console.log("inner Height :" +this.scrHeight +"\n", "inner Width :"+this.scrWidth+"\n","Height :"+ this.Height+"\n", "Width :"+ this.Width);
}
}

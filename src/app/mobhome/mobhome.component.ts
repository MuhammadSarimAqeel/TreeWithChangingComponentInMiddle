import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NODES } from '../tree/mock-nodes';

@Component({
  selector: 'app-mobhome',
  templateUrl: './mobhome.component.html',
  styleUrls: ['./mobhome.component.css']
})
export class MobhomeComponent {
  title = 'Angular tree like structure';
  show = false;
  nodes = NODES;
  close(){
    this.show = !this.show;
  }
}

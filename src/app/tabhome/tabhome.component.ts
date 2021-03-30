import { Component, OnInit } from '@angular/core';
import { NODES } from '../tree/mock-nodes';

@Component({
  selector: 'app-tabhome',
  templateUrl: './tabhome.component.html',
  styleUrls: ['./tabhome.component.css']
})
export class TabhomeComponent implements OnInit {
  title = 'Angular tree like structure';
  nodes = NODES;
  constructor() { }

  ngOnInit() {
  }

}

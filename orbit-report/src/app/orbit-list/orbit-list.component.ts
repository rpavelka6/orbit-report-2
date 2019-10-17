import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})

export class OrbitListComponent implements OnInit {
  satelliteType: string = 'Space Debris';
  types: string[] = ['Space Debris'];
  changeColor: boolean = true;
  alternateColor: string = 'purple';
  
  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }
}



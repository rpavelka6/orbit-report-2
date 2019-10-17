import { Component } from '@angular/core';
import { Satellite } from './satellite';

let sourceList: Satellite[];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sourceList: Satellite[];
  displayList: Satellite[];
  title = 'orbit-report';

  constructor() {
    this.sourceList = [];
    this.displayList = [];

    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          for (let i=0; i<fetchedSatellites.length; i++){
            let satellite = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
            this.sourceList.push(satellite);
            this.displayList.slice(0);
          }
       }.bind(this));
    }.bind(this));
 }
}

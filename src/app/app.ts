import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var simplemaps_worldmap: any; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof simplemaps_worldmap !== 'undefined') {
      simplemaps_worldmap.load();
    } else {
      console.error(
        'simplemaps_worldmap est introuvable. Vérifie que mapdata.js et worldmap.js sont bien inclus dans index.html'
      );
    }
  }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-galaxy',
//   imports: [],
//   templateUrl: './galaxy.component.html',
//   styleUrl: './galaxy.component.css'
// })
// export class GalaxyComponent {

// }



// import { Component, OnInit } from '@angular/core';
// import { SolarSystemService, SolarSystemItem } from '../../service/day.service';

// @Component({
//   selector: 'app-galaxy',
//   templateUrl: './galaxy.component.html',
//   styleUrls: ['./galaxy.component.css'],
//   standalone: true,
//   imports: [], 
// })
// export class GalaxyComponent implements OnInit {
//   solarSystemItems: SolarSystemItem[] = [];
//   isLoading = true;
//   error: string | null = null;

//   constructor(private solarSystemService: SolarSystemService) {}

//   ngOnInit(): void {
//     this.loadSolarSystemData();
//   }

//   loadSolarSystemData(): void {
//     this.solarSystemService.getSolarSystemData().subscribe({
//       next: (data) => {
//         console.log(data);
        
//         this.solarSystemItems = data;
//         this.isLoading = false;
//       },
//       error: () => {
//         this.error = 'Error al cargar los datos del sistema solar.';
//         this.isLoading = false;
//       },
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ExoplanetService, Exoplanet } from '../../service/xplanet.service';

@Component({
  selector: 'app-galaxy',
  templateUrl: './galaxy.component.html',
  styleUrls: ['./galaxy.component.css'],
  standalone: true,
  imports: [], 
})
export class GalaxyComponent implements OnInit {
  exoplanets: Exoplanet[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private exoplanetService: ExoplanetService) {}

  ngOnInit(): void {
    this.loadExoplanetData();
  }

  loadExoplanetData(): void {
    this.exoplanetService.getExoplanets().subscribe({
      next: (data) => {
        this.exoplanets = data;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Error al cargar los datos de los exoplanetas.';
        this.isLoading = false;
      },
    });
  }
}

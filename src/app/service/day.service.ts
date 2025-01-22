// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DayService {

//   constructor() { }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, map } from 'rxjs';

// export interface SolarSystemItem {
//   name: string;
//   image: string;
//   description: string;
// }

// @Injectable({
//   providedIn: 'root',
// })

// export class SolarSystemService {
//   private readonly apiUrl = 'https://api.nasa.gov/planetary/apod';
//   private readonly apiKey = 'UfWxdHqQ4lyzO7J1Nv8vyZTd3Lbg1hwLdjc5R0jd'; 

//   constructor(private http: HttpClient) {}

//   getSolarSystemData(): Observable<SolarSystemItem[]> {
//     return this.http.get<any[]>(`${this.apiUrl}?api_key=${this.apiKey}`).pipe(
//       map((response) =>
//         response.map((item) => ({
//           name: item.name,
//           image: item.image || 'default-image-url.jpg', 
//           description: item.description || 'Descripción no disponible.',
//         }))
//       )
//     );
//   }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, map } from 'rxjs';

// export interface SolarSystemItem {
//   name: string;
//   image: string;
//   description: string;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class SolarSystemService {
//   private readonly apiUrl = 'https://api.nasa.gov/planetary/apod'; // Endpoint válido
//   private readonly apiKey = 'UfWxdHqQ4lyzO7J1Nv8vyZTd3Lbg1hwLdjc5R0jd'; // Reemplaza con tu clave de API

//   constructor(private http: HttpClient) {}

//   getSolarSystemData(): Observable<SolarSystemItem[]> {
//     return this.http.get<any>(`${this.apiUrl}?api_key=${this.apiKey}`).pipe(
//       map((response) => [
//         {
//           name: response.title, // Usando el título de la APOD como ejemplo de "name"
//           image: response.url || 'default-image-url.jpg', // Imagen por defecto si no hay
//           description: response.explanation || 'Descripción no disponible.', // Usando "explanation" como descripción
//         },
//       ])
//     );
//   }
// }


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, map } from 'rxjs';

// export interface SolarSystemItem {
//   name: string; // Nombre del exoplaneta
//   image: string; // Imagen (se puede asignar una predeterminada o personalizar por nombre)
//   description: string; // Información básica del exoplaneta
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class SolarSystemService {
//   private readonly apiUrl = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI'; // Endpoint para exoplanetas

//   constructor(private http: HttpClient) {}

//   getSolarSystemData(): Observable<SolarSystemItem[]> {
//     // Parámetros para obtener los datos que necesitamos
//     const params = 'table=exoplanets&format=json&select=pl_name,st_name,pl_rade,pl_orbper';

//     return this.http.get<any[]>(`${this.apiUrl}?${params}`).pipe(
//       map((response) => 
        
//         response.map((item) => ({
//           name: item.pl_name || 'Sin nombre', // Nombre del exoplaneta
//           image: 'default-image-url.jpg', // Imagen por defecto; puedes cambiarla según la lógica
//           description: `Orbita alrededor de ${item.st_name || 'una estrella desconocida'} con un período orbital de ${
//             item.pl_orbper ? item.pl_orbper + ' días' : 'un tiempo desconocido'
//           }. Tiene un radio de ${item.pl_rade ? item.pl_rade + ' radios terrestres' : 'tamaño desconocido'}.`,
//         }))
//       )
//     );
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface SolarSystemItem {
  name: string; // Nombre del planeta
  image: string; // Imagen (puedes personalizar esto)
  description: string; // Información básica del planeta
}

@Injectable({
  providedIn: 'root',
})
export class SolarSystemService {
  private readonly apiUrl = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI'; // Endpoint para exoplanetas

  constructor(private http: HttpClient) {}

  getSolarSystemData(): Observable<SolarSystemItem[]> {
    const params = 'table=ps&format=json&select=pl_name,hostname,pl_rade,pl_orbper';

    return this.http.get<any[]>(`${this.apiUrl}?${params}`).pipe(
      map((response) =>
        response.map((item) => ({
          name: item.pl_name || 'Sin nombre', // Nombre del planeta
          image: 'default-image-url.jpg', // Imagen por defecto
          description: `Orbita alrededor de ${item.hostname || 'una estrella desconocida'} con un período orbital de ${
            item.pl_orbper ? item.pl_orbper + ' días' : 'un tiempo desconocido'
          }. Tiene un radio de ${item.pl_rade ? item.pl_rade + ' radios terrestres' : 'tamaño desconocido'}.`,
        }))
      )
    );
  }
}

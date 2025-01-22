// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class XplanetService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Exoplanet {
  name: string; // Nombre del exoplaneta
  radius: number | null; // Radio en radios terrestres
  equilibriumTemperature: number | null; // Temperatura de equilibrio en Kelvin
  discoveryStatus: string; // Estado de descubrimiento
}

@Injectable({
  providedIn: 'root',
})
export class ExoplanetService {
  private readonly apiUrl = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI';

  constructor(private http: HttpClient) {}

  getExoplanets(): Observable<Exoplanet[]> {
    const params =
      'table=cumulative&where=koi_prad%3C2%20and%20koi_teq%3E180%20and%20koi_teq%3C303%20and%20koi_disposition%20like%20%27CANDIDATE%27&format=json';

    return this.http.get<any[]>(`${this.apiUrl}?${params}`).pipe(
      map((response) =>
        response.map((item) => ({
          name: item.kepler_name || item.koi_name || 'Unknown',
          radius: item.koi_prad || null,
          equilibriumTemperature: item.koi_teq || null,
          discoveryStatus: item.koi_disposition || 'Unknown',
        }))
      )
    );
  }
}


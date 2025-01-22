// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MarsPhotosService {

//   constructor() { }
// }

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MarsPhoto {
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  };
}

export interface MarsPhotosResponse {
  photos: MarsPhoto[];
}

@Injectable({
  providedIn: 'root',
})
export class MarsPhotosService {
  private readonly http = inject(HttpClient);
  private readonly apiKey = 'UfWxdHqQ4lyzO7J1Nv8vyZTd3Lbg1hwLdjc5R0jd'; // Reemplaza con tu API Key de NASA
  private readonly baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers';

  getPhotosByRover(
    rover: string,
    sol: number = 1000
  ): Observable<MarsPhotosResponse> {
    const url = `${this.baseUrl}/${rover}/photos?sol=${sol}&api_key=${this.apiKey}`;
    console.log(url);
    
    return this.http.get<MarsPhotosResponse>(url);
  }
}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class NasaTodayService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';

export interface ApodData {
  date: string;
  explanation: string;
  hdurl: string; // URL de la imagen en alta calidad
  title: string;
  url: string; // URL de la imagen
}

@Injectable({
  providedIn: 'root',
})

export class NasaApodService {
  private readonly apiKey = 'UfWxdHqQ4lyzO7J1Nv8vyZTd3Lbg1hwLdjc5R0jd'; // Reemplaza con tu propia API Key
  private readonly apiUrl = 'https://api.nasa.gov/planetary/apod';

  async getApod(): Promise<ApodData> {
    const response = await fetch(`${this.apiUrl}?api_key=${this.apiKey}`);
    if (!response.ok) {
      throw new Error('Failed to fetch APOD data');
    }
    return response.json();
  }
}


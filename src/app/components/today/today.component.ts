import { Component } from '@angular/core';
import { ApodData, NasaApodService } from '../../service/nasa-today.service';

@Component({
  selector: 'app-today',
  // standalone:true,
  imports: [],
  templateUrl: './today.component.html',
  styleUrl: './today.component.css'
})
export class TodayComponent {

  apodData!: ApodData; // Datos tipeados de la API
  isLoading = true; // Para manejar el estado de carga
  error: string | null = null;

  constructor(private nasaApodService: NasaApodService) {}

  async ngOnInit() {
    try {
      this.apodData = await this.nasaApodService.getApod();
    } catch (error) {
      this.error = 'No se pudo cargar el dato del día.';
    } finally {
      this.isLoading = false;
    }
  }

}

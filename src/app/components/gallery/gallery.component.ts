// import { Component, inject } from '@angular/core';
// import { MarsPhotosService, MarsPhoto } from '../../service/mars-photos.service';

// @Component({
//   selector: 'app-gallery',
//   imports: [],
//   templateUrl: './gallery.component.html',
//   styleUrl: './gallery.component.css'
// })
// export class GalleryComponent {

//   private readonly marsPhotosService = inject(MarsPhotosService);

//   photos: MarsPhoto[] = [];
//   isLoading = true;
//   error: string | null = null;

//   ngOnInit() {
//     this.fetchPhotos();
//     console.log(this.fetchPhotos());
    
//   }

//   fetchPhotos() {
//     this.marsPhotosService.getPhotosByRover('curiosity').subscribe({
//       next: (response) => {
//         this.photos = response.photos;
//         this.isLoading = false;
//       },
//       error: (err) => {
//         this.error = 'Error al cargar las fotos de Marte';
//         this.isLoading = false;
//       },
//     });
//   }

// }

import { Component, inject } from '@angular/core';
import { MarsPhotosService, MarsPhoto } from '../../service/mars-photos.service';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  private readonly marsPhotosService = inject(MarsPhotosService);

  photos: MarsPhoto[] = [];
  photosGrouped: MarsPhoto[][] = [];
  isLoading = true;
  error: string | null = null;

  ngOnInit() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    this.marsPhotosService.getPhotosByRover('curiosity').subscribe({
      next: (response) => {
        this.photos = response.photos;
        this.photosGrouped = this.groupPhotos(this.photos, 6);
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar las fotos de Marte';
        this.isLoading = false;
      },
    });
  }

  groupPhotos(photos: MarsPhoto[], groupSize: number): MarsPhoto[][] {
    const grouped: MarsPhoto[][] = [];
    for (let i = 0; i < photos.length; i += groupSize) {
      grouped.push(photos.slice(i, i + groupSize));
    }
    return grouped;
  }
}

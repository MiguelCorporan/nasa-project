import { Routes } from '@angular/router';

import { NofoundpageComponent } from './components/nofoundpage/nofoundpage.component';
import { HomeComponent } from './components/home/home.component';
import { TodayComponent } from './components/today/today.component';
import { GalaxyComponent } from './components/galaxy/galaxy.component';
import { GalleryComponent } from './components/gallery/gallery.component';


 const routes: Routes = [
    { path: 'home', component: HomeComponent, },
    { path: 'today', component: TodayComponent, },
    { path: 'galaxy', component: GalaxyComponent, },
    { path: 'gallery', component: GalleryComponent, },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NofoundpageComponent }, 
 ];

 export default routes
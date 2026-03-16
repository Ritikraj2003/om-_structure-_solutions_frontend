import { Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { AboutComponent } from './modules/pages/about/about.component';
import { BlogComponent } from './modules/pages/blog/blog.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'OM Structures – Home',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'OM Structures – About Us',
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'OM Structures – Blog',
  },
  {
    path: 'careers',
    loadComponent: () => import('./modules/pages/careers/careers.component').then(m => m.CareersComponent),
    title: 'OM Structures – Careers',
  },
  {
    path: 'services',
    loadComponent: () => import('./modules/pages/services/services.component').then(m => m.ServicesComponent),
    title: 'OM Structures – Services',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

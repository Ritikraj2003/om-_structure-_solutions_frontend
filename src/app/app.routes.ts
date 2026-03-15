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
    path: '**',
    redirectTo: '',
  },
];

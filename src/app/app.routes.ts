import { Routes } from '@angular/router';
import { HomeComponent } from '@app/pages/home/home.component';
import { AboutComponent } from '@app/pages/about/about.component';
import { ProjectDetailsComponent } from '@app/pages/project-details/project-details.component';
import { NotFoundComponent } from '@app/pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'project/:id',
    component: ProjectDetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent),
    title: 'Home | Arthur Candian'
  },
  
  {
    path: 'projects',
    loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'Projetos | Arthur Candian'
  },
  {
    path: 'courses',
    loadComponent: () => import('./components/courses/courses.component').then(m => m.CoursesComponent),
    title: 'Cursos | Arthur Candian'
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contato | Arthur Candian'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

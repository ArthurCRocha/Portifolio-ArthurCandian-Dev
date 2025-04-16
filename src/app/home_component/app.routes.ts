import { Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactComponent } from '../components/contact/contact.component';
import { CoursesComponent } from '../components/courses/courses.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', redirectTo: '', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
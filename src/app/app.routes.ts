import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'engineering', loadComponent: () => import('./engineering/engineering.component').then(m => m.EngineeringComponent) },
  { path: 'engineering/foodrisk', loadComponent: () => import('./engineering/foodrisk.component').then(m => m.FoodriskComponent) },
  { path: 'engineering/scs', loadComponent: () => import('./engineering/scs.component').then(m => m.ScsComponent) },
  { path: 'engineering/spiritconnect', loadComponent: () => import('./engineering/spiritconnect.component').then(m => m.SpiritconnectComponent) },
  { path: 'resume', loadComponent: () => import('./resume/resume.component').then(m => m.ResumeComponent) },
  { path: 'journey', loadComponent: () => import('./journey/journey.component').then(m => m.JourneyComponent) },
  { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' }
];

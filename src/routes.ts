import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./scenes/home.component'),
  },
] as Routes;

import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./scenes/home.component'),
  },
  {
    path: 'my-cards',
    loadComponent: () => import('./scenes/my-cards.component'),
  },
  {
    path: 'social-hub',
    loadComponent: () => import('./scenes/social-hub.component'),
  },
  {
    path: 'battle',
    loadComponent: () => import('./scenes/battle.component'),
  },
] as Routes;

import { Route } from '@angular/router';
import {NxWelcomeComponent} from "./nx-welcome.component";

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('@test-ang-monorepo/products').then((m) => m.ProductListComponent),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('@test-ang-monorepo/orders').then((m) => m.OrdersComponent),
  },
];

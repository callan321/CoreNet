import { Routes } from '@angular/router';
import { RootLayoutComponent } from './core/components/root-layout/root-layout.component';
import { UsersComponent } from './shared/components/users/users.component';

export const routes: Routes = [
  {
    path: '',
    component: RootLayoutComponent,
    children: [
      { path: '', component: UsersComponent },
    ]
  }
];

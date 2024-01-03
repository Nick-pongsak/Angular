import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  // { path: '', component: SigninComponent },
  {
    path: '',
    loadChildren: () =>
      import('./main/main.module').then(
        (m) => m.MainModule
      ),
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'cloud-periodic',
    loadChildren: () =>
      import('./cloud-periodic/cloud-periodic.module').then(
        (m) => m.CloudperiodicModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

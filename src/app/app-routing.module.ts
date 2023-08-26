import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      // {
      //   path: 'transport',
      //   loadChildren: () => import('./modules/transport-console/transport-console.module').then(m => m.TransportConsoleModule)
      // },
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "**", redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

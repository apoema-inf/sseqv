import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},

{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},

{
  path: 'sobre',
  component: SobreComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

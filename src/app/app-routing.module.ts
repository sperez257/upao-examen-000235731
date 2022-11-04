import { NewEspacioComponent } from './components/new-espacio/new-espacio.component';
import { ListEspacioComponent } from './components/list-espacio/list-espacio.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'espacio', component: ListEspacioComponent},
  { path: 'add', component:NewEspacioComponent },
  { path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

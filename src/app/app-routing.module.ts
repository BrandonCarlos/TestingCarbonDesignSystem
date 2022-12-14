import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // No caso vai utilizar estás rotas filhas em nossa aplicação
  {path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)},
  {path: 'repos', loadChildren: () => import('./repositories/repositories.module').then((m) => m.RepositoriesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

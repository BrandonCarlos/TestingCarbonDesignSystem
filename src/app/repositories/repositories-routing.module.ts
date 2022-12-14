import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoPageComponent } from './repo-page/repo-page.component';

const routes: Routes = [
  {path: '', component: RepoPageComponent}
];

@NgModule({ // De acordo com a documentação

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoriesRoutingModule { }

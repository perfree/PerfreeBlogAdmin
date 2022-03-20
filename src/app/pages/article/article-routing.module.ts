import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleListComponent} from "./article-list/article-list.component";
import {ArticleCreateComponent} from "./article-create/article-create.component";

const routes: Routes = [
  {path: '', component: ArticleListComponent},
  {path: 'create', component: ArticleCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }

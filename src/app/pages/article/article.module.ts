import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './wrapper/article.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';


@NgModule({
  declarations: [
    ArticleComponent,
    ArticleCardComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }

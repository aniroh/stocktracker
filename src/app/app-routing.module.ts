import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SentimentPageComponent} from './sentiment-page/sentiment-page.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:"",component: HomepageComponent},
  {path: "sentiment/:symbol", component: SentimentPageComponent},
  
  // {path:"", redirectTo:"home", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

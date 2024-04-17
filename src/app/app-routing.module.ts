import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './showcase/showcase.component';

const routes: Routes = [
  {path:"", component:ShowcaseComponent}, //! quando non c'e nulla nel path lo mandi al component login
  {path:"login", component:ShowcaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

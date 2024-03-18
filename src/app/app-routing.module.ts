import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page404Component } from './shared/components/page404/page404.component';

const routes: Routes = [
  // Default route to lazy load ModulesModule
  { path: '', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule) },
  // 404 page route
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

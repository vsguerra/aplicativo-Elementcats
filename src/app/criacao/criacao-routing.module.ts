import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriacaoPage } from './criacao.page';

const routes: Routes = [
  {
    path: '',
    component: CriacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriacaoPageRoutingModule {}

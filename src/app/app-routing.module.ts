import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'historia',
    loadChildren: () => import('./historia/historia.module').then( m => m.HistoriaPageModule)
  },
  {
    path: '',
    redirectTo: 'historia',
    pathMatch: 'full'
  },
{
  path: 'regras',
  loadChildren: () => import('./regras/regras.module').then( m => m.RegrasPageModule)
},
{
  path: '',
  redirectTo: 'regras',
  pathMatch: 'full'
},


{
  path: 'status',
  loadChildren: () => import('./status/status.module').then( m => m.StatusPageModule)
},
{
  path: '',
  redirectTo: 'status',
  pathMatch: 'full'
},

{
  path: 'musica',
  loadChildren: () => import('./musica/musica.module').then( m => m.MusicaPageModule)
},
{
  path: '',
  redirectTo: 'musica',
  pathMatch: 'full'
},
  {
    path: 'editar',
    loadChildren: () => import('./editar/editar.module').then( m => m.EditarPageModule)
  },
    {
    path: '',
    redirectTo: 'editar',
    pathMatch: 'full'
  
  },  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'criacao',
    loadChildren: () => import('./criacao/criacao.module').then( m => m.CriacaoPageModule)
  },
  {
    path: 'busca',
    loadChildren: () => import('./busca/busca.module').then( m => m.BuscaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },


 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

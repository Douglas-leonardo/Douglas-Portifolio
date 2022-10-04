import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoRoutes } from './cursoCss/curso-routing.module';

export const routes: Routes = [
  { path: '', redirectTo: 'cursoCss/bem-vindo', pathMatch: 'full' },
  ...CursoRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

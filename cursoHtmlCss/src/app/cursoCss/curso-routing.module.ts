import { SejaBemVindoComponent } from './seja-bem-vindo';
import { RecursosHtmlComponent } from './recursos-html';
import { DoceriaComponent } from './doceria';
import { Ccs3TopComponent } from './ccs3-top';
import { Routes } from '@angular/router';

export const CursoRoutes: Routes = [
  { path: 'cursoCss', redirectTo: 'cursoCss/bem-vindo' },
  { path: 'cursoCss/bem-vindo', component: SejaBemVindoComponent },
  { path: 'cursoCss/recursos-html', component: RecursosHtmlComponent },
  { path: 'cursoCss/ccs3-top', component: Ccs3TopComponent },
  { path: 'cursoCss/app-doceria', component: DoceriaComponent },
];

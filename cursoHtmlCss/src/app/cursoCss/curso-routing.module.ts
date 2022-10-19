import { InstagramWebComponent } from './instagram-web';
import { WhatsappWebComponent } from './whatsapp-web';
import { FlexBoxComponent } from './flex-box';
import { SejaBemVindoComponent } from './seja-bem-vindo';
import { RecursosHtmlComponent } from './recursos-html';
import { DoceriaComponent } from './doceria';
import { Ccs3TopComponent } from './ccs3-top';
import { Routes } from '@angular/router';
import { FlexBox2Component } from './flex-box2';
import { PaginaDeBuscaComponent } from './pagina-de-busca';

export const CursoRoutes: Routes = [
  { path: 'cursoCss', redirectTo: 'cursoCss/bem-vindo' },
  { path: 'cursoCss/bem-vindo', component: SejaBemVindoComponent },
  { path: 'cursoCss/recursos-html', component: RecursosHtmlComponent },
  { path: 'cursoCss/ccs3-top', component: Ccs3TopComponent },
  { path: 'cursoCss/doceria', component: DoceriaComponent },
  { path: 'cursoCss/flex-box', component: FlexBoxComponent },
  { path: 'cursoCss/flex-box2', component: FlexBox2Component },
  { path: 'cursoCss/whatsapp-web', component: WhatsappWebComponent },
  { path: 'cursoCss/pagina-de-busca', component: PaginaDeBuscaComponent },
  { path: 'cursoCss/instagram-web', component: InstagramWebComponent },
];

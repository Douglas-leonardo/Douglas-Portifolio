import { SejaBemVindoComponent } from './seja-bem-vindo';
import { DoceriaComponent } from './doceria';
import { NgModule } from '@angular/core';
import { Ccs3TopComponent } from './ccs3-top';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecursosHtmlComponent } from './recursos-html';
import { FlexBoxComponent } from './flex-box/flex-box.component';
import { FlexBox2Component } from './flex-box2/flex-box2.component';
import { WhatsappWebComponent } from './whatsapp-web/whatsapp-web.component';
import { PaginaDeBuscaComponent } from './pagina-de-busca/pagina-de-busca.component';
import { InstagramWebComponent } from './instagram-web/instagram-web.component';

@NgModule({
  declarations: [
    RecursosHtmlComponent,
    DoceriaComponent,
    Ccs3TopComponent,
    SejaBemVindoComponent,
    FlexBoxComponent,
    FlexBox2Component,
    WhatsappWebComponent,
    PaginaDeBuscaComponent,
    InstagramWebComponent
  ],
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  exports: [
    Ccs3TopComponent, SejaBemVindoComponent
  ],
  providers: [],
})
export class CursoModule { }

import { SejaBemVindoComponent } from './seja-bem-vindo';
import { DoceriaComponent } from './doceria';
import { NgModule } from '@angular/core';
import { Ccs3TopComponent } from './ccs3-top';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecursosHtmlComponent } from './recursos-html';

@NgModule({
  declarations: [
    RecursosHtmlComponent,
    DoceriaComponent,
    Ccs3TopComponent,
    SejaBemVindoComponent
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpmTableComponent } from './cpm-table/cpm-table.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CpmUiComponent } from './cpm-ui.component';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { CpmAutocompleteComponent } from './cpm-table/cpm-autocomplete/cpm-autocomplete.component';

const routes: Routes = [
  { path: '', component: CpmUiComponent}
];

@NgModule({
  declarations: [
    CpmTableComponent,
    CpmUiComponent,
    HeaderToolbarComponent,
    CpmAutocompleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class UIModule { }
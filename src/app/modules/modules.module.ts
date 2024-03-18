import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { TemplatesComponent } from './templates/templates.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { LeftSideBarComponent } from './z-vault/components/left-side-bar/left-side-bar.component';
import { ZVaultComponent } from './z-vault/z-vault.component';
import { EnvelopeListComponent } from './z-vault/components/envelope-list/envelope-list.component';

import { SearchNamePipe } from '../shared/pipes/search-name.pipe';

import { LabelManagementComponent } from './z-vault/components/label-management/label-management.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    TemplatesComponent,
    ContactsComponent,
    LeftSideBarComponent,
    ZVaultComponent,
    EnvelopeListComponent,
    SearchNamePipe,
    LabelManagementComponent,
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    BsDropdownModule,
    NgScrollbarModule,
    FormsModule,
    SharedModule
  ]
})
export class ModulesModule { }

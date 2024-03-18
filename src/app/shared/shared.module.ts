import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePoupModalComponent } from './components/create-poup-modal/create-poup-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileComponent } from './components/file/file.component';
import { Page404Component } from './components/page404/page404.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CreatePoupModalComponent,
    FileComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    FileComponent
  ]
})
export class SharedModule { }

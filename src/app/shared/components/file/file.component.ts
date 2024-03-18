import { Component, Input } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

import { FileItem } from '../../interfaces/file-item.interface';
import { CreatePoupModalComponent } from '../create-poup-modal/create-poup-modal.component';
import { ZVaultService } from '../../../core/services/z-vault.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrl: './file.component.scss'
})
export class FileComponent {

  // Input property to receive file item
  @Input() fileItem!: FileItem;

  bsModalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private zVaultService: ZVaultService
  ) { }

  // Function to open a popup modal
  openPopUp(file: any) {
    const initialState: ModalOptions = {
      initialState: {
        title: 'Create New Sub Folder', // Title of the modal
        file: file // File information to pass to the modal
      }
    };
    this.bsModalRef = this.modalService.show(CreatePoupModalComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.createBtnName = 'Create';
  }

  // Function to remove a folder
  removeFolder(file: any) {
    // Pass file details in removeFile method of zVaultService to remove the folder
    this.zVaultService.removeFile(file);
  }
}

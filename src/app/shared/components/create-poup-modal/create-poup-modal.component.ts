import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { v4 as uuidv4 } from 'uuid';

import { ZVaultService } from '../../../core/services/z-vault.service';

@Component({
  selector: 'app-create-poup-modal',
  templateUrl: './create-poup-modal.component.html',
  styleUrl: './create-poup-modal.component.scss'
})
export class CreatePoupModalComponent implements OnInit {

  title?: string;
  closeBtnName?: string;
  createBtnName?: string;
  file: { id: string, label: string } = { id: '', label: '' };
  createFolder: any;
  createButton: boolean = false;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private zVaultService: ZVaultService
  ) { }

  ngOnInit(): void {
    // Initialize the form group for creating a new folder
    this.createFolder = this.fb.group({
      folderName: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  // Function to create a new folder
  createNewFolder() {
    let payLoad;
    // Check if the createFolder form is valid
    if (this.createFolder.valid) {
      // check file list already have id and lable
      if (this.file.id && this.file.label) {
        payLoad = {
          folderName: this.createFolder.get('folderName').value,
          folderId: uuidv4(), // Generate a unique ID
          parentId: this.file.id
        }
      } else {
        // If no file in file list create file without parentId its is parent folder
        payLoad = {
          folderName: this.createFolder.get('folderName').value,
          folderId: uuidv4() // Generate a unique ID
        }
      }
      // Send the payload to the service to set file data
      this.zVaultService.setFileData(payLoad);
      // Close the modal
      this.closeModel();
    }
  }
  // Close modal function
  closeModel() {
    this.bsModalRef.hide();
  }
}


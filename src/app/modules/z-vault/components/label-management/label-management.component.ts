import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { FileItem } from '../../../../shared/interfaces/file-item.interface';
import { ZVaultService } from '../../../../core/services/z-vault.service';

@Component({
  selector: 'label-management',
  templateUrl: './label-management.component.html',
  styleUrl: './label-management.component.scss'
})
export class LabelManagementComponent implements OnInit {

  receivedFileData: any;
  removeFile: any;

  // Create new subscriptions
  subscriptions = new Subscription();

  // Create an empty files array
  files: FileItem[] = [];

  constructor(private zVaultService: ZVaultService) { }

  ngOnInit(): void {
    this._fetchData();
  }

  _fetchData() {
    // Subscribe to the payload$ observable from zVaultService to receive file data
    this.subscriptions.add(this.zVaultService.payload$.subscribe(response => {
      // Store received file data in receivedFileData variable
      this.receivedFileData = response;
      // Call pushFileData function to process received file data
      this.pushFileData(this.receivedFileData, this.files);
    }));

    // Subscribe to the removeFile$ observable from zVaultService to receive remove file requests
    this.subscriptions.add(this.zVaultService.removeFile$.subscribe(response => {
      // Store remove file request data in removeFile variable
      this.removeFile = response;
      // Call removeFileById function to process remove file request
      this.removeFileById(this.removeFile?.id, this.files);
    }));
  }

  // Function to push file data into the files array
  pushFileData(fileData: any, files: any[]) {
    if (fileData?.folderName !== undefined && fileData?.folderId !== undefined) {
      // If fileData has no parentId, it's a parent file
      if (!fileData.parentId) {
        files.push({
          label: fileData.folderName,
          id: fileData.folderId,
          children: []
        });
      } else {
        // If fileData has a parentId, it's a child file
        this.addChildFile(fileData, files);
      }
    }
    // File array convert to JSON format
    console.log(JSON.stringify(files));
  }
  // Recursive function to add child file
  addChildFile(childData: any, files: any[]) {
    for (const file of files) {
      // Check if the file's id matches the child's parentId
      if (file.id === childData.parentId) {
        // Add the child file to the children array of the parent file
        if (!file.children) {
          file.children = [];
        }
        file.children.push({
          label: childData.folderName,
          id: childData.folderId,
          children: []
        });
        return; // Exit the function after adding the child file
      }
      // Recursively search for the parent file in the children of the current file
      if (file.children) {
        this.addChildFile(childData, file.children);
      }
    }
  }

  // Function to remove file from files array based on ID
  removeFileById(id: string, files: any[]) {
    for (let i = 0; i < files.length; i++) {
      // Check if the current file's ID matches the target ID
      if (files[i]?.id === id) {
        // Remove the file from the array
        files.splice(i, 1);
        return; // Exit the function after removing the file
      }
      // If the current file has children, recursively search for the file in its children
      if (files[i]?.children) {
        this.removeFileById(id, files[i]?.children);
      }
    }
  }

  // Destroy all subscription 
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

}

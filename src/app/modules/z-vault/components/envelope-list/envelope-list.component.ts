import { Component, OnInit } from '@angular/core';

import { ZVaultService } from '../../../../core/services/z-vault.service';

@Component({
  selector: 'envelope-list',
  templateUrl: './envelope-list.component.html',
  styleUrl: './envelope-list.component.scss'
})
export class EnvelopeListComponent implements OnInit {

  // Define empty variables to store document list
  documentList: any[] = [];
  // Define empty string to store search text
  searchText = '';

  constructor(private zVaultService: ZVaultService) { }

  ngOnInit(): void {
    this.getDocumentData();
  }

  // Function to fetch document data from ZVaultService
  getDocumentData() {
    this.zVaultService.getDocumentList().subscribe((response: any) => {
      if (response) {
        this.documentList = response;
      } else {
        // If response is null or undefined, assign an empty array to documentList
        this.documentList = [];
      }
    }, error => {
      //hadal error
    });
  }

}

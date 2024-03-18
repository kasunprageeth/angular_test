import { Component } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

import { CreatePoupModalComponent } from '../../../../shared/components/create-poup-modal/create-poup-modal.component';

@Component({
  selector: 'left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrl: './left-side-bar.component.scss'
})
export class LeftSideBarComponent {

  showMore: boolean = false;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) { }

  // Function to toggle the value of showMore variable
  toggleMore() {
    this.showMore = !this.showMore;
  }

  // Function to open a modal
  openModal() {
    // Define initial state for the modal dialog
    const initialState: ModalOptions = {
      initialState: {
        title: 'Create New Folder'
      }
    };
    this.bsModalRef = this.modalService.show(CreatePoupModalComponent, initialState);
    // Set button names for the modal content
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.createBtnName = 'Create';
  }
}

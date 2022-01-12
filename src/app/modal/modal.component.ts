import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  showModal: boolean = true;

  toggleShow() {
    this.showModal = ! this.showModal;
  }
}

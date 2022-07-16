import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Yury Fedorov';
  isShownContent: boolean = true;


  toggleShow() {
    this.isShownContent = ! this.isShownContent;
  }
}

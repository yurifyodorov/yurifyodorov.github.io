import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects: any[] = [
    {
      "name": "Angular Blog",
      "link": 'https://angular-blog-educational.web.app/'
    }
  ];
}

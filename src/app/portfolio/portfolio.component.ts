import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects: any[] = [
    {
      "name": "TCMS",
      "link": 'https://tcms.yurifedorov.com/',
      "note": 'Full stack application built with Next.js/React using FSD architecture',
      "date": '2024 — present',
      "icon": '🔥'
    },
    {
      "name": "Angular Blog",
      "link": 'https://angular-blog-educational.web.app/',
      "note": 'The simplest blog on Angular',
      "date": '2023',
      "icon": '🐥'
    }
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  pik: any[] = [
    {
      "workName": "Ручное тестирование",
      "description": 'Тестировал  '
    },
    {
      "workName": "Автотесты",
      "description": 'Писал e2e автотесты для UI и API использую CodeceptJS'
    }
  ];

  nik: any[] = [
    {
      "workName": "Web Technologies",
      "description": '??????'
    },
    {
      "workName": "Web Technologies",
      "description": '??????'
    }
  ];


}

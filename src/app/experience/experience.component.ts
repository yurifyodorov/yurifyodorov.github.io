import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  pik: any[] = [
    {
      "workName": "Оформление тестовой документации",
      "description": 'Подготовка тест-плана, описание тестовых сценариев с использованием Gherkin синтаксиса'
    },
    {
      "workName": "Ручное тестирование",
      "description": 'Проведение регрессионного тестирования перед релизом в TestRail, поиск и выявление причины ошибки,  оформление bug-репортов в Jira'
    },
    {
      "workName": "Автотесты",
      "description": 'Разработка E2E-автотестов для UI и API изпользуя фреймворк CodeceptJS'
    }
  ];

  nik: any[] = [
    {
      "workName": "Разработка на React",
      "description": 'В основном адаптивная верстка компонентов, исправление найденых багов'
    },
    {
      "workName": "Ручное тестирование",
      "description": 'Проведение регрессионного тестирования, описание тест-кейсов ипользуя сервис testomat.io'
    },
    {
      "workName": "Автотесты",
      "description": 'Разработка E2E-автотестов для UI и API изпользуя фреймворк Cypress'
    },
    {
      "workName": "Разрабтка макетов в Figma",
      "description": 'Много времени посветил разработке макетов, использовал концепцию Atomic Design (компонентный подход)'
    },
  ];


}

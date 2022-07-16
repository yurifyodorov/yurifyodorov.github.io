import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  brokeree: any[] = [
    {
      "workName": "task 1",
      "description": 'описание',
      "items": ['item-1', 'item-2']
    },
    {
      "workName": "task 2",
      "description": 'описание',
      "items": ['item-1']
    },
    {
      "workName": "task 3",
      "description": 'описание',
      "items": ['item-1']
    }
  ];

  pik: any[] = [
    {
      "workName": "Wrote up test documentation",
      "description": 'Preparing documentation for testing internal services of the company',
      "items": ['prepared lists of user scenarios', 'made out a test plan', 'described test cases in TestRail']
    },
    {
      "workName": "Manual testing",
      "description": 'Performing pre-release regression testing',
      "items": ['checking the test cases', 'error finding', 'logged bug reports in Jira', 'worked with the PostgreSQL database']
    },
    {
      "workName": "Autotests",
      "description": 'Development of E2E autotests for UI and API',
      "items": ['developed autotests using CodeceptJS']
    }
  ];

  nik: any[] = [
    {
      "workName": "Developing with React",
      "description": 'I was involved in the process of developing',
      "items": ['performed adaptive layout of pages and components', 'fixing bugs']
    },
    {
      "workName": "Create mockups in Figma",
      "description": 'Drawing design layouts and describing user scenarios',
      "items": ['used the "Atomic Design" concept', 'created interactive prototypes']
    },
    {
      "workName": "Manual testing",
      "description": 'Regression testing, description of test cases and using the service testomat.io',
      "items": ['make a test plan', 'performed a manual check', 'made bug-reports in YouTrack', 'tested the API in Postman']
    },
    {
      "workName": "Autotests",
      "description": 'Developing E2E autotests for UI',
      "items": ['wrote autotests using Cypress']
    },
  ];


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills: any[] = [
    {
      "title": "Web Technologies",
      "level": 70,
      "items": ['HTML5', 'CSS3', 'TypeScript'],
      "pro": false
    },
    {
      "title": "IDE & Tools",
      "level": 90,
      "items": ['WebStorm', 'VS Code', 'Postman', 'pgAdmin'],
      "pro": false
    },
    {
      "title": "Test Automation Tools",
      "level": 100,
      "items": ['Cypress', 'CodeceptJS', 'Playwright'],
      "pro": true
    },
    {
      "title": "Design",
      "level": 100,
      "items": ['Figma'],
      "pro": true
    },
    {
      "title": "Database",
      "level": 40,
      "items": ['PostgreSQL'],
      "pro": false
    },
    {
      "title": "Frameworks",
      "level": 30,
      "items": ['Angular'],
      "pro": false
    },
    {
      "title": "Methodologies",
      "level": 70,
      "items": ['BDD', 'Scrum'],
      "pro": false
    },
    {
      "title": "Other",
      "level": 100,
      "items": ['JIRA', 'Confluence', 'Redmine', 'YouTrack', 'TestRail', 'Kiwi TCMS', 'GitLab', 'Bitbucket'],
      "pro": true
    },
  ];

  english: any[] = [
    {
      "title": "Reading",
      "note": "good",
      "level": 80,
      "pro": true
    },
    {
      "title": "Writing",
      "note": "good",
      "level": 80,
      "pro": true
    },
    {
      "title": "Speaking",
      "note": "little practice",
      "level": 20,
      "pro": false
    },
  ];

}

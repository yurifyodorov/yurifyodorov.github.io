import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: any[] = [
    {
      "title": "Web Technologies",
      "level": 70,
      "items": ['HTML5', 'CSS3', 'TypeScript']
    },
    {
      "title": "IDE & Tools",
      "level": 90,
      "items": ['Webstorm', 'VS Code', 'Postman', 'pgAdmin']
    },
    {
      "title": "Testing",
      "level": 90,
      "items": ['Cypress', 'CodeceptJS']
    },
    {
      "title": "Database",
      "level": 40,
      "items": ['PostgreSQL']
    },
    {
      "title": "Frameworks",
      "level": 50,
      "items": ['Angular']
    },
    {
      "title": "Methodologies",
      "level": 50,
      "items": ['Agile', 'Scrum', 'BDD']
    },
    {
      "title": "Other",
      "level": 50,
      "items": ['JIRA', 'Confluence', 'Redmine', 'YouTrack', 'TestRail']
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

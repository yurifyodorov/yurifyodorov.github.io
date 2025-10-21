import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills: any[] = [
    {
      "title": "Test Automation & QA",
      "level": 100,
      "items": ['Cypress', 'Playwright', 'BDD', 'TestRail', 'Kiwi TCMS'],
      "pro": true
    },
    {
      "title": "Front-end Frameworks",
      "level": 80,
      "items": ['Angular', 'React', 'Next.js', 'TypeScript'],
      "pro": true
    },
    {
      "title": "Back-end / Full-stack",
      "level": 70,
      "items": ['Node.js', 'PostgreSQL', 'REST API', 'tRPC', 'S3'],
      "pro": true
    },
    {
      "title": "DevOps & Tools",
      "level": 80,
      "items": ['GitLab CI/CD', 'GitHub Actions', 'Docker', 'Postman', 'Grafana', 'Prometheus'],
      "pro": true
    },
    {
      "title": "Design & Prototyping",
      "level": 70,
      "items": ['Figma', 'UI/UX Principles'],
      "pro": false
    },
    {
      "title": "AI / Generative Models",
      "level": 60,
      "items": ['ChatGPT', 'Prompt Engineering'],
      "pro": true
    }
  ];

  english: any[] = [
    {
      "title": "Reading",
      "note": "fluent technical reading",
      "level": 90,
      "pro": true
    },
    {
      "title": "Writing",
      "note": "technical documentation, reports",
      "level": 85,
      "pro": true
    },
    {
      "title": "Speaking",
      "note": "presentations, discussions",
      "level": 40,
      "pro": true
    }
  ];

  getLevelColor(level: number): string {
    if (level < 50) {
      return '#f59e0b';
    } else if (level < 100) {
      return '#3b82f6';
    } else {
      return '#16a34a';
    }
  }

}

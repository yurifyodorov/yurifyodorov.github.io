import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  contacts: any[] = [
    {
      "icon": "fas fa-envelope",
      "value": "yuri.inpost@gmail.com",
      "link": 'mailto:yuri.inpost@gmail.com'
    },
    {
      "icon": "fab fa-telegram",
      "value": "@yuryfyodorov",
      "link": '#'
    },
    {
      "icon": "fab fa-linkedin",
      "value": "Linkedin",
      "link": 'https://www.linkedin.com/in/yurifedorov/'
    },
    {
      "icon": "fab fa-github",
      "value": "GitHub",
      "link": 'https://github.com/yurifyodorov'
    },
    {
      "icon": "fab fa-bitbucket",
      "value": "Bitbucket",
      "link": 'https://bitbucket.org/yurifedorov-training/'
    },
    {
      "icon": "hh",
      "value": "HeadHunter",
      "link": 'https://spb.hh.ru/resume/2c75080fff07c5ca870039ed1f74594f416534'
    }
  ];
}

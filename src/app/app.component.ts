import { Component } from '@angular/core';
import { Accordion } from './accordion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasicToolbar';
  progressValue = 10;
  items: Accordion[] = [
    {
      'title': 'Example1',
      'content': 'Example1 content',
      'isExpanded': false
    },
    {
      'title': 'Example2',
      'content': 'Example2 content',
      'isExpanded': false
    }
  ];

}

import { Component, OnInit, Input } from '@angular/core';
import { Accordion} from '../accordion';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() title = '';
  @Input() classes = '';
  @Input() items:Accordion[] = [];

  constructor() { }

  ngOnInit() {
  }

  toggle(item:Accordion): void {
    item.isExpanded = !item.isExpanded;
  }

}

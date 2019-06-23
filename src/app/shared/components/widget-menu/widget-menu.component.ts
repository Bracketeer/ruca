import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-widget-menu',
  templateUrl: './widget-menu.component.html',
  styleUrls: ['./widget-menu.component.sass']
})
export class WidgetMenuComponent implements OnInit {
  @Output() widgetSize: string = 'grid-row-1'
  constructor() { }

  ngOnInit() {
  }

}

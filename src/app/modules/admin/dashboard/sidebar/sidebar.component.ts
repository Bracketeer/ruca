import { Component, OnInit } from '@angular/core';
import { IMenuList } from '@app/shared/models/dashboard/sidebar/menu-list.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  public contents: Array<IMenuList> = [
    {
      icon: 'dashboard',
      text: 'Dashboard',
      active: false,
      link: '/admin/dashboard',
      subMenu: [
        {
          text: 'Sub Option 1',
          link: '/admin/dashboard',
          active: false,
        },
        {
          text: 'Sub Option 2',
          link: '/admin/dashboard',
          active: false,
        }
      ]
    },
    {
      icon: 'assignment',
      text: 'Documents',
      active: false,
      link: '/admin/dashboard',
      subMenu: []
    },
    {
      icon: 'credit_card',
      text: 'Payments',
      active: false,
      link: '/admin/dashboard',
      subMenu: []
    },
    {
      icon: 'shopping_cart',
      text: 'Orders',
      active: false,
      link: '/admin/dashboard',
      subMenu: []
    }
  ]
  toggleSubMenuItem(index: number, subIndex: number) {
    this.contents[index].subMenu.forEach((item, i) => item.active = i !== subIndex ? false : true)
  }
  toggleMenuItem(index: number) {
    if (this.contents[index].active && this.contents[index].subMenu.length > 0) {
      this.contents[index].active = false;
    } else {
      this.contents.forEach((item, i) => item.active = i !== index ? false : true)
    }
  }
  ngOnInit() {
  }

}

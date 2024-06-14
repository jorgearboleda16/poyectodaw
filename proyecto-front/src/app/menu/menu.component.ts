import { Component, OnInit } from '@angular/core';
import { MenuService } from '../servicios/menu.service';
import { MenuItems } from '../menu-items';
import { CommonModule } from '@angular/common';
import { GroupedItems } from '../grouped-items';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [CommonModule]
})
export class MenuComponent implements OnInit {

  trackByItemId(index: number, item: any): number {
    return item.id;
  }

  menuItems: MenuItems[] = [];
  groupedItems: { [category: string]: MenuItems[] } = {};

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuItems = this.menuService.getMenuItems();
    this.groupMenuItems();
  }

  groupMenuItems() {
    this.groupedItems = this.menuItems.reduce((acc: GroupedItems, item: MenuItems) => {
      if (item.category) {
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);
      }
      return acc;
    }, {});
  }
}
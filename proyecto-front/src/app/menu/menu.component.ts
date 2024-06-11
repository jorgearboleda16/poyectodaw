import { Component, OnInit } from '@angular/core';
import { MenuService } from '../servicios/menu.service';
import { MenuItem } from '../menu';
import { CommonModule } from '@angular/common';

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

  menuItems: MenuItem[] = [];
  displayedItems: MenuItem[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuItems = this.menuService.getMenuItems();
    const desiredCategories = ['Appetizers', 'Spring Rolls'];
    this.displayedItems = this.menuItems.filter(item => item.category && desiredCategories.includes(item.category));
  }
}

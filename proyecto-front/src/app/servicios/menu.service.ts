import { Injectable } from '@angular/core';
import { MenuItem } from '../menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuItems: MenuItem[] = [
    { category: 'Appetizers', name: 'Appetizers', description: 'Small bites to start your meal ', price: 0 },
    { category: 'Spring Rolls', name: 'Spring Rolls (2 pcs)', description: 'Crispy rolls filled with vegetables ', price: 6.99 },
  ];

  constructor() { }

  getMenuItems(): MenuItem[] {
    return this.menuItems.slice();
  }
}

import { Injectable } from '@angular/core';
import { MenuItems } from '../menu-items';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuItems: MenuItems[] = [
    { category: 'Entrada', name: 'Balde de Empanadas', description: 'Small bites to start your meal ', price: 0 },
    { category: 'Entrada', name: 'Chifles', description: 'Small bites to start your meal ', price: 0 },
    { category: 'Plato Principal', name: 'Spring Rolls (2 pcs)', description: 'Crispy rolls filled with vegetables ', price: 6.99 },
  ];

  constructor() { }

  getMenuItems(): MenuItems[] {
    return this.menuItems.slice();
  }
}

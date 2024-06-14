import { Injectable } from '@angular/core';
import { MenuItems } from '../menu-items';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuItems: MenuItems[] = [
    { category: 'Entrada', name: 'Balde de Empanadas', description: '6 empanadas de carne, pollo y queso ', price: 4 },
    { category: 'Entrada', name: 'Chifles', description: 'Plátano verde frito ', price: 4 },
    { category: 'Entrada', name: 'Papas a la huancaína', description: 'Papas cocidas con salsa de queso y ají amarillo ', price: 6 },
    { category: 'Entrada', name: 'Mini Tequeños', description: 'Queso envuelto en masa de harina de trigo ', price: 5.5 },
    { category: 'Entrada', name: 'Ración de papas fritas', description: 'Crocantes y deliciosas papas fritas. ', price: 4 },
    { category: 'Entrada', name: 'Arepitas Fritas con Queso y Nata', description: '6 mini arepas fritas con queso y nata ', price: 7 },
    { category: 'Entrada', name: 'Camarones apanados', description: 'Camarones empanizados con papas fritas y salsa tártara ', price: 11 },
    { category: 'Entrada', name: 'Chicharrón', description: 'Chicharrón frito con limón. ', price: 10 },
    { category: 'Entrada', name: 'Arepa Frita', description: 'Arepa frita con queso ', price: 5 },
    { category: 'Entrada', name: 'Waffles de pan de yuca', description: 'Waffles hechos con masa de pan de yuca con queso ', price: 6 },
    { category: 'Plato Principal', name: 'Pollo al Grill', description: 'Arroz blanco, ensalada fresca con aguacate, pechuga de pollo al grill, papas fritas y ensalada de col. ', price: 10 },
    { category: 'Plato Principal', name: 'Arroz con pollo', description: 'Arroz con pollo, verduras y ají amarillo ', price: 12 },
    { category: 'Plato Principal', name: 'Arroz chaufa', description: 'Arroz frito con pollo, cerdo, camarones y verduras ', price: 13 },
    { category: 'Plato Principal', name: 'Ceviche', description: 'Pescado marinado en limón ', price: 12 },
    { category: 'Plato Principal', name: 'Lomo Saltado', description: 'Salted beef with rice and fries ', price: 15 },
    { category: 'Plato Principal', name: 'Pad Thai', description: 'Stir-fried rice noodles with shrimp, tofu, and peanuts ', price: 12.99 },
    { category: 'Plato Principal', name: 'Tallarines verdes con bistec', description: 'Pasta with pesto sauce and steak ', price: 14 },
    { category: 'Plato Principal', name: 'Pollo a la brasa', description: 'Pollo asado con papas fritas y ensalada ', price: 15 },
    { category: 'Plato Principal', name: 'Tallarines rojos con pollo', description: 'Pasta with tomato sauce and chicken ', price: 13 },
    { category: 'Plato Principal', name: 'Seco de res', description: 'Beef stew with cilantro and peas ', price: 14 },
    { category: 'Bebida', name: 'Agua', description: 'Agua purificada ', price: 1 },
    { category: 'Bebida', name: 'Limonada', description: 'Limón, azúcar y agua ', price: 3 },
    { category: 'Bebida', name: 'Coca Cola', description: 'Refresco de cola ', price: 2 },
    { category: 'Bebida', name: 'Chicha Morada', description: 'Bebida de maíz morado ', price: 3 },
    { category: 'Bebida', name: 'Chicha Resbaladera', description: 'compuesto por cebada, arroz, leche y canela ', price: 3 },
    { category: 'Bebida', name: 'Inca Kola', description: 'Refresco de sabor a frutas ', price: 2 },
    { category: 'Bebida', name: 'Cerveza', description: 'Cerveza nacional ', price: 3 },
    { category: 'Bebida', name: 'Pisco Sour', description: 'Cóctel de pisco, limón, clara de huevo y jarabe de goma ', price: 7 },
    { category: 'Bebida', name: 'Margarita', description: 'Cóctel de tequila, triple sec y limón ', price: 7 },
    { category: 'Bebida', name: 'Mojito', description: 'Cóctel de ron, limón, menta, azúcar y agua con gas ', price: 7 },
    { category: 'Postre', name: 'Tiramisu', description: 'Postre italiano de café ', price: 5 },
    { category: 'Postre', name: 'Cheesecake de Oreo', description: 'Cheesecake de oreo con base de galleta ', price: 6 },
    { category: 'Postre', name: 'Pie de Limón', description: 'Pie de limón con merengue ', price: 5 },
    { category: 'Postre', name: 'Mousse de Chocolate', description: 'Mousse de chocolate con crema batida ', price: 5 },
    { category: 'Postre', name: 'Alfajores', description: 'Dulce de leche entre dos galletas ', price: 4 },
    { category: 'Postre', name: 'Helado de Lucuma', description: 'Helado de fruta peruana ', price: 4 },
    { category: 'Postre', name: 'Arroz con leche', description: 'Arroz cocido con leche y canela ', price: 4 },
    { category: 'Postre', name: 'Suspiro a la limeña', description: 'Dulce de leche cubierto con merengue ', price: 5 },
    { category: 'Postre', name: 'Picarones', description: 'Dulce frito de zapallo y camote ', price: 4 },
    { category: 'Postre', name: 'Tarta de manzana', description: 'Tarta de manzana con canela ', price: 5 }
  ];

  constructor() { }

  getMenuItems(): MenuItems[] {
    const categoryOrder = ['Entrada', 'Plato Principal', 'Bebida', 'Postre'];
    const orderedMenuItems = this.menuItems.sort((a, b) => {
      return categoryOrder.indexOf(a.category as string) - categoryOrder.indexOf(b.category as string);
    });
    return orderedMenuItems;
  }
}

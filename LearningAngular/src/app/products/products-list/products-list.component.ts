import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  title = 'Products List';
  selectedProduct = '';

  onBuy(){
    alert(`You just bought ${this.selectedProduct}!`);
  }

}

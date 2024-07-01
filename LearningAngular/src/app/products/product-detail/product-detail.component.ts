import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() name = '';

  @Output() bought = new EventEmitter<string>();

buy() {
  this.bought.emit(this.name);
}
}

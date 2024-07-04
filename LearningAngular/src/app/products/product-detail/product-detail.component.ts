import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnChanges{

  @Input() name = '';
  @Output() bought = new EventEmitter<string>();
  
  constructor() {
    console.log(`Name is ${this.name} in the constructor.`);
  }
  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name'];
    const oldvalue = product.previousValue;
    const newvalue = product.currentValue;
    console.log(`Product changed from ${oldvalue} to ${newvalue}`);
  }

  buy() {
  this.bought.emit(this.name);
  }
  
  get productName(): string {
    console.log(`Get ${this.name}`);
    return this.name;
  }
}

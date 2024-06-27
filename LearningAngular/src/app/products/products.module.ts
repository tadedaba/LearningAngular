import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    ProductComponent,
    ProductsListComponent,
  ],
  exports: [ProductsListComponent],
})
export class ProductsModule { }

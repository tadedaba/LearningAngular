import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProductDetailComponent,
    ProductsListComponent
  ],
})
export class ProductsModule { }

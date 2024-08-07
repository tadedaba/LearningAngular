import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, OrdersModule, 
    ProductsModule, MatButtonModule, MatDividerModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy{
  
  title = 'LearningAngular';


  ngOnDestroy(): void {
    
  }
}

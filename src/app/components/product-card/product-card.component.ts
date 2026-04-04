import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
   @Input()product!: Product;
   @Output() producteventemmiter: EventEmitter<Product> = new EventEmitter();

   onAddCart(product:Product){
     this.producteventemmiter.emit(product);
   }
}

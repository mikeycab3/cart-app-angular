import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CatalogComponent } from '../catalog/catalog.component';
import { CartComponent } from '../cart/cart.component';
import { CartItems } from '../../models/cartItem';

@Component({
  selector: 'app-cart-app',
  standalone: true,
  imports: [CatalogComponent, CartComponent],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.scss'
})
export class CartAppComponent implements OnInit{

  products: Product[] = [];
  items:CartItems[]=[];

  productsService = inject(ProductService)
   constructor(){}

   ngOnInit(): void {
     this.products = this.productsService.findAll();
   }
}

import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CatalogComponent } from '../catalog/catalog.component';

@Component({
  selector: 'app-cart-app',
  standalone: true,
  imports: [CatalogComponent],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.scss'
})
export class CartAppComponent implements OnInit{

  products: Product[] = [];
  productsService = inject(ProductService)
   constructor(){}

   ngOnInit(): void {
     this.products = this.productsService.findAll();
   }
}

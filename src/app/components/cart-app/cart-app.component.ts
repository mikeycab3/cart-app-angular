import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CatalogComponent } from '../catalog/catalog.component';
import { CartComponent } from '../cart/cart.component';
import { CartItems } from '../../models/cartItem';
import { isPlatformBrowser } from '@angular/common';

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
  total:number = 0;

  productsService = inject(ProductService);
  platformId = inject(PLATFORM_ID);

  showCart:boolean = false;
   constructor(){}

   ngOnInit(): void {
     this.products = this.productsService.findAll();
     if (isPlatformBrowser(this.platformId)) {
     this.items = JSON.parse(sessionStorage.getItem('cart')!) || [];
     }
     this.calculateTotal();
   }

   onAddCart(product:Product){
    const findItem = this.items.find(item => item.product.id === product.id);
    console.log('findItem',findItem);
    if(findItem){
      this.items = this.items.map(item=>{
        if( item.product.id === product.id){
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item;
      })
    }else{
          this.items = [... this.items, {product:{...product}, quantity:1}]
    }
    this.calculateTotal()
    this.saveSession()
   }

   onDelete(id:number): void{
    this.items = this.items.filter(item=> item.product.id != id);
    this.calculateTotal()
    this.saveSession();
  }

  calculateTotal(){
    this.total = this.items.reduce((acumulator, item)=> acumulator + item.quantity * item.product.price,0 )
  }

  saveSession(){
  sessionStorage.setItem('cart',JSON.stringify(this.items));
  }
}



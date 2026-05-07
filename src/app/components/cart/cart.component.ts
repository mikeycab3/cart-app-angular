import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { CartItems } from '../../models/cartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  items = input<CartItems[]>([]);
  total = input<number>(0);
  idProductEventEmmiter = output<number>();



  onDeleteCart(id: any) {
    this.idProductEventEmmiter.emit(id);
  }
}

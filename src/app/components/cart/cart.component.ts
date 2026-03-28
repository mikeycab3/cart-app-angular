import { Component, Input } from '@angular/core';
import { CartItems } from '../../models/cartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
 @Input() items:CartItems[] = [];
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItems } from '../../models/cartItem';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faHeart, faMagnifyingGlass, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  faCart = faCartShopping;
  faHeart = faHeart;
  faSearch = faMagnifyingGlass;
  faUser = faUser;
  faMenu = faBars;
  @Input() items: CartItems [] = [];
  @Output() openEventEmitter = new EventEmitter();

  openCart(): void {
    this.openEventEmitter.emit();
  }


}

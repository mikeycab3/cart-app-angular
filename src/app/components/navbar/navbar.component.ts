import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CartItems } from '../../models/cartItem';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faHeart, faMagnifyingGlass, faUser, faBars, faRightFromBracket, faHouse } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../services/user-service.service';
import { Router } from '@angular/router';

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
  faLogout = faRightFromBracket;
  faHome = faHouse;
  @Input() items: CartItems [] = [];
  @Output() openEventEmitter = new EventEmitter();
  private userService = inject(UserService);
  private router = inject(Router);

  openCart(): void {
    this.openEventEmitter.emit();
  }

  logoutUser(): void {
    this.userService.logout();
    this.router.navigate(['/lading-page']);
  }


}

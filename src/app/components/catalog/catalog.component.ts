import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchProductPipe } from '../../pipes/search-product.pipe';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ProductCardComponent,CommonModule, FormsModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  searchText: string = '';
  @Input() products!: Product[];
  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter<any>

  onAddCart(product:Product){
   this.productEventEmitter.emit(product)
  }

  filteredProducts(): Product[] {
  if (!this.searchText) {
    return this.products;
  }

  return this.products.filter(product =>
    product.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
    product.category.toLowerCase().includes(this.searchText.toLowerCase())
  );
}

}

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-show-preview-products',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './show-preview-products.component.html',
  styleUrl: './show-preview-products.component.scss'
})
export class ShowPreviewProductsComponent implements OnInit {
   private route = inject(ActivatedRoute);
   private productService = inject(ProductService);
   products: any[] = [];
   category:string = '';
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.category = params['category'];
      console.log('category',this.category);
      if(this.category){
        this.productService
        .getProductsByCategory(this.category)
        .subscribe((res) => {
          this.products = res;
          console.log(this.products);
        });
      }
    });
  }
}

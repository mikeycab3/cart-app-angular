import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProduct',
  standalone: true
})
export class SearchProductPipe implements PipeTransform {

  transform(products: any[], searchText: string): any[] {

    if (!products || !searchText) {
      return products;
    }

    searchText = searchText.toLowerCase();

    return products.filter(product =>
      product.title.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText)
    );
  }


}

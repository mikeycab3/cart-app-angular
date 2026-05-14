import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPreviewProductsComponent } from './show-preview-products.component';

describe('ShowPreviewProductsComponent', () => {
  let component: ShowPreviewProductsComponent;
  let fixture: ComponentFixture<ShowPreviewProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowPreviewProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPreviewProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

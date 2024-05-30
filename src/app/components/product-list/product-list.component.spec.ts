import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getDiscount() function',()=>{
    const  products = {
      name:"Samsung Galaxy m30s",
      model:2021,
      price: 15000,
      discount:5
    }
    expect(component.getDiscount().toFixed(2)).toBe("14250.00");
  });
  it('getDiscount() function products is amount 78',()=>{
    let  products = {
      name:"Samsung Galaxy m30s",
      model:2021,
      price: 15000,
      discount:7
    }
    expect(component.getDiscount().toFixed(2)).toBe("14250.00");
  });


});

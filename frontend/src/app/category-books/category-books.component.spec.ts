import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBooksComponent } from './category-books.component';

describe('CategoryBooksComponent', () => {
  let component: CategoryBooksComponent;
  let fixture: ComponentFixture<CategoryBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryBooksComponent]
    });
    fixture = TestBed.createComponent(CategoryBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

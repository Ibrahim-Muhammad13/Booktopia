import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorBookDetailsComponent } from './author-book-details.component';

describe('AuthorBookDetailsComponent', () => {
  let component: AuthorBookDetailsComponent;
  let fixture: ComponentFixture<AuthorBookDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorBookDetailsComponent]
    });
    fixture = TestBed.createComponent(AuthorBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

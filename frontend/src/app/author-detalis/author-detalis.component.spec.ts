import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDetalisComponent } from './author-detalis.component';

describe('AuthorDetalisComponent', () => {
  let component: AuthorDetalisComponent;
  let fixture: ComponentFixture<AuthorDetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorDetalisComponent]
    });
    fixture = TestBed.createComponent(AuthorDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

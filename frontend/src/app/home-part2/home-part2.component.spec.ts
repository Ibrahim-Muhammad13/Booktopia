import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePart2Component } from './home-part2.component';

describe('HomePart2Component', () => {
  let component: HomePart2Component;
  let fixture: ComponentFixture<HomePart2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePart2Component]
    });
    fixture = TestBed.createComponent(HomePart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcartypeComponent } from './addcartype.component';

describe('AddcartypeComponent', () => {
  let component: AddcartypeComponent;
  let fixture: ComponentFixture<AddcartypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcartypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcartypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeCakeComponent } from './customize-cake.component';

describe('CustomizeCakeComponent', () => {
  let component: CustomizeCakeComponent;
  let fixture: ComponentFixture<CustomizeCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

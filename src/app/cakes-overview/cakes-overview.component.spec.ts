import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakesOverviewComponent } from './cakes-overview.component';

describe('CakesOverviewComponent', () => {
  let component: CakesOverviewComponent;
  let fixture: ComponentFixture<CakesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

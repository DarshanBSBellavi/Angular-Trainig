import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjssampleComponent } from './rxjssample.component';

describe('RxjssampleComponent', () => {
  let component: RxjssampleComponent;
  let fixture: ComponentFixture<RxjssampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjssampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjssampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

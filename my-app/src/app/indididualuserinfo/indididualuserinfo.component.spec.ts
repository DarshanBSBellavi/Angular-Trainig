import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndididualuserinfoComponent } from './indididualuserinfo.component';

describe('IndididualuserinfoComponent', () => {
  let component: IndididualuserinfoComponent;
  let fixture: ComponentFixture<IndididualuserinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndididualuserinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndididualuserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

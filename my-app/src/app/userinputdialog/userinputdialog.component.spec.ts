import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinputdialogComponent } from './userinputdialog.component';

describe('UserinputdialogComponent', () => {
  let component: UserinputdialogComponent;
  let fixture: ComponentFixture<UserinputdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserinputdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinputdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

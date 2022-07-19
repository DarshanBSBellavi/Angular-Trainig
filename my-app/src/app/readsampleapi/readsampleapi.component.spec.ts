import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadsampleapiComponent } from './readsampleapi.component';

describe('ReadsampleapiComponent', () => {
  let component: ReadsampleapiComponent;
  let fixture: ComponentFixture<ReadsampleapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadsampleapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadsampleapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

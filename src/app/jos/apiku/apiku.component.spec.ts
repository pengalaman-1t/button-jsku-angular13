import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApikuComponent } from './apiku.component';

describe('ApikuComponent', () => {
  let component: ApikuComponent;
  let fixture: ComponentFixture<ApikuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApikuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApikuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

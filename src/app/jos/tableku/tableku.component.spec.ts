import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablekuComponent } from './tableku.component';

describe('TablekuComponent', () => {
  let component: TablekuComponent;
  let fixture: ComponentFixture<TablekuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablekuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablekuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

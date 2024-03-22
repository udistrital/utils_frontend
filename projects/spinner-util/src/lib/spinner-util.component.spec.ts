import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerUtilComponent } from './spinner-util.component';

describe('SpinnerUtilComponent', () => {
  let component: SpinnerUtilComponent;
  let fixture: ComponentFixture<SpinnerUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerUtilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpinnerUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

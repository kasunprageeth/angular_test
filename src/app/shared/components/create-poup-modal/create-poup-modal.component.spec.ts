import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePoupModalComponent } from './create-poup-modal.component';

describe('CreatePoupModalComponent', () => {
  let component: CreatePoupModalComponent;
  let fixture: ComponentFixture<CreatePoupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePoupModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePoupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

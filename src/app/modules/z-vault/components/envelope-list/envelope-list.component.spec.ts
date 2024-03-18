import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeListComponent } from './envelope-list.component';

describe('EnvelopeListComponent', () => {
  let component: EnvelopeListComponent;
  let fixture: ComponentFixture<EnvelopeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnvelopeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnvelopeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZVaultComponent } from './z-vault.component';

describe('ZVaultComponent', () => {
  let component: ZVaultComponent;
  let fixture: ComponentFixture<ZVaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZVaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZVaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

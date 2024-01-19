import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagersComponent } from './messagers.component';

describe('MessagersComponent', () => {
  let component: MessagersComponent;
  let fixture: ComponentFixture<MessagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletequoteComponent } from './deletequote.component';

describe('DeletequoteComponent', () => {
  let component: DeletequoteComponent;
  let fixture: ComponentFixture<DeletequoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletequoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletequoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

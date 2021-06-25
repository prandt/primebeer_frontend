import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbxComponent } from './pbx.component';

describe('PbxComponent', () => {
  let component: PbxComponent;
  let fixture: ComponentFixture<PbxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PbxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

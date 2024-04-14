import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilepathComponent } from './filepath.component';

describe('FilepathComponent', () => {
  let component: FilepathComponent;
  let fixture: ComponentFixture<FilepathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilepathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilepathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

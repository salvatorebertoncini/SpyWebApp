import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpytoolbarComponent } from './spytoolbar.component';

describe('SpytoolbarComponent', () => {
  let component: SpytoolbarComponent;
  let fixture: ComponentFixture<SpytoolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpytoolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpytoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

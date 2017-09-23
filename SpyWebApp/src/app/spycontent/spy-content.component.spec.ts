import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyContentComponent } from './spy-content.component';

describe('SpyContentComponent', () => {
  let component: SpyContentComponent;
  let fixture: ComponentFixture<SpyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

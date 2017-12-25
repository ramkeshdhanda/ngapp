import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportExtractionComponent } from './report-extraction.component';

describe('ReportExtractionComponent', () => {
  let component: ReportExtractionComponent;
  let fixture: ComponentFixture<ReportExtractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportExtractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportExtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

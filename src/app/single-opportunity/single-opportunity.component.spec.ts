import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOpportunityComponent } from './single-opportunity.component';

describe('SingleOpportunityComponent', () => {
  let component: SingleOpportunityComponent;
  let fixture: ComponentFixture<SingleOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

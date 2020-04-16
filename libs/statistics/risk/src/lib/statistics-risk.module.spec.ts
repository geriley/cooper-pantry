import { async, TestBed } from '@angular/core/testing';
import { StatisticsRiskModule } from './statistics-risk.module';

describe('StatisticsRiskModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StatisticsRiskModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StatisticsRiskModule).toBeDefined();
  });
});

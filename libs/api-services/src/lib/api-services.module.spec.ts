import { async, TestBed } from '@angular/core/testing';
import { ApiServicesModule } from './api-services.module';

describe('ApiServicesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ApiServicesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ApiServicesModule).toBeDefined();
  });
});

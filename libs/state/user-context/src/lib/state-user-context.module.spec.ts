import { async, TestBed } from '@angular/core/testing';
import { StateUserContextModule } from './state-user-context.module';

describe('StateUserContextModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StateUserContextModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StateUserContextModule).toBeDefined();
  });
});

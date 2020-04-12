import { async, TestBed } from '@angular/core/testing';
import { AssistantFeatureModule } from './assistant-feature.module';

describe('AssistantFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AssistantFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AssistantFeatureModule).toBeDefined();
  });
});

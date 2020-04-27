import { async, TestBed } from '@angular/core/testing';
import { AdminInventoryModule } from './admin-inventory.module';

describe('AdminInventoryModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminInventoryModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AdminInventoryModule).toBeDefined();
  });
});

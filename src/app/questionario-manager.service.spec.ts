import { TestBed } from '@angular/core/testing';

import { QuestionarioManagerService } from './questionario-manager.service';

describe('QuestionarioManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionarioManagerService = TestBed.get(QuestionarioManagerService);
    expect(service).toBeTruthy();
  });
});

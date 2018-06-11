import { TestBed, inject } from '@angular/core/testing';

import { ChatBoxService } from './chat-box.service';

describe('ChatBoxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatBoxService]
    });
  });

  it('should be created', inject([ChatBoxService], (service: ChatBoxService) => {
    expect(service).toBeTruthy();
  }));
});

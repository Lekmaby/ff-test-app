import { TestBed } from '@angular/core/testing';

import { ItemsService } from './items.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient, HttpClientModule} from "@angular/common/http";

describe('ItemsService', () => {
  let service: ItemsService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(ItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be page 1', () => {
    expect(service.getPage(0, 10)).toBe(1);
  });

  it('should be page 3', () => {
    expect(service.getPage(10, 5)).toBe(3);
  });
});

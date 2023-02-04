import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TablePaginatorComponent} from './table-paginator.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TablePaginatorComponent', () => {
  let component: TablePaginatorComponent;
  let fixture: ComponentFixture<TablePaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePaginatorComponent],
      imports: [HttpClientTestingModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TablePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

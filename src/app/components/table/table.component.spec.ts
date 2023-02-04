import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {TablePagesizeSelectorComponent} from "../table-pagesize-selector/table-pagesize-selector.component";
import {TableContentComponent} from "../table-content/table-content.component";
import {TablePaginatorComponent} from "../table-paginator/table-paginator.component";

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent, TablePagesizeSelectorComponent, TableContentComponent, TablePaginatorComponent ],
      imports: [HttpClientTestingModule, FormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

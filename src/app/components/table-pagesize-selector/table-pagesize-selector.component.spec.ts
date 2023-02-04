import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TablePagesizeSelectorComponent} from './table-pagesize-selector.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule} from "@angular/forms";

describe('TablePagesizeSelectorComponent', () => {
  let component: TablePagesizeSelectorComponent;
  let fixture: ComponentFixture<TablePagesizeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePagesizeSelectorComponent],
      imports: [FormsModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TablePagesizeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

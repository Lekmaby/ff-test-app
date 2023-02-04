import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableContentComponent} from './table-content.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AppComponent} from "../../app.component";

describe('TableContentComponent', () => {
  let component: TableContentComponent;
  let fixture: ComponentFixture<TableContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableContentComponent],
      imports: [HttpClientTestingModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have table', () => {
    const fixture = TestBed.createComponent(TableContentComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table.table')).toBeTruthy();
  });
});

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-table-pagesize-selector',
  templateUrl: './table-pagesize-selector.component.html',
  styleUrls: ['./table-pagesize-selector.component.scss']
})
export class TablePagesizeSelectorComponent {
  @Input() pageSizes: number[] = [5, 10, 100];
  @Input() limit: number = 0;
  @Input() loading: boolean = false;

  @Output() limitChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {

  }

  change() {
    this.limitChange.emit(this.limit);
  }
}

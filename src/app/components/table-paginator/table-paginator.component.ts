import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'app-table-paginator',
  templateUrl: './table-paginator.component.html',
  styleUrls: ['./table-paginator.component.scss']
})
export class TablePaginatorComponent implements OnInit, OnChanges {
  @Input() offset: number = 0;
  @Input() limit: number = 0;
  @Input() total: number = 0;

  canPrev: boolean = false;
  canNext: boolean = false;
  page: number = 1;
  totalPages: number = 1;

  @Output() prev = new EventEmitter();
  @Output() next = new EventEmitter();

  constructor(private itemsService: ItemsService) {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateAvailables();
  }

  prevAction() {
    if(this.canPrev){
      this.prev.emit();
      this.updateAvailables();
    }
  }

  nextAction() {
    if(this.canNext){
      this.next.emit();
      this.updateAvailables();
    }
  }

  /**
   * Recount fields, if page options changed
   */
  updateAvailables() {
    this.canPrev = this.offset > 0;
    this.canNext = this.offset + this.limit < this.total;

    this.page = this.itemsService.getPage(this.offset, this.limit);
    this.totalPages = this.itemsService.getPage(this.total, this.limit) - 1;
  }

}

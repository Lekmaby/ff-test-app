import {Component, OnInit} from '@angular/core';
import {Item} from "../../interfaces/Item";
import {ItemsService} from "../../services/items.service";
import {ErrorResponse} from "../../interfaces/ErrorResponse";
import {ItemsResponse} from "../../interfaces/ItemsResponse";
import {HttpErrorResponse} from "@angular/common/http";
import {TableColumn} from "../../interfaces/TableColumn";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  offset: number = 0;
  limit: number = 0;
  total: number = 0;
  items: Item[] = [];
  columns: TableColumn[] = [];
  loading = false;
  error: ErrorResponse | null = null;

  pageSizes: number[] = [5, 10]

  constructor(private itemsService: ItemsService) {

  }

  ngOnInit() {
    this.limit = this.pageSizes[0];
    this.initColumns();
    this.loadItems();
  }

  private initColumns(): void {
    this.columns = [
      {title: 'ID', field: 'id', classes: 'text-bold'},
      {title: 'Наименование', field: 'title'},
      {title: 'Цена', field: 'price'},
      {title: 'Количество', field: 'quantity'},
    ];
  }

  private loadItems(): void {
    this.loading = true;
    this.itemsService.getItems(this.offset, this.limit)
      .subscribe({
        next: (response: ItemsResponse | any) => {
          this.items = response.data;
          this.total = response.total;
          this.loading = false;
        },
        error: (error: HttpErrorResponse) => {
          this.loading = false;
          this.error = error?.error ?? error;
        }
      })
  }

  /**
   * Load next page
   */
  loadNext() {
    this.offset += this.limit;
    this.loadItems();
  }

  /**
   * Load previous page
   */
  loadPrev() {
    this.offset -= this.limit;
    this.loadItems();
  }

  /**
   * Load first page, if page size changed
   */
  limitChanged() {
    this.offset = 0;
    this.loadItems();
  }
}

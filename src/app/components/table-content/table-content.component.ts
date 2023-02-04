import {Component, Input} from '@angular/core';
import {Item} from "../../interfaces/Item";
import {TableColumn} from "../../interfaces/TableColumn";

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss']
})
export class TableContentComponent {

  @Input() items: Item[] | any[] = [];

  @Input() columns: TableColumn[] = [];

  constructor() {

  }

}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TableComponent} from './components/table/table.component';
import {TablePagesizeSelectorComponent} from './components/table-pagesize-selector/table-pagesize-selector.component';
import {TablePaginatorComponent} from './components/table-paginator/table-paginator.component';
import {TableContentComponent} from './components/table-content/table-content.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TablePagesizeSelectorComponent,
    TablePaginatorComponent,
    TableContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

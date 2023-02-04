import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ItemsResponse} from "../interfaces/ItemsResponse";
import {ErrorResponse} from "../interfaces/ErrorResponse";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  readonly apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8081';
  }

  public getItems(offset: number = 0, limit: number = 10): Observable<ItemsResponse | ErrorResponse> {
    const url = this.apiUrl + '/items';

    let queryParams = new HttpParams()
      .append("offset", offset)
      .append("limit", limit);

    return this.http.get<ItemsResponse | ErrorResponse>(url, {params: queryParams});
  }

  public getPage(offset: number = 0, limit: number = 10): number {
    return Math.ceil(offset / limit) + 1;
  }
}

import {Item} from "./Item";

export interface ItemsResponse {
  offset: number;
  limit: number;
  total: number;
  data: Item[];
}

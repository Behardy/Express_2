import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {}


  getAllItems(){
    return this.http.get("/api/shoppingcart", { responseType: "json" });
  }
  addItems(newItem){
    return this.http.post("/api/shoppingcart",newItem, { responseType:"json"})
  }
  removeItem(id){
    return this.http.delete(`/api/shoppingcart/${id}`, {responseType: "json"})
  }
updateItem(item){
  return this.http.put(`/api/shoppingcart/${item.id}`,item, {responseType: "json"})
}

}

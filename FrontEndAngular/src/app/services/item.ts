import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';
import { ItemRepository } from '../repositories/item.repository';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItemService extends ItemRepository {
  private apiUrl = 'http://localhost:5000/items';
  // super initializes the parent abstract class even though a constructor is not used in the parent class. necessary for inheritance
  constructor(private http: HttpClient) {
    super();
  }

  // signal state to hold items. You can mutate the state(signals value), you cannot reassign the variable. Protects reference, not data
  private readonly writableItems = signal<Item[]>([]);
  // signal state to communicate with UI if currently loading items
  private readonly loadingSignal = signal<boolean>(false);

  // query current items state, but can't modify them directly
  items = this.writableItems.asReadonly();
  // query loading state, but can't modify it directly
  loading = this.loadingSignal.asReadonly();
    
  
  //  get items from backend
  getItems(): void {   
    this.loadingSignal.set(true);
    this.http.get<Item[]>(this.apiUrl)
      .pipe(
        tap(items => {
          this.writableItems.set(items);
          this.loadingSignal.set(false);
          console.log(items)
        }
        )
      )
      .subscribe()
    }
    
  }
  // get items by Id
  // getItemById(id: number): Observable<Item> {
  //   const url = `${this.apiUrl}/${id}`;
  //   console.log('Getting item with id:', id);
  //   return this.http.get<Item>(url);
  // }

  // add item to backend
  // addItem(item: Item): Observable<Item> {
  //   return this.http.post<Item>(this.apiUrl, item);
  // }  
  
  // delete item from backend
  // deleteItemById(id: number): Observable<void> {
  //   const url = `${this.apiUrl}/${id}`;
  //   console.log('Deleting item with id:', id);
  // return this.http.delete<void>(url); 
  // }

  // update item in backend
  // updateItem(item: Item): Observable<Item> {
  //   const url = `${this.apiUrl}/${item.id}`;
  //   console.log('Updating item with id:', item.id, 'Data:', item);
  //   return this.http.put<Item>(url, item);
  // }

    // update completed value in backend
  // updateCompleted(item: Item): Observable<Item> {
  //   const url = `${this.apiUrl}/${item.id}/updateCompleted`;
  //   console.log('Updating item with id:', item.id, 'Data:', item);
  //   return this.http.put<Item>(url, item);
  // }
        

import { Signal } from "@angular/core";
import { Item } from "../models/item.model";

export abstract class ItemRepository {

    // Query for state
    abstract items: Signal<Item[]>;
    abstract loading: Signal<boolean>;

    // Action methods
    abstract getItems(): void;
    abstract getItemById(id: number): Item | undefined;
    abstract addItem(item: Item): void;
    abstract deleteItemById(id: number): void;
    abstract updateItem(item: Item): void;
    abstract updateCompleted(item: Item): void;
}
import { Component, OnInit} from '@angular/core';
import { ItemService } from '../../services/item';
// import { Item } from '../../models/item.model';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: 
    [CommonModule, 
      // DatePipe,
      // RouterLink, 
      RouterModule,
      FormsModule],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
export class ToDoList implements OnInit {
  private itemService = inject(ItemService);

  items = this.itemService.items
  loading = this.itemService.loading

  ngOnInit(): void {
    this.itemService.getItems();
  };
  
}
//   // Delete Item
//   deleteItem(id: number): void {
//     if(window.confirm("Are you sure you want to delete this task?")) {
//     // console.log('Deleting item with id:', id);
//     this.itemService.deleteItemById(id).subscribe({
//       next: () => {
//       this.items = this.items.filter(item => item.id !== id);
//       this.cdr.detectChanges();
//     },
//     error: (err) => {
//       console.error("Error deleting item:", err);
//     }
//   });
//   } else{
//     console.log('Delete cancelled for item with id:', id);
//   }
// }

//   // Update completed boolean
//   updateCompletedTask(item: Item): void {
//     console.log('Updating item:', item);
//     this.itemService.updateCompleted(item).subscribe({
//       next: (updateCompleted) => {
//         console.log('Item updated:', updateCompleted);
//         this.cdr.detectChanges();
//       },
//       error: (err) => {
//         console.error("Error updating item:", err);
//       }
//     });
//   }
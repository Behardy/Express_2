import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: any;
  shouldBeHidden: boolean = true;


  constructor(private cartService: CartService) {
    this.cartService.getAllItems().subscribe(response => {
      this.items = response;
    });
  }
  toggleForm(index) {
    this.items[index].itemUpdated = !this.items[index].itemUpdated;
    console.log(this.items[index]);

    this.shouldBeHidden = !this.shouldBeHidden;
  };

  addNewItem(form) {
    this.cartService.addItems(form.value).subscribe(response => {
      this.items = response;
    });
  }

  removeAnItem(id) {
    this.cartService.removeItem(id).subscribe(response => {
      this.items = response;
    });
  }
  updateAnItem(item) {
    this.cartService.updateItem(item).subscribe(response => {
      this.items = response;
    });
  }
}
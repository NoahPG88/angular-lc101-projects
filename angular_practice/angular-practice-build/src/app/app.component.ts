import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ALtered Title?';
  name: string = 'JuneBug';
  itemList: string[] = ["pizza", "more pizza", "nachos", "pickles"];
  rectangle = {
    length: 5,
    width: 6,
    area: function() {
       return this.length * this.width;
    }
  };
}

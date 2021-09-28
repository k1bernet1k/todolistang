import { Component } from '@angular/core';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'todolistang';
// }




class Item{
  purchase: string;
  done: boolean;

  constructor(purchase: string) {

    this.purchase = purchase;
    this.done = false;
  }
}

@Component({
  selector: 'purchase-app',
  template: `<div class="page-header">
    <h1> Список дел </h1>
  </div>
  <div class="panel">
    <div class="form-inline">
      <div class="form-group">
        <div class="col-md-8">
          <input class="form-control" [(ngModel)]="text" placeholder = "Задача" />
        </div>
      </div>
      <div class="form-group">
        <div class="col-md-offset-2 col-md-8">
          <button class="btn btn-default" (click)="addItem(text)">Добавить</button>
        </div>
      </div>
    </div>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Задача</th>
        <th>Сделано</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let item of items">
        <td>{{item.purchase}}</td>
        <td><input type="checkbox" [(ngModel)]="item.done" /></td>
      </tr>
      </tbody>
    </table>
  </div>`
})
export class AppComponent {
  text: string = "";

  items: Item[] =
    [

    ];
  addItem(text: string): void {

    if(text==null || text.trim()=="")
      return;
    this.items.push(new Item(text));
  }
}

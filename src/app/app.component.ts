import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username: string = "";
  ifEnabled = true;

  /*checkUserName() {
    if (this.username !== "") {
      this.ifEnabled = false;
    }
  }*/

  clicked() {
    this.ifEnabled = true;
    this.username = "";
  }

}

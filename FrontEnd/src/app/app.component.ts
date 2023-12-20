import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //koristimo kako bi instancirali html jedne komponente u okviru druge
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IT67-2019-FrontEnd';
}

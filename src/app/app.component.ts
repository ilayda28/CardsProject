import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {
    title: 'Köpek',
    imageUrl: 'assets/foto1.jpg',
    username: '@hayvan',
    content: 'Patili dostumuz.'
  },
  {
    title: 'Dağ',
    imageUrl: 'assets/foto2.jpg',
    username: '@tırmanış',
    content: 'Doğa yürüyüşü.'
  },
  {
    title: 'Kule',
    imageUrl: 'assets/foto3.jpg',
    username: '@kule',
    content: 'Fener kulesi.'
  }
]
}

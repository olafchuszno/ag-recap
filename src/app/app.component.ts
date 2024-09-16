import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<main>
    <header class="brand-name">
      <img aria-hidden="true" src="/assets/logo.svg" alt="logo">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>`,
  imports: [HomeComponent],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}

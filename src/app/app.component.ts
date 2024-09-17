import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<main>
    <header class="brand-name">
      <img aria-hidden="true" src="/assets/logo.svg" alt="logo">
    </header>
    <section class="content">
      <router-outlet></router-outlet>
      <!-- <app-home></app-home> -->
    </section>
  </main>`,
  imports: [HomeComponent, RouterModule],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}

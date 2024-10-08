import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form action="/">
        <input type="text" placeholder="Filter by city!" />
        <button type="button" class="primary">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocations"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);

  housingLocations: HousingLocation[] = [];

  constructor() {
    this.housingLocations = this.housingService.getAllHousingLocations();
  }
}

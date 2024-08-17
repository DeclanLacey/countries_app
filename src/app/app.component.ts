import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CountryCardsComponent } from "./country-cards/country-cards.component";
import { CountryDetailComponent } from "./country-detail/country-detail.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CountryCardsComponent, RouterLink, RouterLinkActive, CountryDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'countries-app';
}

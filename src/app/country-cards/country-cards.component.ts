import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FilterPipeModule } from 'ngx-filter-pipe';


@Component({
  selector: 'app-country-cards',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FilterPipeModule],
  templateUrl: './country-cards.component.html',
  styleUrl: './country-cards.component.css'
})
export class CountryCardsComponent implements OnInit {
  httpClient = inject(HttpClient)
  allCountriesData: any[] = []
  countryNameFilter: string = ""
  countryRegionFilter: string = ''

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    this.httpClient.get('https://restcountries.com/v3.1/all')
    .subscribe((data: any) => {
      this.allCountriesData = data
    })
  }

  updateSearchName(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.countryNameFilter = newValue
  }

  updateRegion(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.countryRegionFilter = newValue
  }
}

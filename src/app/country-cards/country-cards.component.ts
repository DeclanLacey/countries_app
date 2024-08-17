import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-cards.component.html',
  styleUrl: './country-cards.component.css'
})
export class CountryCardsComponent implements OnInit {
  httpClient = inject(HttpClient)
  allCountriesData: any[] = []

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    this.httpClient.get('https://restcountries.com/v3.1/all')
    .subscribe((data: any) => {
      console.log(data)
      this.allCountriesData = data
    })
  }
}

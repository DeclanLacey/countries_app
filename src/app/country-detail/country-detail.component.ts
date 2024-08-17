import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.css'
})
export class CountryDetailComponent implements OnInit {
  httpClient = inject(HttpClient)
  countryName!: string
  countryData!: any

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
        this.countryName = params.get('country') || ""
      })

      this.fetchData()
  }
  
  fetchData() {
    this.httpClient.get('https://restcountries.com/v3.1/name/' + this.countryName)
    .subscribe((data: any) => {
      this.countryData = data
    })
  }

  
}

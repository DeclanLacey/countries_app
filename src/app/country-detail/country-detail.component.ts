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
  languageData: any = ""

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
        this.countryName = params.get('country') || ""
      })

      this.fetchData()
  }
  
  fetchData() {
    this.httpClient.get('https://restcountries.com/v2/name/' + this.countryName + "?fields=name,population,region,subregion,capital,topLevelDomain,currencies,languages,flags" )
    .subscribe((data: any) => {
      this.countryData = data[0]
      
      if (data[0].languages.length > 1) {
        for(let i = 0; i < data[0].languages.length; i++) {
          console.log(data[0].languages[i].name)
          if (i + 1 === data[0].languages.length) {
            this.languageData += `${data[0].languages[i].name} `
          }else {
            this.languageData += `${data[0].languages[i].name}, `
          }
        }
      }else {
        this.languageData = data[0].languages[0].name
      }
      
    })

  
  }

  
}

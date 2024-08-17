import { Routes } from '@angular/router';
import { CountryCardsComponent } from './country-cards/country-cards.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

export const routes: Routes = [
    {path: '', redirectTo: '/country-cards', pathMatch: 'full'},
    {
        path: "country-cards",
        component: CountryCardsComponent
    },
    {
        path: "country-detail/:country",
        component: CountryDetailComponent
    }
];

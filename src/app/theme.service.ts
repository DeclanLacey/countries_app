import { Injectable } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode = false;

  isDarkMode() {
    return this.darkMode;
  }

  setDarkMode(isDarkMode: boolean) {
    this.darkMode = isDarkMode;
    if (isDarkMode) {
      
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}

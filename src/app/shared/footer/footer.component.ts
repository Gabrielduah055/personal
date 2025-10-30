import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private theme: ThemeService) {}

  get isDarkMode(): boolean {
    return this.theme.modeSubject.value === 'dark';
  }

  toggleTheme(): void {
    this.theme.toggleTheme();
  }
}

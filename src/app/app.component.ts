import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { RouterOutlet } from "@angular/router";
import { ThemeService } from './shared/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
})
export class AppComponent implements OnInit {
  title = 'personal-website';

  constructor(private theme: ThemeService) {
    // Initialize theme in constructor to ensure it runs before view initialization
    this.theme.initTheme();
  }

  ngOnInit(): void {
    // Ensure theme is applied (in case constructor didn't run in browser context)
    if (typeof window !== 'undefined') {
      this.theme.initTheme();
    }
  }
}

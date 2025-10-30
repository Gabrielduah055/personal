import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TEXT } from '@constants';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  text = TEXT.about;
  faqs = this.text.faqs;


  openIndex: number | null = null;

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}

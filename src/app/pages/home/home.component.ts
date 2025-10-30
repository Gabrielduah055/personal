import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {TEXT} from '@constants'


@Component({
  selector: 'app-home',
  imports: [RouterLink,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  text = TEXT.home;
}

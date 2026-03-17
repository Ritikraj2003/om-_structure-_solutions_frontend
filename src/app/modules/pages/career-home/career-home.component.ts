import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-career-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './career-home.component.html',
  styleUrl: './career-home.component.css'
})
export class CareerHomeComponent {
  constructor() {}
}

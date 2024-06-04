import { Component, Input, input } from '@angular/core';
import { ResultObject } from '../data.model';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  // es qveda chveulebrivi decoratorit aris gaketebuli
// @Input() results?:ResultObject[]

// xolo es input() it

results=input<ResultObject[]>()
}

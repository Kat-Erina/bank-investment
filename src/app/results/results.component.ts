import { Component, Input, inject, input } from '@angular/core';
import { ResultObject } from '../data.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-results',
  // standalone: true,
  // imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {
  // es qveda chveulebrivi decoratorit aris gaketebuli
  // @Input() results?:ResultObject[]
  // xolo es input() it
  // results=input<ResultObject[]>()
  // es qveda ukve service it aris gaketebuli

  private data=inject(InvestmentService)

  get results(){
   return  this.data.annualData()
  }
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import type { DataObject } from './data.model';
import { ResultsComponent } from './results/results.component';
import { ResultObject } from './data.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserInputComponent,
    ResultsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bank-project-udemy';
  // qveda aris signalis gareshe
  // annualData: ResultObject[] = [];

  //signalit
  annualData = signal<ResultObject[] | undefined>(undefined);

  calculateInvestmentResult(data: DataObject) {
    const { initialInvestment, duration, expectedReturn, annualInvestment } =
      data;
    const annualDataArray = [];

    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = (investmentValue * expectedReturn) / 100;
      investmentValue += interestEarnedInYear + annualInvestment;

      const totalInterest = annualInvestment * year - initialInvestment;

      annualDataArray.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    // return this.annualData;

    //signalis update xdeba
    this.annualData.set(annualDataArray);
  }
}

import { Injectable, signal } from '@angular/core';
import { ResultObject } from './data.model';
import {DataObject} from './data.model'

@Injectable({ providedIn: 'root' })
export class InvestmentService{
    annualData = signal<ResultObject[] | undefined>(undefined)
    
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


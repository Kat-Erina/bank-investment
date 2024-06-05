import { Component, Output, EventEmitter, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

// import type { DataObject } from '../data.model';

@Component({
  selector: 'app-user-input',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // qvemota iyenebs Outputs
  // @Output() calculate = new EventEmitter<DataObject>();

  //qvemota iyenebs output() ias
  // calculate = output<DataObject>();

  // aq ukve servicie gvaqvs gamoyenebuli

 constructor(public investmentService: InvestmentService){

 }

  // es signalit aris gaketebuli
  initialInvestment = signal<string>('0');
  annualInvestment = signal<string>('0');
  expectedReturn = signal<string>('0');
  duration = signal<string>('0');

  onSubmit() {
    this.investmentService.calculateInvestmentResult({ duration: +this.duration(),
        initialInvestment: +this.initialInvestment(),
        expectedReturn: +this.expectedReturn(),
        annualInvestment: +this.annualInvestment(),})
    // this.calculate.emit({
    //   duration: +this.duration(),
    //   initialInvestment: +this.initialInvestment(),
    //   expectedReturn: +this.expectedReturn(),
    //   annualInvestment: +this.annualInvestment(),
    // });
    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('0');
    this.duration.set('0');
  }
}

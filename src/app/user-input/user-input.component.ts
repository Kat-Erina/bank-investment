import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { DataObject } from '../data.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<DataObject>();

  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '0';
  duration = '0';

  submitFn() {
    // this.calculate.emit();
    console.log('emitted');
  }

  onSubmit() {
    this.calculate.emit({
      duration: +this.duration,
      initialInvestment: +this.initialInvestment,
      expectedReturn: +this.expectedReturn,
      annualInvestment: +this.annualInvestment,
    });
  }
}

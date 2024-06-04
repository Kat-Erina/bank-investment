export interface DataObject {
  duration: number;
  initialInvestment: number;
  expectedReturn: number;
  annualInvestment: number;
}

export interface ResultObject {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}


import BigNumber from "bignumber.js";

export enum RepaymentFrequencies {
    Monthly,
    Weekly
}

export interface IMortgageCalculatorInputs {
    amountBorrowed: number;
    interestRate: number;
    // repaymentFrequency: RepaymentFrequencies;
    lengthOfLoanYears: number;
    // fees: number;
    // feesFrequency: RepaymentFrequencies;
}

// const frequencyMap = {
//     [RepaymentFrequencies.Monthly]: 1,
//     [RepaymentFrequencies.Weekly]: 1,
// }


export interface MortageCalculation {
    repaymentAmount: number;
    totalAmount: number;
    totalInterestPaid: number;
}
export const mortageCalculator = ({ amountBorrowed, interestRate, lengthOfLoanYears }: IMortgageCalculatorInputs): MortageCalculation => {
    const monthlyInterestRate = interestRate / 100 / 12
    const numberOfPaymentMonths = lengthOfLoanYears * 12;
    const monthlyAmount = monthlyPayment(amountBorrowed, numberOfPaymentMonths, monthlyInterestRate);
    
    const halfRoundUp = (num: number) => new BigNumber(num).dp(0, BigNumber.ROUND_HALF_UP).toNumber();
    const totalAmount = halfRoundUp(monthlyAmount * 12 * lengthOfLoanYears);
    const totalInterestPaid = totalAmount - amountBorrowed;
    return {
        repaymentAmount: halfRoundUp(monthlyAmount),
        totalAmount,
        totalInterestPaid
    };
}

const monthlyPayment = (principal: number, numberOfPaymentMonths: number, monthlyInterestRate: number) => {
    return principal * monthlyInterestRate * 
        (Math.pow(1 + monthlyInterestRate, numberOfPaymentMonths)) / (Math.pow(1 + monthlyInterestRate, numberOfPaymentMonths) - 1);
  }
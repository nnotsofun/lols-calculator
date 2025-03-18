import { expect, test } from 'vitest'
import { IMortgageCalculatorInputs, MortageCalculation, mortageCalculator } from './mortagageCalculator'
test("should calculate the total correctly", () => {
    const inputs: IMortgageCalculatorInputs = {
        amountBorrowed: 500000,
        lengthOfLoanYears: 25,
        interestRate: 6,        
    }
    const result = mortageCalculator(inputs);
    expect(result).toEqual<MortageCalculation>({
        repaymentAmount: 3222,
        totalAmount: 966452,
        totalInterestPaid: 466452
    })
})
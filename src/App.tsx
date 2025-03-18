import { useEffect, useState } from "react";
import "./App.css";
import { mortageCalculator } from "./calculations/mortagageCalculator";
import { dollarFormatter } from "./utilities/dollarFormatter";
import { clubMed, iceCream, oasis } from "./imageSources";

function App() {
  // const [count, setCount] = useState(0);'
  const [amountBorrowed, setAmountBorrowed] = useState(0);
  const [monthlyInterestRate, setMonthlyInterestRate] = useState(0);
  const [lengthOfLoanYears, setLengthOfLoanYears] = useState(0);

  // const [costOfClubMed, setCostOfClubMed] = useState(8000);

  const calculatedMortage = mortageCalculator({
    amountBorrowed,
    interestRate: monthlyInterestRate,
    lengthOfLoanYears,
  });

  const isValidMortgage =
    calculatedMortage.repaymentAmount > 0 &&
    Number.isFinite(calculatedMortage.repaymentAmount);

  useEffect(() => {
    if (isValidMortgage) {
    }
  }, [amountBorrowed, monthlyInterestRate, lengthOfLoanYears]);

  const activitiesMap = [
    ["Gone to club med", 8000, clubMed],
    ["Eaten a Maccas ice cream", 0.5, iceCream],
    ["Seen Oasis", 450, oasis],
  ];

  const calculateNumberOfActivities = (costOfActivity: number) =>
    isValidMortgage &&
    new Intl.NumberFormat("en-AU").format(
      Math.ceil(calculatedMortage.totalInterestPaid / costOfActivity)
    );

  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-2 align-center">
        <FieldInput
          label="Amount borrowed"
          value={amountBorrowed}
          onValueChange={(val) => !Number.isNaN(val) && setAmountBorrowed(Number(val))}
        />
        <FieldInput
          label="Interest rate"
          value={monthlyInterestRate}
          onValueChange={(val) => !Number.isNaN(val) && setMonthlyInterestRate(Number(val))}
        />
        <FieldInput
          label="Lenght of loan years"
          value={lengthOfLoanYears}
          onValueChange={(val) => !Number.isNaN(val) && setLengthOfLoanYears(Number(val))}
        />
      </div>
      {isValidMortgage && (
        <div className ="result-block">
          <div className="block uppercase tracking-wide text-gray-700 text-xs mb-2 leading-6">
            <CalculatedAmountRow
              label={"Monthly repayment"}
              amount={calculatedMortage.repaymentAmount}
            />
            <CalculatedAmountRow
              label={"Total amount"}
              amount={calculatedMortage.totalAmount}
            />
            <CalculatedAmountRow
              label={"Interest paid"}
              amount={calculatedMortage.totalInterestPaid}
            />
          </div>
          <h2 className="text-lg m-4">With the interest - you could've</h2>
          <ul>
            {activitiesMap.map(([name, amount, image]) => (
              <li className="flex flex-col">
                <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">{name} - {calculateNumberOfActivities(amount as number)} times{" "}</span>
                <br></br>
                <img className="activity-img" src={image as string} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

const CalculatedAmountRow = ({
  label,
  amount,
}: {
  label: string;
  amount: number;
}) => (
  <div>
    <div className="font-bold">{label}</div> {dollarFormatter(amount)}
  </div>
);

interface FieldInputProps {
  label: string;
  value: number;
  onValueChange: (value: string) => void;
}
const FieldInput = ({ label, value, onValueChange }: FieldInputProps) => {
  return (
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 max-w-48">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        pattern="(\d*|\.)"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      ></input>
    </div>
  );
};

export default App;

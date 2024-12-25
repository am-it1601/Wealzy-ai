"use client";
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

const LoanEmiCalculator = () => {
  const [calculateField, setCalculateField] = useState("emi");
  const [loanAmount, setLoanAmount] = useState<number | null>(500000);
  const [interestRate, setInterestRate] = useState<number | null>(10);
  const [loanTenure, setLoanTenure] = useState<number | null>(12);
  const [emi, setEmi] = useState<number | null>(0);

  const calculateValue = () => {
    if (calculateField === "emi" && loanAmount && interestRate && loanTenure) {
      const monthlyRate = interestRate / (12 * 100);
      const emi =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) /
        (Math.pow(1 + monthlyRate, loanTenure) - 1);
      setEmi(Math.round(emi));
    } else if (
      calculateField === "tenure" &&
      loanAmount &&
      interestRate &&
      emi
    ) {
      const monthlyRate = interestRate / (12 * 100);
      const tenure =
        Math.log(emi / (emi - loanAmount * monthlyRate)) /
        Math.log(1 + monthlyRate);
      setLoanTenure(Math.round(tenure));
    } else if (
      calculateField === "amount" &&
      emi &&
      interestRate &&
      loanTenure
    ) {
      const monthlyRate = interestRate / (12 * 100);
      const amount =
        (emi * (Math.pow(1 + monthlyRate, loanTenure) - 1)) /
        (monthlyRate * Math.pow(1 + monthlyRate, loanTenure));
      setLoanAmount(Math.round(amount));
    } else if (calculateField === "rate" && loanAmount && emi && loanTenure) {
      let low = 0;
      let high = 100;
      let calculatedRate = 0;

      while (high - low > 0.0001) {
        const mid = (low + high) / 2;
        const monthlyRate = mid / (12 * 100);
        const calculatedEmi =
          (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) /
          (Math.pow(1 + monthlyRate, loanTenure) - 1);

        if (calculatedEmi > emi) {
          high = mid;
        } else {
          low = mid;
        }

        calculatedRate = mid;
      }
      setInterestRate(Number(calculatedRate.toFixed(2)));
    }
  };

  return (
    <Card className="p-6 w-full flex flex-col md:flex-row gap-6">
      {/* Left Section - Inputs */}
      <div className="w-full md:w-1/2">
        <h2 className="text-lg font-bold mb-4">Dynamic Loan EMI Calculator</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Calculate</label>
          <Select
            onValueChange={(value) => setCalculateField(value)}
            defaultValue="emi">
            <SelectTrigger className="w-full">
              Select what to calculate
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="emi">EMI</SelectItem>
              <SelectItem value="amount">Loan Amount</SelectItem>
              <SelectItem value="rate">Interest Rate</SelectItem>
              <SelectItem value="tenure">Loan Tenure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {calculateField !== "amount" && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Loan Amount (₹)
            </label>
            <Slider
              defaultValue={[500000]}
              max={10000000}
              step={50000}
              value={[loanAmount ?? 0]}
              onValueChange={(value) => setLoanAmount(value[0])}
            />
            <span>
              {loanAmount ? `₹${loanAmount.toLocaleString()}` : "Select Amount"}
            </span>
          </div>
        )}

        {calculateField !== "rate" && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Interest Rate (%)
            </label>
            <Slider
              defaultValue={[10]}
              max={20}
              step={0.1}
              value={[interestRate ?? 0]}
              onValueChange={(value) => setInterestRate(value[0])}
            />
            <span>
              {interestRate ? `${interestRate.toFixed(1)}%` : "Select Rate"}
            </span>
          </div>
        )}

        {calculateField !== "tenure" && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Loan Tenure (Months)
            </label>
            <Slider
              defaultValue={[12]}
              max={360}
              step={1}
              value={[loanTenure ?? 0]}
              onValueChange={(value) => setLoanTenure(value[0])}
            />
            <span>{loanTenure ? `${loanTenure} months` : "Select Tenure"}</span>
          </div>
        )}

        <Button onClick={calculateValue} className="w-full">
          Calculate
        </Button>
      </div>

      {/* Right Section - Results */}
      <div className="w-full md:w-1/2 bg-gray-50 p-4 rounded-lg">
        <h3 className="text-md font-bold mb-4">Calculation Result</h3>
        <div className="text-center">
          {calculateField === "emi" && emi > 0 && (
            <p className="text-xl font-bold">EMI: ₹{emi}</p>
          )}
          {calculateField === "amount" && loanAmount > 0 && (
            <p className="text-xl font-bold">Loan Amount: ₹{loanAmount}</p>
          )}
          {calculateField === "rate" && interestRate > 0 && (
            <p className="text-xl font-bold">Interest Rate: {interestRate}%</p>
          )}
          {calculateField === "tenure" && loanTenure > 0 && (
            <p className="text-xl font-bold">
              Loan Tenure: {loanTenure} months
            </p>
          )}
          {!emi && calculateField === "emi" && (
            <p>Enter inputs to calculate EMI</p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default LoanEmiCalculator;

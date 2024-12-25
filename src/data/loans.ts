import { CheckCircle2, Timer } from 'lucide-react';

export const LOAN_DATA = {
  loans: [
    {
      loanAccountNumber: "LN1234567890",
      totalLoanAmount: 500000,
      principalOutstanding: 300000,
      loanTenureInMonths: 60,
      totalInstallments: 60,
      remainingInstallments: 24,
      emiAmount: 10000,
      nextEmiDate: "2024-01-15",
      status: "active",
    },
    {
      loanAccountNumber: "LN0987654321",
      totalLoanAmount: 800000,
      principalOutstanding: 500000,
      loanTenureInMonths: 48,
      totalInstallments: 48,
      remainingInstallments: 0,
      emiAmount: 20000,
      nextEmiDate: null,
      status: "closed",
    },
    {
      loanAccountNumber: "LN1122334455",
      totalLoanAmount: 1000000,
      principalOutstanding: 850000,
      loanTenureInMonths: 72,
      totalInstallments: 72,
      remainingInstallments: 60,
      emiAmount: 15000,
      nextEmiDate: "2024-01-05",
      status: "active",
    },
    {
      loanAccountNumber: "LN2233445566",
      totalLoanAmount: 200000,
      principalOutstanding: 100000,
      loanTenureInMonths: 24,
      totalInstallments: 24,
      remainingInstallments: 6,
      emiAmount: 10000,
      nextEmiDate: "2024-01-20",
      status: "active",
    },
    {
      loanAccountNumber: "LN3344556677",
      totalLoanAmount: 1500000,
      principalOutstanding: 0,
      loanTenureInMonths: 120,
      totalInstallments: 120,
      remainingInstallments: 0,
      emiAmount: 12500,
      nextEmiDate: null,
      status: "closed",
    },
  ],
};

export type Loans = {
  loanAccountNumber: string;
  totalLoanAmount: number;
  principalOutstanding: number;
  loanTenureInMonths: number;
  totalInstallments: number;
  remainingInstallments: number;
  emiAmount: number;
  nextEmiDate: string;
  status: "active" | "closed";
};

export const LoanStatus = [
  {
    value: "active",
    label: "Active",
    icon: Timer,
  },

  {
    value: "closed",
    label: "Closed",
    icon: CheckCircle2,
  },
];

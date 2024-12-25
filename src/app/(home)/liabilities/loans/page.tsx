import React from "react";

import LoanCompletionGraph from "../../../../components/feature/liabilities/loans/LoanCompletionGraph";
import LoanList from "../../../../components/feature/liabilities/loans/LoanList";
import LoanSummary from "../../../../components/feature/liabilities/loans/LoanSummary";
import PageHeader from "../../../../components/shared/PageHeader";
import { LOAN_DATA } from "../../../../data/loans";

const LoansPage = () => {
  const loans = {
    loans: [],
  };
  return (
    <div className="flex flex-col gap-8 items-center justify-around">
      <PageHeader
        title={"All About Your Loans in One Place"}
        subtitle={
          "Take charge of your loans with clarity—track balances, monitor repayments, and celebrate your progress toward financial freedom!"
        }
      />

      <LoanSummary loans={loans.loans} />
      <LoanList loans={loans.loans} />
      <LoanCompletionGraph />
    </div>
  );
};

export default LoansPage;

import React from "react";

import PageHeader from "../../../../../components/shared/PageHeader";

const AddLoanPage = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-around">
      <PageHeader
        title="Add a New Loan Account"
        subtitle={
          "Seamlessly add your loan details to start tracking, managing, and optimizing your financial commitments!"
        }
      />
    </div>
  );
};

export default AddLoanPage;

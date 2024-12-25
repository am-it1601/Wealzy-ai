import React from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { DataTable } from '../../../shared/Datatable';
import { Skeleton } from '../../../ui/skeleton';
import { columns__loans } from './loancolumns';

const LoanList = ({ loans }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Your Loan Portfolio at a Glance</CardTitle>
        <CardDescription>
          Keep track of all your loans in one place. View details such as
          outstanding amounts, interest rates, due dates, and repayment
          progress. Stay informed and take control of your financial commitments
          with ease.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loans ? (
          <DataTable data={loans} columns={columns__loans} />
        ) : (
          <div className="flex flex-col gap-2">
            <Skeleton className="h-[20px] w-full rounded-xl" />
            <Skeleton className="h-[20px] w-full rounded-xl" />
            <Skeleton className="h-[20px] w-full rounded-xl" />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LoanList;

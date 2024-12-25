import {
  CalendarSyncIcon,
  Focus,
  PartyPopper,
  Plus,
  Scale,
  ScanEye,
  Timer,
} from "lucide-react";
import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import AnimatedCounter from "../../../ui/AnimatedCounter";
import { Button } from "../../../ui/button";

import type { Loans } from "../../../../data/loans";
const LoanSummary = ({ loans }: { loans: Loans[] }) => {
  const hasLoans = loans && loans.length > 0;
  console.log(hasLoans);
  const activeLoans = loans.filter((loan) => loan.status === "active");
  const totalEmi = activeLoans.reduce((sum, loan) => sum + loan.emiAmount, 0);

  const summary = loans.reduce(
    (totals, loan) => {
      if (loan.status != "closed") {
        totals.outStandingPrincipal += loan.principalOutstanding || 0;
        totals.remainingInstallments += loan.remainingInstallments || 0;
      } else totals.closeLoans += 1;

      totals.totalInstallments += loan.totalInstallments || 0;
      return totals;
    },
    {
      outStandingPrincipal: 0,
      totalInstallments: 0,
      remainingInstallments: 0,
      closeLoans: 0,
    }
  );

  return (
    <div className="w-full h-full relative">
      {!hasLoans && (
        <div className="flex flex-col backdrop-blur-md justify-evenly items-center rounded-sm absolute top-0 left-0 w-full h-full z-10 ">
          <div className="sm:text-2xl font-extrabold text-secondary-foreground text-wrap p-4">
            <p className="animate-bounce">
              No loans to track yet! Add your first loan now to start managing
              your repayments and take control of your financial journey!
            </p>
          </div>
          <div>
            <Button
              variant="default"
              className="text-primary-foreground bg-constructive p-6 rounded opacity-100">
              <Plus className="w-8 h-8" />
              Add Loan Now
            </Button>
          </div>
        </div>
      )}
      <div className="grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 w-full">
        <Card className="flex flex-col justify-around items-center hover:shadow-lg">
          <CardHeader className="flex justify-between space-y-0 pb-2 gap-2">
            <CardTitle className="font-semibold inline-flex gap-2 items-center">
              <ScanEye className="w-6 h-6 text-primary" />
              Your Loan Count at a Glance
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-secondary-foreground gap-4 md:gap-8 flex  flex-col text-3xl md:text-4xl xl:text-7xl font-extrabold justify-center items-center">
            <span className="flex gap-3">
              <AnimatedCounter value={loans.length} />
            </span>
          </CardContent>
          <CardFooter className="md:text-xs font-extralight text-muted-foreground">
            Know exactly how many financial commitments you’re managing—all in
            one view!
          </CardFooter>
        </Card>

        <Card className="flex flex-col justify-around items-center hover:shadow-lg">
          <CardHeader className="flex gap-2 justify-between space-y-0 pb-2">
            <CardTitle className="font-semibold inline-flex gap-2 items-center">
              <Focus className="w-6 h-6 text-destructive" />
              Active Loans in Focus
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-destructive gap-4 md:gap-8 flex flex-col text-3xl md:text-4xl xl:text-7xl font-extrabold justify-center items-center">
            <span className="flex gap-3">
              <AnimatedCounter value={activeLoans.length} />
            </span>
          </CardContent>
          <CardFooter className="text-muted-foreground text-xs font-extralight">
            Stay on top of what matters—track loans that are actively shaping
            your financial journey!
          </CardFooter>
        </Card>

        <Card className="flex flex-col justify-around items-center hover:shadow-lg">
          <CardHeader className="flex gap-2 justify-between space-y-0 pb-2">
            <CardTitle className="font-semibold inline-flex gap-2 items-center">
              <Scale className="text-orange-600 w-6 h-6" />
              Outstanding Balance Alert
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-muted-foreground gap-4 md:gap-8 flex  flex-col text-3xl md:text-3xl font-extrabold justify-center items-center">
            <span className="flex gap-3">
              <AnimatedCounter
                value={summary.outStandingPrincipal}
                prefix="$"
                decimal="."
              />
            </span>
          </CardContent>
          <CardFooter className="text-xs font-extralight text-muted-foreground">
            This is what’s left to clear—track your outstanding amount and plan
            your debt-free future!
          </CardFooter>
        </Card>

        <Card className="flex flex-col justify-around items-center hover:shadow-lg">
          <CardHeader className="flex justify-between space-y-0 pb-2 gap-2">
            <CardTitle className="font-semibold inline-flex gap-2 items-center">
              <CalendarSyncIcon className="size-6 text-primary" />
              Monthly Commitments Tracker
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-muted-foreground gap-4 md:gap-8 flex  flex-col text-3xl md:text-3xl font-extrabold justify-center items-center">
            <span className="flex gap-3">
              <AnimatedCounter value={totalEmi} prefix="$" decimal="." />
            </span>
          </CardContent>
          <CardFooter className="text-xs font-extralight text-muted-foreground">
            Know what’s due every month—keep your EMIs under control and stay
            stress-free!
          </CardFooter>
        </Card>

        <Card className="flex flex-col justify-around items-center hover:shadow-lg">
          <CardHeader className="flex justify-between space-y-0 pb-2 gap-2">
            <CardTitle className="font-semibold inline-flex gap-2 items-center">
              <Timer className="w-6 h-6 text-primary" />
              Your EMI Countdown
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-primary gap-4 md:gap-8 flex flex-col text-3xl md:text-4xl xl:text-7xl font-extrabold justify-center items-center">
            <span className="flex gap-3">
              <AnimatedCounter value={summary.remainingInstallments} />
            </span>
          </CardContent>
          <CardFooter className="text-xs font-extralight text-muted-foreground">
            <p>
              Just {summary.remainingInstallments} month(s) to go! Stay
              consistent, and you’ll be debt-free by{" "}
              <span className="font-semibold text-black">
                {getFormattedDate(summary.remainingInstallments)}
              </span>{" "}
              —the finish line is in sight!
            </p>
          </CardFooter>
        </Card>

        <Card className="flex flex-col justify-around items-center hover:shadow-lg">
          <CardHeader className="flex justify-between space-y-0 pb-2 gap-2">
            <CardTitle className="font-semibold inline-flex gap-2 items-center">
              <PartyPopper className="w-6 h-6 text-constructive" />
              Loans You’ve Conquered
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-constructive gap-4 md:gap-8 flex  flex-col text-3xl md:text-4xl xl:text-7xl font-extrabold justify-center items-center">
            <span className="flex gap-3">
              <AnimatedCounter value={summary.closeLoans} />
            </span>
          </CardContent>
          <CardFooter className="text-xs font-extralight text-muted-foreground">
            Celebrate your victories—each closed loan is a step toward financial
            freedom!
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

const formatDate = (date) => {
  const options = { year: "numeric", month: "short" };
  return date.toLocaleDateString("en-US", options);
};

// Function to calculate and format the date
const getFormattedDate = (monthsToAdd) => {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + monthsToAdd);
  return formatDate(currentDate);
};

export default LoanSummary;

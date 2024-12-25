"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Loans, LoanStatus, type } from "../../../../data/loans";
import { DataTableColumnHeader } from "../../../shared/datatable/data-table.column-header";
import { Progress } from "../../../ui/progress";

export const columns__loans: ColumnDef<Loans>[] = [
  {
    accessorKey: "loanAccountNumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Loan Account Number" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("loanAccountNumber")}</div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "totalLoanAmount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Loan Amount" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            ${row.getValue("totalLoanAmount")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "loanTenureInMonths",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tenure" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("loanTenureInMonths")} Months
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = LoanStatus.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon
              className={`mr-2 h-4 w-4 
                ${
                  status.value === "active"
                    ? "text-destructive"
                    : "text-muted-foreground"
                }
                `}
            />
          )}
          <span className={status.value === "active" && "text-destructive"}>
            {status.label}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "principalOutstanding",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Outstanding Principal" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            $ {row.getValue("principalOutstanding")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "remainingInstallments",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Remaining Installments" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("remainingInstallments")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "progress",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Loan Completion" />
    ),
    cell: ({ row }) => {
      console.log(JSON.stringify(row));
      const totalInstallments = row.original.totalInstallments;
      const remainingInstallments = row.getValue<number>(
        "remainingInstallments"
      );
      const paid = totalInstallments - remainingInstallments;
      return (
        <div className="flex space-x-2">
          <Progress
            value={paid}
            max={totalInstallments}
            className="w-20
          [&>*]:bg-constructive
          "
          />
        </div>
      );
    },
  },
];

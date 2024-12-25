"use client";
import React, { FunctionComponent } from "react";
import CountUp from "react-countup";

const AnimatedCounter: FunctionComponent<{
  value: number;
  prefix?: string;
  decimal?: string;
  className?: string;
}> = ({ value, decimal, prefix, className }) => {
  return (
    <div className="w-full text-wrap">
      <CountUp
        className={className}
        end={value}
        decimal={decimal}
        prefix={prefix}
        duration={2.75}
        decimals={decimal ? 2 : 0}
      />
    </div>
  );
};

export default AnimatedCounter;

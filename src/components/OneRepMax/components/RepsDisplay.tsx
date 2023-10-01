import React from "react";

import { LegacyStack, LegacyCard } from "@shopify/polaris";

import { DEFAULT_REPS } from "../../../utils/constants/contants";

import { calculateWeightForReps } from "../../../utils/calculateWeightForReps";

import { RepsDisplayTable } from "./RepsDisplayTable";

export function RepsDisplay({ oneRepMax }: { oneRepMax: number }) {
  const orm_ranges = DEFAULT_REPS.map((num) => {
    return {
      id: num.toString(),
      weight: calculateWeightForReps(oneRepMax, num),
      reps: num,
    };
  });

  return (
    <div>
      <RepsDisplayTable data={orm_ranges} oneRepMax={oneRepMax} />
    </div>
  );
}

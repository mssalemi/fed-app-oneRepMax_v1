import React from "react";

import { LegacyStack, LegacyCard } from "@shopify/polaris";

import { DEFAULT_REPS } from "../../../utils/constants/contants";

import { calculateWeightForReps } from "../../../utils/calculateWeightForReps";

import { RepsDisplayTable } from "./RepsDisplayTable";

export function RepsDisplay({ oneRepMax }: { oneRepMax: number }) {
  const orm_ranges = DEFAULT_REPS.map((num) => {
    return {
      id: 0,
      weight: calculateWeightForReps(oneRepMax, num),
      reps: num,
    };
  });

  return (
    <div>
      <LegacyStack distribution="fillEvenly">
        <LegacyCard title="Projected RepMax's from OneRepMax">
          <RepsDisplayTable data={orm_ranges} oneRepMax={oneRepMax} />
        </LegacyCard>
        <LegacyCard title="Sample Workouts"></LegacyCard>
      </LegacyStack>
    </div>
  );
}

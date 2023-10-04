import React from "react";

import { Text } from "@shopify/polaris";

interface Props {
  reps: number[];
  sets: number;
  weight: number;
}

function WorkoutDataDisplay({ reps, sets, weight }: Props) {
  return (
    <div>
      <Text as="p" variant="bodyMd" fontWeight="semibold">
        {sets} x {reps.join("-")} {weight === 0 ? "" : `@ ${weight}`}
      </Text>
    </div>
  );
}

export default WorkoutDataDisplay;

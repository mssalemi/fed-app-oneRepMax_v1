import React from "react";

import { LegacyCard, Text } from "@shopify/polaris";
import { calculateOneRepMax } from "../../../utils/oneRepMax";
import { calculateWeightForReps } from "../../../utils/calculateWeightForReps";

export function TutorialBlock({
  exerciseByRepMax,
}: {
  exerciseByRepMax: {
    weight: number;
    reps: number;
  };
  numberOfExercise?: number;
}) {
  const oneRepMax = calculateOneRepMax(
    exerciseByRepMax.weight,
    exerciseByRepMax.reps
  );

  const traininigWeight = calculateWeightForReps(
    oneRepMax,
    exerciseByRepMax.reps,
    true
  );

  console.log({
    sets: 3,
    reps: exerciseByRepMax.reps,
    weight: traininigWeight,
  });

  return (
    <LegacyCard.Section>
      <Text variant="bodyMd" fontWeight="bold" as="span">
        {`${3}x${exerciseByRepMax.reps} @ ${Math.round(traininigWeight)}`}
      </Text>
    </LegacyCard.Section>
  );
}

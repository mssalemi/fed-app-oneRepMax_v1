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
    name: string;
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

  const workoutPart1 = {
    sets: 3,
    reps: exerciseByRepMax.reps,
    weight: traininigWeight,
    exerciseName: exerciseByRepMax.name,
  };

  return (
    <LegacyCard.Section>
      <Text variant="bodyMd" fontWeight="bold" as="span">
        {`${workoutPart1.exerciseName} - ${workoutPart1.sets}x${
          workoutPart1.reps
        } @ ${Math.round(workoutPart1.weight)}`}
      </Text>
    </LegacyCard.Section>
  );
}

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

  const workoutPart2 = {
    sets: 3,
    reps: exerciseByRepMax.reps,
    weight: traininigWeight,
    exerciseName: exerciseByRepMax.name,
  };

  const workout = [workoutPart1, workoutPart2];

  return (
    <>
      {workout.map((workoutPart) => {
        return (
          <LegacyCard.Section>
            <Text variant="bodyMd" fontWeight="bold" as="span">
              {generateWorkoutPartDisplay(workoutPart)}
            </Text>
          </LegacyCard.Section>
        );
      })}
    </>
  );
}

const generateWorkoutPartDisplay = (workoutPart: {
  sets: number;
  reps: number;
  weight: number;
  exerciseName: string;
}) => {
  return `${workoutPart.exerciseName} - ${workoutPart.sets}x${
    workoutPart.reps
  } @ ${Math.round(workoutPart.weight)}`;
};

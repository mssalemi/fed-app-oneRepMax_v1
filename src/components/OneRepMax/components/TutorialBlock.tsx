import React from "react";

import { LegacyCard, Text, VerticalStack } from "@shopify/polaris";
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

  const workoutPart1 = generateWorkoutPartSingle({
    sets: 3,
    reps: exerciseByRepMax.reps,
    weight: traininigWeight,
    exerciseName: exerciseByRepMax.name,
  });

  const workoutPart2 = generateWorkoutPartSingle({
    sets: 3,
    reps: exerciseByRepMax.reps + 2,
    weight: traininigWeight * 0.8,
    exerciseName: "Incline " + exerciseByRepMax.name,
  });

  const workoutPart3 = generateWorkoutPartSingle({
    sets: 4,
    reps: 8,
    weight: traininigWeight * 0.275,
    exerciseName: "Incline DB Press",
  });

  const exercise1 = {
    sets: 4,
    reps: 12,
    weight: 0,
    exerciseName: "Tricep Pushdown",
  };

  const exercise2 = {
    sets: 4,
    reps: 12,
    weight: 0,
    exerciseName: "Ab Crunch",
  };

  const workoutPart4 = generateWorkoutPartSuperset([exercise1, exercise2]);

  const workout = [workoutPart1, workoutPart2, workoutPart3, workoutPart4];

  console.log(workout);

  return (
    <>
      {workout.map((workoutPart) => {
        if (workoutPart.type === "single") {
          return (
            <LegacyCard.Section>
              <Text variant="bodyMd" fontWeight="bold" as="span">
                {generateWorkoutPartDisplay(
                  workoutPart.exercises[0] as {
                    sets: number;
                    reps: number;
                    weight: number;
                    exerciseName: string;
                  }
                )}
              </Text>
            </LegacyCard.Section>
          );
        }
        if (workoutPart.type === "superset") {
          return (
            <LegacyCard.Section title="Superset">
              <VerticalStack>
                {workoutPart.exercises.map((exercise) => {
                  return (
                    <Text variant="bodyMd" fontWeight="bold" as="span">
                      {generateWorkoutPartDisplay(
                        exercise as {
                          sets: number;
                          reps: number;
                          weight: number;
                          exerciseName: string;
                        }
                      )}
                    </Text>
                  );
                })}
              </VerticalStack>
            </LegacyCard.Section>
          );
        }
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
  const weight = workoutPart.weight ? Math.round(workoutPart.weight) : 0;

  return `${workoutPart.exerciseName} - ${workoutPart.sets}x${
    workoutPart.reps
  } ${weight !== 0 ? `@ ${weight}` : ""}`;
};

const generateWorkoutPartSingle = (exercise: {
  sets: number;
  reps: number;
  weight: number;
  exerciseName: string;
}) => {
  return {
    type: "single",
    exercises: [exercise],
  };
};

const generateWorkoutPartSuperset = (
  exercises: {
    sets: number;
    reps: number;
    weight: number;
  }[]
) => {
  return {
    type: "superset",
    exercises: exercises,
  };
};

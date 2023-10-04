import React from "react";

import { Card, LegacyCard, Text } from "@shopify/polaris";
import WorkoutDataDisplay from "./WorkoutDataDisplay";

interface WorkoutPartData {
  name: string;
  type: string;
  style: string;
  oneRepMax: number;
}

function WorkoutPartDisplay({
  exercise,
  isMainLift = false,
}: {
  exercise: WorkoutPartData;
  isMainLift?: boolean;
}) {
  console.log("exercise", exercise.name);
  console.log(generateWorkoutPartdata(exercise));

  const workoutParts = generateWorkoutPartdata(exercise);

  return (
    <Card>
      <Text as="h2" variant="headingMd">
        {exercise.name}
        {isMainLift && (
          <Text as="p" variant="bodySm" color="subdued">
            {exercise.type}
          </Text>
        )}
      </Text>
      {workoutParts.map((workoutPart) => {
        const { reps, sets, weight } = workoutPart;
        return <WorkoutDataDisplay reps={reps} sets={sets} weight={weight} />;
      })}
    </Card>
  );
}

export default WorkoutPartDisplay;

function generateWorkoutPartdata({ type, style, oneRepMax }: WorkoutPartData): {
  reps: number[];
  sets: number;
  weight: number;
}[] {
  let reps = [0];
  let sets = 0;
  let weight = 0;

  if (type === "compound") {
    return generateCompoundWorkoutPartData({ oneRepMax, style });
  }

  if (type === "accessory") {
    return generateAccessoryWorkoutPartData({ oneRepMax });
  }

  return [{ reps, sets, weight }];
}

function generateAccessoryWorkoutPartData({
  oneRepMax,
}: {
  oneRepMax: number;
}): {
  reps: number[];
  sets: number;
  weight: number;
}[] {
  let reps = [8, 12];
  let sets = 3;
  let weight = oneRepMax * 0.6;

  return [{ reps, sets, weight }];
}

function generateCompoundWorkoutPartData({
  oneRepMax,
  style,
}: {
  style: string;
  oneRepMax: number;
}): {
  reps: number[];
  sets: number;
  weight: number;
}[] {
  if (style === "bodybuilding") {
    const reps = [8, 12];
    const sets = 3;
    const weight = oneRepMax * 0.7;

    const rep2 = [12, 14];
    const set2 = 1;
    const weight2 = oneRepMax * 0.5;

    return [
      { reps, sets, weight },
      { reps: rep2, sets: set2, weight: weight2 },
    ];
  }

  let reps = [3, 5];
  let sets = 3;
  let weight = oneRepMax * 0.85;

  return [{ reps, sets, weight }];
}

const MOCK: WorkoutPartData[] = [
  {
    name: "Bulgarian Lunge",
    type: "compound",
    style: "bodybuilding",
    oneRepMax: 40,
  },
  {
    name: "leg extension",
    type: "accessory",
    style: "bodybuilding",
    oneRepMax: 0,
  },
  {
    name: "leg press",
    type: "compound",
    style: "powerlifting",
    oneRepMax: 0,
  },
  {
    name: "abs",
    type: "accessory",
    style: "bodybuilding",
    oneRepMax: 0,
  },
];

console.log(MOCK);

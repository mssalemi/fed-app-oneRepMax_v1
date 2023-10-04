import React from "react";
import WorkoutPartDisplay from "./Workout/WorkoutPartDisplay";

import { HorizontalStack, Card, Text } from "@shopify/polaris";

interface Props {
  exercises: {
    name: string;
    type: string;
    style: string;
    oneRepMax?: number;
  }[];
}

function LegWorkout({ exercises }: Props) {
  return (
    <HorizontalStack gap={"2"}>
      <Card>
        <Text as="h2" variant="bodyMd">
          Leg Workout
        </Text>
      </Card>
      {exercises.map((exercise, index) => {
        return (
          <WorkoutPartDisplay exercise={exercise} isMainLift={index === 0} />
        );
      })}
    </HorizontalStack>
  );
}

export default LegWorkout;

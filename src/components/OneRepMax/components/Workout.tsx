import React from "react";
import WorkoutPartDisplay from "./Workout/WorkoutPartDisplay";

import { HorizontalStack, Card, Text } from "@shopify/polaris";

interface Props {
  exercises: {
    name: string;
    type: string;
    style: string;
    oneRepMax: number;
  }[];
  name: string;
}

function Workout({ exercises, name }: Props) {
  return (
    <HorizontalStack gap={"2"}>
      <Card>
        <Text as="h2" variant="bodyMd">
          {name}
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

export default Workout;

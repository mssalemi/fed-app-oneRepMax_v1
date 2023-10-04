import React from "react";

import { Card, LegacyCard, Text } from "@shopify/polaris";

function WorkoutPartDisplay({
  exercise,
  isMainLift = false,
}: {
  exercise: {
    name: string;
    type: string;
    style: string;
    oneRepMax?: number;
  };
  isMainLift?: boolean;
}) {
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
    </Card>
  );
}

export default WorkoutPartDisplay;

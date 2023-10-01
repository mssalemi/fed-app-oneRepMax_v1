import React from "react";

import { Text } from "@shopify/polaris";

interface Props {
  oneRepMax: number;
}

export function OneRepMaxDisplay({ oneRepMax }: Props) {
  return (
    <Text variant="heading4xl" as="h1">
      One Rep Max: {Math.round(oneRepMax)}
    </Text>
  );
}

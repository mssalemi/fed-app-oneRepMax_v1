import React, { useState, useCallback } from "react";

import {
  Form,
  FormLayout,
  Checkbox,
  TextField,
  Button,
  LegacyStack,
} from "@shopify/polaris";

import { calculateOneRepMax } from "../../../utils/oneRepMax";

interface Props {
  updateOneRepMax: (oneRepMax: number) => void;
}

export function OneRepMaxForm({ updateOneRepMax }: Props) {
  const [reps, setReps] = useState("1");
  const [weight, setWeight] = useState("225");

  const handleRepChange = useCallback(
    (newValue: string) => setReps(newValue),
    []
  );

  const handleWeightChange = useCallback(
    (newValue: string) => setWeight(newValue),
    []
  );

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const oneRepMax = calculateOneRepMax(parseInt(weight), parseInt(reps));
    updateOneRepMax(oneRepMax);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLayout>
        <LegacyStack alignment="center" distribution="center">
          <TextField
            value={reps}
            onChange={handleRepChange}
            label="Reps"
            type="number"
            autoComplete="number"
          />
          <TextField
            value={weight}
            onChange={handleWeightChange}
            label="Weight"
            type="number"
            autoComplete="number"
          />
        </LegacyStack>

        <Button submit>Calulate Max</Button>
      </FormLayout>
    </Form>
  );
}

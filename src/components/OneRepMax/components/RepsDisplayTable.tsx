import React, { useEffect } from "react";

import {
  LegacyStack,
  LegacyCard,
  IndexTable,
  Text,
  useIndexResourceState,
} from "@shopify/polaris";

import { calculateWeightForReps } from "../../../utils/calculateWeightForReps";
import { TutorialBlock } from "./TutorialBlock";

interface Props {
  oneRepMax: number;
  data: {
    id: string;
    weight: number;
    reps: number;
    name: string;
  }[];
}

export function RepsDisplayTable({ data, oneRepMax }: Props) {
  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(data);

  const rows = data.map(({ reps: num, name }, index) => {
    return {
      id: index.toString(),
      weight: calculateWeightForReps(oneRepMax, num),
      reps: num,
      name: name,
    };
  });

  const tutorialExercises = React.useMemo(() => {
    return selectedResources.map((id) => {
      const data = rows.find((row) => row.id === id);
      console.log(data);
      return {
        weight: data?.weight || 0,
        reps: data?.reps || 0,
        name: data?.name || "",
      };
    });
  }, [selectedResources, rows]);

  const rowMarkup = rows.map(({ id, weight, reps }, index) => (
    <IndexTable.Row
      id={`${id}`}
      key={id}
      selected={selectedResources.includes(id)}
      position={index}
    >
      <IndexTable.Cell>
        <Text variant="bodyMd" fontWeight="bold" as="span">
          {reps}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Text variant="bodyMd" fontWeight="bold" as="span">
          {Math.round(weight)}
        </Text>
      </IndexTable.Cell>
    </IndexTable.Row>
  ));

  const resourceName = {
    singular: "RepxWeight",
    plural: "RepxWeight",
  };

  return (
    <>
      <LegacyStack>
        <LegacyCard title="Projected RepMax's from OneRepMax">
          <IndexTable
            resourceName={resourceName}
            itemCount={data.length}
            selectedItemsCount={
              allResourcesSelected ? "All" : selectedResources.length
            }
            onSelectionChange={handleSelectionChange}
            headings={[{ title: "Reps" }, { title: "Weight" }]}
          >
            {rowMarkup}
          </IndexTable>
        </LegacyCard>
        <LegacyCard title="Example Workout">
          {tutorialExercises && tutorialExercises.length > 0 && (
            <>
              {tutorialExercises.map((exercise, index) => {
                return (
                  <TutorialBlock
                    key={index}
                    exerciseByRepMax={exercise}
                    numberOfExercise={3}
                  />
                );
              })}
            </>
          )}
        </LegacyCard>
      </LegacyStack>
    </>
  );
}

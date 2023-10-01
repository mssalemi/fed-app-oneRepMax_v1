import React from "react";

import {
  LegacyStack,
  LegacyCard,
  IndexTable,
  Text,
  useIndexResourceState,
} from "@shopify/polaris";

import { calculateWeightForReps } from "../../../utils/calculateWeightForReps";

interface Props {
  oneRepMax: number;
  data: {
    id: number;
    weight: number;
    reps: number;
  }[];
}

export function RepsDisplayTable({ data, oneRepMax }: Props) {
  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(data);
  const rows = data.map(({ weight, reps: num }, index) => {
    return {
      id: index.toString(),
      weight: calculateWeightForReps(oneRepMax, num),
      reps: num,
    };
  });

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
  );
}

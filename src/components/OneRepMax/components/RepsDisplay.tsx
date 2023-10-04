import { useState, useCallback } from "react";

import {
  SkeletonBodyText,
  LegacyCard,
  Tabs,
  TextContainer,
  SkeletonDisplayText,
  Text,
} from "@shopify/polaris";

import { DEFAULT_REPS } from "../../../utils/constants/contants";

import { calculateWeightForReps } from "../../../utils/calculateWeightForReps";

import { RepsDisplayTable } from "./RepsDisplayTable";
import LegWorkout from "./LegWorkout";

export function RepsDisplay({ oneRepMax }: { oneRepMax: number }) {
  const bench_data = DEFAULT_REPS.map((num) => {
    return {
      id: num.toString(),
      weight: calculateWeightForReps(oneRepMax, num),
      reps: num,
      name: "Bench Press",
    };
  });

  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "bench-press",
      content: "Bench Press",
      panelID: "bench-press-content-1",
    },
    {
      id: "pull-up",
      content: "Pull Ups",
      panelID: "pull-ups-content-1",
    },
    {
      id: "legs",
      content: "Legs",
      panelID: "legs-content-1",
    },
  ];

  console.log("selected", tabs[selected]);

  const legExercises: {
    name: string;
    type: string;
    style: string;
    oneRepMax?: number;
  }[] = [
    {
      name: "Bulgarian Lunge",
      type: "compound",
      style: "bobdybuilding",
      oneRepMax: 40,
    },
    {
      name: "leg extension",
      type: "accessory",
      style: "bodybuilding",
    },
    {
      name: "leg press",
      type: "compound",
      style: "powerlifting",
    },
    {
      name: "abs",
      type: "accessory",
      style: "bodybuilding",
    },
  ];

  return (
    <div>
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        <LegacyCard.Section title={tabs[selected].content}>
          <p>Tab {selected} selected</p>
        </LegacyCard.Section>
      </Tabs>
      {tabs[selected].id === "bench-press" && (
        <RepsDisplayTable data={bench_data} oneRepMax={oneRepMax} />
      )}
      {tabs[selected].id === "pull-up" && (
        <LegacyCard.Section>
          <TextContainer>
            <Text variant="bodyMd" fontWeight="bold" as="span">
              Coming soon...
            </Text>
            <SkeletonDisplayText size="small" />
            <SkeletonBodyText />
          </TextContainer>
        </LegacyCard.Section>
      )}
      {tabs[selected].id === "legs" && <LegWorkout exercises={legExercises} />}
    </div>
  );
}

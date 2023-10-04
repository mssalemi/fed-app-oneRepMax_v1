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
import Workout from "./Workout";

export function RepsDisplay({ oneRepMax }: { oneRepMax: number }) {
  const backWorkoutLoading = true;
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
    oneRepMax: number;
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
      oneRepMax: 0,
    },
    {
      name: "leg press",
      type: "accessory",
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

  const backExercises = [
    {
      name: "Pull-Ups",
      type: "accessory",
      style: "bodybuilding",
      oneRepMax: 30,
    },
    {
      name: "Lat Pulldowns",
      type: "accessory",
      style: "bodybuilding",
      oneRepMax: 0, // Adjust the weight based on your strength level.
    },
    {
      name: "Bent Over Rows",
      type: "accessory",
      style: "bodybuilding",
      oneRepMax: 0,
    },
    {
      name: "Face Pulls",
      type: "accessory",
      style: "bodybuilding",
      oneRepMax: 0,
    },
    {
      name: "T-Bar Rows",
      type: "accessory",
      style: "bodybuilding",
      oneRepMax: 0,
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
      {tabs[selected].id === "pull-up" &&
        (backWorkoutLoading ? (
          <>
            <Workout name="Back Workout" exercises={backExercises} />
          </>
        ) : (
          <LegacyCard.Section>
            <TextContainer>
              <Text variant="bodyMd" fontWeight="bold" as="span">
                Coming soon...
              </Text>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText />
            </TextContainer>
          </LegacyCard.Section>
        ))}
      {tabs[selected].id === "legs" && (
        <Workout name="Leg Workout" exercises={legExercises} />
      )}
    </div>
  );
}

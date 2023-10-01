import React from "react";

import { OneRepMaxForm } from "./OneRepMaxForm";

interface Props {
  updateOneRepMax: (oneRepMax: number) => void;
}

export function Settings({ updateOneRepMax }: Props) {
  return (
    <>
      <OneRepMaxForm updateOneRepMax={updateOneRepMax} />
    </>
  );
}

import React, { useState } from "react";
import { Settings } from "./components/Settings";
import { RepsDisplay } from "./components/RepsDisplay";
import { OneRepMaxDisplay } from "./components/OneRepMaxDisplay";

export function OneRepMax() {
  const [oneRepMax, setOneRepMax] = useState(225);

  return (
    <div className="main-display">
      <>
        <OneRepMaxDisplay oneRepMax={oneRepMax} />
      </>
      <>
        <Settings updateOneRepMax={setOneRepMax} />
      </>

      <>
        <RepsDisplay oneRepMax={oneRepMax} />
      </>
    </div>
  );
}

import React from "react";
import "./App.css";
import { OneRepMax } from "./components";

import { Page, LegacyCard } from "@shopify/polaris";

function App() {
  const name = "Mehdi";
  return (
    <Page title="All da info you need...">
      <div className="App">
        <p>Hi, {name} 👽👽👽</p>
        <OneRepMax />
      </div>
    </Page>
  );
}

export default App;

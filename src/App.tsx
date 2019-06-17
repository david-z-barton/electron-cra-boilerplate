import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import fs from "fs";
import util from "util";
import path from "path";

import TestGrid from './Grid'

const readFile = util.promisify(fs.readFile);

function App() {
  const [file, setFile] = React.useState("");
  const fullPath = path.join(process.cwd(), "src/index.tsx")

  // testing
  React.useEffect(() => {
    readFile(fullPath, "utf-8").then(res => {
      setFile(res);
    });
  });

  return (
    <div>
      <h1>Hello, David</h1>
      <div>This is your file [{process.cwd()}]:</div>
      <div><TestGrid /></div>
    </div>
  );
}

export default App;

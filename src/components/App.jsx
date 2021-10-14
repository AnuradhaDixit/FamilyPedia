import React from "react";
import List from "./List";
import emojipedia from "../emojipedia";

function createList(props) {
  return (
    <List
      key={props.id}
      emoji={props.emoji}
      name={props.name}
      meaning={props.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>familypedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createList)}</dl>
    </div>
  );
}

export default App;

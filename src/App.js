import React from "react";

function App() {
  return (
    <React.Fragment>
      <div onClick={() => console.log("clicked")}>hogehoge</div>
      <div onClick={() => console.log("clicked")}>hogehogehoge</div>
    </React.Fragment>
  );
}

export default App;

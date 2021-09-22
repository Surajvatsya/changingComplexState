import React, { useState } from "react";

function App() {
  const [fnm, setfnm] = useState({
    nm1: "",
    nm2: ""
  });
  function myfn(e) {
    const { name, value } = e.target;

    setfnm((preval) => {
      if (name === "fName") {
        return {
          nm1: value,
          nm2: preval.nm2
        };
      } else if (name === "lName") {
        return {
          nm1: preval.nm1,
          nm2: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fnm.nm1} {fnm.nm2}
      </h1>
      <form>
        <input
          value={fnm.nm1}
          onChange={myfn}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={fnm.nm2}
          onChange={myfn}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

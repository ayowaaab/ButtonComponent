import { useState } from "react";
import NavBar from "./componnents/NavBar/component/NavBar";
import Main from "./componnents/main/component/Main";

function App() {
  const [selectedNav, setSelectedNav] = useState("Home");
  const handelClick = (x: string) => {
    setSelectedNav(x);
  };

  return (
    <div className="d-flex">
      <NavBar onClickMe={handelClick} typeOne={selectedNav} />
      <Main navType={selectedNav} />
    </div>
  );
}

export default App;

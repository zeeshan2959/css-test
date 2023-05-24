import React from "react";
import MemberPage from "./pages/memberPage/memberPage";
import NavBar from "./components/common/navBar/navBar";
import Heading from "./components/pages/memberDetail/heading";

function App() {
  return (
    <div className="px-4 scroll-custom">
      <Heading />
      <NavBar />
      <MemberPage />
    </div>
  );
}

export default App;

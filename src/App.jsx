import { Routes, Route } from "react-router-dom";

import Navigation from "components/Navigation/Navigation";
import { HomePage } from "pages";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;

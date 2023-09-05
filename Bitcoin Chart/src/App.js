import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import CoinDetails from "./components/CoinDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CoinDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

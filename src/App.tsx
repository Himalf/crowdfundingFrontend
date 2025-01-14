import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
function App() {
  return (
    <main className="mx-[10%]">
      <Router>
        <MainLayout children />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </main>
  );
}

export default App;

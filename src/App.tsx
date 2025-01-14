import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/homepage";
function App() {
  return (
    <main className="mx-[5%]">
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </MainLayout>
      </Router>
    </main>
  );
}

export default App;

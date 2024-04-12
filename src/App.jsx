import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./component/About";
import EmployeesPage from "./pages/EmployeesPage";
import EmployeesDetailPage from "./pages/EmployeeDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route
          path="/employees/:employeeId"
          element={<EmployeesDetailPage />}
        />
        <Route path="*" element={"404 Page not found"} />
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./component/About";
import EmployeesPage from "./pages/EmployeesPage";
import Navbar from "./component/Navbar";
import EmployeesDetailPage from "./pages/EmployeeDetailPage";
import ManagementPage from "./pages/ManagementPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/employees" element={<EmployeesPage />} />

        {/* Nested routing without `<element>` */}
        <Route path="/employees/:employeeId">
          <Route index element={<EmployeesDetailPage />} />
          <Route path="management" element={<ManagementPage />} />
        </Route>

        <Route path="*" element={"404 Page not found"} />
      </Routes>
    </>
  );
}
export default App;
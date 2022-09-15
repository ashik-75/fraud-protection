import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import ProtectedLayout from "./Layout/ProtectedLayout";
import AddFraud from "./pages/AddFraud";
import AddGoodUser from "./pages/AddGoodUser";
import AuthFailed from "./pages/AuthFailed";
import Dashboard from "./pages/Dashboard/Dashboard";
import FraudList from "./pages/FraudList";
import InstallationPage from "./pages/InstallationPage";
import NotFound from "./pages/NotFound";

import Settings from "./pages/Settings";
import WhiteList from "./pages/WhiteList";

const App = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<ProtectedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/add-fraud-record" element={<AddFraud />} />
          <Route path="/add-whitelist-record" element={<AddGoodUser />} />
          <Route path="/fraud-list" element={<FraudList />} />
          <Route path="/white-list" element={<WhiteList />} />
          <Route path="/install" element={<InstallationPage />} />
        </Route>

        <Route path="/auth-failed" element={<AuthFailed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

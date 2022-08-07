import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageLayout from "./Layout/PageLayout";
import AddFraud from "./pages/AddFraud";
import AddGoodUser from "./pages/AddGoodUser";
import Dashboard from "./pages/Dashboard/Dashboard";
import FraudList from "./pages/FraudList";
import Settings from "./pages/Settings";
import WhiteList from "./pages/WhiteList";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/add-fraud" element={<AddFraud />} />
          <Route path="/add-good-user" element={<AddGoodUser />} />
          <Route path="/fraud-list" element={<FraudList />} />
          <Route path="/white-list" element={<WhiteList />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const PageLayout = () => {
  const isAlreadyExistsUser = sessionStorage.getItem("navidiumFraudProtection")
    ? JSON.parse(sessionStorage.getItem("navidiumFraudProtection"))
    : null;

  const shopUrl = isAlreadyExistsUser?.shop;
  return (
    <main className="main-wrappers">
      <div className="container">
        <div className="row g-0 fixd-ftr-height">
          <Sidebar />

          <div className="cols-content">
            <Outlet context={shopUrl} />
          </div>

          <Footer />
        </div>
      </div>
    </main>
  );
};

export default PageLayout;

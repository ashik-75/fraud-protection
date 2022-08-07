import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const PageLayout = () => {
  return (
    <main className="main-wrappers">
      <div className="container">
        <div className="row g-0">
          <Sidebar />

          <Outlet />

          <Footer />
        </div>
      </div>
    </main>
  );
};

export default PageLayout;

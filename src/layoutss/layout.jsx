import { Outlet } from "react-router-dom";
import { Navbar } from "../composants/navigate/navigate";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-y-none">
      {/* Sidebar */}
      <aside className="w-60 ml-2 h-full ">
        <Navbar />
      </aside>

      {/* Zone dynamique */}
      <main className="flex px-2">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

import { Outlet } from "react-router-dom";
import { Navbar } from "../composants/navigate/navigate";
import { useGlobalContext } from "../customsHooks/contextAPI/APIcontext";

const DashboardLayout = () => {
  const { etatLumiere } = useGlobalContext();

  return (
    <div
      className={` 
        lg:flex lg:h-screen lg:overflow-hidden 
        xl:flex lg:h-screen xl:overflow-hidden  ${
          etatLumiere === true
            ? "bg-[#E6E9EC] text-black "
            : "bg-blaCk text-white "
        }`}
    >
      {/* Sidebar */}
      <aside
        className=" w-full
        ml-2 
      lg:w-60 lg:h-screen 
      xl:w-65 xl:h-screen "
      >
        <Navbar />
      </aside>

      {/* Zone dynamique */}
      <main
        className="px-2 
      "
      >
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

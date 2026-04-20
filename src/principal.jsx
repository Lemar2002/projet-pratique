import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pagess/dashboard/dashboard";
import { Produits } from "./pagess/produits/produits";
import { Clients } from "./pagess/customers/customers";
import { Income } from "./pagess/incomes/incomes";
import DashboardLayout from "./layoutss/layout";
import { Shops } from "./pagess/shops/shops";
import { Promotes } from "./pagess/promote/promote";
import { useGlobalContext } from "./customsHooks/contextAPI/APIcontext";

export const Principal = () => {
  const { etatLumiere } = useGlobalContext();
  return (
    <div className={`${etatLumiere === true ? `bg-[#E6E9EC] ` : `bg-black`}`}>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/customers" element={<Clients />} />
          <Route path="/shop" element={<Shops />} />
          <Route path="/income" element={<Income />} />
          <Route path="/promote" element={<Promotes />} />
        </Route>
      </Routes>
    </div>
  );
};

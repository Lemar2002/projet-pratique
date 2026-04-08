import { Devices } from "../../composants/devices/devices";
import { Header } from "../../composants/header/header";
import { Overview } from "../../composants/overview/overview";
import { Popular } from "../../composants/popular/popular";
import { Products } from "../../composants/products/products";

export const Dashboard = () => {
  return (
    <div className="flex gap-2 h-screen  mt-1">
      <div className="flex flex-col gap-1 h-screen">
        <Header />
        <Overview />
        <Products />
      </div>
      <div className="flex flex-col gap-1">
        <Devices />
        <Popular />
      </div>
    </div>
  );
};

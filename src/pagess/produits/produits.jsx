import { Devices } from "../../composants/devices/devices";
import { Overview } from "../../composants/overview/overview";
import { OverviewHeader } from "../../composants/overview/overwiewHeader";
import { Popular } from "../../composants/popular/popular";
import { Products } from "../../composants/products/products";

export const Produits = () => {
  return (
    <div className="flex gap-2 h-screen  mt-1">
      <div className="flex flex-col gap-2 h-screen">
        <OverviewHeader />
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

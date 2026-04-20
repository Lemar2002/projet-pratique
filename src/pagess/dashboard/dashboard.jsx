import { Devices } from "../../composants/devices/devices";
import { Header } from "../../composants/header/header";
import { Overview } from "../../composants/overview/overview";
import { Popular } from "../../composants/popular/popular";
import { Products } from "../../composants/products/products";

export const Dashboard = () => {
  return (
    <div
      className="
      lg:gap-2 lg:flex  lg:h-screen lg:mt-1 lg:mx-auto lg:w-full
      xl:gap-2 xl:flex  xl:h-screen xl:mt-1 xl:mx-auto xl:w-full"
    >
      <div
        className="
      lg:flex lg:flex-col lg:gap-2 lg:h-screen
       xl:flex xl:flex-col xl:gap-2 xl:h-screen"
      >
        <Header />
        <Overview />
        <Products />
      </div>
      <div
        className="
      lg:flex lg:flex-col lg:gap-1
      xl:flex xl:flex-col xl:gap-1"
      >
        <Devices />
        <Popular />
      </div>
    </div>
  );
};

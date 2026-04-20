import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { TbGraph } from "react-icons/tb";
import { LuBadge } from "react-icons/lu";
import { LuTvMinimal } from "react-icons/lu";
import { PiAngularLogoFill } from "react-icons/pi";
import { Footer } from "../footer/footer";
import { LuChevronDown } from "react-icons/lu";
import { LuChevronUp } from "react-icons/lu";
import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";
import { useState } from "react";

export const Navbar = () => {
  const [toogle, settoogle] = useState("hidden");

  const toogleFunction = () => {
    if (toogle === "hidden") {
      settoogle("flex");
    } else {
      settoogle("hidden");
    }
  };
  const { etatLumiere } = useGlobalContext();
  return (
    <nav
      //bg-black text-white
      className={`w-full flex justify-between 
        md:flex md:justify-between md:h-15
        lg:mt-2 lg:h-screen lg:max-w-48  lg:pr-2 lg:py-6 lg:flex lg:flex-col lg:justify-between 
         xl:mt-2 xl:h-screen xl:max-w-60 xl:px-2 xl:py-6 xl:flex xl:flex-col xl:justify-between  
        ${
          etatLumiere === true
            ? `text-[#2F2F2F] bg-[#E6E9EC]`
            : `text-[#E6E9EC] bg-[#121212] border rounded-2xl`
        } `}
    >
      <div
        className=" flex justify-around
        md:flex md:items-center md:gap-2 
      lg:pl-2 lg:flex lg:flex-col lg:gap-4 
      xl:pl-4 xl:flex xl:flex-col xl:gap-4 "
      >
        <div className="text-6xl">
          <PiAngularLogoFill />
        </div>
        <div
          className="
        md:flex 
        lg:flex lg:flex-col lg:gap-2 
        xl:flex xl:flex-col xl:gap-2 "
        >
          <Link
            to="/"
            className={`py-1 pl-2 ${
              etatLumiere === true
                ? `hover:bg-[#36ECDE]/60 hover:border-[#36ECDE]/40 hover:rounded-sm hover:rounded-l-none hover:border-l-4 hover:border-l-[#111827]/60`
                : `hover:bg-gray-600  hover:border-gray-600 hover:rounded-sm hover:border-l-4 hover:rounded-l-none hover:border-l-[#36ECDE]/60`
            }`}
          >
            <div className="flex items-center gap-4">
              <RxDashboard className="text-xl" /> <span>Dasboard</span>
            </div>
          </Link>
          <Link to="/produits">
            <div
              className={`flex items-center gap-4 py-1 pl-2 ${
                etatLumiere === true
                  ? `hover:bg-[#36ECDE]/60 hover:border-[#36ECDE]/40 hover:rounded-sm hover:rounded-l-none hover:border-l-4 hover:border-l-[#111827]/60`
                  : `hover:bg-gray-600  hover:border-gray-600 hover:rounded-sm hover:border-l-4 hover:rounded-l-none hover:border-l-[#36ECDE]/60`
              }`}
            >
              <LuTvMinimal className="text-xl" /> <span>Products</span>
              <LuChevronUp className="ml-5" onClick={toogleFunction} />
            </div>
            <div
              className={`${toogle} flex-col text-gray-400 ml-9 gap-3 mt-2 text-md`}
            >
              <div
                className={`py-1 pl-2 ${
                  etatLumiere === true
                    ? `hover:bg-[#36ECDE]/60 hover:border-[#36ECDE]/40 hover:rounded-sm hover:rounded-l-none hover:border-l-4 hover:border-l-[#111827]/60`
                    : `hover:bg-gray-600  hover:border-gray-600 hover:rounded-sm hover:border-l-4 hover:rounded-l-none hover:border-l-[#36ECDE]/60`
                }`}
              >
                Overview
              </div>
              <div
                className={`flex items center gap-13 py-1 pl-2 ${
                  etatLumiere === true
                    ? `hover:bg-[#36ECDE]/60 hover:border-[#36ECDE]/40 hover:rounded-sm hover:rounded-l-none hover:border-l-4 hover:border-l-[#111827]/60`
                    : `hover:bg-gray-600  hover:border-gray-600 hover:rounded-sm hover:border-l-4 hover:rounded-l-none hover:border-l-[#36ECDE]/60`
                }`}
              >
                Drafts <span className=" px-2 rounded-md bg-orange-300">3</span>
              </div>
              <div
                className={`py-1 pl-2 ${
                  etatLumiere === true
                    ? `hover:bg-[#36ECDE]/60 hover:border-[#36ECDE]/40 hover:rounded-sm hover:rounded-l-none hover:border-l-4 hover:border-l-[#111827]/60`
                    : `hover:bg-gray-600  hover:border-gray-600 hover:rounded-sm hover:border-l-4 hover:rounded-l-none hover:border-l-[#36ECDE]/60`
                }`}
              >
                Released
              </div>
              <div
                className={`py-1 pl-2 ${
                  etatLumiere === true
                    ? `hover:bg-[#36ECDE]/60 hover:border-[#36ECDE]/40 hover:rounded-sm hover:rounded-l-none hover:border-l-4 hover:border-l-[#111827]/60`
                    : `hover:bg-gray-600  hover:border-gray-600 hover:rounded-sm hover:border-l-4 hover:rounded-l-none hover:border-l-[#36ECDE]/60`
                }`}
              >
                Comments
              </div>
              <div
                className={`flex items center gap-5 py-1 pl-2 ${
                  etatLumiere === true
                    ? `hover:bg-[#36ECDE]/60 hover:border-[#36ECDE]/40 hover:rounded-sm hover:rounded-l-none hover:border-l-4 hover:border-l-[#111827]/60`
                    : `hover:bg-gray-600  hover:border-gray-600 hover:rounded-sm hover:border-l-4 hover:rounded-l-none hover:border-l-[#36ECDE]/60`
                }`}
              >
                Scheduled{" "}
                <span className="border px-2 rounded-md bg-green-200">8</span>
              </div>
            </div>
          </Link>
          <Link
            to="/customers"
            className={`py-1 pl-2 ${
              etatLumiere === true
                ? `hover:bg-[#36ECDE]/60 hover:border-[#36ECDE]/40 hover:rounded-sm hover:rounded-l-none hover:border-l-4 hover:border-l-[#111827]/60`
                : `hover:bg-gray-600  hover:border-gray-600 hover:rounded-sm hover:border-l-4 hover:rounded-l-none hover:border-l-[#36ECDE]/60`
            }`}
          >
            <div className="flex items-center gap-4">
              <MdOutlinePersonOutline className="text-xl" />
              <span>Customers</span>
              <LuChevronDown className="ml-2" />
            </div>
          </Link>
          <Link
            to="/shop"
            className={`py-1 pl-2 ${
              etatLumiere === true
                ? `hover:bg-[#36ECDE]/60 hover:border-[#36ECDE]/40 hover:rounded-sm hover:rounded-l-none hover:border-l-4 hover:border-l-[#111827]/60`
                : `hover:bg-gray-600  hover:border-gray-600 hover:rounded-sm hover:border-l-4 hover:rounded-l-none hover:border-l-[#36ECDE]/60`
            }`}
          >
            <div className="flex items-center gap-4">
              <FiShoppingCart className="text-xl" /> <span>Shop</span>
            </div>
          </Link>
          <Link
            to="/income"
            className={`py-1 pl-2 ${
              etatLumiere === true
                ? `hover:bg-[#36ECDE]/60 hover:border-[#36ECDE]/40 hover:rounded-sm hover:rounded-l-none hover:border-l-4 hover:border-l-[#111827]/60`
                : `hover:bg-gray-600  hover:border-gray-600 hover:rounded-sm hover:border-l-4 hover:rounded-l-none hover:border-l-[#36ECDE]/60`
            }`}
          >
            <div className="flex items-center gap-4">
              <TbGraph className="text-xl" /> <span>Income</span>
              <LuChevronDown className="ml-9" />
            </div>
          </Link>
          <Link
            to="/promote"
            className={`py-1 pl-2 ${
              etatLumiere === true
                ? `hover:bg-[#36ECDE]/60 hover:border-[#36ECDE]/40 hover:rounded-sm hover:rounded-l-none hover:border-l-4 hover:border-l-[#111827]/60`
                : `hover:bg-gray-600  hover:border-gray-600 hover:rounded-sm hover:border-l-4 hover:rounded-l-none hover:border-l-[#36ECDE]/60`
            }`}
          >
            <div className="flex items-center gap-4">
              <LuBadge className="text-xl" /> <span>Promote</span>
            </div>
          </Link>
        </div>
      </div>
      <Footer className="" />
    </nav>
  );
};

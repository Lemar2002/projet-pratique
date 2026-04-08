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

export const Navbar = () => {
  return (
    <nav className="mt-2  h-screen w-60 border rounded-2xl px-2 py-6 bg-black text-white flex flex-col justify-between ">
      <div className="flex flex-col gap-4 pl-4">
        <div className="text-6xl">
          <PiAngularLogoFill />
        </div>
        <div className="flex flex-col gap-4 ">
          <Link to="/" className="">
            <div className="flex items-center gap-4">
              <RxDashboard className="text-xl" /> <span>Dasboard</span>
            </div>
          </Link>
          <Link to="/produits" className="">
            <div className="flex items-center gap-4">
              <LuTvMinimal className="text-xl" /> <span>Products</span>
              <LuChevronUp className="ml-5" />
            </div>
            <div className="flex flex-col text-gray-400 ml-9 gap-3 mt-2 text-md">
              <div>Overview</div>
              <div className="flex items center gap-13 ">
                Drafts <span className=" px-2 rounded-md bg-orange-300">3</span>
              </div>
              <div>Released</div>
              <div>Comments</div>
              <div className="flex items center gap-5 ">
                Scheduled{" "}
                <span className="border px-2 rounded-md bg-green-200">8</span>
              </div>
            </div>
          </Link>
          <Link to="/customers" className="">
            <div className="flex items-center gap-4">
              <MdOutlinePersonOutline className="text-xl" />
              <span>Customers</span>
              <LuChevronDown className="ml-2" />
            </div>
          </Link>
          <Link to="/shop" className="">
            <div className="flex items-center gap-4">
              <FiShoppingCart className="text-xl" /> <span>Shop</span>
            </div>
          </Link>
          <Link to="/income" className="">
            <div className="flex items-center gap-4">
              <TbGraph className="text-xl" /> <span>Income</span>
              <LuChevronDown className="ml-9" />
            </div>
          </Link>
          <Link to="/promote" className="">
            <div className="flex items-center gap-4">
              <LuBadge className="text-xl" /> <span>Promote</span>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </nav>
  );
};

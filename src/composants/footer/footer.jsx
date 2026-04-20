import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { LuMessageCircle } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";

export const Footer = () => {
  const { changerEtatLumiere, etatLumiere } = useGlobalContext();
  return (
    <div
      className="flex flex-col gap-2 
    lg:ml-3
    xl:ml-5 "
    >
      <Link
        to="/customers"
        className={`text-sm  flex w-6 rounded-full py-1 items-center justify-center ${
          etatLumiere === true
            ? `bg-[#36ECDE]/40 text-black`
            : `bg-gray-100/20 text-white hover:bg-[#36ECDE]/40`
        } `}
      >
        <LuMessageCircle />
      </Link>
      <span
        className={` text-sm w-6 py-2  flex flex-col items-center rounded-full gap-2  ${
          etatLumiere === true
            ? `bg-[#36ECDE]/40 text-black`
            : `bg-gray-100/20 text-[]`
        }`}
      >
        <button
          onClick={() => changerEtatLumiere(true)}
          className={` text-sm rounded-[4px] border ${
            etatLumiere === true
              ? ` hover:bg-gray-300 `
              : `hover:bg-[#36ECDE]/40`
          }`}
        >
          <MdOutlineLightMode />
        </button>
        <button
          onClick={() => changerEtatLumiere(false)}
          className={`text-sm border rounded-full  ${
            etatLumiere === true
              ? ` hover:bg-gray-300 `
              : `hover:bg-[#36ECDE]/40`
          }  `}
        >
          <MdOutlineDarkMode className="p-1" />
        </button>
      </span>
    </div>
  );
};

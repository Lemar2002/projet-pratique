import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { LuMessageCircle } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";

export const Footer = () => {
  const { changerEtatLumiere } = useGlobalContext();
  return (
    <div className="flex flex-col gap-2  ">
      <Link
        to="/customers"
        className="text-sm bg-gray-100/20 flex w-6 rounded-full py-1 items-center justify-center"
      >
        <LuMessageCircle />
      </Link>
      <span className=" bg-gray-100/20 text-sm w-6 py-2  flex flex-col items-center rounded-full gap-2">
        <button
          onClick={() => changerEtatLumiere(false)}
          className="text-sm bg-gray-400/60 rounded-full  "
        >
          <MdOutlineDarkMode className="p-1" />
        </button>
        <button onClick={() => changerEtatLumiere(true)} className=" text-sm">
          <MdOutlineLightMode />
        </button>
      </span>
    </div>
  );
};

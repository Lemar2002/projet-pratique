import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import { VscSearch } from "react-icons/vsc";
import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";

export const Header = () => {
  const { proprietaire, etatLumiere } = useGlobalContext();

  console.log(proprietaire);
  return (
    <div
      className={`w-full mx-auto
        lg:flex lg:max-w-135 lg:h-13 lg:mt-2 lg:rounded-full lg:justify-between lg:px-2 lg:items-center
        xl:flex xl:max-w-170 xl:h-13 xl:mt-2 xl:rounded-full xl:justify-between xl:px-2 xl:items-center ${
          etatLumiere === true
            ? `bg-white text-black`
            : `bg-[#00203F] text-[#E6E9EC]`
        }  `}
    >
      <form
        className={`flex items-center rounded-full
          lg:gap-2 lg:py-1  lg:pl-1 lg:pr-6 lg:text-xs
          xl:gap-2 xl:py-2 xl:pl-1 xl:pr-12  xl:text-xs ${
            etatLumiere === true ? `bg-[#36ecde]/60` : `bg-gray-200/20`
          }`}
      >
        <button type="submit">
          <VscSearch />
        </button>
        <input
          type="text"
          placeholder="Search anything... "
          className={`${
            etatLumiere === true ? `text-[#2f2f2f2]` : `text-[#e9e9ec]`
          }`}
        />
      </form>
      <div
        className="flex items-center 
        lg:gap-2
        xl:gap-2"
      >
        <div
          className={` text-sm flex  rounded-full items-center justify-center 
            lg:w-8 lg:py-2
            xl:w-8 xl:py-2 
             ${etatLumiere === true ? `bg-[#36ecde]/60` : `bg-gray-100/20 `}`}
        >
          <IoMdNotificationsOutline />
        </div>
        <div
          className={`text-sm  flex rounded-full  items-center justify-center 
              lg:w-8 lg:py-2
             xl:w-8 xl:py-2 ${
               etatLumiere === true ? `bg-[#36ecde]/60` : `bg-gray-100/20 `
             } `}
        >
          <LuMessageCircle />
        </div>
        <img
          src={proprietaire[0].photo}
          alt=""
          className="bg-white border rounded-full 
          lg:w-8 lg:h-8
          xl:w-8 xl:h-8 "
        />
        <button
          className={`text-xs  rounded-full font-bold
            lg:px-5 lg:py-2
            xl:px-6 xl:py-2 
             ${etatLumiere === true ? `bg-[#36ecde]/60` : `bg-gray-100/20 `} `}
        >
          Create
        </button>
      </div>
    </div>
  );
};

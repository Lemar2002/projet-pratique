import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import { VscSearch } from "react-icons/vsc";
import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";

export const MessagerieHeader = () => {
  const { proprietaire, etatLumiere } = useGlobalContext();
  return (
    <div
      className={`flex  h-18 mt-2 rounded-xl justify-between px-2 items-center
        lg:w-203
        xl:w-250 ${
          etatLumiere === true
            ? `bg-white text-black`
            : `bg-[#00203F] text-[#E6E9EC]`
        }`}
    >
      <form
        action=""
        className="flex justify-between px-2  items-center  gap-2 py-3 rounded-xl text-xs border"
      >
        <VscSearch className="text-sm" />
        <input
          type="text"
          placeholder="Search person or a type of command"
          className={`px-4 ${
            etatLumiere === true ? `text-black` : `text-white`
          }`}
        />
        <button type="submit" className="border px-2  text-xs ml-6  rounded-sm">
          XF
        </button>
      </form>
      <div className="flex items-center gap-8">
        <button
          className={`text-sm text-black px-6 py-2 rounded-sm font-bold ${
            etatLumiere === true ? `bg-[#36ecde]/60` : `bg-gray-100/20 `
          } `}
        >
          + Create
        </button>
        <div
          className={`text-xl flex px-1 rounded-full py-1 items-center justify-center ${
            etatLumiere === true ? `bg-[#36ecde]/60` : `bg-gray-100/20 `
          }`}
        >
          <LuMessageCircle />
        </div>
        <div
          className={`text-xl flex px-1 rounded-full py-1 items-center justify-center ${
            etatLumiere === true ? `bg-[#36ecde]/60` : `bg-gray-100/20 `
          }`}
        >
          <IoMdNotificationsOutline />
        </div>

        <img
          src={proprietaire[0].photo}
          alt=""
          className="w-10 h-10  bg-white border rounded-full"
        />
      </div>
    </div>
  );
};

import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import { VscSearch } from "react-icons/vsc";
import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";

export const Header = () => {
  const { proprietaire } = useGlobalContext();

  console.log(proprietaire);
  return (
    <div className="bg-black flex text-white w-160 h-13 mt-2 rounded-full justify-between px-2 items-center ">
      <form className="flex items-center bg-gray-200/20 gap-2 py-2 pl-1 pr-12 rounded-full text-xs">
        <button type="submit">
          <VscSearch />
        </button>
        <input type="text" placeholder="Search anything..." />
      </form>
      <div className="flex items-center gap-2">
        <div className="text-sm bg-gray-100/20 flex w-8 rounded-full py-2 items-center justify-center">
          <IoMdNotificationsOutline />
        </div>
        <div className="text-sm bg-gray-100/20 flex w-8 rounded-full py-2 items-center justify-center">
          <LuMessageCircle />
        </div>
        <img
          src={proprietaire[0].photo}
          alt=""
          className="w-8 h-8 bg-white border rounded-full"
        />
        <button className="text-xs text-black bg-white px-6 py-2 rounded-full font-bold">
          Create
        </button>
      </div>
    </div>
  );
};

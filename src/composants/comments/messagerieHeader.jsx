import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import { VscSearch } from "react-icons/vsc";
import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";

export const MessagerieHeader = () => {
  const { proprietaire } = useGlobalContext();
  return (
    <div className="bg-black flex text-white w-236 h-18 mt-2 rounded-xl justify-between px-2 items-center ">
      <form
        action=""
        className="flex justify-between px-2  items-center bg-gray-200/20 gap-2 py-3 rounded-xl text-xs"
      >
        <VscSearch className="text-sm" />
        <input
          className="text-white/60 px-4"
          type="text"
          placeholder="Search person or a type of command"
        />
        <button
          type="submit"
          className="border px-2 bg-black text-xs ml-6  rounded-sm"
        >
          XF
        </button>
      </form>
      <div className="flex items-center gap-8">
        <button className="text-sm bg-blue-600 text-white text-black px-6 py-2 rounded-sm font-bold">
          + Create
        </button>
        <div className="text-sm bg-gray-100/20 flex w-10 rounded-full py-3 items-center justify-center">
          <LuMessageCircle />
        </div>
        <div className="text-sm bg-gray-100/20 flex w-10 rounded-full py-3 items-center justify-center">
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

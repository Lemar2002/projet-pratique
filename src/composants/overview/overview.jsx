import { LuChevronDown } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";
import { Clients } from "../../pagess/customers/customers";
import { Link } from "react-router-dom";

export const Overview = () => {
  const { proprietaire, clients } = useGlobalContext();
  return (
    <div className="bg-black text-white w-160 flex flex-col  pt-2 rounded-2xl">
      <div className="flex justify-between px-4">
        <div className="font-bold text-xl">Overview</div>
        <div className="text-sm flex items-center gap-4 border px-3 py-2 rounded-full ">
          <button>Last 7 days</button> <LuChevronDown className="ml-2" />
        </div>
      </div>
      <div className="flex justify-between px-1 gap-2  py-1 mb-4 mx-2 rounded-xl ">
        <div className=" bg-gray-200/10 flex flex-col px-10 py-4 rounded-xl gap-2 my-1">
          <div className=" flex items-center gap-2">
            <MdOutlinePersonOutline className="text-xl" />
            <p>{` welcome ${proprietaire[0].nom} ${proprietaire[0].prenom} !`}</p>
          </div>
          <div className="flex gap-6 items-center">
            <p className="text-5xl">1,293</p>
            <div className="flex-col flex items-center text-sm gap-2">
              <div className="border px-6 rounded-sm">36.2%</div>
              <p className="text-[7px]">commades vs last 7 days</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col px-10 py-4 rounded-xl gap-2">
          <div className=" flex items-center gap-2">
            <FiShoppingCart className="text-xl" />
            <p>Balance</p>
          </div>
          <div className="flex gap-6 items-center">
            <p className="text-5xl">256k</p>
            <div className="flex-col flex items-center text-sm">
              <div className="border px-6 rounded-sm">36.2</div>
              <p className="text-xs">vs last 7 days</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col   ">
        <div className="ml-6">
          <p>857 new customers today!</p>
          <p className="text-sm text-white/40">
            Send a welcom message to the all new customers
          </p>
        </div>
        <div className="flex justify-around px-6 py-8">
          <div className="flex flex-col items-center">
            <img
              src={clients[0].photo}
              alt=""
              className="w-14 h-14 border rounded-full bg-white mb-2 "
            />
            <p>{clients[0].nom}</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={clients[1].photo}
              alt=""
              className="w-14 h-14 border rounded-full bg-white mb-2 "
            />
            <p>{clients[1].nom}</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={clients[2].photo}
              alt=""
              className="w-14 h-14 border rounded-full bg-white mb-2 "
            />
            <p>{clients[2].nom}</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={clients[3].photo}
              alt=""
              className="w-14 h-14 border rounded-full bg-white mb-2"
            />
            <p>{clients[3].nom}</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={clients[4].photo}
              alt=""
              className="w-14 h-14 border rounded-full bg-white  mb-2"
            />
            <p>{clients[4].nom}</p>
          </div>

          <Link to="/customers" className="flex flex-col items-center  ">
            <div className="w-14 py-7 border rounded-full mb-2 "></div>

            <button>View all</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

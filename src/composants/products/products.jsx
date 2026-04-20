import { LuChevronDown } from "react-icons/lu";
import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";
export const Products = () => {
  const { etatLumiere } = useGlobalContext();
  return (
    <div
      className={`flex flex-col rounded-2xl  pt-2 pb-4 w-full mx-auto
        lg:max-w-135 lg:gap-10
        xl:max-w-170 xl:gap-10
        ${
          etatLumiere === true
            ? `bg-white text-black`
            : `bg-[#00203F] text-[#E6E9EC]`
        }`}
    >
      <div
        className=" flex flex-col  pt-2
      lg:w-130
      xl:w-170"
      >
        <div
          className="flex justify-between 
        lg:px-4
        xl:px-4"
        >
          <div
            className={`font-bold text-xl pr-6 pl-2 rounded-xl pt-1 ${
              etatLumiere === true ? `bg-[#E6E9EC]` : `bg-gray-200/20`
            }`}
          >
            Products view
          </div>
          <div
            className={`text-sm flex items-center gap-4 border px-3 py-2 rounded-full ${
              etatLumiere === true ? `bg-[#36ecde]/60` : `bg-gray-200/20`
            } `}
          >
            <p>Last 7 days</p> <LuChevronDown className="ml-2" />
          </div>
        </div>
      </div>

      <div className="flex justify-between px-6 items-baseline ">
        <div className="flex flex-col items-center gap-2 ">
          <p className="text-5xl ">1,293m</p>
          <div className={`flex items-center text-xs gap-1 opacity-60`}>
            <div className="border px-4 rounded-sm">36.2%</div>
            <p className="text-xs">vs last month</p>
          </div>
        </div>

        <div className="flex gap-4 items-baseline ">
          <div className=" flex flex-col items-center gap-1 ">
            <div className="transition transform hover:scale-120 w-8 h-18  rounded-sm bg-gray-200/60 hover:bg-green-400"></div>
            <p>1</p>
          </div>
          <div className=" flex flex-col items-center gap-1 ">
            <div className=" transition transform hover:scale-120 w-8 h-20  rounded-sm bg-gray-200/60 hover:bg-green-400 "></div>
            <p>2</p>
          </div>
          <div className=" flex flex-col items-center gap-1 ">
            <div className="transition transform hover:scale-120 w-8 h-10  rounded-sm bg-gray-200/60 hover:bg-green-400"></div>
            <p>3</p>
          </div>
          <div className=" flex flex-col items-center gap-1 ">
            <div className=" transition transform hover:scale-120 w-8 h-25  rounded-sm bg-gray-200/60 hover:bg-green-400"></div>
            <p>4</p>
          </div>
          <div className=" flex flex-col items-center gap-1 ">
            <div className="transition transform hover:scale-120 w-8 h-15 rounded-sm bg-gray-200/60 hover:bg-green-400"></div>
            <p>5</p>
          </div>
          <div className=" flex flex-col items-center gap-1 ">
            <div className=" transition transform hover:scale-120 w-8 h-14  rounded-sm bg-gray-200/60 hover:bg-green-400"></div>
            <p>6</p>
          </div>
          <div className=" flex flex-col items-center gap-1 ">
            <div className="transition transform hover:scale-120 w-8 h-10  rounded-sm bg-gray-200/60 hover:bg-green-400 "></div>
            <p>7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

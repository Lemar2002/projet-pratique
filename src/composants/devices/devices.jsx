import { PiDeviceMobileCameraBold } from "react-icons/pi";
import { FaTabletAlt } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";
export const Devices = () => {
  const { etatLumiere } = useGlobalContext();
  return (
    <div
      className={`mt-2  pb-6 h-85 flex flex-col justify-between  gap-4 rounded-2xl w-full mx-auto
        lg:max-w-67
        xl:max-w-76 xl:px-4 
        ${
          etatLumiere === true
            ? `bg-white text-black`
            : `bg-[#00203F] text-[#E6E9EC]`
        } `}
    >
      <p
        className={`text-xl mt-2 py-1 px-2 rounded-xl 
          lg:w-64 lg:mx-2 
          xl:w-full xl:mx-1
          ${etatLumiere === true ? `bg-[#E6E9EC]` : `bg-[#ffffff]/10`}`}
      >
        Devices
      </p>
      <div className="h-40">
        <svg>
          <circle
            cx="140"
            cy="80"
            r="60"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="20"
          />

          <circle
            cx="140"
            cy="80"
            r="60"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="20"
            strokeDasharray="80 380"
            strokeDashoffset="-106"
            transform="rotate(-90 140 80)"
            className="  hover:scale-120"
          />
          <circle
            cx="140"
            cy="80"
            r="60"
            fill="none"
            stroke="#22c55e"
            strokeWidth="20"
            strokeDasharray="180 380"
            strokeDashoffset="-192"
            transform="rotate(-90 140 80)"
            className="cursor-pointer"
          />
          <circle
            cx="140"
            cy="80"
            r="60"
            fill="none"
            stroke="#f97316"
            strokeWidth="20"
            strokeDasharray="110 380"
            strokeDashoffset="10"
            transform="rotate(-90 140 80)"
            className="cursor-pointer"
          />
          <text
            x="140"
            y="76"
            fill={`${etatLumiere === true ? `#000000` : `#ffffff`}`}
            textAnchor="middle"
            dominantBaseline="middle"
            className=""
          >
            15.20%
          </text>
          <text
            x="140"
            y="100"
            fill={`${etatLumiere === true ? `#000000` : `#ffffff`}`}
            textAnchor="middle"
            dominantBaseline="middle"
            className=""
            fontSize="10px"
          >
            Mobile
          </text>
        </svg>
      </div>
      <div
        className=" flex justify-around 
        lg:gap-1 lg:text-xs lg:mx-1
      xl:gap-2 xl:text-sm"
      >
        <div className="flex items-center gap-1">
          <PiDeviceMobileCameraBold
            className={`text-4xl  px-1 rounded-sm hover:transform hover:scale-[1.1]  ${
              etatLumiere === true
                ? `bg-[#36ECDE]/60 `
                : `bg-[#36ECDE]/50  text-[#36ECDE] `
            }`}
          />
          <div className="flex flex-col items-left  ">
            <p className="">Mobile</p>
            <p className="">15.20%</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <FaTabletAlt
            className={`text-4xl  px-2 rounded-sm hover:transform hover:scale-[1.1]  ${
              etatLumiere === true
                ? `bg-[#36ECDE]/60 `
                : `bg-[#36ECDE]/50  text-[#36ECDE] `
            }`}
          />
          <div className="flex flex-col items-left ">
            <p className="">Tablet</p>
            <p className="">15.20%</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <FaDesktop
            className={`text-4xl  px-1 rounded-sm hover:transform hover:scale-[1.1]  ${
              etatLumiere === true
                ? `bg-[#36ECDE]/60 `
                : `bg-[#36ECDE]/50  text-[#36ECDE] `
            }`}
          />
          <div className="flex flex-col items-left ">
            <p className="">Desktop</p>
            <p className="">15.20%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

import { PiDeviceMobileCameraBold } from "react-icons/pi";
import { FaTabletAlt } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
export const Devices = () => {
  return (
    <div className="mt-2 px-4 pb-6 h-85 flex flex-col justify-between  gap-4 rounded-2xl  w-76 bg-black text-white ">
      <p className="text-xl mt-2">Devices</p>
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
            fill="#ffff"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-white"
          >
            15.20%
          </text>
          <text
            x="140"
            y="100"
            fill="#ffff"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-white"
            fontSize="10px"
          >
            Mobile
          </text>
        </svg>
      </div>
      <div className="text-sm flex justify-around gap-2">
        <div>
          <div className="flex items-center text-white/50 gap-2">
            <PiDeviceMobileCameraBold className="text-xl" />
            <p>Mobile</p>
          </div>
          <p className="ml-8">15.20%</p>
        </div>
        <div>
          <div className="flex items-center text-white/50 gap-2">
            <FaTabletAlt className="text-xl" />
            <p>Tablet</p>
          </div>
          <p className="ml-8">15.20%</p>
        </div>
        <div>
          <div className="flex items-center text-white/50 gap-2">
            <FaDesktop className="text-xl" />
            <p>Desktop</p>
          </div>
          <p className="ml-8">15.20%</p>
        </div>
      </div>
    </div>
  );
};

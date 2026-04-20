import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";
import { Myprofil } from "./myprofil";

export const Settings = () => {
  const { etatLumiere } = useGlobalContext();
  return (
    <div
      className={` w-238  flex flex-col h-screen mt-2 rounded-xl px-2
        lg:w-200
        xl:w-248 ${
          etatLumiere === true
            ? `bg-white text-black`
            : `bg-[#00203F] text-[#E6E9EC]`
        }`}
    >
      <div className={`border-b pb-2`}>
        <p className={`text-4xl text-bold`}>Settings</p>
        <p className={`text-xs opacity-60`}>
          Manage your account seetings and preferences.
        </p>
      </div>
      <Myprofil className={`w-400`} />
    </div>
  );
};

import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";

export const OverviewHeader = () => {
  const { etatLumiere } = useGlobalContext();
  return (
    <div
      className={` text-2xl h-13 mt-2 rounded-full  px-2
        lg:w-135 lg:pt-1
        

        
        xl:w-170 xl:pt-1 ${
          etatLumiere === true
            ? `bg-white text-black`
            : `bg-[#00203F] text-[#E6E9EC]`
        }`}
    >
      <p className="pl-2 pt-1">Products Overview</p>
    </div>
  );
};

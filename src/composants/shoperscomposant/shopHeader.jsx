import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";

export const ShopHead = () => {
  const { etatLumiere } = useGlobalContext();
  return (
    <div
      className={`  h-10 mt-2 rounded-xl flex items-center px-2 
        lg:w-203
        xl:w-260
        ${
          etatLumiere === true
            ? `bg-white text-black`
            : `bg-[#00203F] text-[#E6E9EC]`
        }`}
    >
      <p className="">Our article</p>
    </div>
  );
};

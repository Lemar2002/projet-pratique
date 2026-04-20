import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";

export const Popular = () => {
  const { etatLumiere } = useGlobalContext();
  return (
    <div
      className={`mt-2  pb-6 h-84 flex flex-col justify-between  gap-2 rounded-2xl w-ful
           lg:max-w-67 lg:px-1
           xl:max-w-76 xl:px-4 
        ${
          etatLumiere === true
            ? `bg-white text-black`
            : `bg-[#00203F] text-[#E6E9EC]`
        } `}
    >
      <p
        className={`text-xl mt-2 py-1 px-2 rounded-xl ${
          etatLumiere === true ? `bg-[#E6E9EC]` : `bg-[#ffffff]/10`
        }`}
      >
        Popular products
      </p>
      <ul className="flex flex-col gap-2 mt-2  h-full overflow-y-auto">
        <li>
          <div className="flex text-sm justify-between">
            <div className="flex gap-3">
              <img src="/images/im1.jpg" alt="" className="border w-12" />
              <div>
                <p>Crypter-NFT</p>
                <p>UI Kit</p>
              </div>
            </div>
            <div>
              <p>$3,250.00</p>
              <p
                className={`text-xs border text-center rounded-sm ${
                  etatLumiere === true ? `bg-[#36ECDE]/60` : `bg-[#36ECDE]/60`
                }`}
              >
                Active
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex text-sm justify-between">
            <div className="flex gap-3">
              <img src="/images/im1.jpg" alt="" className="border w-12 " />
              <div>
                <p>Crypter-NFT</p>
                <p>UI Kit</p>
              </div>
            </div>
            <div>
              <p>$3,250.00</p>
              <p
                className={`text-xs border text-center rounded-sm ${
                  etatLumiere === true ? `bg-[#36ECDE]/60` : `bg-[#36ECDE]/60`
                }`}
              >
                Active
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex text-sm justify-between">
            <div className="flex gap-3">
              <img src="/images/im1.jpg" alt="" className="border w-12" />
              <div>
                <p>Crypter-NFT</p>
                <p>UI Kit</p>
              </div>
            </div>
            <div>
              <p>$3,250.00</p>
              <p
                className={`text-xs border text-center rounded-sm ${
                  etatLumiere === true ? `bg-[#36ECDE]/60` : `bg-[#36ECDE]/60`
                }`}
              >
                Active
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex text-sm justify-between">
            <div className="flex gap-3">
              <img src="/images/im1.jpg" alt="" className="border w-12" />
              <div>
                <p>Crypter-NFT</p>
                <p>UI Kit</p>
              </div>
            </div>
            <div>
              <p>$3,250.00</p>
              <p
                className={`text-xs border text-center rounded-sm ${
                  etatLumiere === true ? `bg-[#36ECDE]/60` : `bg-[#36ECDE]/60`
                }`}
              >
                Active
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex text-sm justify-between">
            <div className="flex gap-3">
              <img src="/images/im1.jpg" alt="" className="border w-12" />
              <div>
                <p>Crypter-NFT</p>
                <p>UI Kit</p>
              </div>
            </div>
            <div>
              <p>$3,250.00</p>
              <p
                className={`text-xs border text-center rounded-sm ${
                  etatLumiere === true ? `bg-[#36ECDE]/60` : `bg-[#36ECDE]/60`
                }`}
              >
                Active
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex text-sm justify-between">
            <div className="flex gap-3">
              <img src="/images/im1.jpg" alt="" className="border w-12" />
              <div>
                <p>Crypter-NFT</p>
                <p>UI Kit</p>
              </div>
            </div>
            <div>
              <p>$3,250.00</p>
              <p
                className={`text-xs border text-center rounded-sm ${
                  etatLumiere === true ? `bg-[#36ECDE]/60` : `bg-[#36ECDE]/60`
                }`}
              >
                Active
              </p>
            </div>
          </div>
        </li>
      </ul>
      <button
        className={`border text-sm py-2 rounded-full ${
          etatLumiere === true ? `bg-[#36ECDE]/60` : `bg-[#36ECDE]/60`
        } `}
      >
        All products
      </button>
    </div>
  );
};

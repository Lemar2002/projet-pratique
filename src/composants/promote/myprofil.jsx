import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";

export const Myprofil = () => {
  const { etatLumiere } = useGlobalContext();
  return (
    <div>
      <div className={`border-b pb-4 `}>
        <p className={`text-xl`}>Acount settings</p>
        <p className="opacity-60 text-xs">
          Real-time informations and activities of your property.
        </p>
      </div>
      <div>
        <div className={`border-b pb-4 pt-4`}>
          <div className={`flex justify-between items-center px-2 mb-6`}>
            <div className={`flex items-center gap-4`}>
              <img src="" alt="" className={`border rounded-full w-16 h-16`} />
              <p className={`text-bold`}>Profile picture</p>
            </div>
            <div className={`flex gap-2 items-center`}>
              <button
                className={` border px-2 py-1 rounded-sm ${
                  etatLumiere === true ? `bg-[#36ecde]/60` : `bg-gray-100/20 `
                }`}
              >
                Upload new picture
              </button>
              <button
                className={` border px-2 py-1 rounded-sm ${
                  etatLumiere === true ? `bg-[#36ecde]/60` : `bg-gray-100/20 `
                }`}
              >
                Delete
              </button>
            </div>
          </div>

          <div className={`borde`}>
            <p className={`text-xl text-bold mb-2`}>Full name</p>
            <div className={`flex gap-5 `}>
              <div className={` `}>
                <p className="mb-1 text-xs">First Name</p>
                <p
                  className={`border  rounded-[8px] py-1 px-4
                  lg:w-60
                  xl:w-80 `}
                >
                  john
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs">Last Name</p>
                <p
                  className={`border rounded-[8px] py-1 px-4
                  lg: lg:w-60
                  xl:w-80 `}
                >
                  qougd{" "}
                </p>
              </div>
              <button
                className={` border px-1 h-8 mt-5 ml-20 rounded-sm ${
                  etatLumiere === true ? `bg-[#36ecde]/60` : `bg-gray-100/20 `
                }`}
              >
                Change name
              </button>
            </div>
          </div>
        </div>

        <div className={`mt-4 border-b pb-4`}>
          <div className={`mb-6`}>
            <p className={`text-xl text-bold`}>Contacts and E-mails</p>
            <p className="opacity-60 text-xs">
              Manage your account email and socials medias or site web
            </p>
          </div>
          <div>
            <div className={`flex gap-5 mb-4`}>
              <div className="flex gap-2 items-center ">
                <div className={` `}>
                  <p className="mb-1 text-xs">Email</p>
                  <p
                    className={`border  rounded-[8px]
                    lg:py-1 lg:px-2 lg:w-35
                    xl:py-1 xl:px-4  xl:w-50`}
                  >
                    john@gmail.com
                  </p>
                </div>
                <button
                  className={` mt-5 rounded-[8px] border py-1 
                    lg:px-2
                    xl:px-4 ${
                      etatLumiere === true
                        ? `bg-[#36ecde]/60`
                        : `bg-gray-100/20 `
                    }`}
                >
                  Change
                </button>
              </div>
              <div className="flex gap-2 items-center ">
                <div className={` `}>
                  <p className="mb-1 text-xs">Site Web</p>
                  <p
                    className={`border rounded-[8px] 
                     lg:py-1 lg:px-2 lg:w-35
                    xl:py-1 xl:px-4  xl:w-50`}
                  >
                    pera.org
                  </p>
                </div>
                <button
                  className={` mt-5 rounded-[8px] border py-1
                    lg:px-2
                    xl:px-4  ${
                      etatLumiere === true
                        ? `bg-[#36ecde]/60`
                        : `bg-gray-100/20 `
                    }`}
                >
                  Change
                </button>
              </div>
              <div className="flex gap-2 items-center ">
                <div className={` `}>
                  <p className="mb-1 text-xs">Facebook</p>
                  <p
                    className={`border rounded-[8px] 
                     lg:py-1 lg:px-2 lg:w-35
                    xl:py-1 xl:px-4  xl:w-50`}
                  >
                    {" "}
                    john{" "}
                  </p>
                </div>
                <button
                  className={` mt-5 rounded-[8px] border  py-1 
                    lg:px-2
                    xl:px-4 ${
                      etatLumiere === true
                        ? `bg-[#36ecde]/60`
                        : `bg-gray-100/20 `
                    }`}
                >
                  Change
                </button>
              </div>
            </div>
            <div className={`flex gap-5 `}>
              <div className="flex gap-2 items-center ">
                <div className={` `}>
                  <p className="mb-1 text-xs">Instagram</p>
                  <p
                    className={`border  rounded-[8px] 
                     lg:py-1 lg:px-2 lg:w-35
                    xl:py-1 xl:px-4  xl:w-50`}
                  >
                    johnpella
                  </p>
                </div>
                <button
                  className={` mt-5 rounded-[8px] border py-1 
                    lg:px-2
                    xl:px-4  ${
                      etatLumiere === true
                        ? `bg-[#36ecde]/60`
                        : `bg-gray-100/20 `
                    }`}
                >
                  Change
                </button>
              </div>
              <div className="flex gap-2 items-center ">
                <div className={` `}>
                  <p className="mb-1 text-xs">Twitter </p>
                  <p
                    className={`border  rounded-[8px] 
                     lg:py-1 lg:px-2 lg:w-35
                    xl:py-1 xl:px-4  xl:w-50`}
                  >
                    {" "}
                    john{" "}
                  </p>
                </div>
                <button
                  className={` mt-5 rounded-[8px] border  py-1 
                    lg:px-2
                    xl:px-4 ${
                      etatLumiere === true
                        ? `bg-[#36ecde]/60`
                        : `bg-gray-100/20 `
                    }`}
                >
                  Change
                </button>
              </div>
              <div className="flex gap-2 items-center ">
                <div className={` `}>
                  <p className="mb-1 text-xs">Pinterest</p>
                  <p
                    className={`border rounded-[8px]
                     lg:py-1 lg:px-2 lg:w-35
                    xl:py-1 xl:px-4  xl:w-50`}
                  >
                    {" "}
                    john{" "}
                  </p>
                </div>
                <button
                  className={` mt-5 rounded-[8px] border py-1
                    lg:px-2
                    xl:px-4 ${
                      etatLumiere === true
                        ? `bg-[#36ecde]/60`
                        : `bg-gray-100/20 `
                    }`}
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-xl">Passeword</p>
          <div className={`flex gap-10 items-center mt-2`}>
            <p className="border px-4 pt-2 w-40 rounded-xl">********</p>
            <button
              className={` border px-2 mt-1 ml-20 rounded-sm ${
                etatLumiere === true ? `bg-[#36ecde]/60` : `bg-gray-100/20 `
              }`}
            >
              Change Passeword
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

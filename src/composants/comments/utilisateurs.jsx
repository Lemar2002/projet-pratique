import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";

export const Utilisateurs = () => {
  const { clients, ouvrirDiscussion, etatLumiere } = useGlobalContext();
  return (
    <div
      className={`px-2 border  h-155 w-90 rounded-xl flex flex-col gap-2 
        lg:w-70
        xl:w-90 ${
          etatLumiere === true
            ? `bg-white text-black`
            : `bg-[#00203F] text-[#E6E9EC]`
        }`}
    >
      <p
        className={`pt-1 mt-1 rounded-xl mb-4 border-b  text-center text-2xl ${
          etatLumiere === true ? `bg-[#E6E9EC]` : `bg-gray-200/20`
        }`}
      >
        Utilisateurs
      </p>
      <ul className="h-full overflow-y-auto">
        {clients.map((client, indic) => (
          <li
            onClick={() => {
              ouvrirDiscussion(client);
            }}
            key={indic}
            className=" flex items-center gap-4 border-b pb-4  mb-2 "
          >
            <div className="w-12 h-12 rounded-full border">
              <img
                src={client.photo}
                alt=""
                className="w-12 h-12 rounded-full border"
              />
            </div>
            <div className="text-sm flex flex-col gap-1">
              <p className="font-bold">{`${client.nom} ${client.prenom}`}</p>
              <p className="text-xs">{client.email}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="border rounded-full">View more</button>
    </div>
  );
};

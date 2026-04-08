import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";

export const Utilisateurs = () => {
  const { clients, ouvrirDiscussion } = useGlobalContext();
  return (
    <div className=" px-2 border bg-black text-white h-155 w-90 rounded-xl flex flex-col gap-2">
      <p className=" pt-3 mb-4 border-b  text-center">Utilisateurs</p>
      <ul className="h-full overflow-y-auto">
        {clients.map((client, indic) => (
          <li
            onClick={() => {
              ouvrirDiscussion(client);
            }}
            key={indic}
            className=" flex items-center gap-4 border-b pb-4 border-white/50 mb-2 "
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

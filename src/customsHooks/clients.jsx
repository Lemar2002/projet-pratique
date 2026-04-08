import { useState } from "react";

export const useClients = (dataUtilisateurs) => {
  const [clients, setclients] = useState(dataUtilisateurs);

  const [clientDiscussion, setclientDiscussion] = useState([]);

  const ouvrirDiscussion = (discussion) => {
    setclientDiscussion(discussion);
  };

  console.log(clientDiscussion);
  return { clients, clientDiscussion, ouvrirDiscussion };
};

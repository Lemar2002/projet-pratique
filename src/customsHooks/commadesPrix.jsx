import { useState } from "react";

export const useCommandesPrix = () => {
  const [listeDesCommandes, setlisteDesCommandes] = useState([]);

  const chargerListeDesCommandes = (listeDesProduits, totalCommande) => {
    const commande = {
      listeDesProduits: [listeDesProduits],
      totalCommande: totalCommande,
    };

    setlisteDesCommandes([...listeDesCommandes, commande]);
  };

  return { listeDesCommandes, chargerListeDesCommandes };
};

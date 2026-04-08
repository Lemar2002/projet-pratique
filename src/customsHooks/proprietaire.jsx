import { useState } from "react";

export const useProprietaire = () => {
  const [proprietaire, setproprietaire] = useState([]);
  const changerUtilisateur = (nom, prenom, age, sexe, email, photo) => {
    const user = {
      nom: nom,
      prenom: prenom,
      age: age,
      sexe: sexe,
      email: email,
      photo: photo,
    };
    setproprietaire([...proprietaire, user]);
  };

  return { proprietaire, changerUtilisateur };
};

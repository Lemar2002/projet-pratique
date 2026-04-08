import { useState } from "react";

export const useModeLumiere = () => {
  const [etatLumiere, setetatLumiere] = useState(true);

  const changerEtatLumiere = (value) => {
    setetatLumiere(value);
  };
  return { etatLumiere, changerEtatLumiere };
};

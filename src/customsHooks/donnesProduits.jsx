import { useState } from "react";

export const useDonnesProduits = (data) => {
  // focntion pour afficher et trier l'ensemble des produits
  const [listeDesProduits, setlisteDesProduits] = useState(data);
  const [allProduct] = useState(data);

  const filtreur = (type) => {
    if (type === "all") {
      setlisteDesProduits(allProduct);
    } else {
      setlisteDesProduits(allProduct.filter((prod) => prod.type === type));
    }
  };
  //Panier dasns ArtcileDeatils
  const [panier, setPanier] = useState([]);

  const ajouterDansPanier = (nom, photo, prix, couleur, type) => {
    const panierUnique = {
      id: panier.length + 1,
      nom: nom,
      photo: photo,
      prix: prix,
      couleur: couleur,
      type: type,
      prixTotal: prix,
    };
    setPanier([...panier, panierUnique]);
  };
  const delecteElement = (id) =>
    setPanier(panier.filter((elem) => elem.id !== id));

  return {
    listeDesProduits,
    filtreur,
    panier,
    ajouterDansPanier,
    delecteElement,
  };
};

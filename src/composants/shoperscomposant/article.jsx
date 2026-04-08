import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";

export const ArticleIndivu = ({ produit }) => {
  const { ajouterDansPanier } = useGlobalContext();

  return (
    <div className="flex flex-col gap-2 px-2 py-2 text-[12px] w-53 border rounded-xl h-64">
      <div className="relative inline-block">
        <p className="absolute top-0 left-0 px-2 rounded-tl-xl rounded-br-xl border ">
          {produit.totalDisponible} Stock
        </p>
        <img
          src={produit.photo}
          alt=""
          className="w-full h-30 block rounded-xl border"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold"> {produit.nom}</p>
        <p className="text-[10px]">{produit.description}</p>
        <p className="font-bold">{`${produit.prix}$`}</p>
      </div>
      <button
        onClick={() => {
          ajouterDansPanier(
            produit.nom,
            produit.photo,
            produit.prix,
            produit.couleursDisponibles,
            produit.type
          );
        }}
        className="border rounded-full font-bold"
      >
        + Add to Cart
      </button>
    </div>
  );
};

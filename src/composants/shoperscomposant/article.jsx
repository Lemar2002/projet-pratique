import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";

export const ArticleIndivu = ({ produit }) => {
  const { ajouterDansPanier, etatLumiere } = useGlobalContext();

  return (
    <div
      className="flex flex-col  text-[12px] border rounded-xl h-64 
   lg:w-50 lg:gap-1 lg:px-1 lg:py-1
   xl:w-53 xl:gap-2 xl:px-2 xl:py-2"
    >
      <div className="relative inline-block">
        <p
          className={`absolute top-0 left-0 px-2 rounded-tl-xl rounded-br-xl border ${
            etatLumiere === true ? `bg-[#E6E9EC]` : `bg-[#00203F]`
          }`}
        >
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
        className={`border rounded-full font-bold ${
          etatLumiere === true ? `bg-[#36ECDE]/60` : `bg-[#36ECDE]/60`
        }`}
      >
        + Add to Cart
      </button>
    </div>
  );
};

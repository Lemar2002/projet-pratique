import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";
import { ArticleDetailindividuel } from "./articleDetailIndivu";

export const ArticleDeta = () => {
  const {
    panier,
    delecteElement,
    listeDesCommandes,
    chargerListeDesCommandes,
  } = useGlobalContext();
  //calcul le total des prix de facion brut
  const total = panier.reduce((acc, val) => {
    return acc + val.prix;
  }, 0);

  // calcul les taxes et les promos a partir de 10 commandes
  const totalSansPromo = total * 1.06;
  const totalAvecPromo = totalSansPromo * 0.94;
  const totalFina = () => {
    if (panier.length >= 10) {
      return totalAvecPromo.toFixed(2);
    } else {
      return totalSansPromo.toFixed(2);
    }
  };
  //mise de tout dans une constante
  const totalFinal = totalFina();

  const submit = (e) => {
    e.preventDefault();
    chargerListeDesCommandes(panier, totalFinal);
  };

  //  focntion de chargement apres submit

  console.log(listeDesCommandes);

  return (
    <form
      onClick={submit}
      className="w-[26%] h-full flex px-2 py-2 flex-col gap-4  border rounded-xl bg-black text-white"
    >
      <p className="font-bold">Detail Transaction</p>
      <ul className="flex flex-col gap-2  h-[54%] mb-3 overflow-y-auto">
        {panier.map((element, index) => (
          <ArticleDetailindividuel
            key={index}
            element={element}
            delecteElement={delecteElement}
          />
        ))}
      </ul>
      <div className="flex flex-col border px-2 gap-2 rounded-2xl">
        <p className="font-bold text-[18px]"> Count and Send</p>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between ">
            <p> Total Articles</p>
            <p>{panier.length}</p>
          </div>
          <div className="flex justify-between ">
            <p>Sub total</p>
            <p>{total}$</p>
          </div>

          <div className="flex justify-between ">
            <p>Tax</p>
            <p>6%</p>
          </div>
          <div className="flex justify-between border-b pb-1">
            <p>Discount Promo</p>
            <p> {panier.length >= 10 ? "6%" : "0%"}</p>
          </div>
          <div className="flex justify-between ">
            <p>Total Payment</p>
            <p> {totalFinal}$</p>
          </div>
          <button type="submit" className="border rounded-full mb-1">
            Send to
          </button>
        </div>
      </div>
    </form>
  );
};

import { VscSearch } from "react-icons/vsc";
import { ArticleIndivu } from "./article";
import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";
export const ShopArticles = () => {
  const { listeDesProduits, filtreur, etatLumiere } = useGlobalContext();

  const nombreShoes = () => {
    filtreur("shoes").length + 1;
  };

  return (
    <div
      className={`flex flex-col gap-3 h-full px-2 py-2  border rounded-xl 
        xl:w-250 ${
          etatLumiere === true
            ? `bg-white text-black`
            : `bg-[#00203F] text-[#E6E9EC]`
        }`}
    >
      <div className=" flex justify-between text-[10px]">
        <div className="flex text-[10px] gap-2">
          <button
            onClick={() => {
              filtreur("all");
            }}
            className="font-bold border px-2 py-2 rounded-full flex items-center gap-1  "
          >
            <p>All Produts</p>
            <p className="border px-1 rounded-full bg-green-400 text-black">
              467
            </p>
          </button>
          <button
            onClick={() => {
              filtreur("shoes");
            }}
            className="font-bold border px-2 py-2 rounded-full flex items-center gap-1  "
          >
            <p>Shoes</p>
            <p className="border px-1 rounded-full bg-green-400 text-black">
              182
            </p>
          </button>
          <button
            onClick={() => {
              filtreur("clothes");
            }}
            className="font-bold border px-2 py-2 rounded-full flex items-center gap-1  "
          >
            <p>Clothing</p>
            <p className="border px-1 rounded-full bg-green-400 text-black">
              78
            </p>
          </button>
          <button
            onClick={() => {
              filtreur("others");
            }}
            className="font-bold border px-2 py-2 rounded-full flex items-center gap-1 "
          >
            <p>Other Products</p>
            <p className="border px-1 rounded-full bg-green-400 text-black">
              60
            </p>
          </button>
        </div>
        <form
          action=""
          className="rounded-full flex border px-2 items-center gap-2"
        >
          <input
            className="w-15 text-[10px]"
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
          <button type="submit" className="border px-1  py-1 rounded-full">
            <VscSearch />
          </button>
        </form>
      </div>
      <ul
        className="  h-full overflow-y-auto grid grid-cols-3 
      lg:gap-2
      xl:gap-4 "
      >
        {listeDesProduits.map((produit, index) => (
          <ArticleIndivu
            key={index}
            produit={produit}
            nombreShoes={nombreShoes}
          />
        ))}
      </ul>
    </div>
  );
};

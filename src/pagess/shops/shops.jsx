import { ArticleDeta } from "../../composants/shoperscomposant/articleDetail";
import { ShopArticles } from "../../composants/shoperscomposant/shopArticle";
import { ShopHead } from "../../composants/shoperscomposant/shopHeader";

export const Shops = () => {
  return (
    <div
      className=" flex flex-col gap-2 h-screen 
    xl:w-250"
    >
      <div className="flex mt-1">
        <ShopHead />
      </div>
      <div
        className="flex  h-160
      lg:gap-2
      xl:gap-3"
      >
        <ShopArticles />
        <ArticleDeta />
      </div>
    </div>
  );
};

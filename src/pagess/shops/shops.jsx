import { ArticleDeta } from "../../composants/shoperscomposant/articleDetail";
import { ShopArticles } from "../../composants/shoperscomposant/shopArticle";
import { ShopHead } from "../../composants/shoperscomposant/shopHeader";

export const Shops = () => {
  return (
    <div className="w-240 flex flex-col gap-2 h-screen ">
      <div className="flex mt-1">
        <ShopHead />
      </div>
      <div className="flex gap-2 h-160">
        <ShopArticles />
        <ArticleDeta />
      </div>
    </div>
  );
};

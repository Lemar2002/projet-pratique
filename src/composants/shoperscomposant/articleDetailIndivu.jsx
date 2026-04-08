import { useState } from "react";

export const ArticleDetailindividuel = ({ element, delecteElement }) => {
  const [count, setcount] = useState(1);
  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    if (count === 1) {
      setcount(1);
    } else {
      setcount(count - 1);
    }
  };
  console.log(element);

  return (
    <li className="flex gap-2 items-center border px-1 py-1 rounded-xl">
      <div className=" w-18 h-18 border rounded-xl">
        <img
          src={element.photo}
          alt=""
          className=" w-18 h-18 border rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold">{element.nom} </p>
        <div className="text-xs flex gap-4">
          <div className="border rounded-full flex items-center px-2 gap-1 ">
            <p className="text-[10px]">price {element.prix}</p>
          </div>
          <div className="border rounded-full flex items-center px-2 gap-1">
            <button className="">o</button>
            <p>{element.couleur[0]}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-center">
            <button
              onClick={decrement}
              className="border px-2 rounded-full text-sm bg-green-600 "
            >
              -
            </button>
            <p>{count}</p>
            <button
              onClick={increment}
              className="border px-2 rounded-full text-sm bg-red-600"
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              delecteElement(element.id);
            }}
            className="text-[10px] px-1 border rounded-[50px]"
          >
            remove
          </button>
        </div>
      </div>
    </li>
  );
};

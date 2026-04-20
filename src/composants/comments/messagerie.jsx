import { LuMessageCircle } from "react-icons/lu";
import { FiUnderline } from "react-icons/fi";
import { LuItalic } from "react-icons/lu";
import { SlEmotsmile } from "react-icons/sl";
import { IoMdLink } from "react-icons/io";
import { FaAlignCenter } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { RiErrorWarningLine } from "react-icons/ri";
import {
  SlSocialTwitter,
  SlSocialPintarest,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";
import { useState } from "react";
import { useRef } from "react";

export const Messagerie = () => {
  //rapel de la disussion unique du cliengt
  const { clientDiscussion } = useGlobalContext();

  //mise en forme du texte ecrit
  const [texteEcrit, settexteEcrit] = useState("");

  const editorref = useRef(null);
  // fonction de modifaction
  const modificateur = (cmd, value = null) => {
    document.execCommand(cmd, false, value);
    editorref.current.focus();
  };

  const handleInput = (e) => {
    settexteEcrit(e.currentTarget.innerHTML);
  };

  console.log(texteEcrit);

  //
  const { etatLumiere } = useGlobalContext();
  return (
    <div
      className={`pt-5 flex flex-col gap-6 border h-full rounded-xl
        lg:w-full
        xl:w-full ${
          etatLumiere === true
            ? `bg-white text-black`
            : `bg-[#00203F] text-[#E6E9EC]`
        }`}
    >
      {clientDiscussion.length === 0 ? (
        <div className="text-center flex flex-col items-center  h-full pt-[40%]">
          <p className="border px-6 py-1 font-bold shadow-xl rounded-sm">
            Cliquez sur un utlisateur pour ouvrir une discussion...
          </p>
        </div>
      ) : (
        <div>
          <div
            className={`flex items-center justify-between px-6 py-2 rounded-xl mx-1 ${
              etatLumiere === true ? `bg-[#E6E9EC]` : `bg-gray-200/20`
            }`}
          >
            <div className=" flex items-center gap-4  ">
              <div className="w-16 h-16 rounded-full border">
                <img
                  src={clientDiscussion.photo}
                  alt=""
                  className="w-16 h-16 rounded-full border"
                />
              </div>
              <div className="text-sm flex flex-col gap-1">
                <p className="font-bold">{`${clientDiscussion.nom} ${clientDiscussion.prenom}`}</p>
                <p className="text-xs">{clientDiscussion.email}</p>
              </div>
            </div>
            <div className="font-bold flex gap-4 h-8 items-center">
              <button
                className={`flex items-center gap-2 border  px-3 py-1 rounded-sm ${
                  etatLumiere === true ? `bg-[#36ecde]/60` : `bg-gray-100/20 `
                } `}
              >
                Follow +
              </button>
              <button
                className={`flex items-center gap-2 border  px-3 py-1 rounded-sm ${
                  etatLumiere === true ? `bg-[#36ecde]/60` : `bg-gray-100/20 `
                }`}
              >
                <p>Message</p> <LuMessageCircle />
              </button>
            </div>
          </div>
          <div className="px-6 flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <p>Private note</p>
              <RiErrorWarningLine />
            </div>

            <form className="border rounded-t-2xl">
              <div className="flex justify-between border py-2 rounded-t-xl">
                <div className=" px-2 flex items-center justify-between gap-8 text-xl">
                  <button onClick={() => modificateur("bold")} type="button">
                    B
                  </button>
                  <button onClick={() => modificateur("italic")} type="button">
                    <LuItalic />
                  </button>
                  <button
                    onClick={() => modificateur("underline")}
                    type="button"
                  >
                    <FiUnderline />
                  </button>
                  <button>
                    <SlEmotsmile />
                  </button>
                  <button>
                    <IoMdLink />
                  </button>
                  <button
                    onClick={() => modificateur("justifyLeft")}
                    type="button"
                  >
                    <FaList />
                  </button>
                  <button
                    onClick={() => modificateur("justifyCenter")}
                    type="button"
                  >
                    <FaAlignCenter />
                  </button>
                </div>
                <div className="flex items-center px-2 gap-4">
                  <FaArrowLeft />
                  <FaArrowRight />
                </div>
                <button
                  type="submit"
                  className={`px-2  rounded-sm mr-2   ${
                    etatLumiere === true ? `bg-[#36ecde]/60` : `bg-gray-100/20 `
                  }`}
                >
                  Send
                </button>
              </div>
              <div
                ref={editorref}
                contentEditable={true}
                suppressContentEditableWarning={true}
                onInput={handleInput}
                className="h-20 w-full overflow-y-auto"
              ></div>
            </form>
          </div>
          <div className="flex flex-col gap-2 px-6  ">
            <div className="flex items-center gap-3 border-b pb-4 mt-1 ">
              <CgMail className="text-2xl " />
              <p>{clientDiscussion.email}</p>
            </div>
            <div className="border-b pt-3 pb-5 flex gap-8 text-xl ">
              <a
                href={`http://www.twitter.com/${clientDiscussion.conversation[0].twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialTwitter />
              </a>
              <a
                href={`http://www.instagram.com/${clientDiscussion.conversation[0].insta}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialInstagram />
              </a>
              <a
                href={`http://www.pinterest.com/${clientDiscussion.conversation[0].pinterest}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialPintarest />
              </a>
              <a
                href={`http://www.facebook.com/   ${clientDiscussion.conversation[0].facebook}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialFacebook />
              </a>
            </div>
            <div className=" flex items-center gap-3 ">
              <IoMdLink className="text-2xl " />
              <a
                href={`http://${clientDiscussion.conversation[0].siteWeb} `}
                target="_blank"
                rel="noopener noreferrer"
              >
                {clientDiscussion.conversation[0].siteWeb}
              </a>
            </div>

            <div className="flex flex-col">
              <div className="border-b py-3 flex justify-between pr-10">
                <div>
                  <p>Product</p>
                </div>
                <div className="flex gap-30 items-center">
                  <p>Price</p>
                  <p>Date</p>
                </div>
              </div>

              <ul>
                <li>
                  <div className=" py-3 flex justify-between pr-6">
                    <div className="flex">
                      <div className="w-12 h-10 border">
                        <img src="" alt="" />
                      </div>
                      <div className="flex flex-col px-3">
                        <p className="text-bold">Product title</p>
                        <p className="text-xs ">ui.net/produc/product-link</p>
                      </div>
                    </div>
                    <div className="flex gap-18 items-center">
                      <p
                        className={`border px-3 text-sm py-1 rounded-sm ${
                          etatLumiere === true
                            ? `bg-[#36ecde]/60`
                            : `bg-gray-100/20 `
                        }`}
                      >
                        $64.00
                      </p>
                      <p className="text-xs ">April 9,2021</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className=" py-3 flex justify-between pr-6">
                    <div className="flex">
                      <div className="w-12 h-10 border">
                        <img src="" alt="" />
                      </div>
                      <div className="flex flex-col px-3">
                        <p className="text-bold">Product title</p>
                        <p className="text-xs ">ui.net/produc/product-link</p>
                      </div>
                    </div>
                    <div className="flex gap-18 items-center">
                      <p
                        className={`border px-3 text-sm py-1 rounded-sm ${
                          etatLumiere === true
                            ? `bg-[#36ecde]/60`
                            : `bg-gray-100/20 `
                        }`}
                      >
                        $64.00
                      </p>
                      <p className="text-xs ">April 9,2021</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

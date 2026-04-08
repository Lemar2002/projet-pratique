import {
  SlSocialTwitter,
  SlSocialPintarest,
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialGoogle,
  SlSocialLinkedin,
  SlBasket,
  SlPower,
} from "react-icons/sl";
import { useState } from "react";
import { useGlobalContext } from "../../customsHooks/contextAPI/APIcontext";
export const NewUser = ({ connexion }) => {
  const { changerUtilisateur } = useGlobalContext();
  // les differents etats
  const [nomUtilisateur, setnomUtilisateur] = useState("");
  const [prenomUtilisateur, setprenomUtilisateur] = useState("");
  const [emailUtilisateur, setemailUtilisateur] = useState("");
  //fonction pour recolter les donnes
  const handleNom = (e) => {
    setnomUtilisateur(e.target.value);
  };
  const handlePrenom = (e) => {
    setprenomUtilisateur(e.target.value);
  };
  const handleEmail = (e) => {
    setemailUtilisateur(e.target.value);
  };
  // fonction d'envoie de donnes
  const envoyer = (e) => {
    e.preventDefault();
    const age = 35;
    const sexe = "M";
    const photo = "/images/im1.jpg";
    changerUtilisateur(
      nomUtilisateur,
      prenomUtilisateur,
      age,
      sexe,
      emailUtilisateur,
      photo
    );
    connexion(true);
  };

  return (
    <div className="flex flex-col  gap-4 items-center justify-center h-screen p-[10px]  text-white bg-slate-900 border-white/10 backdrop-blur-md">
      <div className="flex items-center gap-2 text-2xl pb-2">
        <SlPower className="text-green-500" />
        <p>Crypter MarketPlace</p>
      </div>
      <div className="border-white/ ring-1 ring-inset ring-white/10 shadow-2xl  bg-[#12141a] px-20 py-6 flex flex-col gap-4  rounded-2xl   ">
        <h1 className="font-bold text-2xl">Creat your new count!</h1>
        <form action="" className=" flex flex-col gap-4" onSubmit={envoyer}>
          <input
            className=" border min-w-80 px-2 py-2 rounded-[10px]"
            type="text"
            placeholder="First Name"
            required
            onChange={handleNom}
            value={nomUtilisateur}
          />
          <input
            className=" border min-w-80 px-2 py-2 rounded-[10px]"
            type="text"
            placeholder="Last Name"
            required
            onChange={handlePrenom}
            value={prenomUtilisateur}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className=" border min-w-80 px-2 py-2 rounded-[10px]"
            onChange={handleEmail}
            value={emailUtilisateur}
          />
          <input
            className="border min-w-80 px-2 py-2 rounded-[10px]"
            type="password"
            placeholder="Password"
            name="passewoerd"
            required
          />
          <input
            className="border min-w-80 px-2 py-2 rounded-[10px]"
            type="password"
            placeholder="Confirm Password"
            name="passewoerd"
            required
          />
          <div className="text-sm ">
            <input
              width="2"
              height="4"
              type="checkbox"
              className="text-black border border-white"
            />
            <label htmlFor="radio" className=" px-2 ">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className=" border w-40 mx-[30%] rounded-[10px] py-1 bg-green-400"
          >
            Sign Up
          </button>
        </form>

        <div className="text-sm flex flex-col gap-2 items-center">
          <div className="font-bold">Have account?</div>
          <div className="text-3xl flex gap-4 ">
            <SlSocialTwitter className="border p-1 rounded-full border-green-600 " />
            <SlSocialPintarest className="border p-1 rounded-full border-red-600 " />
            <SlSocialFacebook className="border p-1 rounded-full border-blue-600 " />
            <SlSocialGoogle className="border p-1 rounded-full border-orange-400 " />
          </div>
          <p>or</p>
          <button className="underline border w-20  rounded-[10px] py-1 bg-green-400">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

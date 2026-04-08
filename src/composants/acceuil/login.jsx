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
export const Login = () => {
  return (
    <div className="flex flex-col  gap-4 items-center justify-center py-[10%]  text-white bg-slate-900 border-white/10 backdrop-blur-md">
      <div className="flex items-center gap-2 text-2xl ">
        <SlPower className="text-green-500" />
        <p>Crypter MarketPlace</p>
      </div>
      <div className="border-white/ ring-1 ring-inset ring-white/10 shadow-2xl  bg-[#12141a] px-20 py-10 flex flex-col gap-4  rounded-2xl   ">
        <h1 className="font-bold text-2xl">Welcome back!</h1>
        <form action="" className=" flex flex-col gap-4">
          <input
            className=" border min-w-80 px-2 py-2 rounded-[10px]"
            type="text"
            placeholder="Username"
            required
          />
          <input
            className="border min-w-80 px-2 py-2 rounded-[10px]"
            type="password"
            placeholder="Password"
            name="passewoerd"
            id=""
            required
          />

          <button
            type="submit"
            className=" border w-40 mx-[30%] rounded-[10px] py-1 bg-green-400"
          >
            Login
          </button>
        </form>
        <button className="text-left text-xs cursor-pointer">
          Forget your password?{" "}
        </button>

        <div className="text-sm flex flex-col gap-2 items-center">
          <div className="font-bold">New Here?</div>
          <div className="text-3xl flex gap-4 ">
            <SlSocialTwitter className="border p-1 cursor-pointer rounded-full border-green-600 " />
            <SlSocialPintarest className="border cursor-pointer p-1 rounded-full border-red-600 " />
            <SlSocialFacebook className="border cursor-pointer p-1 rounded-full border-blue-600 " />
            <SlSocialGoogle className="border p-1 cursor-pointer rounded-full border-orange-400 " />
          </div>
          <p>or</p>
          <button className="underline border w-20  rounded-[10px] py-1 bg-green-400">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

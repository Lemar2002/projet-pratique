export const Popular = () => {
  return (
    <div className="mt-2 px-4 pb-6 h-84 flex flex-col justify-between  gap-2 rounded-2xl  w-76 bg-black text-white ">
      <p className="text-xl mt-2">Popular products</p>
      <ul className="flex flex-col gap-2 mt-2  h-full overflow-y-auto">
        <li>
          <div className="flex text-sm justify-between">
            <div className="flex gap-3">
              <img src="/images/im1.jpg" alt="" className="border w-12" />
              <div>
                <p>Crypter-NFT</p>
                <p>UI Kit</p>
              </div>
            </div>
            <div>
              <p>$3,250.00</p>
              <p className="text-xs border text-center rounded-sm">Active</p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex text-sm justify-between">
            <div className="flex gap-3">
              <img src="/images/im1.jpg" alt="" className="border w-12" />
              <div>
                <p>Crypter-NFT</p>
                <p>UI Kit</p>
              </div>
            </div>
            <div>
              <p>$3,250.00</p>
              <p className="text-xs border text-center rounded-sm">Active</p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex text-sm justify-between">
            <div className="flex gap-3">
              <img src="/images/im1.jpg" alt="" className="border w-12" />
              <div>
                <p>Crypter-NFT</p>
                <p>UI Kit</p>
              </div>
            </div>
            <div>
              <p>$3,250.00</p>
              <p className="text-xs border text-center rounded-sm">Active</p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex text-sm justify-between">
            <div className="flex gap-3">
              <img src="/images/im1.jpg" alt="" className="border w-12" />
              <div>
                <p>Crypter-NFT</p>
                <p>UI Kit</p>
              </div>
            </div>
            <div>
              <p>$3,250.00</p>
              <p className="text-xs border text-center rounded-sm">Active</p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex text-sm justify-between">
            <div className="flex gap-3">
              <img src="/images/im1.jpg" alt="" className="border w-12" />
              <div>
                <p>Crypter-NFT</p>
                <p>UI Kit</p>
              </div>
            </div>
            <div>
              <p>$3,250.00</p>
              <p className="text-xs border text-center rounded-sm">Active</p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex text-sm justify-between">
            <div className="flex gap-3">
              <img src="/images/im1.jpg" alt="" className="border w-12" />
              <div>
                <p>Crypter-NFT</p>
                <p>UI Kit</p>
              </div>
            </div>
            <div>
              <p>$3,250.00</p>
              <p className="text-xs border text-center rounded-sm">Active</p>
            </div>
          </div>
        </li>
      </ul>
      <button className="border text-sm py-2 rounded-full text-white/60">
        All products
      </button>
    </div>
  );
};

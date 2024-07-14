import React from "react";
import Image from "next/image";
import { CoinbaseWallet } from "../../../public/assets";

export default function Coinbase() {
  return (
    <main className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-900 dark:hover:bg-gray-800 mt-1">
      <div className="flex px-4 py-1 cursor-pointer">
        <Image src={CoinbaseWallet} alt="Coinbase" width={40} height={40} />
        <h3 className="dark:text-white text-black text-[14px] font-bold px-3 my-5">
          Coinbase
        </h3>
      </div>
    </main>
  );
}

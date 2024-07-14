import React from "react";
import Image from "next/image";
import { WalletConnectWallet } from "../../../public/assets";

export default function WalletConnectModal() {
  return (
    <main className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-bl-lg mt-1 rounded-br-lg">
      <div className="flex px-4 py-1 cursor-pointer">
        <Image
          src={WalletConnectWallet}
          alt="WalletConnect"
          width={40}
          height={40}
        />
        <h3 className="dark:text-white text-black text-[14px] font-bold px-3 my-5">
          WalletConnect
        </h3>
      </div>
    </main>
  );
}

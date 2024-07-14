import React from "react";
import { Wallet, Radar } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";
import { Oxose } from "../../../public/assets";

import Metamask from "./connect-metamask";
import Coinbase from "./connect-coinbase";
import Phantom from "./connect-phantom";
import WalletConnectModal from "./connect-walletconnect";

export default function WalletConnect() {
  return (
    <main className="cursor-pointer">
      <OpenModal />
    </main>
  );
}

function OpenModal() {
  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Button variant="outline" className="py-1 px-2">
          <Wallet />
        </Button>
      </CredenzaTrigger>
      <CredenzaContent className="flex mx-[20px]">
        <div className="w-fit">
          <CredenzaHeader>
            <div className="flex gap-2">
              <Radar />
              <CredenzaTitle className="mt-[2px]">
                Connect a Wallet
              </CredenzaTitle>
            </div>
            <CredenzaDescription>
              And experience the immersive nature of web3.
            </CredenzaDescription>
          </CredenzaHeader>
          <CredenzaBody className="space-y-4 mt-2 pb-4 text-center text-sm sm:pb-0 sm:text-left">
            <Metamask />
            <Coinbase />
            <Phantom />
            <WalletConnectModal />
          </CredenzaBody>
        </div>

        <div className="md:flex hidden">
          <Image
            src={Oxose}
            alt="img"
            className="h-[400px] w-[300px] rounded-br-lg rounded-tr-lg"
          />
        </div>
      </CredenzaContent>
    </Credenza>
  );
}

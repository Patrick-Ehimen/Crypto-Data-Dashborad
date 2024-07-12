import React from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";

export default function GroupAvatarMobile() {
  return (
    <AvatarGroup isBordered max={1} total={1000} className="lg:hidden">
      <Avatar src="https://cryptologos.cc/logos/solana-sol-logo.png?v=032" />
      <Avatar src="https://cryptologos.cc/logos/optimism-ethereum-op-logo.png?v=032" />
      <Avatar src="https://cryptologos.cc/logos/toncoin-ton-logo.png?v=032" />
      <Avatar src="https://cryptologos.cc/logos/bnb-bnb-logo.png?v=032" />
      <Avatar src="https://cryptologos.cc/logos/chainlink-link-logo.png?v=032" />
      <Avatar src="https://cryptologos.cc/logos/polygon-matic-logo.png?v=032" />
    </AvatarGroup>
  );
}

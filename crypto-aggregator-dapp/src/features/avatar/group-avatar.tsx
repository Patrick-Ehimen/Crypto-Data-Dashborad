import React from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";

export default function GroupAvatar() {
  return (
    <AvatarGroup isBordered max={2} total={1000} className="hidden lg:flex">
      <Avatar src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=032" />
      <Avatar src="https://cryptologos.cc/logos/toncoin-ton-logo.png?v=032" />
      <Avatar src="https://cryptologos.cc/logos/bnb-bnb-logo.png?v=032" />
      <Avatar src="https://cryptologos.cc/logos/avalanche-avax-logo.png?v=032" />
      <Avatar src="https://cryptologos.cc/logos/chainlink-link-logo.png?v=032" />
      <Avatar src="https://cryptologos.cc/logos/polygon-matic-logo.png?v=032" />
    </AvatarGroup>
  );
}

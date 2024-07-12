"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import {
  Arbitrum,
  Avalanche,
  Base,
  BSC,
  ETH,
  Optimism,
  Polygon,
} from "../../../public/assets";

const networkArr = [
  { id: 1, name: "Ethereum", network: ETH },
  { id: 2, name: "BNB Chain", network: BSC },
  { id: 3, name: "Arbitrum", network: Arbitrum },
  { id: 4, name: "Polygon", network: Polygon },
  { id: 5, name: "Optimism", network: Optimism },
  { id: 6, name: "Base", network: Base },
  { id: 7, name: "Avalanche", network: Avalanche },
];

export default function SelectNetwork() {
  //state to hold the selected network id
  const [selectedNetworkId, setSelectedNetworkId] = React.useState(1);

  // Function to handle network selection
  const handleNetworkChange = (id: number) => setSelectedNetworkId(id);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className=" rounded-full p-2">
          <Image
            src={
              // Find the selected network object by matching the selectedNetworkId
              networkArr.find((network) => network.id === selectedNetworkId)
                ?.network || ETH // If not found, default to ETH
            }
            alt="network"
            width={20}
            height={20}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {networkArr.map((network) => (
            <DropdownMenuItem
              key={network.id}
              onClick={() => handleNetworkChange(network.id)} // Trigger the handleNetworkChange function with the current network's id when clicked
            >
              <Image
                src={network.network}
                alt={`${network.name} logo`}
                width={20}
                height={20}
              />
              <span className="mx-2">{network.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

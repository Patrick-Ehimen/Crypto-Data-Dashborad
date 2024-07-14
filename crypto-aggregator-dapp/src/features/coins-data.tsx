"use client";

import React, { useState, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Slider } from "@nextui-org/slider";

import { millifyConfig, priceChangePercentageMillifyConfig } from "@/config";

import millify from "millify";

// Assuming CoinDetails is a component you've created to display coin details
import CoinsDetails from "./coins-data/coins-details"; // Adjust the import path according to your project structure

export default function CoinsData() {
  const [data, setData] = useState([]);
  const [selectedCoinId, setSelectedCoinId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "X-CMC_PRO_API_KEY": process.env.COIN_GECKO_API_KEY || "",
            },
          }
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Failed to load coins data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      {!selectedCoinId ? (
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[10px]">#</TableHead>
              <TableHead className="w-[100px]">Coin</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Market Cap</TableHead>
              <TableHead>24h%</TableHead>
              <TableHead className="w-[50px]">Circulting Supply (%)</TableHead>
              <TableHead className="">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((coinData: any, index: number) => (
              <TableRow
                key={coinData.id} // Use a unique identifier if available
                onClick={() => setSelectedCoinId(coinData.id)}
              >
                <TableCell className="umber">{index + 1}</TableCell>
                <TableCell className="">
                  <div className="flex space-x-2">
                    <Avatar>
                      <AvatarImage src={coinData.image} />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{coinData.name}</h4>
                      <p className="text-sm">{coinData.symbol}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  ${millify(coinData.current_price, millifyConfig)}
                </TableCell>
                <TableCell>{millify(coinData.market_cap)}</TableCell>
                <TableCell>
                  <div
                    className={`${
                      coinData.price_change_percentage_24h > 0
                        ? "border-[#12BE73] border text-[#12BE73] rounded text-center p-1"
                        : "border-[#FD4C42] border text-[#FD4C42] rounded text-center p-1"
                    }`}
                  >
                    {millify(
                      coinData.price_change_percentage_24h,
                      priceChangePercentageMillifyConfig
                    )}
                    %
                  </div>
                </TableCell>
                <TableCell className="cool">
                  <Slider
                    isDisabled
                    label={`${millify(coinData.circulating_supply)} ${
                      coinData.symbol
                    })`}
                    size="sm"
                    step={0.01}
                    maxValue={100}
                    minValue={0}
                    defaultValue={
                      (coinData.circulating_supply / coinData.total_supply) *
                      100
                    }
                    className="max-w-md"
                  />
                </TableCell>
                <TableCell className="">{coinData.ath}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <CoinsDetails id={selectedCoinId} />
      )}
    </>
  );
}

// edit the code so that when any of the data index is clicked, the coinData.id is stored and passed to a new component that is then rendered

// write the Coindetail component and fetch the data from this API-https://api.coingecko.com/api/v3/coins/solana?tickers=true&market_data=true&sparkline=true

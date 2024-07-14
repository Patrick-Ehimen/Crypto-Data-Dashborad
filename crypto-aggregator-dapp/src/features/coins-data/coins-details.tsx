import React, { useState, useEffect } from "react";
import Image from "next/image";

import MockBarChart from "../charts/mock-bar-chart";
import millify from "millify";
import { millifyConfig } from "@/config";
import Link from "next/link";
import { SquareArrowOutUpRight, Book, Telescope } from "lucide-react";
import LoadingContent from "@/app/loading";

interface CoinDetailsProps {
  id: string;
}

const CoinsDetails: React.FC<CoinDetailsProps> = ({ id }) => {
  const [coinData, setCoinData] = useState<any>(null);

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        const url = `https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&sparkline=true`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setCoinData(data);
      } catch (error) {
        console.error("Failed to load coin details:", error);
      }
    };

    fetchCoinDetails();
  }, [id]); // Re-fetch data if the id prop changes

  if (!coinData) {
    return (
      <div>
        <LoadingContent />
      </div>
    );
  }

  return (
    <>
      <MockBarChart />
      <div className="mt-20 md:mx-5">
        <div className="md:flex lg:gap- md:gap-40">
          <div className="flex gap-2">
            <div className="rounded-full p-1 bg-white dark:bg-[#020817]">
              <Image
                src={coinData.image.small}
                alt={coinData.name}
                width={50}
                height={50}
              />
            </div>
            <div className="">
              <div className="flex gap-2">
                <h2 className="font-bold text-[24px]">{coinData.name} Price</h2>
                <p className="text-slate-500 font-semibold mt-2">
                  ({coinData.symbol})
                </p>
              </div>
              <div className="flex gap-2">
                <div className="text-slate-500 font-semibold">Rank</div>
                <p className="bg-[#0caf60] px-1 rounded-md">
                  #{coinData.market_cap_rank}
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <h2 className="font-medium text-[18px] hidden md:flex">
                {coinData.name} Price ({coinData.symbol})
              </h2>
              <div className="flex gap-2 mt-2 md:mt-0">
                <h2 className="text-[#0CAF60] text-[24px] font-bold">
                  $
                  {millify(
                    coinData.market_data.current_price.usd,
                    millifyConfig
                  )}
                </h2>
                <p className="text-slate-500 mt-1 font-bold">
                  (
                  {millify(
                    coinData.market_data.current_price.btc,
                    millifyConfig
                  )}
                  ) BTC
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10">
          <h1 className="font-bold text-[24px]">About {coinData.name}</h1>
          <h2 className="">{coinData.description.en}</h2>
        </div>

        <div className="grid  gap-20">
          <div className="flex flex-col">
            <div className="gap-2 flex">
              <span className="text-slate-400 mr-2">Website</span>
              <div className="flex gap-1">
                <Link href={coinData.links.homepage[0]} className="flex gap-1">
                  {coinData.links.homepage[0]}
                  <SquareArrowOutUpRight size={16} strokeWidth={0.5} />
                </Link>
              </div>
            </div>
            <div className="gap-2 flex">
              <span className="text-slate-400 mr-2">Whitepaper</span>
              <div className="flex gap-1">
                <Link href={coinData.links.whitepaper} className="flex gap-1">
                  Go to Link
                  <Book size={16} strokeWidth={0.5} />
                </Link>
              </div>
            </div>
            <div className="gap-2 flex">
              <span className="text-slate-400 mr-2">Explorers</span>
              <div className="flex gap-1">
                <Link
                  href={coinData.links.blockchain_site[0]}
                  className="flex gap-1"
                >
                  Block Explorer-1
                  <Telescope size={16} strokeWidth={0.5} />
                </Link>
                <Link
                  href={coinData.links.blockchain_site[1]}
                  className="flex gap-1"
                >
                  Block Explorer-2
                  <Telescope size={16} strokeWidth={0.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinsDetails;

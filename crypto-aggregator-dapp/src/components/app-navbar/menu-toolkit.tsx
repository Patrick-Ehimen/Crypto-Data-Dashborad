"use client";

import React from "react";
import { Grip } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";

import { hoverMenuItems } from "../../constants";
import { useStore } from "zustand";

export default function MenuToolkit() {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  if (!sidebar) return null;

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Grip className="cursor-pointer" />
      </HoverCardTrigger>

      <HoverCardContent
        className={cn(
          "w-[600px]",
          sidebar?.isOpen === false ? "ml-24" : "ml-72"
        )}
      >
        <div className="py-1 grid grid-cols-2 gap-4">
          {hoverMenuItems.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2"
            >
              <div className="flex">
                <Image
                  src={item.img}
                  alt="img"
                  className={`${
                    index === 0 ? "bg-[#674AFF] p-[5px] rounded-lg" : ""
                  } w-6 h-6} ${
                    index === 1 ? "bg-[#FB774A] p-[5px] rounded-lg" : ""
                  }`}
                />
                <h3 className="mx-3 text-sm font-medium">{item.title}</h3>
              </div>
              <p className="text-sm text-[#A4A8AB] mx-6 my-2">{item.para}</p>
            </div>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

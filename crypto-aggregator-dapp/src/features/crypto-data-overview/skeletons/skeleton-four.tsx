import { motion } from "framer-motion";
import Image from "next/image";

import { ETH, BitcoinIcon } from "../../../../public/assets";
import GroupAvatar from "@/features/avatar/group-avatar";
import GroupAvatarMobile from "@/features/avatar/group-avatar-mobile";

export default function SkeletonFour() {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-[#020817] dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src={BitcoinIcon}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 dark:text-slate-200 mt-4">
          Just code in Vanilla Javascript
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Bitcoin
        </p>
      </motion.div>
      <motion.div className="h-full relative w-1/3 rounded-2xl bg-white p-4 dark:bg-[#020817] dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src={ETH}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 dark:text-slate-200 mt-4">
          Tailwind CSS is cool, you know
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Ethereum
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-[#020817] dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <GroupAvatar />
        <GroupAvatarMobile />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 dark:text-slate-200 mt-4">
          I love angular, RSC, and Redux.
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Altcoins
        </p>
      </motion.div>
    </motion.div>
  );
}

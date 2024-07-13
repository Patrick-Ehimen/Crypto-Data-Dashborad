import { motion } from "framer-motion";
import Image from "next/image";

import { Squre1, Squre2, Squre3, Squre4 } from "../../../../public/assets";

export default function SkeletonTwo() {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-[#020817]"
      >
        <Image
          src={Squre1}
          alt="img"
          className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0"
        />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-[#020817]" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-[#020817]"
      >
        <Image
          src={Squre2}
          alt=""
          className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0"
        />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-[#020817]" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-[#020817]"
      >
        <Image
          src={Squre3}
          alt=""
          className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0"
        />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-[#020817]" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-[#020817] pb-1"
      >
        <Image
          src={Squre4}
          alt=""
          className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0"
        />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-[#020817]" />
      </motion.div>
    </motion.div>
  );
}

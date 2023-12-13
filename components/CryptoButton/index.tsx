"use client";
import { useRef, useState, MutableRefObject } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const CryptonButton = () => {
  return (
    <a
      className="grid  place-content-center"
      href="https://drive.google.com/u/0/uc?id=13i15T4bNfR2qIm5e17CI-1MEvn_PlQDa&export=download"
      download
      target="_blank"
    >
      <EncryptButton />
    </a>
  );
};

const TARGET_TEXT = "Download CV";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden  border-[1px] font-mono font-bold uppercase  transition-colors hover:text-black dark:text-[#09090b] bg-[#9bb3cb] border-none py-5 px-8 rounded-md w-[13rem] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)] dark:shadow-[5px_5px_0px_0px_rgba(257,257,257)]"
    >
      <div className="relative z-10 flex items-center gap-2">
        <Download className="h-5 w-5" />
        <span>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-violet-50 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default CryptonButton;

"use client";

import { useEffect, useState } from "react";

type Props = {
  typeWriters: string[];
};

const TypeWriterComponent = ({ typeWriters }: Props) => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const typeWriterInPage = (text: string, i = 0) => {
    return new Promise<void>((resolve) => {
      if (i < text.length) {
        setText(text.substring(0, i + 1));
        setTimeout(() => {
          resolve(typeWriterInPage(text, i + 1));
        }, 100);
      } else {
        resolve();
      }
    });
  };

  const typewriterLoop = async () => {
    const currentTypeWriter = typeWriters[currentIndex];
    await typeWriterInPage(currentTypeWriter);

    setTimeout(() => {
      setText("");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % typeWriters.length);
    }, currentTypeWriter.length * 100 + 1000);
  };

  useEffect(() => {
    typewriterLoop();
    const intervalId = setInterval(typewriterLoop, 3000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return <h2 className="text-6xl font-bold">{text}</h2>;
};

export default TypeWriterComponent;

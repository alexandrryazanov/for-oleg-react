import { useEffect, useState } from "react";

const FUCK_WORDS = ["жопа", "писька", "хуй", "пизда"];

export default function useFuck(value: string) {
  const [isFuck, setIsFuck] = useState(false);

  useEffect(() => {
    const found = !!FUCK_WORDS.find((word) =>
      value.toLowerCase().includes(word)
    );
    setIsFuck(found);
  }, [value]);

  return isFuck;
}

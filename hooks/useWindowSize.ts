import { useEffect, useLayoutEffect, useState } from "react";

export const useWindowSize = () => {
  // https://github.com/uidotdev/usehooks/blob/90fbbb4cc085e74e50c36a62a5759a40c62bb98e/index.js#L1344
  const [windowSize, setWindowSize] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: null,
    height: null,
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

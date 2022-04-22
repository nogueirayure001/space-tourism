import { useState, useEffect } from "react";

export const useMonitorPageWidth = (threshold) => {
  const [breachesThreshold, setBreachesThreshold] = useState(
    window.innerWidth >= threshold
  );

  useEffect(() => {
    window.addEventListener("resize", () =>
      setBreachesThreshold(window.innerWidth >= threshold)
    );

    return () =>
      window.removeEventListener("resize", () =>
        setBreachesThreshold(window.innerWidth >= threshold)
      );
  }, [threshold]);

  return breachesThreshold;
};

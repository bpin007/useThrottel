import { useEffect, useRef, useState } from "react";

const useThrottle = (value, delay) => {
  const [throttleValue, setThrottleValue] = useState(value);
  const lastExcuted = useRef(Date.now());
  useEffect(() => {
    const handler = setTimeout(() => {
      const now = Date.now();
      const timeElapsed = now - lastExcuted.current;
      if (timeElapsed >= delay) {
        setThrottleValue(value);
        lastExcuted.current = now;
      }
    }, delay - (Date.now() - lastExcuted.current));
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return throttleValue;
};

export default useThrottle;

// useOnMount customHook
import { useRef, EffectCallback, useEffect } from "react";

const useOnMount = (callback: EffectCallback) => {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    const destructor = callback();

    return () => {
      mounted.current = true;
      destructor?.();
    };
  }, [callback]);
};

export default useOnMount;

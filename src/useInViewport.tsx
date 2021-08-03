import { RefObject, useEffect, useState } from 'react';
import 'intersection-observer';

function useInViewport(
  ref: RefObject<HTMLElement>,
  rootRef = null,
  options?: IntersectionObserverInit
): boolean {
  const [inViewPort, setInViewport] = useState<boolean>();

  useEffect(() => {
    if (ref.current) {
      const opt = { ...options };
      if (rootRef) {
        opt.root = rootRef.current;
      }
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInViewport(true);
          } else {
            setInViewport(false);
          }
        }
      }, opt);

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return inViewPort;
}

export default useInViewport;

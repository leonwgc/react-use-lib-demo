import { RefObject, useEffect, useState } from 'react';
import 'intersection-observer';

function useInViewport(ref: RefObject<HTMLElement>, options?: IntersectionObserverInit): boolean {
  const [inViewPort, setInViewport] = useState<boolean>();

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInViewport(true);
          } else {
            setInViewport(false);
          }
        }
      }, options);

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

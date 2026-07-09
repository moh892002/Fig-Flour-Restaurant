import { useState, useEffect, useRef } from "react";
import { Suspense } from "react";

export default function VisibilityLoader({ children, fallback }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {visible ? (
        <Suspense fallback={fallback || <div>Loading...</div>}>
          {children}
        </Suspense>
      ) : (
        fallback || (
          <div className="h-32 animate-pulse bg-gray-200 rounded mx-auto container" />
        )
      )}
    </div>
  );
}

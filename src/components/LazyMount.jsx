import { Suspense, useEffect, useRef, useState } from "react";

const Spinner = () => (
  <div className="w-full h-full flex items-center justify-center">
    <span className="canvas-loader" aria-label="Loading 3D scene" role="status" />
  </div>
);

/**
 * Mounts its children (and downloads their lazy chunks) only while the
 * wrapper is near the viewport. Used for WebGL canvases so off-screen scenes
 * don't keep rendering, which saves GPU/battery and avoids browser
 * WebGL-context limits.
 */
const LazyMount = ({ children, rootMargin = "200px", className = "" }) => {
  const ref = useRef(null);
  // Without IntersectionObserver support, just render immediately.
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {visible ? <Suspense fallback={<Spinner />}>{children}</Suspense> : null}
    </div>
  );
};

export default LazyMount;

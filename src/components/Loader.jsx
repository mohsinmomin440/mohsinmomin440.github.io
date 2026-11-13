import { useProgress } from "@react-three/drei";

/**
 * DOM overlay (rendered next to the <Canvas>, not inside it) showing asset
 * loading progress. Using drei's <Html> inside the canvas fallback conflicted
 * with lazily mounting/unmounting canvases, so progress is read from the
 * global three.js loading manager instead.
 */
const CanvasLoader = () => {
  const { active, progress } = useProgress();
  if (!active) return null;

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
      role="status"
      aria-live="polite"
    >
      <span className="canvas-loader" />
      <p className="mt-10 text-[14px] font-extrabold text-[#f1f1f1]">
        {progress.toFixed(0)}%
      </p>
    </div>
  );
};

export default CanvasLoader;

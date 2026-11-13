import { lazy } from "react";

// Heavy three.js scenes are split into their own chunks and loaded on demand.
export const EarthCanvas = lazy(() => import("./Earth"));
export const ComputersCanvas = lazy(() => import("./Computers"));
export const StarsCanvas = lazy(() => import("./Stars"));

import { MotionConfig } from "framer-motion";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
  LazyMount,
} from "./components";

const App = () => {
  return (
    // reducedMotion="user" disables transform/layout animations for people
    // who enabled "reduce motion" in their OS.
    <MotionConfig reducedMotion="user">
      <div className="relative z-0 bg-primary min-h-screen text-white">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <main>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            <LazyMount className="absolute inset-0 z-[-1]" rootMargin="0px">
              <StarsCanvas />
            </LazyMount>
          </div>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default App;

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HeroCamera from "../components/HeroCamera";
import HackerRoom from "../components/HackerRoom";
import Loader from "../components/Loader";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Ring from "../components/Ring";
import Button from "../components/Button";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 480 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-genderalsans">
          Hi, I am Robbie <span className="waving-hand">👋</span>{" "}
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<Loader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Ring position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 w-full z-10 c-space flex justify-center">
        <a href="#about" className="w-fit block">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-wit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;

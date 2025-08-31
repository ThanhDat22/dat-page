import { useRef } from "react";
import OrbitBackground from "./OrbitBackground";        
import BubbleBackground from "./BubbleBackground";
import HeroBackground from "./HeroBackground";
import StarfieldParallax from "./StarfieldParallaxBackground";
import ConstellationNetwork from "./ConstellationNetworkBackground";
import MatrixRain from "./MatrixRainBackground";
import SquareOrbitBackground from "./SquareOrbitBackground";
import AuroraWaves from "./AuroraWavesBackground";



// Add more backgrounds here
const registry = [
  (props: any) => <OrbitBackground {...props} />,       // rings + particles
  (props: any) => <BubbleBackground {...props} />,      // floating bubbles
  (props: any) => <HeroBackground {...props} />,        // gradient + particles
  (props: any) => <StarfieldParallax {...props} />,     // parallax stars
  (props: any) => <ConstellationNetwork {...props} />,  // network of stars
  (props: any) => <MatrixRain {...props} />,           // matrix rain
  (props: any) => <SquareOrbitBackground {...props} />, // square orbit
  (props: any) => <AuroraWaves {...props} />,           // aurora waves

];

export default function BackgroundSwitcher() {
  // Pick once per mount so it doesn't change during a render cycle
  const indexRef = useRef<number>(Math.floor(Math.random() * registry.length));
  const Background = registry[indexRef.current];
  return (
    <Background
      // optional: tweak per background via props
      accent="#f59e0b"
      speed={1}
    />
  );
}

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const LogoShow = () => {
  // gsap.registerPlugin(useGSAP);

  const sliderRef = useRef(null);

  useGSAP(() => {
    const slider = sliderRef.current;

    // Duplicate content for seamless infinite scrolling
    const clones = slider.innerHTML; // Clone all child elements
    slider.innerHTML += clones; // Append cloned elements for continuous loop

    const sliderWidth = slider.scrollWidth / 2; // Half (original) width

    // GSAP animation
    gsap.to(slider, {
      x: -sliderWidth, // Move entire slider by its width
      duration: 20, // Total duration for the scroll (adjust as needed)
      ease: "linear",
      repeat: -1, // Infinite loop
    });
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white py-6">
      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex items-center justify-start space-x-12"
        style={{ width: "max-content" }}
      >
        {/* Logos */}
        <img className="h-16" src="/logos/audi.png" />
        <img className="h-16" src="/logos/honda.png" />
        <img className="h-16" src="/logos/nissan.png" />
        <img className="h-16" src="/logos/bmw.svg" />
        <img className="h-16" src="/logos/opel.png" />
        <img className="h-16" src="/logos/tesla_logo.png" />
      </div>
    </div>
  );
};

export default LogoShow;

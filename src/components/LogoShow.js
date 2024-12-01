import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LogoShow = () => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.to(".slider .box", {
      xPercent: -100,
      duration: 16,
      repeat: -1,
      ease: "none",
    });
  });

  return (
    <div className="slider flex overflow-hidden bg-white">
      <div className="box min-w-full flex items-center justify-evenly py-6">
        <img className="h-8 md:h-12" src="/logos/audi.png" />
        <img className="h-8 md:h-12" src="/logos/honda.png" />
        <img className="h-8 md:h-12" src="/logos/nissan.png" />
        <img className="h-8 md:h-12" src="/logos/bmw.svg" />
        <img className="h-8 md:h-12" src="/logos/opel.png" />
        <img className="h-8 md:h-12" src="/logos/tesla_logo.png" />
      </div>
      <div className="box min-w-full flex items-center justify-evenly py-6">
        <img className="h-8 md:h-12" src="/logos/audi.png" />
        <img className="h-8 md:h-12" src="/logos/honda.png" />
        <img className="h-8 md:h-12" src="/logos/nissan.png" />
        <img className="h-8 md:h-12" src="/logos/bmw.svg" />
        <img className="h-8 md:h-12" src="/logos/opel.png" />
        <img className="h-8 md:h-12" src="/logos/tesla_logo.png" />
      </div>
    </div>
  );
};

export default LogoShow;

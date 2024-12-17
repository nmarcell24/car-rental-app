import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatsCounter = () => {
  const stats = [
    { id: 1, target: 7, suffix: "+ Years", description: "In the rental market, premium cars redefine luxury travel experiences." },
    { id: 2, target: 72, suffix: "+ Cars", description: "Premium cars redefine luxury travel with unmatched style and sophistication." },
    { id: 3, target: 1, suffix: "+ bln.", description: "EuroElite Cars fleet is valued in euros, representing its premium quality and European sophistication." },
  ];

  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach((el, index) => {
      const stat = stats[index];
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: stat.target,
          duration: 2,
          scrollTrigger: {
            trigger: el,
            start: "top 90%", // Starts when 90% of the viewport reaches the stat
            toggleActions: "play none none reverse",
          },
          snap: { innerText: 1 }, // Increment one at a time
          ease: "power1.out",
          onUpdate: function () {
            el.innerText = Math.round(el.innerText);
          },
        }
      );
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-around items-center gap-8 py-16 bg-gray-50">
      {stats.map((stat, index) => (
        <div key={stat.id} className="text-center">
          <div className="flex justify-center items-center">
            <span className="text-5xl font-bold text-black">
              <span ref={(el) => (countersRef.current[index] = el)}>0</span>
              {stat.suffix}
            </span>
          </div>
          <p className="text-gray-600 mt-4 max-w-xs mx-auto text-sm">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsCounter;

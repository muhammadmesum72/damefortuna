import React, { useEffect } from "react";
import Moon1 from "../assets/phase1.png";
import Moon2 from "../assets/phase2.png";
import Moon3 from "../assets/phase3.png";
import Moon4 from "../assets/phase4.png";
import Moon5 from "../assets/phase5.png";
import PhaseComponent from "./Roadmap/PhaseComponent";
import PhaseComponentRev from "./Roadmap/PhaseComponentRev";

const Roadmap = () => {
  const phase1 = {
    id: 1,
    info: "Launch of our digital Tarot NFT Deck collection",
    icon: Moon1,
  };
  const phase2 = {
    id: 2,
    info: "Introduce NFTs into the realm of astrology and self discovery",
    icon: Moon2,
  };
  const phase3 = {
    id: 3,
    info: "Become one with your fate and embrace your fortune",  
    icon: Moon3,
  };
  const phase4 = {
    id: 4,
    info: "Bring our tarot deck into the physical world",
    icon: Moon4,
  };
  const phase5 = {
    id: 5,
    info: "Expand our community celebrating empowerment, inclusivity & opportunity for all.",
    icon: Moon5,
  };

  return (
    <div id="roadmap" className="pt-36 relative">
      <div className="text-center">
        <h1 className="text-3xl pb-3">Roadmap</h1>
        <p>Embark on a celestial roadmap together as our Tarot NFT project unfolds.</p>
      </div>
      <div className="flex flex-col gap-9 w-full relative my-12 overflow-hidden">
        <div className=" h-full mt-6 md:mt-0 absolute top-1/2 left-1/2 right-auto bottom-auto -mr-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px]  bg-white "></div>

        {/* Phase 01 */}
        <PhaseComponent id={phase1.id} icon={phase1.icon} info={phase1.info} />
        {/* Phase 02 */}
        <PhaseComponentRev
          id={phase2.id}
          icon={phase2.icon}
          info={phase2.info}
        />
        {/* Phase 03 */}
        <PhaseComponent id={phase3.id} icon={phase3.icon} info={phase3.info} />

        {/* Phase 04 */}
        <PhaseComponentRev
          id={phase4.id}
          icon={phase4.icon}
          info={phase4.info}
        />
        {/* Phase 05 */}
        <PhaseComponent id={phase5.id} icon={phase5.icon} info={phase5.info} />
      </div>
    </div>
  );
};

export default Roadmap;

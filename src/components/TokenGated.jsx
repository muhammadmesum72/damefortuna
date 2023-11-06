import React from "react";
import Card1 from "../assets/BullCard.png";
import Card2 from "../assets/Stablecoin.png";
import Card3 from "../assets/Genesisblock.png";

const TokenGated = () => {
  const walletNfts = [
    {
      img: Card1,
      name: "The Bull Market",
      desc: "In life, there are times of abundance and prosperity, where everything falls into place and we reap the rewards of our efforts. This is a period of growth, success, and confidence. Embrace this energy and seize the opportunities that come your way. Harness your inner strength and believe in your abilities. The universe is aligning in your favor, and with determination, you will thrive.",
    },
    {
      img: Card2,
      name: "The Genesis Block",
      desc: "Every journey begins with a single step. The Genesis Block signifies the start of something new and promising in your life. It may be a new project, relationship, or personal endeavor. This is a time of immense potential and fresh beginnings. Embrace the excitement and optimism that comes with venturing into the unknown. Lay a strong foundation and let your dreams take shape. The possibilities are endless if you have the courage to take that first leap.",
    },
    {
      img: Card3,
      name: "The Moonshot",
      desc: "Life presents us with opportunities that carry risk but also the potential for great rewards. The Moonshot represents a daring adventure, a leap of faith into uncharted territories. It may be a career change, a personal goal, or an unconventional path you feel drawn to. Trust your intuition and believe in your dreams. Embrace the unknown with courage and determination. Though the journey may be challenging, the potential rewards are boundless if you dare to reach for the moon.",
    },

  ];
  return (
    <div id="tokenGated" className={`w-full py-36  ${walletNfts.length <= 3  && "md:h-screen"}`}>
      {walletNfts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-fit gap-24 ">
          {walletNfts.map((wNft) => (
            <div
              data-aos="zoom-in"
              class="card-container text-center px-3 bg-black bg-opacity-50 text-primary rounded-xl"
            >
              <div class="card">
                <div class="front  text-center flex flex-col items-center justify-center">
                  <img src={wNft.img} alt="" className="h-80 mx-auto" />
                  <div className="pt-3 text-xl">{wNft.name}</div>
                </div>
                <div class="back text-justify flex flex-col items-center justify-center">
                  <h1 className="text-xl font-bold">Description</h1>
                  <p className="text-white text-sm">{wNft.desc}</p>
                </div>
              </div>
            </div>
          
          ))}
        </div>
        
      ) : (
        <>
          <button>Connect Wallet</button>
        </>
      )}
    </div>
  );
};

export default TokenGated;

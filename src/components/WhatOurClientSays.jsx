import FeedBackCard from "./FeedBackCard";
import Avatar1 from "../assets/Images/Avatar1.svg";
import Avatar2 from "../assets/Images/Avatar2.svg";
import Avatar3 from "../assets/Images/Avatar3.svg";
import ArrowRightCircle from "../assets/SVG/ArrowRightCircle";
import ArrowLeftCircleSVG from "../assets/SVG/ArrowLeftCircleSVG";

const cardsData = [
  { image: Avatar1, name: "Ahmed" },
  { image: Avatar2, name: "Bakr" },
  { image: Avatar3, name: "Mohamed" },
];

export default function WhatOurClientSays() {
  return (
    <div className="bg-backGroundColor z-0 px-5 lg:px-24 pb-60">
      <div>
        <div className="flex items-center justify-center">
          <button className="mx-auto text-base sm:text-xl font-semibold text-mainColor bg-white border border-transparent rounded-full mt-20 px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-6 mb-4">
            Read More
          </button>
        </div>
        <div className="relative">
          <div className="bg-mainColor w-1/3 rounded-r-full h-full absolute z-0 -top-11 -left-56"></div>
          <div className="bg-mainColor w-1/3 rounded-l-full h-full absolute z-0 -top-11 -right-56"></div>
          <h1 className="capitalize text-white text-4xl text-center font-semibold mt-6 lg:mt-44">
            What <span className="text-mainColor">Our client</span> says
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 lg:mt-32 z-50">
            {cardsData.map((card, index) => (
              <FeedBackCard key={index} cardData={card} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-20 z-50">
            <ArrowLeftCircleSVG />
            <ArrowRightCircle />
          </div>
        </div>
      </div>
    </div>
  );
}

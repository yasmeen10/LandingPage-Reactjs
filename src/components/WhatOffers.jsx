import background from "../assets/Images/offersBG.svg";
import ArrowRightUpSVG from "../assets/SVG/ArrowRightUpSVG";
import Rectangle11 from "../assets/Images/Rectangle11.svg";
import Rectangle12 from "../assets/Images/Rectangle12.svg";
import Rectangle13 from "../assets/Images/Rectangle13.svg";
import OffersCard from "./OffersCard";

const cardsData = [
  {
    image: Rectangle11,
    text: 'With "NQLYAT solutions", you can reach a fleet size that is three times larger than what other cargo loading platforms offer to intermediaries. ',
  },
  {
    image: Rectangle12,
    text: 'The selected plans include the" NQLYAT solutions " carrier monitoring service, a service that helps you quickly qualify carriers, avoid the risks of interrupted service, and ensure safety compliance. ',
  },
  {
    image: Rectangle13,
    text: 'In addition, "NQLYAT Solutions" offers additional services such as registration and cargo tracking to provide accurate timing of tracking, as well as connecting to a ready-made network of carriers equipped to track loads instantly.',
  },
];

export default function WhatOffers() {
  return (
    <div
      className="bg-cover bg-center h-full relative z-10 px-5 lg:px-24 pt-20 pb-52"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="relative">
        <div className="flex relative">
          <div className="absolute">
            <ArrowRightUpSVG
              color={"text-white"}
              size={"size-20"}
              opacity={"opacity-5"}
            />
          </div>
          <div className="absolute left-5 lg:left-9 top-1">
            <ArrowRightUpSVG
              color={"text-mainColor"}
              size={"size-14"}
              opacity={"opacity-100"}
            />
          </div>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2  gap-6  mt-20 ml-5">
          <div className="">
            <p className="text-white font-medium text-lg">
              Speeding up the carrier registration process and minimizing risks
              is part of the effective process of shipping agencies.
            </p>
            <p className="text-white text-2xl font-semibold">
              <span className="text-mainColor">
                &#x0022;NQLYAT Solutions &#x0022;
              </span>{" "}
              offers a comprehensive solution that goes beyond the basic data of
              tonnage and freight.
            </p>
          </div>
          <p className="text-white font-semibold text-2xl pt-12">
            <span className="text-mainColor">Our customers</span> get exclusive
            access to the best carrier monitoring services and smooth
            registration processes, as well as Advanced Cargo Tracking
            Solutions, setting a new standard in freight brokerage
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20 lg:absolute">
          {cardsData.map((card, index) => (
            <OffersCard key={index} index={index} cardData={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

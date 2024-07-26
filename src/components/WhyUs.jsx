import ArrowRightUpSVG from "../assets/SVG/ArrowRightUpSVG";
import Rectangle1 from "../assets/Images/Rectangle1.svg";
import Rectangle2 from "../assets/Images/Rectangle2.svg";
import Rectangle3 from "../assets/Images/Rectangle3.svg";
import Rectangle4 from "../assets/Images/Rectangle4.svg";
import Rectangle5 from "../assets/Images/Rectangle5.svg";
import Rectangle6 from "../assets/Images/Rectangle6.svg";
import Rectangle7 from "../assets/Images/Rectangle7.svg";
import Numbers from "../assets/Images/numbers.svg";
import Track from "../assets/Images/track.svg";
import Hand from "../assets/Images/ok.svg";
import Check from "../assets/Images/check-mark (1).svg";
import ArrowRightCircle from "../assets/SVG/ArrowRightCircle";
import ArrowLeftCircleSVG from "../assets/SVG/ArrowLeftCircleSVG";
import WhyUsCard from "./WhyUsCard";

const benefits = [
  "transportation solutions",
  "shipping",
  "charger",
  "middle East",
  "north africa",
  "loads",
  "communication",
  "agreements",
  "acceleration",
  "business growth",
  "ease",
];

const cardsData = [
  {
    image: Numbers,
    text: 'Cargo loading platforms from "NQLYAT solutions" are designed to simplify your operations and keep your cargo in constant motion. ',
  },
  {
    image: Hand,
    text: "We rely on actual transactions to deliver accurate market prices across various routes, while peer reviews direct you to the perfect carrier every time.",
  },
  {
    image: Track,
    text: 'With "transportation solutions", you can publish and search for trucks without limits, and stay informed thanks to instant alerts even when you are offline.',
  },
];

export default function WhyUs() {
  return (
    <div className="bg-backGroundColor pb-32 ">
      <div className="relative">
        <div className="bg-mainColor w-1/3 rounded-r-full h-full absolute z-0 -top-11 -left-32"></div>
        <div className="bg-mainColor w-1/3 rounded-l-full h-full absolute z-0 -top-11 -right-32"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-24 pl-5 lg:pl-24">
          <div className="px-5 lg:pr-24 z-50">
            <div className="flex justify-between mb-10">
              <div className="flex relative">
                <div className="absolute">
                  <ArrowRightUpSVG
                    color={"text-white"}
                    size={"size-20"}
                    opacity={"opacity-5"}
                  />
                </div>
                <div className="absolute left-9 top-1">
                  <ArrowRightUpSVG
                    color={"text-white"}
                    size={"size-14"}
                    opacity={"opacity-100"}
                  />
                </div>
              </div>
              <div className="flex">
                <ArrowLeftCircleSVG />
                <ArrowRightCircle />
              </div>
            </div>
            <p className="capitalize text-white font-semibold text-2xl md:text-xl sm:text-lg">
              Take advantage of the superior load-loading platforms of
              &#x0022;NQLYAT Solutions&#x0022;, which serve intermediaries of
              all sizes. Whether you are an emerging broker or a country-wide
              operation, the pallets for loading cargo for brokers from
              &#x0022;Transport Solutions&#x0022; guarantee prompt delivery of
              your shipments.
            </p>
            <p className="text-white capitalize font-semibold text-lg md:text-base sm:text-sm mt-6">
              Cargo loading platforms from &#x0022;NQLYAT Solutions&#x0022; are
              designed to simplify your operations and keep your cargo in
              constant motion. We rely on actual transactions to deliver
              accurate market prices across various routes, while peer reviews
              direct you to the perfect carrier every time. With
              &#x0022;Transportation Solutions &#x0022;, you can publish and
              search for trucks without limits, and stay informed thanks to
              instant alerts even when you are offline.
            </p>
            <div className="my-16 flex flex-col lg:flex-row">
              <button className="capitalize text-xl font-semibold text-mainColor bg-white py-4 px-10 border border-transparent rounded-full mb-4 lg:mb-0 lg:mr-4">
                get a quote
              </button>
              <button className="capitalize text-xl font-semibold text-white bg-transparent py-4 px-10 border border-white rounded-full">
                learn more
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-1/3 h-1/4 rounded-full bg-mainColor absolute z-0 blur-3xl top-1/3"></div>
            <div
              className="absolute z-30 right-10 lg:right-40 rounded-3xl"
              style={{ boxShadow: "0 20px 20px rgba(0, 0, 0, 0.5)" }}
            >
              <img src={Rectangle1} className="rounded-3xl" />
            </div>
            <div
              className="absolute z-20 top-10 left-10 lg:left-32 rounded-3xl"
              style={{ boxShadow: "0 20px 20px rgba(0, 0, 0, 0.5)" }}
            >
              <img src={Rectangle2} className="rounded-3xl" />
            </div>
            <div
              className="absolute z-10 w-1/2 right-0 top-24 lg:top-16 rounded-3xl"
              style={{ boxShadow: "0 20px 20px rgba(0, 0, 0, 0.5)" }}
            >
              <img src={Rectangle3} className="rounded-l-3xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="pl-24 mt-12">
        <div className="flex relative">
          <div className="absolute">
            <ArrowRightUpSVG
              color={"text-white"}
              size={"size-20"}
              opacity={"opacity-5"}
            />
          </div>
          <div className="absolute left-9 top-1">
            <ArrowRightUpSVG
              color={"text-mainColor"}
              size={"size-14"}
              opacity={"opacity-100"}
            />
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-24 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-96 lg:mt-24">
        {cardsData.map((card, index) => (
          <WhyUsCard
            key={index}
            index={index}
            image={card.image}
            text={card.text}
          />
        ))}
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-12 px-5 lg:px-24 mt-32 relative">
        <div className="w-1/4 h-1/3 rounded-full bg-mainColor absolute z-0 blur-3xl -left-72 top-1/4"></div>
        <div className="w-1/4 h-1/3 rounded-full bg-mainColor absolute z-0 blur-3xl -right-72 top-1/4"></div>
        <div className="grid grid-cols-2 gap-6 z-10">
          <div className="">
            <div
              className="rounded-3xl mb-6"
              style={{ boxShadow: "0 20px 20px rgba(0, 0, 0, 0.5)" }}
            >
              <img src={Rectangle4} className="rounded-3xl" />
            </div>
            <div
              className="rounded-3xl"
              style={{ boxShadow: "0 20px 20px rgba(0, 0, 0, 0.5)" }}
            >
              <img src={Rectangle5} className="rounded-3xl" />
            </div>
          </div>
          <div>
            <div
              className="rounded-3xl mb-6"
              style={{ boxShadow: "0 20px 20px rgba(0, 0, 0, 0.5)" }}
            >
              <img src={Rectangle6} className="rounded-3xl" />
            </div>
            <div
              className="rounded-3xl"
              style={{ boxShadow: "0 20px 20px rgba(0, 0, 0, 0.5)" }}
            >
              <img src={Rectangle7} className="rounded-3xl" />
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-4xl font-semibold text-mainColor capitalize">
            NQLYAT loading platform
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className={`flex gap-2 items-center border border-transparent rounded-full bg-white bg-opacity-5 py-2 px-6 w-full lg:w-fit mb-4 col-span-2 ${
                  index === 0 ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                <img src={Check} />
                <span className="text-white font-semibold text-xl capitalize">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

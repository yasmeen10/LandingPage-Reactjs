import ArrowRightUpSVG from "../assets/SVG/ArrowRightUpSVG";
import background from "../assets/Images/AdvantageImg.svg";
import Rectangle8 from "../assets/Images/Rectangle8.svg";
import Rectangle9 from "../assets/Images/Rectangle9.svg";
import Rectangle10 from "../assets/Images/Rectangle10.svg";

export default function Advantage() {
  return (
    <div
      className="bg-cover bg-center relative z-10 px-5 lg:px-24 py-32"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div>
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
      </div>
      <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-8 sm:mb-12 w-full sm:w-4/5 mx-auto px-4">
        Elevate your organization with the leading Naqlyat loading panel for
        Achieve a national vision for your loads and expand your capacity and
        profitability by using industry-leading load loading platforms for
        brokers from &#x0022;NQLYAT Solutions&#x0022;.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-36">
        <div className="bg-mainColor rounded-3xl pt-4 px-4 pb-8">
          <div className="">
            <img src={Rectangle8} className="w-full" />
          </div>
          <p className="text-white font-medium text-sm text-center w-3/4 mx-auto mt-10">
            Take advantage of the reliability and flexibility offered by
            &#x0022;NQLYAT Solutions&#x0022; to upgrade your business as a
            broker.
          </p>
        </div>
        <div className="bg-white bg-opacity-5 rounded-3xl pt-4 px-4 pb-8">
          <div className="">
            <img src={Rectangle9} className="w-full" />
          </div>
          <p className="text-white font-medium text-sm text-center w-3/4 mx-auto mt-10">
            Cargo loading platforms for brokers from &#x0022;Transport
            Solutions&#x0022; connect you with the widest network of drivers,
            allowing you to quickly match truckloads at the right price.
          </p>
        </div>
        <div className="bg-white bg-opacity-5 rounded-3xl pt-4 px-4 pb-8">
          <div className="">
            <img src={Rectangle10} className="w-full" />
          </div>
          <p className="text-white font-medium text-sm text-center w-3/4 mx-auto mt-10">
            Take a positive step forward by monitoring capacity and taking
            advantage of our market trend data.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="mx-auto text-base sm:text-xl font-semibold text-mainColor bg-white border border-transparent rounded-full mt-20 px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-6 mb-4">
          Read More
        </button>
      </div>
    </div>
  );
}

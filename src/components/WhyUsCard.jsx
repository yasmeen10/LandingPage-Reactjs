import ArrowDownRightSVG from "../assets/SVG/ArrowDownRightSVG";

export default function WhyUsCard(props) {
  const { image, text, index } = props;
  return (
    <div
      className={`border border-transparent rounded-3xl p-10 ${
        index === 0 ? "bg-mainColor" : "bg-white bg-opacity-5"
      }`}
    >
      <div>
        <img src={image} />
      </div>
      <p className="text-white font-semibold text-base w-64 mt-10 mb-5">
        {text}
      </p>
      <div className="border rounded-full w-12 py-3 flex  justify-center ml-auto">
        <ArrowDownRightSVG />
      </div>
    </div>
  );
}

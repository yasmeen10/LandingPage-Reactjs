import StartSVG from "../assets/SVG/StartSVG";

export default function FeedBackCard(props) {
  const { cardData } = props;
  return (
    <div
      className="bg-white rounded-3xl px-6 py-6 z-50"
      style={{ boxShadow: "0 20px 20px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="flex items-center justify-between">
        <div className="">
          <img src={cardData?.image} />
        </div>
        <div className="flex flex-col gap-1 w-3/4">
          <span className="block text-black font-semibold text-xl">
            {cardData?.name}
          </span>
          <span className="block text-black font-medium text-base">Owner</span>
          <div className="flex">
            <StartSVG />
            <StartSVG />
            <StartSVG />
            <StartSVG />
            <StartSVG />
          </div>
        </div>
      </div>
      <p className="text-base text-black font-normal mt-6">
        Lorem ipsum dolor sit amet consectetur. Tincidunt pharetra duis enim
        donec etiam tellus. Ac malesuada bibendum faucibus sollicitudin in amet
        at. Mauris donec pellentesque sit velit massa sem eget ligula. Morbi
        elit quis placerat pharetra in.
      </p>
    </div>
  );
}

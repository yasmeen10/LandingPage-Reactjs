export default function OffersCard(props) {
  const { cardData, index } = props;
  return (
    <div
      className="bg-cover bg-center rounded-3xl pt-28"
      style={{
        backgroundImage: `url(${cardData?.image})`,
        boxShadow: "0 20px 20px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="bg-gradient-to-b from-white/0 to-mainColor/75 px-6 rounded-3xl pb-10 pt-6 h-full">
        <div>
          <span className="text-mainColor font-semibold text-5xl">
            {index + 1}
          </span>{" "}
          <span className="text-white font-semibold text-xl"> {index + 1}</span>
        </div>
        <p className="text-white text-base font-semibold ">{cardData.text}</p>
      </div>
    </div>
  );
}

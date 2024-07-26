import headerImage from "../assets/Images/heagerImage.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div
      className="bg-cover bg-center relative z-10"
      style={{
        backgroundImage: `url(${headerImage})`,
      }}
    >
      <Navbar />
      <div className="w-full max-w-4xl mx-auto py-16 sm:py-32 lg:py-52 flex flex-col items-center text-center">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl capitalize mb-4 sm:mb-6">
          Intermediaries in{" "}
          <span className="text-mainColor block">
            &#x0022;NQLYAT solutions&#x0022;
          </span>
        </h1>
        <p className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12">
          can now transport more cargo and tackle any logistical challenge,
          thanks to access to the largest fleet and the widest data in the
          market.
        </p>
        <button
          className="text-base sm:text-xl font-semibold text-mainColor bg-white border border-transparent rounded-full px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-6 mb-4"
          style={{ boxShadow: "0 5px 10px rgba(240, 83, 38, 0.5)" }}
        >
          Get In Touch
        </button>
      </div>
    </div>
  );
}

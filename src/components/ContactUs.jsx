import background from "../assets/Images/ContactBg.svg";
import Rectangle14 from "../assets/Images/Rectangle14.svg";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <div
      className="bg-cover bg-center relative z-10 px-5 lg:px-24 py-20"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h1 className="text-white font-semibold text-4xl text-center">
        <span className="text-mainColor">Get</span> a Competitive Instant Quote
      </h1>
      <h3 className="text-white font-semibold text-2xl text-center w-3/5 mx-auto">
        Fill out the form for LTL and Full Truckload rates. Quick access without
        login!
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-28">
        <div className="border bg-white col-span-2 bg-opacity-5 rounded-3xl border-transparent p-10">
          <ContactForm />
        </div>
        <div className="">
          <img src={Rectangle14} className="h-full object-cover rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

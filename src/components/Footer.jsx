import logo from "../assets/Images/logo.png";
import headerImage from "../assets/Images/heagerImage.png";
import faceBookIcon from "../assets/Images/facebook.svg";
import instgramIcon from "../assets/Images/instagram.svg";
import twitterIcon from "../assets/Images/twitter.svg";
import threadIcon from "../assets/Images/threads.svg";
import EmailSVG from "../assets/SVG/EmailSVG";
import PhoneSVG from "../assets/SVG/PhoneSVG";

const navigation = [
  { name: "Home", href: "#", selected: true },
  { name: "Solutions", href: "#", selected: false },
  { name: "Pricing", href: "#", selected: false },
  { name: "Services", href: "#", selected: false },
  { name: "About Us", href: "#", selected: false },
  { name: "News", href: "#", selected: false },
  { name: "Contact Us", href: "#", selected: false },
];

export default function Footer() {
  return (
    <div className="bg-backGroundColor flex flex-col lg:flex-row justify-between">
      <div className="p-6 lg:pl-24 lg:py-32 lg:pr-10 flex flex-col lg:flex-row lg:justify-between w-full lg:w-1/2">
        <div className="mb-8 lg:mb-0">
          <img src={logo} className="w-40" alt="Logo" />
          <p className="text-white text-base font-medium capitalize w-full lg:w-64 mt-7">
            Nqlyat solutions: the leading shipping platform with superior
            service quality
          </p>
          <h4 className="text-white text-4xl font-semibold my-7">
            Get in touch
          </h4>
          <ul>
            <li className="flex items-center mb-6">
              <div className="bg-mainColor p-3 border border-transparent rounded-lg mr-4">
                <EmailSVG />
              </div>
              <span className="text-white text-base font-medium">
                marie28@yahoo.com
              </span>
            </li>
            <li className="flex items-center mb-6">
              <div className="bg-mainColor p-3 border border-transparent rounded-lg mr-4">
                <EmailSVG />
              </div>
              <span className="text-white text-base font-medium">
                marie28@yahoo.com
              </span>
            </li>
            <li className="flex items-center mb-6">
              <div className="bg-mainColor p-3 border border-transparent rounded-lg mr-4">
                <PhoneSVG />
              </div>
              <span className="text-white text-base font-medium">
                360.766.0553
              </span>
            </li>
            <li className="flex items-center mb-6">
              <div className="bg-mainColor p-3 border border-transparent rounded-lg mr-4">
                <PhoneSVG />
              </div>
              <span className="text-white text-base font-medium">
                360.766.0553
              </span>
            </li>
          </ul>
        </div>
        <div className="mb-8 lg:mb-0">
          <h1 className="text-white font-semibold text-4xl">Company</h1>
          <ul className="mt-12">
            {navigation.map((nav) => (
              <li
                key={nav.name}
                className={`text-2xl font-semibold mb-6 ${
                  nav.selected ? "text-mainColor" : "text-white"
                }`}
              >
                {nav.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="w-full lg:w-1/2 px-6 lg:px-28 py-16 lg:py-32"
        style={{
          backgroundImage: `url(${headerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h4 className="capitalize text-mainColor font-semibold text-2xl lg:text-4xl">
            Subscribe
          </h4>
          <div className="mt-4 mb-6 flex flex-col lg:flex-row">
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="py-2 px-4 border border-transparent rounded-lg w-full lg:w-72 mb-4 lg:mb-0 lg:mr-6"
            />
            <button className="border border-transparent rounded-lg bg-mainColor py-2 px-6 text-white font-semibold text-base">
              Subscribe
            </button>
          </div>
          <hr />
          <div className="flex items-center gap-5 mt-12 justify-center lg:justify-start">
            <img src={instgramIcon} className="w-8" alt="Instagram" />
            <img src={threadIcon} className="w-8" alt="Threads" />
            <img src={twitterIcon} className="w-8" alt="Twitter" />
            <img src={faceBookIcon} className="w-8" alt="Facebook" />
          </div>
        </div>
      </div>
    </div>
  );
}

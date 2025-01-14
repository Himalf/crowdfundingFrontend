import { BiDonateHeart } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-gray-700 text-white rounded-md px-5 py-3">
      <div className=" text-white  flex  justify-between gap-2 ">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            {" "}
            <span className="text-4xl">
              <BiDonateHeart />
            </span>{" "}
            Fund
          </div>
          <div className="flex flex-col">
            <span>Experience your</span> <span>happiness with donating</span>
          </div>
        </div>
        <div className="flex justify-evenly items-center gap-3 text-sm cursor-pointer">
          <div>
            <div>Donate</div>
            <div>Education Social</div>
            <div>Medicine Disaster</div>
          </div>
          <div>
            <div>Help</div>
            <div>FAQ PrivacyPolicy</div>
            <div>Accessibility Contacts</div>
          </div>
          <div>
            <div>Company</div>
            <div>Education Social</div>
            <div>Medicine Disaster</div>
          </div>
        </div>
      </div>{" "}
      <hr className="text-white bg-white" />
      <div className="flex justify-between items-center px-4 py-2">
        <div>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
        <div className="flex  gap-2 text-xl cursor-pointer items-center">
          <div className="text-sm">Follow us on:</div>
          <div>
            <FaFacebook />
          </div>
          <div>
            <FaInstagram />
          </div>
          <div>
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

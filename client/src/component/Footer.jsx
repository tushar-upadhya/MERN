import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-slate-800 px-8 py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between mb-6">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold mb-2">About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold mb-2">Information</h3>
            <ul className="text-sm">
              <li className="mb-2 cursor-pointer hover:text-slate-500 transition-all duration-200">
                About Us
              </li>
              <li className="mb-2 cursor-pointer hover:text-slate-500 transition-all duration-200">
                Delivery Information
              </li>
              <li className="mb-2 cursor-pointer hover:text-slate-500 transition-all duration-200">
                Privacy Policy
              </li>
              <li className="mb-2 cursor-pointer hover:text-slate-500 transition-all duration-200">
                Terms & Conditions
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold mb-2">Customer Service</h3>
            <ul className="text-sm">
              <li className="mb-2 cursor-pointer hover:text-slate-500 transition-all duration-200">
                Contact Us
              </li>
              <li className="mb-2 cursor-pointer hover:text-slate-500 transition-all duration-200">
                Returns
              </li>
              <li className="mb-2 cursor-pointer hover:text-slate-500 transition-all duration-200">
                Site Map
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold mb-2">Follow Us</h3>
            <div className="flex items-center space-x-3">
              <a
                href="#"
                className="hover:font-bold hover:text-slate-500 transition-all duration-200"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/tusharupadhya/"
                target="_blank"
                className="hover:font-bold hover:text-slate-500 transition-all duration-200"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white pt-6 text-center">
          <p>
            © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

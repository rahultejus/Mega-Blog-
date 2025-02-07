import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo_ftr from "../Logo_ftr";

function Footer() {
  return (
    <footer className="bg-[#0B1C3F]  text-gray-300 py-12 w-full">
      <div className="w-full px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Logo & Copyright */}
          <div>
            <Logo_ftr width="100px" />
            <p className="mt-4 text-sm">&copy; 2025 Rahultejus. All Rights Reserved.</p>
            <div className="flex gap-4 mt-6 mx-auto">
              <Link to='/' className="text-gray-400 hover:text-white transition"> 
                  <FaFacebookF size={20} />
              </Link>
              <Link to="/" className="text-gray-400 hover:text-white transition">
                <FaTwitter size={20} />
              </Link>
              <Link to="/" className="text-gray-400 hover:text-white transition">
                <FaInstagram size={20} />
              </Link>
              <Link to="/" className="text-gray-400 hover:text-white transition">
                <FaLinkedinIn size={20} />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link className="hover:text-white transition" to="/">Features</Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">Pricing</Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">Affiliate Program</Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">Press Kit</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link className="hover:text-white transition" to="/">Account</Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">Help</Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">Contact Us</Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">Customer Support</Link>
              </li>
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legals</h3>
            <ul className="space-y-3">
              <li>
                <Link className="hover:text-white transition" to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">Licensing</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm max-w-7xl mx-auto">
          Made with ❤️ by Rahultejus
        </div>
      </div>
    </footer>
  );
}

export default Footer;

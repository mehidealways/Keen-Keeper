import { FaFacebookF, FaGithub, FaTimes } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12 px-4 mt-10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-3">KeenKeeper</h1>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mb-8">
          <p className="mb-3 text-sm font-medium">Social Links</p>
          <div className="flex justify-center gap-4">
            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FaGithub size={14} />
            </div>

            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FaFacebookF size={14} />
            </div>

            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FaTimes size={14} />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 border-t border-white-400 pt-6">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

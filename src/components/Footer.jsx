

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-wrap justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h4 className="text-red-600 text-lg md:text-xl font-bold mb-2">MovieStream</h4>
            <p className="text-gray-400 text-sm">Explore the world of movies and streams.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h4 className="text-red-600 text-lg md:text-xl font-bold mb-2">Contact Us</h4>
              <p className="text-gray-400 text-sm mb-1">Email: hafizmuhammadfaiasl9918.com</p>
              <p className="text-gray-400 text-sm">Phone: +123 456 7890</p>
            </div>
            <div>
              <h4 className="text-red-600 text-lg md:text-xl font-bold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Instagram</a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-700 text-center">
          © 2024 MovieStream. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

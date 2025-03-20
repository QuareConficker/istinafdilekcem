import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsWhatsapp, BsTelephone, BsChevronDown, BsChevronRight } from 'react-icons/bs';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { title: 'Ana Sayfa', href: '/' },
    { title: 'Hakkımızda', href: '/about' },
    {
      title: 'Hizmetlerimiz',
      href: '/services',
    },
    { title: 'Galeri', href: '/gallery/photos' },
    { title: 'İletişim', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
      {/* Üst Banner */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-sm">
              <span className="font-semibold">Sa</span> Hizmetinizdeyiz!
            </p>
            <div className="flex items-center gap-4">
              <a
                href="tel:+905078076400"
                className="text-sm hover:text-blue-200 transition-colors duration-300 flex items-center gap-1"
              >
                <BsTelephone />
                <span className="hidden sm:inline">0 507 807 64 00</span>
              </a>
              <a
                href="https://wa.me/905078076400"
                className="text-sm hover:text-blue-200 transition-colors duration-300 flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsWhatsapp />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ana Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/*Logo*/}
          <a href="/" className="text-[19px] font-bold text-blue-600">
            KASAPOĞLU OTO KURTARMA
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.href ? (
                  <Link
                    to={link.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center gap-1"
                  >
                    {link.title}
                    {link.subLinks && <BsChevronDown className="text-sm" />}
                  </Link>
                ) : (
                  <div className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center gap-1 cursor-default">
                    {link.title}
                    {link.subLinks && <BsChevronDown className="text-sm" />}
                  </div>
                )}

                {/* Dropdown Menu */}
                {link.subLinks && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {link.subLinks.map((subLink, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subLink.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                      >
                        {subLink.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-4">
          {navLinks.map((link, index) => (
            <div key={index}>
              {link.href ? (
                <Link
                  to={link.href}
                  className="block py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ) : (
                <div
                  className="py-3 text-gray-700 font-medium flex items-center justify-between cursor-pointer"
                  onClick={() => setOpenSubmenu(openSubmenu === index ? null : index)}
                >
                  {link.title}
                  {link.subLinks && (
                    <BsChevronRight className={`text-sm transition-transform duration-300 ${openSubmenu === index ? 'rotate-90' : ''}`} />
                  )}
                </div>
              )}
              {link.subLinks && (
                <div className={`pl-4 border-l-2 border-gray-100 ml-4 space-y-2 overflow-hidden transition-all duration-300 ${openSubmenu === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {link.subLinks.map((subLink, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subLink.href}
                      className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setOpenSubmenu(null);
                      }}
                    >
                      {subLink.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

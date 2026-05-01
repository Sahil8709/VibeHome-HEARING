import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    dropdown: [
      { label: 'About Us', path: '/about' },
      { label: 'How It Works', path: '/about#how-it-works' },
      { label: 'Audiologists', path: '/about#audiologists' },
      { label: 'Testimonials', path: '/about#testimonials' },
      { label: 'FAQ', path: '/about#faq' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
  {
    label: 'Hearing Aids',
    dropdown: [
      { label: 'What is a Hearing Aid?', path: '/hearing-aids' },
      { label: 'Hearing Loss', path: '/hearing-aids#hearing-loss' },
      { label: 'Bluetooth Hearing Aids', path: '/hearing-aids#bluetooth' },
      { label: 'For Senior Citizens', path: '/hearing-aids#seniors' },
      { label: 'For Children', path: '/hearing-aids#children' },
      { label: 'For Tinnitus', path: '/hearing-aids#tinnitus' },
    ],
  },
  {
    label: 'Brands',
    dropdown: [
      { label: 'Signia', path: '/brands#signia' },
      { label: 'Phonak', path: '/brands#phonak' },
      { label: 'Resound', path: '/brands#resound' },
      { label: 'Widex', path: '/brands#widex' },
      { label: 'Starkey', path: '/brands#starkey' },
      { label: 'Oticon', path: '/brands#oticon' },
    ],
  },
  {
    label: 'Types',
    dropdown: [
      { label: 'BTE – Behind the Ear', path: '/types#bte' },
      { label: 'RIC – Receiver in Canal', path: '/types#ric' },
      { label: 'ITE – In the Ear', path: '/types#ite' },
      { label: 'CIC – Completely in Canal', path: '/types#cic' },
      { label: 'IIC – Invisible in Canal', path: '/types#iic' },
      { label: 'ITC – In the Canal', path: '/types#itc' },
    ],
  },
  {
    label: 'Prices',
    path: '/prices',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
]

const Dropdown = ({ items, isOpen }) => {
  return (
    <div
      className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 z-50 transition-all duration-200 ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      <div className="py-2">
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 font-medium"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <div className="leading-tight">
              <span className="block text-blue-700 font-bold text-lg leading-none">VibeHome</span>
              <span className="block text-teal-600 text-xs font-semibold tracking-wide">HEARING</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.path ? (
                  <Link
                    to={link.path}
                    className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-blue-700 rounded-lg hover:bg-blue-50 transition-all duration-150 flex items-center gap-1"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-blue-700 rounded-lg hover:bg-blue-50 transition-all duration-150 flex items-center gap-1"
                  >
                    {link.label}
                    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
                {link.dropdown && (
                  <Dropdown items={link.dropdown} isOpen={openDropdown === link.label} />
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap"
            >
              Book Free Hearing Test
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.path ? (
                <Link
                  to={link.path}
                  className="block px-3 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    {link.label}
                    <svg className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === link.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileExpanded === link.label && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-blue-100 pl-3">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.path}
                          className="block py-2 text-sm text-gray-600 hover:text-blue-700 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}

          {/* Mobile CTA */}
          <div className="pt-2 pb-1">
            <Link
              to="/contact"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-3 rounded-xl transition-colors"
            >
              Book Free Hearing Test
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
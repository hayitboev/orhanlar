'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = [
    { name: 'Ana Sayfa', href: '/' },
    { 
      name: 'Hizmetler', 
      href: '#',
      submenu: [
        { name: 'Ümraniye Boyacı', href: '/umraniye-boyaci' },
        { name: 'Alçı Boya', href: '/alci-boya' },
        { name: 'Alçıpan Ustası', href: '/alcipan-ustasi' },
        { name: 'Seramik Fayans', href: '/seramik-fayans' },
        { name: 'Anahtar Teslim Tadilat', href: '/anahtar-teslim-tadilat' }
      ]
    },
    { name: 'Projeler', href: '/projeler' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'İletişim', href: '/iletisim' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold gold-text">Orhanlar</div>
            <div className="text-2xl font-light dark-gray-text">Dekorasyon</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  className="dark-gray-text hover:text-[#c8a84e] transition-colors font-medium"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm dark-gray-text hover:text-[#c8a84e] hover:bg-gray-50"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Phone Button */}
          <a
            href="tel:+905555555555"
            className="hidden lg:flex items-center space-x-2 btn-primary"
          >
            <Phone className="w-4 h-4" />
            <span>0555 555 55 55</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 dark-gray-text" />
            ) : (
              <Menu className="w-6 h-6 dark-gray-text" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 dark-gray-text hover:text-[#c8a84e] transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-1 text-sm text-gray-600 hover:text-[#c8a84e]"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="tel:+905555555555"
                className="flex items-center space-x-2 btn-primary inline-flex mt-4"
              >
                <Phone className="w-4 h-4" />
                <span>0555 555 55 55</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
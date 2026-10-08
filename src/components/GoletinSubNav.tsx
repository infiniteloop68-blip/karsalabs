'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SubNavLink = {
  label: string;
  href: string;
  isActive?: boolean;
};

export function GoletinSubNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const subNavLinks: SubNavLink[] = [
    { label: 'Ikhtisar', href: '/goletin' },
    { label: 'Apa itu Goletin?', href: '/goletin/apa-itu-goletin' },
    { label: 'Untuk Bisnis', href: '/goletin/bisnis' },
    { label: 'Untuk Enterprise', href: '/goletin/enterprise' },
    { label: 'Untuk Individu', href: '/goletin/individu' },
    { label: 'Untuk Pendidikan', href: '/goletin/pendidikan' },
    { label: 'Untuk Mitra', href: '/goletin/mitra' },
  ];

  return (
    <nav
      className={`goletin-subnav ${isScrolled ? 'is-scrolled is-sticky' : ''}`}
      aria-label="Navigasi Sekunder Goletin"
    >
      <div className="goletin-subnav-container">
        <div className="goletin-subnav-scroll">
          {subNavLinks.map((link) => {
            const isActive = pathname === link.href || (pathname.startsWith('/goletin/mitra') && link.href === '/goletin/mitra');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`goletin-subnav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

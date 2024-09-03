'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export const MobileMenu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Página Inicial', href: '/' },
        { name: 'Cardápio', href: '/cardapio' },
        { name: 'Empresas', href: '/empresas' },
    ];


    return (
        <section className='flex flex-col gap-4'>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <Menu />
            </button>
            {isMobileMenuOpen && (
                <div className='no-doc-scroll absolute right-0 top-0 -z-20 h-screen w-screen bg-white'>
                    <div className='mt-24 flex h-full w-full flex-col items-center justify-start gap-4'>
                        <nav>
                            <ul className='flex flex-col items-center gap-2'>
                                {navLinks.map((link, index) => (
                                    <Link key={index} href={link.href}>
                                        <li className='text-lg'>{link.name}</li>
                                    </Link>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </section>
    );
};

'use client';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';


const BarradeAnuncios = () => {
    return(
        <div className='w-full bg-neutral-950 py-2'>
            <div className='container mx-auto flex items-center justify-center px-8'>
                <span className='text-center text-sm font-medium tracking-wide text-white'>
                    FRETE GRATIS • COMPRAS ABAIXO DE 15R$ SÃO GRÁTIS
                </span>
            </div>
        </div>
    )
}

const Header = () => {

    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [prevScrollY, setPrevScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrolledUp = currentScrollY < prevScrollY;

            if(scrolledUp) {
                setIsOpen(true);
            } else if (currentScrollY > 100) {
                setIsOpen(false);
            }

            setPrevScrollY(currentScrollY);
        }

        setPrevScrollY(window.scrollY);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [prevScrollY])

    return (
        <header className='w-full sticky top-0 z-50'>
            <div 
            className={`w-full transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <BarradeAnuncios></BarradeAnuncios>

                <div className='w-full flex justify-between items-center py-3 sm:py-4 bg-white/60 shadow-sm border-b border-gray-200 backdrop-blur-sm'>
                    <div className='flex justify-between items-center container mx-auto px-8'>
                        <div className='flex flex-1 justify-start items-center gap-4 sm:gap-6'>
                            <button className='text-gray-700 hover:text-gray-950 md:hidden'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            <nav className='hidden md:flex gap-4 lg:gap-6 text-sm font-medium'>
                                <Link href='#'>Comprar</Link>
                                <Link href='#'>Novidades</Link>
                                <Link href='#'>Ofertas</Link>
                            </nav>

                        </div>



                        <div className='flex flex-1 justify-end items-center gap-2 sm:gap-4'>
                            <button className='text-gray-700 hover:text-gray-950 hidden sm:block'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"> <circle cx="11" cy="11" r="8" /> <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                            </button>

                            <Link href='/auth/conectar-se'>Conectar-se</Link>
                            <Link href='/auth/desconectar-se'>Desconectar-se</Link>
                            <button className='text-gray-700 hover:text-gray-950 relative'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                    <path d="M3 6h18" />
                                    <path d="M16 10a4 4 0 0 1-8 0" />
                                </svg>
                                <span className='absolute -top-1 -right-1 bg-slate-950 text-white text-[10px] sm:text-xs w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center'>
                                    0
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
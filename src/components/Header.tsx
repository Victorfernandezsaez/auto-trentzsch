import { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import { links } from '../lib/data';
import { useActiveSectionContext } from '../context/active-section-context';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    const [scrolling, setScrolling] = useState(false);

    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolling(scrollTop > 50)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header id='home' className='relative z-[999]'>
            <div className={`flex justify-between items-center w-full text-slate-50 text-lg fixed ${scrolling ? 'bg-slate-900  opacity-95 transition-all' : ''}`}>
                <motion.div
                    className='flex-none px-4'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.25 }}
                >
                    <a href='#home'
                        onClick={() => {
                            setActiveSection('Home')
                            setTimeOfLastClick(Date.now())
                        }}>
                        <img
                            className='h-24 w-auto'
                            src="src/assets/Logo__Auto-Trentzsch_white.png"
                            alt="logo"
                        />
                    </a>
                </motion.div>

                <nav className='relative flex flex-row flex-2 pr-16'>
                    <ul className=" hidden lg:flex sm:space-x-4 font-semibold">
                        {links.map((link) => (
                            <li key={link.name} className="relative px-2 ">
                                <a
                                    className={`flex w-full justify-center items-center hover:text-slate-400 transition ${activeSection === link.name
                                        ? 'text-slate-950 bg-slate-400 hover:text-slate-800 opacity-50 px-4 rounded-full inset-0 -z-10'
                                        : ''
                                        }`}
                                    href={link.hash}
                                    onClick={() => {
                                        setActiveSection(link.name)
                                        setTimeOfLastClick(Date.now())
                                    }}
                                >
                                    {link.name}
                                    {link.name === activeSection && (
                                        <motion.span className=" absolute h-8 bg-slate-200 rounded-full inset-0 -z-10"
                                            layoutId='activeSection'
                                            transition={{
                                                type: 'spring',
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        ></motion.span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="flex sm:hidden text-blue-gray hover:text-slate-400 focus:outline-none"
                        onClick={openDrawer}
                    >
                        {isDrawerOpen ? null : (
                            <Bars3Icon className="h-8 w-8 stroke-2" />
                        )}
                    </button>
                    {isDrawerOpen && (
                        <div className="fixed inset-0 bg-slate-800 bg-opacity-50 z-50" onClick={closeDrawer}></div>
                    )}
                </nav>
            </div>

            <div
                className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="mb-2 flex items-center gap-4 p-4">
                    {isDrawerOpen && (
                        <button
                            className="flex sm:hidden text-blue-gray hover:text-slate-700 focus:outline-none"
                            onClick={closeDrawer}
                        >
                            {isDrawerOpen ? (
                                <XMarkIcon className="h-8 w-8 stroke-2" />
                            ) : null}
                        </button>)}
                </div>
                <div className="p-2">
                    <div className="relative">
                        <ul className="font-semibold ">
                            {links.map((link) => (
                                <li key={link.name} className="flex relative py-6 ">
                                    <a
                                        className={`flex w-full justify-center items-center hover:text-slate-400 transition ${activeSection === link.name
                                            ? 'text-slate-950 bg-slate-400 hover:text-slate-800 opacity-50 px-4 rounded-full inset-0 -z-10'
                                            : ''
                                            }`}
                                        href={link.hash}
                                        onClick={() => {
                                            setActiveSection(link.name)
                                            setTimeOfLastClick(Date.now())
                                        }}
                                    >
                                        {link.name}
                                        {link.name === activeSection && (
                                            <motion.span className="flex justify-center items-center absolute h-8 bg-slate-200 rounded-full inset-0 -z-10 "
                                                layoutId='activeSection'
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 380,
                                                    damping: 30,
                                                }}
                                            ></motion.span>
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </header >
    );
};

export default Header;
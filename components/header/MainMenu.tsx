import React from 'react';
import Link from "next/link";

type MainMenuProps = {
    toggleSubMenu: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const MainMenu = ({ toggleSubMenu }: MainMenuProps) => {
    return (
        <>
            <nav id="main-menu" className="te-main-menu">
                <ul className='te-main-list'>
                    <li className="active">
                        <Link href="/">Home</Link>
                    </li>

                    <li><Link href="/about">About Us</Link></li>
                    <li className="te-dropdown">
                        <Link href="/services" onClick={toggleSubMenu} className='dropdown-expand'>Services</Link>
                        <ul className="te-submenu">
                            {/* <li className='te-list-item'><Link href="/services">All Services</Link></li> */}
                            <li className='te-list-item'><Link href="/service-details/website-development">Website Development</Link></li>
                            <li className='te-list-item'><Link href="/service-details/logo-design">Logo Design</Link></li>
                            <li className='te-list-item'><Link href="/service-details/ecommerce-solutions">Ecommerce Solutions</Link></li>
                            <li className='te-list-item'><Link href="/service-details/animation">Animation</Link></li>
                            <li className='te-list-item'><Link href="/service-details/illustration">Illustration</Link></li>
                            <li className='te-list-item'><Link href="/service-details/marketing-collateral">Marketing Collateral</Link></li>
                            <li className='te-list-item'><Link href="/service-details/mobile-apps">Mobile Apps</Link></li>
                            <li className='te-list-item'><Link href="/service-details/seo-services">SEO Services</Link></li>
                            <li className='te-list-item'><Link href="/service-details/digital-marketing">Digital Marketing</Link></li>
                            <li className='te-list-item'><Link href="/service-details/creative-copywriting">Creative Copywriting</Link></li>
                        </ul>
                    </li>
                    <li className="te-dropdown">
                        <Link href="/projects" onClick={toggleSubMenu} className='dropdown-expand'>Projects</Link>
                        <ul className="te-submenu">
                            <li className='te-list-item'><Link href="/projects">Project Page</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default MainMenu;
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
                            <li className='te-list-item'><Link href="/service-details/1">Website Development</Link></li>
                            <li className='te-list-item'><Link href="/service-details/2">Logo Design</Link></li>
                            <li className='te-list-item'><Link href="/service-details/3">Ecommerce Solutions</Link></li>
                            <li className='te-list-item'><Link href="/service-details/4">Animation</Link></li>
                            <li className='te-list-item'><Link href="/service-details/5">Illustration</Link></li>
                            <li className='te-list-item'><Link href="/service-details/6">Marketing Collateral</Link></li>
                            <li className='te-list-item'><Link href="/service-details/7">Mobile Apps</Link></li>
                            <li className='te-list-item'><Link href="/service-details/8">SEO Services</Link></li>
                            <li className='te-list-item'><Link href="/service-details/9">Digital Marketing</Link></li>
                            <li className='te-list-item'><Link href="/service-details/10">Creative Copywriting</Link></li>
                        </ul>
                    </li>
                    <li className="te-dropdown">
                        <Link href="/projects" onClick={toggleSubMenu} className='dropdown-expand'>Projects</Link>
                        <ul className="te-submenu">
                            <li className='te-list-item'><Link href="/projects">Project Page</Link></li>
                            <li className='te-list-item'><Link href="/project-details/1">Project Details Page</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default MainMenu;
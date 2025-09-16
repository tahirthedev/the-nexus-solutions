import React from 'react';
import Image from "next/image";
import MainMenu from './MainMenu';
import Link from "next/link";
import SocialShare from '../slider/SocialShare';

type SideBarMenuProps = {
    isMenuActive: boolean;
    closeMenu: () => void;
    toggleSubMenu: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const SideBarMenu = ({ isMenuActive, closeMenu, toggleSubMenu }: SideBarMenuProps) => {
    return (
        <>
            <div className={`te-menu-sidebar-area ${isMenuActive ? 'active' : ''}`}>
                <div className="te-menu-sidebar-wrapper">
                    <div className="te-menu-sidebar-close">
                        <button className="te-menu-sidebar-close-btn" id="menu_sidebar_close_btn" onClick={closeMenu}>
                            <i className="fal fa-times"></i>
                        </button>
                    </div>
                    <div className="te-menu-sidebar-content">
                        <div className="te-menu-sidebar-logo">
                            <Link href="/">

                                <Image
                                    src="/images/logo/logo.png"
                                    alt="Image"
                                    width={187}
                                    height={56}
                                />
                            </Link>
                        </div>
                        <div className="te-mobile-nav-menu d-lg-none">
                            <MainMenu toggleSubMenu={toggleSubMenu} />
                        </div>
                        <div className="te-menu-sidebar-content">
                            <div className="te-menu-sidebar-single-widget">
                                <h5 className="te-menu-sidebar-title">Contact Info</h5>
                                <div className="te-header-contact-info">
                                    <span><i className="fa-solid fa-location-dot"></i>2006 Broken Oak Street, San Antonio - Texas 78232-3106</span>
                                    <span><Link href="mailto:info@thenexussolutions.com"><i
                                        className="fa-solid fa-envelope"></i>info@thenexussolutions.com</Link> </span>
                                    <span><Link href="tel:+18042939240"><i className="fa-solid fa-phone"></i>(804) 293-9240</Link></span>
                                </div>
                                <div className="te-social-profile">
                                    <SocialShare />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBarMenu;
import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';

import LogoImg from '../../assets/logo.png';

const Header = () => {
    return (
        <header className={styles.main}>
            <main className={styles.content}>
                <Image
                    src={LogoImg}
                    layout="fixed"
                    width={50}
                    height={50}
                    alt="Design logo"
                />
                <nav className={styles.landingText}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Showcase</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Sign In</li>
                </nav>
            </main>
        </header>
    );
};

export default Header;

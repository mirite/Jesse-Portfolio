import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
            <div className="header-home" aria-label="Site Title">
                <Link href="/"> Jesse Conner </Link>
            </div>
            <nav className={styles.nav} aria-label="Main Navigation">
                <ul>
                    <li className="nav-item">
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/photos">Photos</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    );
};

export default Header;

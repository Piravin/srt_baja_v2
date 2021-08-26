/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import styles from '../styles/Header.module.scss';
import Link from 'next/link';

export default function Header (props) {
    const currentPage = props.page;
    return (
        <div className={styles.main} styles={
            currentPage === "home" ? {} : {scrollSnapAlign: "start"}
        }>
            <div className={styles.logo}>
                <img src="/images/SRT_LOGO_icon.png" alt="SRT logo"/>
                <p>
                    <span>S</span>ASTRA{` `}
                    <span>R</span>acing{` `}
                    <span>T</span>eam{` - Baja`}
                </p>
            </div>
            <div className={styles.navLinks}>
                <div  className={`${styles.navLink} ${
                    currentPage === "home" ? styles.navLinkActive : ""}`}>
                    <Link href={`/`}>
                        <a>Home</a>
                    </Link>
                </div>
                <div  className={`${styles.navLink} ${
                    currentPage === "team" ? styles.navLinkActive : ""}`}>
                    <Link href={`/teams/2021`} className={styles.navLink}>
                        <a>Team</a>
                    </Link>
                </div>
                <div  className={`${styles.navLink} ${
                    currentPage === "cars" ? styles.navLinkActive : ""}`}>
                    <Link href={`/cars/2021`} className={styles.navLink}>
                        <a>Cars</a>
                    </Link>
                </div>
                <div  className={`${styles.navLink}`}>
                    <Link href={`/#about`} className={styles.navLink}>
                        <a>About</a>
                    </Link>
                </div>
                <div  className={`${styles.navLink}`}>
                    <Link href={`/#contact`}>
                        <a>Contact</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
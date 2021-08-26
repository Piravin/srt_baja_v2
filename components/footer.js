import styles from '../styles/Footer.module.scss';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className={styles.main}>
            <h1>SASTRA Racing Team - Baja</h1>
            <p>SASTRA Deemed to be University,</p>
            <p>Thanjavur, Tamil Nadu</p>
        </div>
    )
}
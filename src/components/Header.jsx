/* src/components/Header.jsx */
import styles from './Header.module.css'
import logo from '../assets/logo.svg'

function Header() {
    return (
        <header className={styles.header}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className={styles.logo}>
                    <img src={logo} alt="ロゴ" />
                </div>
                <h1 className={styles.title}>Anime Station</h1>
            </div>
        </header>
    )
}

export default Header
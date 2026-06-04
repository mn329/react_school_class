// rfce
import styles from './ThemeButton.module.css'

function ThemeButton() {
    return (
        <button
            type="button"
            className={styles.button}
        >
            <span className={styles.dot} aria-hidden="true" />
            <span>Light</span>
        </button>
    )
}

export default ThemeButton

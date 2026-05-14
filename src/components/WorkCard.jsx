/* src/components/WorkCard.jsx */
import styles from './WorkCard.module.css'

function WorkCard({ work, onSelect }) {
    return (
        <div className={styles.card} onClick={onSelect}>
            <div className={styles.thumbnailWrapper}>
                <img src={work.image} alt={work.title} className={styles.thumbnail} />
            </div>
            <div className={styles.body}>
                <div className={styles.meta}>
                    <span className={styles.genre}>{work.genre}</span>
                    <span className={styles.year}>{work.year}</span>
                </div>
                <h2 className={styles.title}>{work.title}</h2>
                <p className={styles.description}>{work.description}</p>
            </div>
        </div>
    )
}

export default WorkCard

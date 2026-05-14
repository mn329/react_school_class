/* src/components/WorkList.jsx */
import styles from './WorkList.module.css'
import WorkCard from './WorkCard'

// 作品をクリックするとポップアップを表示
function WorkList({ works, onSelect }) {
    return (
        <div>
            <div className={styles.count}>{works.length} 件</div>
            <div className={styles.grid}>
                {works.map((work) => (
                    <WorkCard key={work.id} work={work} onSelect={() => onSelect(work)} />
                ))}
            </div>
        </div>
    )
}

export default WorkList

import styles from './SearchBar.module.css'
function SearchBar() {
return (
<div className={styles.searchBar}>
<section className={styles.section}>
<h2 className={styles.sectionTitle}>検索キーワード</h2>
</section>
<section className={styles.section}>
<h2 className={styles.sectionTitle}>カテゴリ</h2>
</section>
</div>
)
}
export default SearchBar
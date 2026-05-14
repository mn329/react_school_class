import styles from './App.module.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Anime Station</h2>
        <p className={styles.error}>ここになんか表示</p>
      </main>
      <Footer />
    </div>
  )
}

export default App

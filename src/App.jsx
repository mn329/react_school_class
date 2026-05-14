/* src/App.jsx */
import styles from './App.module.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>注目作品</h2>
        <p>ここに作品を表示します</p>
      </main>

      <Footer />
    </div>
  )
}

export default App
/* src/App.jsx */
import styles from './App.module.css'
import Footer from './components/Footer'
import Header from './components/Header'
import WorkList from './components/WorkList'
// モックデータの読み込み
import { works } from './data/works'

function App() {
  const handleSelectWork = (work) => {
    console.log(work)
  }

  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>注目作品</h2>
        <WorkList works={works} onSelect={handleSelectWork} />
      </main>

      <Footer />
    </div>
  )
}

export default App
/* src/App.jsx */
// useStateのインポート: 状態管理を行うためのReactのビルトイン関数
import { useState } from 'react'
import styles from './App.module.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Modal from './components/Modal'
import SearchBar from './components/SearchBar'
import WorkList from './components/WorkList'
// モックデータの読み込み
import { works } from './data/works'

function App() {
  // 選択された作品のstate
  // const [変数名, set変数名] = useState(初期値)
  const [selectedWork, setSelectedWork] = useState(null)
  const [query, setQuery] = useState("")
  const [selectedGenre, setSelectedGenre] = useState('すべて')
  // ジャンルのリストをworksから抜き出す
  const genres = ['すべて', ...new Set(works.map((w) => w.genre))]

  const filteredWorks = works.filter((work) => work.title.includes(query) && (selectedGenre === 'すべて' || work.genre === selectedGenre))

  return (
    <div className={styles.app}>
      <Header />
      <SearchBar query={query} onQueryChange={setQuery}  genres={genres} selectedGenre={selectedGenre} onGenreChange={setSelectedGenre}/>
      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>作品リスト</h2>
        {/* WorkList コンポーネント表示 */}
        <WorkList works={filteredWorks} onSelect={(work) => setSelectedWork(work)} />
      </main>

      <Footer />

      {/* 選択された作品がある場合はモーダルを表示: 三項演算子 */}
      {selectedWork && (
        // モーダルを表示
        <Modal work={selectedWork} onClose={() => {setSelectedWork(null)}} />
      )}
    </div>
  )
}

export default App

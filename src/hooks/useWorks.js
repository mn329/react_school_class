import { useState, useEffect } from 'react'

// APIサーバのURLを取得
const API_URL = import.meta.env.VITE_API_URL

function useWorks() {
    // 作品データを管理するための状態
    const [works, setWorks] = useState([])
    // ローディング状態を管理するための状態
    const [loading, setLoading] = useState(true)
    // エラー状態を管理するための状態
    const [error, setError] = useState(null)

    // コンポーネントが初回読み込まれたときに
    useEffect(() => {
        // APIサーバから作品データを取得 awaitで通信が完了するまで待つ(非同期処理)
        async function fetchWorks() {
            try{
                // json-server に APIリクエストで作品データを取得
                const response = await fetch(`${API_URL}/works`)
                // JSONをJSオブジェクトに変換して作品データを取得
                const data = await response.json()
                // setWorks関数で作品データを状態に保存
                setWorks(data)
            }
            catch(error){
                setError(error.message)
                console.error('作品データの取得に失敗しました:', error)
            }
            finally{
                setLoading(false)
            }
        }
        // fetchWorks関数を実行して作品データを取得
        fetchWorks()
    }, [])

    // 作品データを返す
    return { works, loading, error }
}

export default useWorks
import { useState, useEffect } from 'react'

// APIサーバのURLを取得
const API_URL = import.meta.env.VITE_API_URL

function useWorks() {
    // 作品データを管理するための状態
    const [works, setWorks] = useState([])

    // コンポーネントが初回読み込まれたときに
    useEffect(() => {
        // APIサーバから作品データを取得 awaitで通信が完了するまで待つ(非同期処理)
        async function fetchWorks() {
            // json-server に APIリクエストで作品データを取得
            const response = await fetch(`${API_URL}/works`)
            // JSONをJSオブジェクトに変換して作品データを取得
            const data = await response.json()
            // setWorks関数で作品データを状態に保存
            setWorks(data)
        }
        // fetchWorks関数を実行して作品データを取得
        fetchWorks()
    }, [])

    // 作品データを返す
    return { works }
}

export default useWorks
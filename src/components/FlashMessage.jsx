import styles from './FlashMessage.module.css'
import { useState, useEffect } from 'react'

function FlashMessage({ message, type = 'error' }) {
    const [dissmissed, setDismissed] = useState(false)
    const duration = 3000;
    // useEffect(()=>{},[])で初回のみ実行
    useEffect(() => {
        const timer = setTimeout(() => {
            setDismissed(true)
        }, duration)
        // クリーンアップ関数でタイマーをクリアしてもう一度実行する
        return () => clearTimeout(timer)
    }, [])

    if (!message || dissmissed) return null

    return (
        <div className={`${styles.flash} ${styles[type]}`}>
            <div>{message}</div>
        </div>
    )
}

export default FlashMessage

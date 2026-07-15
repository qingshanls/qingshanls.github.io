if (!window.runningTime) {
    window.runningTime = () => {
        const init = () => {
            const footer = document.querySelector('.footer')
            if (!footer) {
                setTimeout(init, 500)
                return
            }
            
            // 检查是否已经存在
            let tempDiv = document.querySelector('.footer .running-time-item')
            if (!tempDiv) {
                tempDiv = document.createElement('div')
                tempDiv.setAttribute('class', 'running-time-item')
                // 添加样式让它居中并和版权信息风格一致
                tempDiv.style.cssText = 'text-align: center; padding: 10px 0 5px; color: var(--text-color-4); font-size: 16px;'
                // 直接追加到 footer 末尾
                footer.appendChild(tempDiv)
            }

            const since = '2024-09-23 00:00:00'
            const formatTimestamp = (timestamp) => {
                const now = Date.now()
                const timeDiff = Math.abs(now - timestamp)
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
                const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)
                return `${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒`
            }

            tempDiv.innerHTML = '本站已安全运行 ' + formatTimestamp(new Date(since).getTime())
            setInterval(() => {
                tempDiv.innerHTML = '本站已安全运行 ' + formatTimestamp(new Date(since).getTime())
            }, 1000)
        }
        init()
    }
}
window.runningTime()
/* eslint-disable react/prop-types */
import { useRef, useState } from 'react'
import './HoldButton.css'

export function HoldButton ({ children, onClick, time }) {
  const refTimer = useRef(null)
  const refInterval = useRef(null)
  const [intervalStatus, setIntervalStatus] = useState(0)

  const handleMouseDown = () => {
    if (time === 0) {
      onClick()
      return
    }

    refTimer.current = setTimeout(() => {
      onClick()
      clearTimeout(refTimer.current)
      clearInterval(refInterval.current)
    }, time)

    refInterval.current = setInterval(() => {
      setIntervalStatus((prev) => {
        const step = 1000 / time
        return (prev += step)
      })
    }, 20)
  }

  const handleMouseUp = () => {
    clearTimeout(refTimer.current)
    clearInterval(refInterval.current)
    setIntervalStatus(0)
  }

  const styleStatus = {
    width: `${2 * intervalStatus}%`
  }

  return (
    <div className='hold-button-container'>
      <button
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {children}
      </button>
      <div className='hold-button-status' style={styleStatus} />
    </div>
  )
}

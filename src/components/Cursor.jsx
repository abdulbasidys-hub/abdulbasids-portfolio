import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot  = useRef()
  const ring = useRef()
  const pos  = useRef({ x: -100, y: -100 })
  const lag  = useRef({ x: -100, y: -100 })
  const raf  = useRef()

  useEffect(() => {
    const move = e => { pos.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', move)

    document.addEventListener('mouseover', e => {
      if (e.target.closest('a,button,input,textarea,[role=button]'))
        ring.current?.classList.add('on')
      else
        ring.current?.classList.remove('on')
    })

    const tick = () => {
      lag.current.x += (pos.current.x - lag.current.x) * 0.14
      lag.current.y += (pos.current.y - lag.current.y) * 0.14
      if (dot.current) {
        dot.current.style.left = pos.current.x + 'px'
        dot.current.style.top  = pos.current.y + 'px'
      }
      if (ring.current) {
        ring.current.style.left = lag.current.x + 'px'
        ring.current.style.top  = lag.current.y + 'px'
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={dot}  className="cur-dot"  />
      <div ref={ring} className="cur-ring" />
    </>
  )
}

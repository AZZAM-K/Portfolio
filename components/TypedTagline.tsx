'use client'

import { useEffect, useState } from 'react'

const TypedTagline = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const roles = ['Full Stack Developer', 'Web Developer', 'Mobile Developer']

    const handleTyping = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1))
        setTypingSpeed(80)
      } else {
        setText(fullText.substring(0, text.length + 1))
        setTypingSpeed(150)
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  return (
    <span className='text-(--brand-cyan)'>
      {text}
      <span className='text-(--brand-cyan) animate-pulse'>_</span>
    </span>
  )
}

export default TypedTagline

'use client'

import { useState, useEffect } from 'react'

const TypingAnimation = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const roles = [
      'Fullstack Developer',
      'Next.js Developer',
      'React Developer',
    ]

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
  }, [text, isDeleting, loopNum, typingSpeed]) // Removed roles from dependencies

  return (
    <span className='text-3xl sm:text-4xl font-semibold text-gray-300 h-10'>
      {text}
      <span className='text-red-600 animate-pulse'>|</span>
    </span>
  )
}

export default TypingAnimation

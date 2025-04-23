import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react'

const ScrollAnimatedCard = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(inView)
  }, [inView])

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0.95, opacity: 0.8 }}
      animate={{
        scaleX: isVisible ? 1 : 0.92,
        opacity: isVisible ? 1 : 0.7,
      }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{ originX: 0.5 }}
      className="transition-all"
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimatedCard

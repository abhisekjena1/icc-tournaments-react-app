import React from 'react'
import { motion } from 'framer-motion'
export default function AnimatedCard({children, className}){
  return <motion.div initial={{y:6, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.35}} className={className}>{children}</motion.div>
}

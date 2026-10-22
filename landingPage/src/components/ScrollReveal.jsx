import React from "react"
import { motion } from "motion/react"

export function ScrollReveal({
  children,
  className = "",
  direction = "up", // "up", "down", "left", "right", "none"
  delay = 0,
  duration = 0.6,
  distance = 30,
  once = false, // if false, fades out when leaving view and fades back in when entering view!
  scale = 1,
}) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 }
      case "down":
        return { y: -distance, x: 0 }
      case "left":
        return { x: distance, y: 0 }
      case "right":
        return { x: -distance, y: 0 }
      case "none":
      default:
        return { x: 0, y: 0 }
    }
  }

  const initialOffset = getInitialPosition()

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: initialOffset.x,
        y: initialOffset.y,
        scale: scale < 1 ? scale : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        x: initialOffset.x,
        y: initialOffset.y,
      }}
      viewport={{
        once: once,
        amount: 0.15,
        margin: "0px 0px -50px 0px",
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.12,
  once = false,
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: once, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
  distance = 24,
}) {
  const getInitial = () => {
    if (direction === "up") return { y: distance, opacity: 0 }
    if (direction === "down") return { y: -distance, opacity: 0 }
    if (direction === "left") return { x: distance, opacity: 0 }
    if (direction === "right") return { x: -distance, opacity: 0 }
    return { opacity: 0 }
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: getInitial(),
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.21, 0.47, 0.32, 0.98],
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}


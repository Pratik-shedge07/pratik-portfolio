import { motion } from "framer-motion"
import { FaReact, FaJava } from "react-icons/fa"
import { SiMongodb, SiMysql } from "react-icons/si"

export default function FloatingIcons() {
  const icons = [
    { icon: <FaReact size={40} />, x: -250, y: -120 },
    { icon: <FaJava size={40} />, x: 260, y: -100 },
    { icon: <SiMongodb size={40} />, x: -220, y: 140 },
    { icon: <SiMysql size={40} />, x: 240, y: 150 }
  ]

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: item.x, y: item.y }}
          animate={{ opacity: 1, y: [item.y, item.y - 20, item.y] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute text-indigo-400"
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  )
}
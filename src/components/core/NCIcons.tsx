import { motion } from "framer-motion"
import { GlobeEuropeAfricaIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { PiBagLight, PiLightningLight } from "react-icons/pi";
import { IoDocumentOutline } from "react-icons/io5";
const GlobeIcon = () => {
  return (
    <motion.div
      className="absolute -bottom-4 -right-4 w-12 h-12 bg-[var(--nigeria-darkest)] rounded-full flex items-center justify-center shadow-lg z-20"
      animate={{
        y: [0, 10, 0],
        x: [0, 5, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
    >

      <GlobeEuropeAfricaIcon className="text-[var(--neutral-white)] " />
    </motion.div>
  )
}

const PlaneIcon = () => {
  return (
    <motion.div
      className="absolute -top-4 -left-4 w-12 h-12 p-2 bg-[var(--nigeria-green)] rounded-full flex items-center justify-center text-center shadow-lg z-20"
      animate={{
        y: [0, -10, 0],
        rotate: [0, 360]
      }}
      transition={{
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 20, repeat: Infinity, ease: "linear" }
      }}
    >
      <PaperAirplaneIcon className="text-[var(--neutral-white)] text-md" />
    </motion.div>
  )
}



const FeatureIcon = ({ str }: { str: string }) => {
  const getIcon = (str: string) => {
    if (str === "bag") return <PiBagLight className="text-[var(--neutral-white)]" />;
    if (str === "document") return <IoDocumentOutline className="text-[var(--neutral-white)]" />;
    if (str === "lightning") return <PiLightningLight  className="text-[var(--neutral-white)]" />;
    return <PiBagLight className="text-[var(--neutral-darkest)]" />;
  }

  return (
    <motion.div
      className="absolute top-4 right-4 w-12 h-12 bg-[var(--nigeria-green)] rounded-full flex items-center justify-center text-2xl"
      whileHover={{ scale: 1.1, rotate: 360 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {getIcon(str)}

    </motion.div>
  )
}



export { GlobeIcon, PlaneIcon, FeatureIcon };
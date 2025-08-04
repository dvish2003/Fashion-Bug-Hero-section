import { motion } from "framer-motion";

export default function Logo() {
    {/* motion div wala spring eken jump (bounce) ekak denw stiffness eken eke adala thiygnnw*/}
  return (
    <motion.div 
    initial={{ 
        y: -100,
    }}
    animate={{ 
        y: 0,
    }}
    transition={{
        delay: 1.3,
        type: "spring", 
        stiffness: 110,
        duration: 0.5,
    }}
    className='text-white'>
        <div className='text-3xl tracking-widest uppercase'>Fashion Bug</div>
        <div className='text-sm text-gray-400 uppercase tracking-widest'>Best in the market right now</div>
    </motion.div>
  )
}

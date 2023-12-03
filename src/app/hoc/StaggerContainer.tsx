import React from 'react'
import { motion } from "framer-motion"
import { staggerContainer } from "@/app/utils/index"

const SectionWrapper = (Component: () => React.JSX.Element, idName: any, sectionClassname: string) => function HOC() {
    return (
        <motion.section variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className={`${sectionClassname}`}>
            <span id={idName} className="hash-span hidden" >&nbsp;</span>
            <Component />
        </motion.section>
    )
}

export default SectionWrapper
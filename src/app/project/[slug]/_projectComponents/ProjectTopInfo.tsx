'use client'
import SectionWrapper from '@/app/hoc/StaggerContainer'
import React from 'react'
import { motion } from "framer-motion"
import { textVariant, zoomIn } from '@/app/utils'
import Image from 'next/image'
import "./projecttop.scss"

const ProjectTopInfo = () => {
    return (
        <>
            <div className='flex align-center justify-between mb-28'>
                <motion.div variants={textVariant()} className='flex flex-col gap-6 w-2/5 align-start  z-[9999999]  justify-start'>
                    <p className='text-4xl flex text-white whitespace-nowrap'>TaskSphere</p>
                    <p className="text-mainpara">
                        I'm a skilled software developer with experience in TypeScript and
                        JavaScript, and expertise in frameworks like React, Node.js, and
                        Three.js. I'm a quick learner and collaborate closely with clients to
                        create efficient, scalable, and user-friendly solutions that solve
                        real-world problems. Let's work together to bring your ideas to life!
                    </p>
                </motion.div>
                <motion.div variants={zoomIn(.5 * 1, 1.5)} className="_container flex justify-center align-center w-2/5 relative">
                    <Image width={400} height={400} unoptimized className="project-pic shape" src="/images/projects/tskpere1.png" alt="Profile Picture" />
                </motion.div>
            </div>
            <div className='w-full fullimage2 p-3'>
                <Image src="/images/projects/tskpere2.png" width={100} height={233} unoptimized alt={"project 2"} />
            </div>
        </>
    )
}

export default SectionWrapper(ProjectTopInfo, "projectinfo", " xl:w-[95%] 2xl:w-[93%] py-5 md:mt-[100px]  xl:mt-[80px] 2xl:mt-[60px]  px-4")
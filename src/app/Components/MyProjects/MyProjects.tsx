'use client'
import SectionWrapper from '@/app/hoc/StaggerContainer'
import React from 'react'
import { motion } from "framer-motion"
import { zoomIn } from '@/app/utils'
import "./mymproject.scss"
import Image from 'next/image'

const MyProjects = () => {
    return (
        <div className="w-full">
            <motion.p variants={zoomIn(0.6, .75)} className='text-2xl  text-center w-full'>Projects</motion.p>
            <div className='flex justify-start gap-4 mt-9 align-center'>
                <div className='projectcard rounded-[30px] p-1 flex-1'>
                    <Image src="/images/project1.png" className='rounded-[30px]' unoptimized width={100} height={250} alt='project1' />
                    <div className='w-[80%] m-auto flex justify-start my-3 gap-4 align-center'>
                        <Image alt='scale' unoptimized width={30} height={30} className='w-[30px] scaleimage' src={"/images/scale.png"} />
                        <div className='flex flex-col align-start justify-center'>
                            <p className=' 
                            text-lg'> Design</p>
                            <p className=' 
                            text-base text-mainpara'>My Design Projects</p>
                        </div>
                    </div>
                </div>
                <div className='projectcard rounded-[30px] p-1 flex-1'>
                    <Image src="/images/project2.png" className='rounded-[30px]' unoptimized width={100} height={250} alt='project1' />
                    <div className='w-[80%] m-auto flex justify-start my-3 gap-4 align-center'>
                        <Image alt='scale' unoptimized width={30} height={30} className='w-[30px] scaleimage' src={"/images/scale.png"} />
                        <div className='flex flex-col align-start justify-center'>
                            <p className=' 
                            text-lg'> Design</p>
                            <p className=' 
                            text-base text-mainpara'>My Design Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper(MyProjects, "projects", 'flex justify-between w-[90%] py-5 flex-col md:mt-[150px] px-4')
/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'
import { motion } from "framer-motion"
import React from 'react'
import "./myself.scss"
import { ParticleImg } from '../Particleimage'
import SectionWrapper from '@/app/hoc/StaggerContainer'
import { fadeIn, textVariant, zoomIn } from '@/app/utils'
import Typewriter from 'typewriter-effect';
import { useIsBreakpointActive } from '@/app/hooks/useTailwindBreakpoint'

const MySelf = () => {
    const breakpoint = useIsBreakpointActive()
    console.log(breakpoint);

    return (
        <>
            <motion.div variants={textVariant()} className='flex flex-col gap-3 lg:gap-6 lg:w-2/5 w-full align-start  z-[9]  justify-start'>
                <p className='lg:text-2xl xl:text-2xl text-lg flex text-white whitespace-nowrap'> Hi i'm &nbsp; <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Aniket Suryavanshi')
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(1000).stop().callFunction(() => { })
                            .start()
                    }}
                /></p>
                <p className='text-base lg:text-2xl text-white'> <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('Frontend Developer')
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(1000)
                            .deleteAll(.5).callFunction(() => { }).typeString("FullStack Developer").pauseFor(2000).deleteAll(.7).callFunction(() => { }).typeString("Freelancer").callFunction(() => { })
                            .start();
                    }}
                /></p>
                <p className="text-mainpara">
                    I'm a skilled software developer with experience in TypeScript and
                    JavaScript, and expertise in frameworks like React, Node.js, and
                    Three.js. I'm a quick learner and collaborate closely with clients to
                    create efficient, scalable, and user-friendly solutions that solve
                    real-world problems. Let's work together to bring your ideas to life!
                </p>
            </motion.div>
            <motion.div variants={zoomIn(.5 * 1, 1.5)} className="_container flex justify-center align-center lg:w-2/5 w-full relative">
                <motion.div variants={fadeIn("right", "spring", .5 * 2, 1.7)} className={` 2xl:left-[-7%] lg:left-[-15%]  ${breakpoint === "mb" && 'top-[-44%] left-[63%]'}  absolute`}>
                    <ParticleImg color="transparent" src={"/images/icons/js.png"} />
                </motion.div>
                <motion.div variants={fadeIn("right", "spring", .5 * 3, 1)} className=' 2xl:top-[-27%] 2xl:left-[4%]  lg:top-[-35%] lg:left-[0%] left-[-3%] top-[-48%] absolute'>
                    <ParticleImg color="transparent" src={"/images/icons/mongo.png"} />
                </motion.div>
                <motion.div variants={fadeIn("right", "spring", .5 * 4, 1.2)} className=' 2xl:right-[3%] 2xl:top-[55%] left-[66%] lg:right-[4%] top-[19%] lg:top-[72%] absolute'>
                    <ParticleImg color="transparent" src={"/images/icons/react.png"} />
                </motion.div>
                <motion.div variants={fadeIn("right", "spring", .5 * 5, 1.4)} className=' 2xl:top-[0px] 2xl:right-0  lg:top-[-28%] top-[-70%] lg:right-0 absolute'>
                    <ParticleImg color="transparent" src={"/images/icons/nextjs.svg"} />
                </motion.div>
                <motion.div variants={fadeIn("right", "spring", .5 * 6, 1.6)} className=' 2xl:bottom-[-31%] 2xl:left-[8%] lg:bottom-[-32%] lg:left-[-2%] left-[-11%]  absolute'>
                    <ParticleImg color="transparent" src={"/images/icons/ts.png"} />
                </motion.div>
                <Image width={100} height={100} unoptimized className="profile-pic lg:w-[200px] lg:h-[200px] w-[160px] h-[160px] 2xl:w-[250px] 2xl:h-[250px] shape" src="/images/myprofile.jpg" alt="Profile Picture" />
            </motion.div>
        </>
    )
}


export default SectionWrapper(MySelf, "myself", ' flex justify-between flex-col-reverse lg:flex-row gap-4 lg:gap-0  xl:w-[95%] 2xl:w-[90%] w-full py-5 pt-[100px] lg:pt-5 md:mt-[100px] xl:mt-[80px] 2xl:mt-[150px]   px-4')
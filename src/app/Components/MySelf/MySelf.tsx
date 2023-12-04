/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'
import { motion } from "framer-motion"
import React from 'react'
import "./myself.scss"
import { ParticleImg } from '../Particleimage'
import SectionWrapper from '@/app/hoc/StaggerContainer'
import { fadeIn, textVariant } from '@/app/utils'
import Typewriter from 'typewriter-effect';

const MySelf = () => {
    return (
        <>
            <motion.div variants={textVariant()} className='flex flex-col gap-6 w-2/5 align-start  z-[9999999]  justify-start'>
                <p className='text-4xl flex text-white whitespace-nowrap'> Hi i'm &nbsp; <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Aniket Suryavanshi')
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(1000).stop().callFunction(() => { })
                            .start()
                    }}
                /></p>
                <p className='text-2xl text-white'> <Typewriter
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
            <motion.div variants={fadeIn("right", "spring", .5 * 1, 1.5)} className="_container flex justify-center align-center w-2/5 relative">
                <motion.div variants={fadeIn("right", "spring", .5 * 2, 1.7)} className=' 2xl:left-[-7%] xl:left-[-15%] absolute'>
                    <ParticleImg color="transparent" src={"/images/icons/js.png"} />
                </motion.div>
                <motion.div variants={fadeIn("right", "spring", .5 * 3, 1)} className=' 2xl:top-[-27%] 2xl:left-[4%] xl:top-[-35%] xl:left-[0%] absolute'>
                    <ParticleImg color="transparent" src={"/images/icons/mongo.png"} />
                </motion.div>
                <motion.div variants={fadeIn("right", "spring", .5 * 4, 1.2)} className=' 2xl:right-[3%] 2xl:top-[55%] xl:right-[4%] xl:top-[72%] absolute'>
                    <ParticleImg color="transparent" src={"/images/icons/react.png"} />
                </motion.div>
                <motion.div variants={fadeIn("right", "spring", .5 * 5, 1.4)} className=' 2xl:top-[0px] 2xl:right-0  xl:top-[-28%] xl:right-0 absolute'>
                    <ParticleImg color="transparent" src={"/images/icons/nextjs.svg"} />
                </motion.div>
                <motion.div variants={fadeIn("right", "spring", .5 * 6, 1.6)} className=' 2xl:bottom-[-31%] 2xl:left-[8%] xl:bottom-[-32%] xl:left-[-2%]  absolute'>
                    <ParticleImg color="transparent" src={"/images/icons/ts.png"} />
                </motion.div>
                <Image width={100} height={100} unoptimized className="profile-pic shape" src="/images/myprofile.jpg" alt="Profile Picture" />
            </motion.div>
        </>
    )
}


export default SectionWrapper(MySelf, "myself", ' flex justify-between xl:w-[95%] 2xl:w-[90%] py-5 md:mt-[100px] xl:mt-[80px] 2xl:mt-[150px]  px-4')